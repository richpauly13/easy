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
			function e(l) {
				return 'function' == typeof l;
			}
			u.r(n);
			let t = !1;
			const s = {
				Promise: void 0,
				set useDeprecatedSynchronousErrorHandling(l) {
					t = l;
				},
				get useDeprecatedSynchronousErrorHandling() {
					return t;
				}
			};
			function r(l) {
				setTimeout(() => {
					throw l;
				}, 0);
			}
			const a = {
					closed: !0,
					next(l) {},
					error(l) {
						if (s.useDeprecatedSynchronousErrorHandling) throw l;
						r(l);
					},
					complete() {}
				},
				o = Array.isArray || ((l) => l && 'number' == typeof l.length);
			function i(l) {
				return null !== l && 'object' == typeof l;
			}
			function c(l) {
				return (
					Error.call(this),
					(this.message = l ? `${l.length} errors occurred during unsubscription:\n${l.map((l, n) => `${n + 1}) ${l.toString()}`).join('\n  ')}` : ''),
					(this.name = 'UnsubscriptionError'),
					(this.errors = l),
					this
				);
			}
			c.prototype = Object.create(Error.prototype);
			const h = c,
				d = (() => {
					class l {
						constructor(l) {
							(this.closed = !1), (this._parentOrParents = null), (this._subscriptions = null), l && (this._unsubscribe = l);
						}
						unsubscribe() {
							let n;
							if (this.closed) return;
							let { _parentOrParents: u, _unsubscribe: t, _subscriptions: s } = this;
							if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), u instanceof l)) u.remove(this);
							else if (null !== u) for (let l = 0; l < u.length; ++l) u[l].remove(this);
							if (e(t))
								try {
									t.call(this);
								} catch (r) {
									n = r instanceof h ? p(r.errors) : [r];
								}
							if (o(s)) {
								let l = -1,
									u = s.length;
								for (; ++l < u; ) {
									const u = s[l];
									if (i(u))
										try {
											u.unsubscribe();
										} catch (r) {
											(n = n || []), r instanceof h ? (n = n.concat(p(r.errors))) : n.push(r);
										}
								}
							}
							if (n) throw new h(n);
						}
						add(n) {
							let u = n;
							if (!n) return l.EMPTY;
							switch (typeof n) {
								case 'function':
									u = new l(n);
								case 'object':
									if (u === this || u.closed || 'function' != typeof u.unsubscribe) return u;
									if (this.closed) return u.unsubscribe(), u;
									if (!(u instanceof l)) {
										const n = u;
										(u = new l())._subscriptions = [n];
									}
									break;
								default:
									throw new Error('unrecognized teardown ' + n + ' added to Subscription.');
							}
							let { _parentOrParents: e } = u;
							if (null === e) u._parentOrParents = this;
							else if (e instanceof l) {
								if (e === this) return u;
								u._parentOrParents = [e, this];
							} else {
								if (-1 !== e.indexOf(this)) return u;
								e.push(this);
							}
							const t = this._subscriptions;
							return null === t ? (this._subscriptions = [u]) : t.push(u), u;
						}
						remove(l) {
							const n = this._subscriptions;
							if (n) {
								const u = n.indexOf(l);
								-1 !== u && n.splice(u, 1);
							}
						}
					}
					return (
						(l.EMPTY = (function(l) {
							return (l.closed = !0), l;
						})(new l())),
						l
					);
				})();
			function p(l) {
				return l.reduce((l, n) => l.concat(n instanceof h ? n.errors : n), []);
			}
			const g = 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
			class f extends d {
				constructor(l, n, u) {
					switch ((super(), (this.syncErrorValue = null), (this.syncErrorThrown = !1), (this.syncErrorThrowable = !1), (this.isStopped = !1), arguments.length)) {
						case 0:
							this.destination = a;
							break;
						case 1:
							if (!l) {
								this.destination = a;
								break;
							}
							if ('object' == typeof l) {
								l instanceof f
									? ((this.syncErrorThrowable = l.syncErrorThrowable), (this.destination = l), l.add(this))
									: ((this.syncErrorThrowable = !0), (this.destination = new m(this, l)));
								break;
							}
						default:
							(this.syncErrorThrowable = !0), (this.destination = new m(this, l, n, u));
					}
				}
				[g]() {
					return this;
				}
				static create(l, n, u) {
					const e = new f(l, n, u);
					return (e.syncErrorThrowable = !1), e;
				}
				next(l) {
					this.isStopped || this._next(l);
				}
				error(l) {
					this.isStopped || ((this.isStopped = !0), this._error(l));
				}
				complete() {
					this.isStopped || ((this.isStopped = !0), this._complete());
				}
				unsubscribe() {
					this.closed || ((this.isStopped = !0), super.unsubscribe());
				}
				_next(l) {
					this.destination.next(l);
				}
				_error(l) {
					this.destination.error(l), this.unsubscribe();
				}
				_complete() {
					this.destination.complete(), this.unsubscribe();
				}
				_unsubscribeAndRecycle() {
					const { _parentOrParents: l } = this;
					return (this._parentOrParents = null), this.unsubscribe(), (this.closed = !1), (this.isStopped = !1), (this._parentOrParents = l), this;
				}
			}
			class m extends f {
				constructor(l, n, u, t) {
					let s;
					super(), (this._parentSubscriber = l);
					let r = this;
					e(n)
						? (s = n)
						: n &&
						  ((s = n.next),
						  (u = n.error),
						  (t = n.complete),
						  n !== a && (e((r = Object.create(n)).unsubscribe) && this.add(r.unsubscribe.bind(r)), (r.unsubscribe = this.unsubscribe.bind(this)))),
						(this._context = r),
						(this._next = s),
						(this._error = u),
						(this._complete = t);
				}
				next(l) {
					if (!this.isStopped && this._next) {
						const { _parentSubscriber: n } = this;
						s.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable ? this.__tryOrSetError(n, this._next, l) && this.unsubscribe() : this.__tryOrUnsub(this._next, l);
					}
				}
				error(l) {
					if (!this.isStopped) {
						const { _parentSubscriber: n } = this,
							{ useDeprecatedSynchronousErrorHandling: u } = s;
						if (this._error) u && n.syncErrorThrowable ? (this.__tryOrSetError(n, this._error, l), this.unsubscribe()) : (this.__tryOrUnsub(this._error, l), this.unsubscribe());
						else if (n.syncErrorThrowable) u ? ((n.syncErrorValue = l), (n.syncErrorThrown = !0)) : r(l), this.unsubscribe();
						else {
							if ((this.unsubscribe(), u)) throw l;
							r(l);
						}
					}
				}
				complete() {
					if (!this.isStopped) {
						const { _parentSubscriber: l } = this;
						if (this._complete) {
							const n = () => this._complete.call(this._context);
							s.useDeprecatedSynchronousErrorHandling && l.syncErrorThrowable ? (this.__tryOrSetError(l, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe());
						} else this.unsubscribe();
					}
				}
				__tryOrUnsub(l, n) {
					try {
						l.call(this._context, n);
					} catch (u) {
						if ((this.unsubscribe(), s.useDeprecatedSynchronousErrorHandling)) throw u;
						r(u);
					}
				}
				__tryOrSetError(l, n, u) {
					if (!s.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
					try {
						n.call(this._context, u);
					} catch (e) {
						return s.useDeprecatedSynchronousErrorHandling ? ((l.syncErrorValue = e), (l.syncErrorThrown = !0), !0) : (r(e), !0);
					}
					return !1;
				}
				_unsubscribe() {
					const { _parentSubscriber: l } = this;
					(this._context = null), (this._parentSubscriber = null), l.unsubscribe();
				}
			}
			const b = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
			function y() {}
			function w(...l) {
				return j(l);
			}
			function j(l) {
				return l
					? 1 === l.length
						? l[0]
						: function(n) {
								return l.reduce((l, n) => n(l), n);
						  }
					: y;
			}
			const v = (() => {
				class l {
					constructor(l) {
						(this._isScalar = !1), l && (this._subscribe = l);
					}
					lift(n) {
						const u = new l();
						return (u.source = this), (u.operator = n), u;
					}
					subscribe(l, n, u) {
						const { operator: e } = this,
							t = (function(l, n, u) {
								if (l) {
									if (l instanceof f) return l;
									if (l[g]) return l[g]();
								}
								return l || n || u ? new f(l, n, u) : new f(a);
							})(l, n, u);
						if (
							(t.add(e ? e.call(t, this.source) : this.source || (s.useDeprecatedSynchronousErrorHandling && !t.syncErrorThrowable) ? this._subscribe(t) : this._trySubscribe(t)),
							s.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable && ((t.syncErrorThrowable = !1), t.syncErrorThrown))
						)
							throw t.syncErrorValue;
						return t;
					}
					_trySubscribe(l) {
						try {
							return this._subscribe(l);
						} catch (n) {
							s.useDeprecatedSynchronousErrorHandling && ((l.syncErrorThrown = !0), (l.syncErrorValue = n)),
								(function(l) {
									for (; l; ) {
										const { closed: n, destination: u, isStopped: e } = l;
										if (n || e) return !1;
										l = u && u instanceof f ? u : null;
									}
									return !0;
								})(l)
									? l.error(n)
									: console.warn(n);
						}
					}
					forEach(l, n) {
						return new (n = x(n))((n, u) => {
							let e;
							e = this.subscribe(
								(n) => {
									try {
										l(n);
									} catch (t) {
										u(t), e && e.unsubscribe();
									}
								},
								u,
								n
							);
						});
					}
					_subscribe(l) {
						const { source: n } = this;
						return n && n.subscribe(l);
					}
					[b]() {
						return this;
					}
					pipe(...l) {
						return 0 === l.length ? this : j(l)(this);
					}
					toPromise(l) {
						return new (l = x(l))((l, n) => {
							let u;
							this.subscribe((l) => (u = l), (l) => n(l), () => l(u));
						});
					}
				}
				return (l.create = (n) => new l(n)), l;
			})();
			function x(l) {
				if ((l || (l = s.Promise || Promise), !l)) throw new Error('no Promise impl found');
				return l;
			}
			function _() {
				return Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this;
			}
			_.prototype = Object.create(Error.prototype);
			const k = _;
			class C extends d {
				constructor(l, n) {
					super(), (this.subject = l), (this.subscriber = n), (this.closed = !1);
				}
				unsubscribe() {
					if (this.closed) return;
					this.closed = !0;
					const l = this.subject,
						n = l.observers;
					if (((this.subject = null), !n || 0 === n.length || l.isStopped || l.closed)) return;
					const u = n.indexOf(this.subscriber);
					-1 !== u && n.splice(u, 1);
				}
			}
			class S extends f {
				constructor(l) {
					super(l), (this.destination = l);
				}
			}
			const E = (() => {
				class l extends v {
					constructor() {
						super(), (this.observers = []), (this.closed = !1), (this.isStopped = !1), (this.hasError = !1), (this.thrownError = null);
					}
					[g]() {
						return new S(this);
					}
					lift(l) {
						const n = new I(this, this);
						return (n.operator = l), n;
					}
					next(l) {
						if (this.closed) throw new k();
						if (!this.isStopped) {
							const { observers: n } = this,
								u = n.length,
								e = n.slice();
							for (let t = 0; t < u; t++) e[t].next(l);
						}
					}
					error(l) {
						if (this.closed) throw new k();
						(this.hasError = !0), (this.thrownError = l), (this.isStopped = !0);
						const { observers: n } = this,
							u = n.length,
							e = n.slice();
						for (let t = 0; t < u; t++) e[t].error(l);
						this.observers.length = 0;
					}
					complete() {
						if (this.closed) throw new k();
						this.isStopped = !0;
						const { observers: l } = this,
							n = l.length,
							u = l.slice();
						for (let e = 0; e < n; e++) u[e].complete();
						this.observers.length = 0;
					}
					unsubscribe() {
						(this.isStopped = !0), (this.closed = !0), (this.observers = null);
					}
					_trySubscribe(l) {
						if (this.closed) throw new k();
						return super._trySubscribe(l);
					}
					_subscribe(l) {
						if (this.closed) throw new k();
						return this.hasError ? (l.error(this.thrownError), d.EMPTY) : this.isStopped ? (l.complete(), d.EMPTY) : (this.observers.push(l), new C(this, l));
					}
					asObservable() {
						const l = new v();
						return (l.source = this), l;
					}
				}
				return (l.create = (l, n) => new I(l, n)), l;
			})();
			class I extends E {
				constructor(l, n) {
					super(), (this.destination = l), (this.source = n);
				}
				next(l) {
					const { destination: n } = this;
					n && n.next && n.next(l);
				}
				error(l) {
					const { destination: n } = this;
					n && n.error && this.destination.error(l);
				}
				complete() {
					const { destination: l } = this;
					l && l.complete && this.destination.complete();
				}
				_subscribe(l) {
					const { source: n } = this;
					return n ? this.source.subscribe(l) : d.EMPTY;
				}
			}
			function P(l) {
				return l && 'function' == typeof l.schedule;
			}
			class O extends f {
				constructor(l, n, u) {
					super(), (this.parent = l), (this.outerValue = n), (this.outerIndex = u), (this.index = 0);
				}
				_next(l) {
					this.parent.notifyNext(this.outerValue, l, this.outerIndex, this.index++, this);
				}
				_error(l) {
					this.parent.notifyError(l, this), this.unsubscribe();
				}
				_complete() {
					this.parent.notifyComplete(this), this.unsubscribe();
				}
			}
			const T = (l) => (n) => {
				for (let u = 0, e = l.length; u < e && !n.closed; u++) n.next(l[u]);
				n.complete();
			};
			function M() {
				return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
			}
			const R = M(),
				A = (l) => l && 'number' == typeof l.length && 'function' != typeof l;
			function N(l) {
				return !!l && 'function' != typeof l.subscribe && 'function' == typeof l.then;
			}
			const D = (l) => {
				if (l && 'function' == typeof l[b])
					return ((l) => (n) => {
						const u = l[b]();
						if ('function' != typeof u.subscribe) throw new TypeError('Provided object does not correctly implement Symbol.observable');
						return u.subscribe(n);
					})(l);
				if (A(l)) return T(l);
				if (N(l))
					return ((l) => (n) => (
						l
							.then(
								(l) => {
									n.closed || (n.next(l), n.complete());
								},
								(l) => n.error(l)
							)
							.then(null, r),
						n
					))(l);
				if (l && 'function' == typeof l[R])
					return ((l) => (n) => {
						const u = l[R]();
						for (;;) {
							const l = u.next();
							if (l.done) {
								n.complete();
								break;
							}
							if ((n.next(l.value), n.closed)) break;
						}
						return (
							'function' == typeof u.return &&
								n.add(() => {
									u.return && u.return();
								}),
							n
						);
					})(l);
				{
					const n = i(l) ? 'an invalid object' : `'${l}'`;
					throw new TypeError(`You provided ${n} where a stream was expected.` + ' You can provide an Observable, Promise, Array, or Iterable.');
				}
			};
			function U(l, n, u, e, t = new O(l, u, e)) {
				if (!t.closed) return n instanceof v ? n.subscribe(t) : D(n)(t);
			}
			class L extends f {
				notifyNext(l, n, u, e, t) {
					this.destination.next(n);
				}
				notifyError(l, n) {
					this.destination.error(l);
				}
				notifyComplete(l) {
					this.destination.complete();
				}
			}
			function V(l, n) {
				return function(u) {
					if ('function' != typeof l) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
					return u.lift(new F(l, n));
				};
			}
			class F {
				constructor(l, n) {
					(this.project = l), (this.thisArg = n);
				}
				call(l, n) {
					return n.subscribe(new z(l, this.project, this.thisArg));
				}
			}
			class z extends f {
				constructor(l, n, u) {
					super(l), (this.project = n), (this.count = 0), (this.thisArg = u || this);
				}
				_next(l) {
					let n;
					try {
						n = this.project.call(this.thisArg, l, this.count++);
					} catch (u) {
						return void this.destination.error(u);
					}
					this.destination.next(n);
				}
			}
			function H(l, n) {
				return new v((u) => {
					const e = new d();
					let t = 0;
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
			function $(l, n) {
				return n
					? (function(l, n) {
							if (null != l) {
								if (
									(function(l) {
										return l && 'function' == typeof l[b];
									})(l)
								)
									return (function(l, n) {
										return new v((u) => {
											const e = new d();
											return (
												e.add(
													n.schedule(() => {
														const t = l[b]();
														e.add(
															t.subscribe({
																next(l) {
																	e.add(n.schedule(() => u.next(l)));
																},
																error(l) {
																	e.add(n.schedule(() => u.error(l)));
																},
																complete() {
																	e.add(n.schedule(() => u.complete()));
																}
															})
														);
													})
												),
												e
											);
										});
									})(l, n);
								if (N(l))
									return (function(l, n) {
										return new v((u) => {
											const e = new d();
											return (
												e.add(
													n.schedule(() =>
														l.then(
															(l) => {
																e.add(
																	n.schedule(() => {
																		u.next(l), e.add(n.schedule(() => u.complete()));
																	})
																);
															},
															(l) => {
																e.add(n.schedule(() => u.error(l)));
															}
														)
													)
												),
												e
											);
										});
									})(l, n);
								if (A(l)) return H(l, n);
								if (
									(function(l) {
										return l && 'function' == typeof l[R];
									})(l) ||
									'string' == typeof l
								)
									return (function(l, n) {
										if (!l) throw new Error('Iterable cannot be null');
										return new v((u) => {
											const e = new d();
											let t;
											return (
												e.add(() => {
													t && 'function' == typeof t.return && t.return();
												}),
												e.add(
													n.schedule(() => {
														(t = l[R]()),
															e.add(
																n.schedule(function() {
																	if (u.closed) return;
																	let l, n;
																	try {
																		const s = t.next();
																		(l = s.value), (n = s.done);
																	} catch (e) {
																		return void u.error(e);
																	}
																	n ? u.complete() : (u.next(l), this.schedule());
																})
															);
													})
												),
												e
											);
										});
									})(l, n);
							}
							throw new TypeError(((null !== l && typeof l) || l) + ' is not observable');
					  })(l, n)
					: l instanceof v
					? l
					: new v(D(l));
			}
			function B(l, n, u = Number.POSITIVE_INFINITY) {
				return 'function' == typeof n ? (e) => e.pipe(B((u, e) => $(l(u, e)).pipe(V((l, t) => n(u, l, e, t))), u)) : ('number' == typeof n && (u = n), (n) => n.lift(new q(l, u)));
			}
			class q {
				constructor(l, n = Number.POSITIVE_INFINITY) {
					(this.project = l), (this.concurrent = n);
				}
				call(l, n) {
					return n.subscribe(new G(l, this.project, this.concurrent));
				}
			}
			class G extends L {
				constructor(l, n, u = Number.POSITIVE_INFINITY) {
					super(l), (this.project = n), (this.concurrent = u), (this.hasCompleted = !1), (this.buffer = []), (this.active = 0), (this.index = 0);
				}
				_next(l) {
					this.active < this.concurrent ? this._tryNext(l) : this.buffer.push(l);
				}
				_tryNext(l) {
					let n;
					const u = this.index++;
					try {
						n = this.project(l, u);
					} catch (e) {
						return void this.destination.error(e);
					}
					this.active++, this._innerSub(n, l, u);
				}
				_innerSub(l, n, u) {
					const e = new O(this, void 0, void 0);
					this.destination.add(e), U(this, l, n, u, e);
				}
				_complete() {
					(this.hasCompleted = !0), 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe();
				}
				notifyNext(l, n, u, e, t) {
					this.destination.next(n);
				}
				notifyComplete(l) {
					const n = this.buffer;
					this.remove(l), this.active--, n.length > 0 ? this._next(n.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
				}
			}
			function Z(l) {
				return l;
			}
			function Q(l = Number.POSITIVE_INFINITY) {
				return B(Z, l);
			}
			function W(l, n) {
				return n ? H(l, n) : new v(T(l));
			}
			function K() {
				return function(l) {
					return l.lift(new Y(l));
				};
			}
			class Y {
				constructor(l) {
					this.connectable = l;
				}
				call(l, n) {
					const { connectable: u } = this;
					u._refCount++;
					const e = new J(l, u),
						t = n.subscribe(e);
					return e.closed || (e.connection = u.connect()), t;
				}
			}
			class J extends f {
				constructor(l, n) {
					super(l), (this.connectable = n);
				}
				_unsubscribe() {
					const { connectable: l } = this;
					if (!l) return void (this.connection = null);
					this.connectable = null;
					const n = l._refCount;
					if (n <= 0) return void (this.connection = null);
					if (((l._refCount = n - 1), n > 1)) return void (this.connection = null);
					const { connection: u } = this,
						e = l._connection;
					(this.connection = null), !e || (u && e !== u) || e.unsubscribe();
				}
			}
			const X = class extends v {
					constructor(l, n) {
						super(), (this.source = l), (this.subjectFactory = n), (this._refCount = 0), (this._isComplete = !1);
					}
					_subscribe(l) {
						return this.getSubject().subscribe(l);
					}
					getSubject() {
						const l = this._subject;
						return (l && !l.isStopped) || (this._subject = this.subjectFactory()), this._subject;
					}
					connect() {
						let l = this._connection;
						return (
							l ||
								((this._isComplete = !1),
								(l = this._connection = new d()).add(this.source.subscribe(new nl(this.getSubject(), this))),
								l.closed && ((this._connection = null), (l = d.EMPTY))),
							l
						);
					}
					refCount() {
						return K()(this);
					}
				}.prototype,
				ll = {
					operator: { value: null },
					_refCount: { value: 0, writable: !0 },
					_subject: { value: null, writable: !0 },
					_connection: { value: null, writable: !0 },
					_subscribe: { value: X._subscribe },
					_isComplete: { value: X._isComplete, writable: !0 },
					getSubject: { value: X.getSubject },
					connect: { value: X.connect },
					refCount: { value: X.refCount }
				};
			class nl extends S {
				constructor(l, n) {
					super(l), (this.connectable = n);
				}
				_error(l) {
					this._unsubscribe(), super._error(l);
				}
				_complete() {
					(this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
				}
				_unsubscribe() {
					const l = this.connectable;
					if (l) {
						this.connectable = null;
						const n = l._connection;
						(l._refCount = 0), (l._subject = null), (l._connection = null), n && n.unsubscribe();
					}
				}
			}
			function ul() {
				return new E();
			}
			const el = '__parameters__';
			function tl(l, n, u) {
				const e = (function(l) {
					return function(...n) {
						if (l) {
							const u = l(...n);
							for (const l in u) this[l] = u[l];
						}
					};
				})(n);
				function t(...l) {
					if (this instanceof t) return e.apply(this, l), this;
					const n = new t(...l);
					return (u.annotation = n), u;
					function u(l, u, e) {
						const t = l.hasOwnProperty(el) ? l[el] : Object.defineProperty(l, el, { value: [] })[el];
						for (; t.length <= e; ) t.push(null);
						return (t[e] = t[e] || []).push(n), l;
					}
				}
				return u && (t.prototype = Object.create(u.prototype)), (t.prototype.ngMetadataName = l), (t.annotationCls = t), t;
			}
			const sl = tl('Inject', (l) => ({ token: l })),
				rl = tl('Optional'),
				al = tl('Self'),
				ol = tl('SkipSelf');
			var il = (function(l) {
				return (l[(l.Default = 0)] = 'Default'), (l[(l.Host = 1)] = 'Host'), (l[(l.Self = 2)] = 'Self'), (l[(l.SkipSelf = 4)] = 'SkipSelf'), (l[(l.Optional = 8)] = 'Optional'), l;
			})({});
			function cl(l) {
				for (let n in l) if (l[n] === cl) return n;
				throw Error('Could not find renamed property on target object.');
			}
			function hl(l) {
				return { providedIn: l.providedIn || null, factory: l.factory, value: void 0 };
			}
			function dl(l) {
				return l && l.hasOwnProperty(pl) ? l[pl] : null;
			}
			const pl = cl({ ngInjectableDef: cl });
			function gl(l) {
				if ('string' == typeof l) return l;
				if (l instanceof Array) return '[' + l.map(gl).join(', ') + ']';
				if (null == l) return '' + l;
				if (l.overriddenName) return `${l.overriddenName}`;
				if (l.name) return `${l.name}`;
				const n = l.toString();
				if (null == n) return '' + n;
				const u = n.indexOf('\n');
				return -1 === u ? n : n.substring(0, u);
			}
			const fl = cl({ __forward_ref__: cl });
			function ml(l) {
				return (
					(l.__forward_ref__ = ml),
					(l.toString = function() {
						return gl(this());
					}),
					l
				);
			}
			function bl(l) {
				const n = l;
				return 'function' == typeof n && n.hasOwnProperty(fl) && n.__forward_ref__ === ml ? n() : l;
			}
			function yl() {
				const l = 'undefined' != typeof globalThis && globalThis,
					n = 'undefined' != typeof window && window,
					u = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
					e = 'undefined' != typeof global && global;
				return l || e || n || u;
			}
			const wl = yl();
			let jl,
				vl = void 0;
			function xl(l) {
				const n = vl;
				return (vl = l), n;
			}
			function _l(l, n = il.Default) {
				return (jl ||
					function(l, n = il.Default) {
						if (void 0 === vl) throw new Error('inject() must be called from an injection context');
						return null === vl
							? (function(l, n, u) {
									const e = dl(l);
									if (e && 'root' == e.providedIn) return void 0 === e.value ? (e.value = e.factory()) : e.value;
									if (u & il.Optional) return null;
									throw new Error(`Injector: NOT_FOUND [${gl(l)}]`);
							  })(l, 0, n)
							: vl.get(l, n & il.Optional ? null : void 0, n);
					})(l, n);
			}
			class kl {
				constructor(l, n) {
					(this._desc = l),
						(this.ngMetadataName = 'InjectionToken'),
						(this.ngInjectableDef = void 0),
						'number' == typeof n ? (this.__NG_ELEMENT_ID__ = n) : void 0 !== n && (this.ngInjectableDef = hl({ providedIn: n.providedIn || 'root', factory: n.factory }));
				}
				toString() {
					return `InjectionToken ${this._desc}`;
				}
			}
			const Cl = '__source',
				Sl = new Object(),
				El = new kl('INJECTOR', -1);
			class Il {
				get(l, n = Sl) {
					if (n === Sl) {
						const n = new Error(`NullInjectorError: No provider for ${gl(l)}!`);
						throw ((n.name = 'NullInjectorError'), n);
					}
					return n;
				}
			}
			const Pl = (() => {
					class l {
						static create(l, n) {
							return Array.isArray(l) ? new Vl(l, n) : new Vl(l.providers, l.parent, l.name || null);
						}
					}
					return (l.THROW_IF_NOT_FOUND = Sl), (l.NULL = new Il()), (l.ngInjectableDef = hl({ providedIn: 'any', factory: () => _l(El) })), (l.__NG_ELEMENT_ID__ = -1), l;
				})(),
				Ol = function(l) {
					return l;
				},
				Tl = [],
				Ml = Ol,
				Rl = function() {
					return Array.prototype.slice.call(arguments);
				},
				Al = cl({ provide: String, useValue: cl }),
				Nl = 'ngTokenPath',
				Dl = 'ngTempTokenPath',
				Ul = /\n/gm,
				Ll = '\u0275';
			class Vl {
				constructor(l, n = Pl.NULL, u = null) {
					(this.parent = n), (this.source = u);
					const e = (this._records = new Map());
					e.set(Pl, { token: Pl, fn: Ol, deps: Tl, value: this, useNew: !1 }),
						e.set(El, { token: El, fn: Ol, deps: Tl, value: this, useNew: !1 }),
						(function l(n, u) {
							if (u)
								if ((u = bl(u)) instanceof Array) for (let e = 0; e < u.length; e++) l(n, u[e]);
								else {
									if ('function' == typeof u) throw Hl('Function/Class not supported', u);
									if (!u || 'object' != typeof u || !u.provide) throw Hl('Unexpected provider', u);
									{
										let l = bl(u.provide);
										const e = (function(l) {
											const n = (function(l) {
												let n = Tl;
												const u = l.deps;
												if (u && u.length) {
													n = [];
													for (let l = 0; l < u.length; l++) {
														let e = 6,
															t = bl(u[l]);
														if (t instanceof Array)
															for (let l = 0, n = t; l < n.length; l++) {
																const u = n[l];
																u instanceof rl || u == rl
																	? (e |= 1)
																	: u instanceof ol || u == ol
																	? (e &= -3)
																	: u instanceof al || u == al
																	? (e &= -5)
																	: (t = u instanceof sl ? u.token : bl(u));
															}
														n.push({ token: t, options: e });
													}
												} else if (l.useExisting) n = [{ token: bl(l.useExisting), options: 6 }];
												else if (!(u || Al in l)) throw Hl("'deps' required", l);
												return n;
											})(l);
											let u = Ol,
												e = Tl,
												t = !1,
												s = bl(l.provide);
											if (Al in l) e = l.useValue;
											else if (l.useFactory) u = l.useFactory;
											else if (l.useExisting);
											else if (l.useClass) (t = !0), (u = bl(l.useClass));
											else {
												if ('function' != typeof s) throw Hl('StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable', l);
												(t = !0), (u = s);
											}
											return { deps: n, fn: u, useNew: t, value: e };
										})(u);
										if (!0 === u.multi) {
											let e = n.get(l);
											if (e) {
												if (e.fn !== Rl) throw Fl(l);
											} else n.set(l, (e = { token: u.provide, deps: [], useNew: !1, fn: Rl, value: Tl }));
											e.deps.push({ token: (l = u), options: 6 });
										}
										const t = n.get(l);
										if (t && t.fn == Rl) throw Fl(l);
										n.set(l, e);
									}
								}
						})(e, l);
				}
				get(l, n, u = il.Default) {
					const e = this._records.get(l);
					try {
						return (function l(n, u, e, t, s, r) {
							try {
								return (function(n, u, e, t, s, r) {
									let a;
									if (!u || r & il.SkipSelf) r & il.Self || (a = t.get(n, s, il.Default));
									else {
										if ((a = u.value) == Ml) throw Error(Ll + 'Circular dependency');
										if (a === Tl) {
											u.value = Ml;
											let n = void 0,
												s = u.useNew,
												r = u.fn,
												o = u.deps,
												i = Tl;
											if (o.length) {
												i = [];
												for (let n = 0; n < o.length; n++) {
													const u = o[n],
														s = u.options,
														r = 2 & s ? e.get(u.token) : void 0;
													i.push(l(u.token, r, e, r || 4 & s ? t : Pl.NULL, 1 & s ? null : Pl.THROW_IF_NOT_FOUND, il.Default));
												}
											}
											u.value = a = s ? new r(...i) : r.apply(n, i);
										}
									}
									return a;
								})(n, u, e, t, s, r);
							} catch (a) {
								throw (a instanceof Error || (a = new Error(a)), (a[Dl] = a[Dl] || []).unshift(n), u && u.value == Ml && (u.value = Tl), a);
							}
						})(l, e, this._records, this.parent, n, u);
					} catch (t) {
						return (function(l, n, u, e) {
							const t = l[Dl];
							throw (n[Cl] && t.unshift(n[Cl]), (l.message = zl('\n' + l.message, t, 'StaticInjectorError', e)), (l[Nl] = t), (l[Dl] = null), l);
						})(t, l, 0, this.source);
					}
				}
				toString() {
					const l = [];
					return this._records.forEach((n, u) => l.push(gl(u))), `StaticInjector[${l.join(', ')}]`;
				}
			}
			function Fl(l) {
				return Hl('Cannot mix multi providers and regular providers', l);
			}
			function zl(l, n, u, e = null) {
				l = l && '\n' === l.charAt(0) && l.charAt(1) == Ll ? l.substr(2) : l;
				let t = gl(n);
				if (n instanceof Array) t = n.map(gl).join(' -> ');
				else if ('object' == typeof n) {
					let l = [];
					for (let u in n)
						if (n.hasOwnProperty(u)) {
							let e = n[u];
							l.push(u + ':' + ('string' == typeof e ? JSON.stringify(e) : gl(e)));
						}
					t = `{${l.join(', ')}}`;
				}
				return `${u}${e ? '(' + e + ')' : ''}[${t}]: ${l.replace(Ul, '\n  ')}`;
			}
			function Hl(l, n) {
				return new Error(zl(l, n, 'StaticInjectorError'));
			}
			const $l = 'ngDebugContext',
				Bl = 'ngOriginalError',
				ql = 'ngErrorLogger',
				Gl = new kl('AnalyzeForEntryComponents'),
				Zl = (function() {
					var l = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
					return (l[l.Emulated] = 'Emulated'), (l[l.Native] = 'Native'), (l[l.None] = 'None'), (l[l.ShadowDom] = 'ShadowDom'), l;
				})(),
				Ql = (() => (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(wl))();
			function Wl(l) {
				return l[$l];
			}
			function Kl(l) {
				return l[Bl];
			}
			function Yl(l, ...n) {
				l.error(...n);
			}
			class Jl {
				constructor() {
					this._console = console;
				}
				handleError(l) {
					const n = this._findOriginalError(l),
						u = this._findContext(l),
						e = (function(l) {
							return l[ql] || Yl;
						})(l);
					e(this._console, 'ERROR', l), n && e(this._console, 'ORIGINAL ERROR', n), u && e(this._console, 'ERROR CONTEXT', u);
				}
				_findContext(l) {
					return l ? (Wl(l) ? Wl(l) : this._findContext(Kl(l))) : null;
				}
				_findOriginalError(l) {
					let n = Kl(l);
					for (; n && Kl(n); ) n = Kl(n);
					return n;
				}
			}
			let Xl = !0,
				ln = !1;
			function nn() {
				return (ln = !0), Xl;
			}
			class un {
				constructor(l) {
					if (
						((this.defaultDoc = l),
						(this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert')),
						(this.inertBodyElement = this.inertDocument.body),
						null == this.inertBodyElement)
					) {
						const l = this.inertDocument.createElement('html');
						this.inertDocument.appendChild(l), (this.inertBodyElement = this.inertDocument.createElement('body')), l.appendChild(this.inertBodyElement);
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
				getInertBodyElement_XHR(l) {
					l = '<body><remove></remove>' + l + '</body>';
					try {
						l = encodeURI(l);
					} catch (e) {
						return null;
					}
					const n = new XMLHttpRequest();
					(n.responseType = 'document'), n.open('GET', 'data:text/html;charset=utf-8,' + l, !1), n.send(void 0);
					const u = n.response.body;
					return u.removeChild(u.firstChild), u;
				}
				getInertBodyElement_DOMParser(l) {
					l = '<body><remove></remove>' + l + '</body>';
					try {
						const u = new window.DOMParser().parseFromString(l, 'text/html').body;
						return u.removeChild(u.firstChild), u;
					} catch (n) {
						return null;
					}
				}
				getInertBodyElement_InertDocument(l) {
					const n = this.inertDocument.createElement('template');
					return 'content' in n
						? ((n.innerHTML = l), n)
						: ((this.inertBodyElement.innerHTML = l), this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement);
				}
				stripCustomNsAttrs(l) {
					const n = l.attributes;
					for (let e = n.length - 1; 0 < e; e--) {
						const u = n.item(e).name;
						('xmlns:ns1' !== u && 0 !== u.indexOf('ns1:')) || l.removeAttribute(u);
					}
					let u = l.firstChild;
					for (; u; ) u.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(u), (u = u.nextSibling);
				}
			}
			const en = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
				tn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
			function sn(l) {
				return (l = String(l)).match(en) || l.match(tn) ? l : (nn() && console.warn(`WARNING: sanitizing unsafe URL value ${l} (see http://g.co/ng/security#xss)`), 'unsafe:' + l);
			}
			function rn(l) {
				const n = {};
				for (const u of l.split(',')) n[u] = !0;
				return n;
			}
			function an(...l) {
				const n = {};
				for (const u of l) for (const l in u) u.hasOwnProperty(l) && (n[l] = !0);
				return n;
			}
			const on = rn('area,br,col,hr,img,wbr'),
				cn = rn('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
				hn = rn('rp,rt'),
				dn = an(hn, cn),
				pn = an(
					on,
					an(
						cn,
						rn(
							'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
						)
					),
					an(
						hn,
						rn(
							'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
						)
					),
					dn
				),
				gn = rn('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
				fn = rn('srcset'),
				mn = an(
					gn,
					fn,
					rn(
						'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
					),
					rn(
						'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
					)
				),
				bn = rn('script,style,template');
			class yn {
				constructor() {
					(this.sanitizedSomething = !1), (this.buf = []);
				}
				sanitizeChildren(l) {
					let n = l.firstChild,
						u = !0;
					for (; n; )
						if (
							(n.nodeType === Node.ELEMENT_NODE ? (u = this.startElement(n)) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : (this.sanitizedSomething = !0),
							u && n.firstChild)
						)
							n = n.firstChild;
						else
							for (; n; ) {
								n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
								let l = this.checkClobberedElement(n, n.nextSibling);
								if (l) {
									n = l;
									break;
								}
								n = this.checkClobberedElement(n, n.parentNode);
							}
					return this.buf.join('');
				}
				startElement(l) {
					const n = l.nodeName.toLowerCase();
					if (!pn.hasOwnProperty(n)) return (this.sanitizedSomething = !0), !bn.hasOwnProperty(n);
					this.buf.push('<'), this.buf.push(n);
					const u = l.attributes;
					for (let t = 0; t < u.length; t++) {
						const l = u.item(t),
							n = l.name,
							s = n.toLowerCase();
						if (!mn.hasOwnProperty(s)) {
							this.sanitizedSomething = !0;
							continue;
						}
						let r = l.value;
						gn[s] && (r = sn(r)),
							fn[s] &&
								((e = r),
								(r = (e = String(e))
									.split(',')
									.map((l) => sn(l.trim()))
									.join(', '))),
							this.buf.push(' ', n, '="', vn(r), '"');
					}
					var e;
					return this.buf.push('>'), !0;
				}
				endElement(l) {
					const n = l.nodeName.toLowerCase();
					pn.hasOwnProperty(n) && !on.hasOwnProperty(n) && (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
				}
				chars(l) {
					this.buf.push(vn(l));
				}
				checkClobberedElement(l, n) {
					if (n && (l.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
						throw new Error(`Failed to sanitize html because the element is clobbered: ${l.outerHTML}`);
					return n;
				}
			}
			const wn = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				jn = /([^\#-~ |!])/g;
			function vn(l) {
				return l
					.replace(/&/g, '&amp;')
					.replace(wn, function(l) {
						return '&#' + (1024 * (l.charCodeAt(0) - 55296) + (l.charCodeAt(1) - 56320) + 65536) + ';';
					})
					.replace(jn, function(l) {
						return '&#' + l.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			}
			let xn;
			function _n(l) {
				return 'content' in l &&
					(function(l) {
						return l.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === l.nodeName;
					})(l)
					? l.content
					: null;
			}
			const kn = (function() {
				var l = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
				return (l[l.NONE] = 'NONE'), (l[l.HTML] = 'HTML'), (l[l.STYLE] = 'STYLE'), (l[l.SCRIPT] = 'SCRIPT'), (l[l.URL] = 'URL'), (l[l.RESOURCE_URL] = 'RESOURCE_URL'), l;
			})();
			class Cn {}
			const Sn = new RegExp(
					'^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
					'g'
				),
				En = /^url\(([^)]+)\)$/,
				In = /([A-Z])/g;
			function Pn(l) {
				try {
					return null != l ? l.toString().slice(0, 30) : l;
				} catch (n) {
					return '[ERROR] Exception while trying to serialize the value';
				}
			}
			function On(l) {
				return !!l && 'function' == typeof l.then;
			}
			function Tn(l) {
				return !!l && 'function' == typeof l.subscribe;
			}
			let Mn = null;
			function Rn() {
				if (!Mn) {
					const l = wl.Symbol;
					if (l && l.iterator) Mn = l.iterator;
					else {
						const l = Object.getOwnPropertyNames(Map.prototype);
						for (let n = 0; n < l.length; ++n) {
							const u = l[n];
							'entries' !== u && 'size' !== u && Map.prototype[u] === Map.prototype.entries && (Mn = u);
						}
					}
				}
				return Mn;
			}
			function An(l, n) {
				return l === n || ('number' == typeof l && 'number' == typeof n && isNaN(l) && isNaN(n));
			}
			function Nn(l, n) {
				const u = Un(l),
					e = Un(n);
				if (u && e)
					return (function(l, n, u) {
						const e = l[Rn()](),
							t = n[Rn()]();
						for (;;) {
							const l = e.next(),
								n = t.next();
							if (l.done && n.done) return !0;
							if (l.done || n.done) return !1;
							if (!u(l.value, n.value)) return !1;
						}
					})(l, n, Nn);
				{
					const t = l && ('object' == typeof l || 'function' == typeof l),
						s = n && ('object' == typeof n || 'function' == typeof n);
					return !(u || !t || e || !s) || An(l, n);
				}
			}
			class Dn {
				constructor(l) {
					this.wrapped = l;
				}
				static wrap(l) {
					return new Dn(l);
				}
				static unwrap(l) {
					return Dn.isWrapped(l) ? l.wrapped : l;
				}
				static isWrapped(l) {
					return l instanceof Dn;
				}
			}
			function Un(l) {
				return !!Ln(l) && (Array.isArray(l) || (!(l instanceof Map) && Rn() in l));
			}
			function Ln(l) {
				return null !== l && ('function' == typeof l || 'object' == typeof l);
			}
			class Vn {
				constructor(l, n, u) {
					(this.previousValue = l), (this.currentValue = n), (this.firstChange = u);
				}
				isFirstChange() {
					return this.firstChange;
				}
			}
			const Fn = new kl('The presence of this token marks an injector as being the root injector.');
			class zn {}
			class Hn {}
			function $n(l) {
				const n = Error(`No component factory found for ${gl(l)}. Did you add it to @NgModule.entryComponents?`);
				return (n[Bn] = l), n;
			}
			const Bn = 'ngComponent';
			class qn {
				resolveComponentFactory(l) {
					throw $n(l);
				}
			}
			const Gn = (() => {
				class l {}
				return (l.NULL = new qn()), l;
			})();
			class Zn {
				constructor(l, n, u) {
					(this._parent = n), (this._ngModule = u), (this._factories = new Map());
					for (let e = 0; e < l.length; e++) {
						const n = l[e];
						this._factories.set(n.componentType, n);
					}
				}
				resolveComponentFactory(l) {
					let n = this._factories.get(l);
					if ((!n && this._parent && (n = this._parent.resolveComponentFactory(l)), !n)) throw $n(l);
					return new Qn(n, this._ngModule);
				}
			}
			class Qn extends Hn {
				constructor(l, n) {
					super(),
						(this.factory = l),
						(this.ngModule = n),
						(this.selector = l.selector),
						(this.componentType = l.componentType),
						(this.ngContentSelectors = l.ngContentSelectors),
						(this.inputs = l.inputs),
						(this.outputs = l.outputs);
				}
				create(l, n, u, e) {
					return this.factory.create(l, n, u, e || this.ngModule);
				}
			}
			class Wn {}
			class Kn {}
			function Yn(...l) {}
			const Jn = (() => {
					class l {
						constructor(l) {
							this.nativeElement = l;
						}
					}
					return (l.__NG_ELEMENT_ID__ = () => Xn(l)), l;
				})(),
				Xn = Yn;
			class lu {}
			class nu {}
			const uu = (function() {
					var l = { Important: 1, DashCase: 2 };
					return (l[l.Important] = 'Important'), (l[l.DashCase] = 'DashCase'), l;
				})(),
				eu = (() => {
					class l {}
					return (l.__NG_ELEMENT_ID__ = () => tu()), l;
				})(),
				tu = Yn;
			class su {
				constructor(l) {
					(this.full = l),
						(this.major = l.split('.')[0]),
						(this.minor = l.split('.')[1]),
						(this.patch = l
							.split('.')
							.slice(2)
							.join('.'));
				}
			}
			const ru = new su('8.0.2');
			class au {
				constructor() {}
				supports(l) {
					return Un(l);
				}
				create(l) {
					return new iu(l);
				}
			}
			const ou = (l, n) => n;
			class iu {
				constructor(l) {
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
						(this._trackByFn = l || ou);
				}
				forEachItem(l) {
					let n;
					for (n = this._itHead; null !== n; n = n._next) l(n);
				}
				forEachOperation(l) {
					let n = this._itHead,
						u = this._removalsHead,
						e = 0,
						t = null;
					for (; n || u; ) {
						const s = !u || (n && n.currentIndex < pu(u, e, t)) ? n : u,
							r = pu(s, e, t),
							a = s.currentIndex;
						if (s === u) e--, (u = u._nextRemoved);
						else if (((n = n._next), null == s.previousIndex)) e++;
						else {
							t || (t = []);
							const l = r - e,
								n = a - e;
							if (l != n) {
								for (let u = 0; u < l; u++) {
									const e = u < t.length ? t[u] : (t[u] = 0),
										s = e + u;
									n <= s && s < l && (t[u] = e + 1);
								}
								t[s.previousIndex] = n - l;
							}
						}
						r !== a && l(s, r, a);
					}
				}
				forEachPreviousItem(l) {
					let n;
					for (n = this._previousItHead; null !== n; n = n._nextPrevious) l(n);
				}
				forEachAddedItem(l) {
					let n;
					for (n = this._additionsHead; null !== n; n = n._nextAdded) l(n);
				}
				forEachMovedItem(l) {
					let n;
					for (n = this._movesHead; null !== n; n = n._nextMoved) l(n);
				}
				forEachRemovedItem(l) {
					let n;
					for (n = this._removalsHead; null !== n; n = n._nextRemoved) l(n);
				}
				forEachIdentityChange(l) {
					let n;
					for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) l(n);
				}
				diff(l) {
					if ((null == l && (l = []), !Un(l))) throw new Error(`Error trying to diff '${gl(l)}'. Only arrays and iterables are allowed`);
					return this.check(l) ? this : null;
				}
				onDestroy() {}
				check(l) {
					this._reset();
					let n,
						u,
						e,
						t = this._itHead,
						s = !1;
					if (Array.isArray(l)) {
						this.length = l.length;
						for (let n = 0; n < this.length; n++)
							(e = this._trackByFn(n, (u = l[n]))),
								null !== t && An(t.trackById, e)
									? (s && (t = this._verifyReinsertion(t, u, e, n)), An(t.item, u) || this._addIdentityChange(t, u))
									: ((t = this._mismatch(t, u, e, n)), (s = !0)),
								(t = t._next);
					} else
						(n = 0),
							(function(l, n) {
								if (Array.isArray(l)) for (let u = 0; u < l.length; u++) n(l[u]);
								else {
									const u = l[Rn()]();
									let e;
									for (; !(e = u.next()).done; ) n(e.value);
								}
							})(l, (l) => {
								(e = this._trackByFn(n, l)),
									null !== t && An(t.trackById, e)
										? (s && (t = this._verifyReinsertion(t, l, e, n)), An(t.item, l) || this._addIdentityChange(t, l))
										: ((t = this._mismatch(t, l, e, n)), (s = !0)),
									(t = t._next),
									n++;
							}),
							(this.length = n);
					return this._truncate(t), (this.collection = l), this.isDirty;
				}
				get isDirty() {
					return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead;
				}
				_reset() {
					if (this.isDirty) {
						let l, n;
						for (l = this._previousItHead = this._itHead; null !== l; l = l._next) l._nextPrevious = l._next;
						for (l = this._additionsHead; null !== l; l = l._nextAdded) l.previousIndex = l.currentIndex;
						for (this._additionsHead = this._additionsTail = null, l = this._movesHead; null !== l; l = n) (l.previousIndex = l.currentIndex), (n = l._nextMoved);
						(this._movesHead = this._movesTail = null), (this._removalsHead = this._removalsTail = null), (this._identityChangesHead = this._identityChangesTail = null);
					}
				}
				_mismatch(l, n, u, e) {
					let t;
					return (
						null === l ? (t = this._itTail) : ((t = l._prev), this._remove(l)),
						null !== (l = null === this._linkedRecords ? null : this._linkedRecords.get(u, e))
							? (An(l.item, n) || this._addIdentityChange(l, n), this._moveAfter(l, t, e))
							: null !== (l = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(u, null))
							? (An(l.item, n) || this._addIdentityChange(l, n), this._reinsertAfter(l, t, e))
							: (l = this._addAfter(new cu(n, u), t, e)),
						l
					);
				}
				_verifyReinsertion(l, n, u, e) {
					let t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(u, null);
					return null !== t ? (l = this._reinsertAfter(t, l._prev, e)) : l.currentIndex != e && ((l.currentIndex = e), this._addToMoves(l, e)), l;
				}
				_truncate(l) {
					for (; null !== l; ) {
						const n = l._next;
						this._addToRemovals(this._unlink(l)), (l = n);
					}
					null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
						null !== this._additionsTail && (this._additionsTail._nextAdded = null),
						null !== this._movesTail && (this._movesTail._nextMoved = null),
						null !== this._itTail && (this._itTail._next = null),
						null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
						null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
				}
				_reinsertAfter(l, n, u) {
					null !== this._unlinkedRecords && this._unlinkedRecords.remove(l);
					const e = l._prevRemoved,
						t = l._nextRemoved;
					return (
						null === e ? (this._removalsHead = t) : (e._nextRemoved = t),
						null === t ? (this._removalsTail = e) : (t._prevRemoved = e),
						this._insertAfter(l, n, u),
						this._addToMoves(l, u),
						l
					);
				}
				_moveAfter(l, n, u) {
					return this._unlink(l), this._insertAfter(l, n, u), this._addToMoves(l, u), l;
				}
				_addAfter(l, n, u) {
					return this._insertAfter(l, n, u), (this._additionsTail = null === this._additionsTail ? (this._additionsHead = l) : (this._additionsTail._nextAdded = l)), l;
				}
				_insertAfter(l, n, u) {
					const e = null === n ? this._itHead : n._next;
					return (
						(l._next = e),
						(l._prev = n),
						null === e ? (this._itTail = l) : (e._prev = l),
						null === n ? (this._itHead = l) : (n._next = l),
						null === this._linkedRecords && (this._linkedRecords = new du()),
						this._linkedRecords.put(l),
						(l.currentIndex = u),
						l
					);
				}
				_remove(l) {
					return this._addToRemovals(this._unlink(l));
				}
				_unlink(l) {
					null !== this._linkedRecords && this._linkedRecords.remove(l);
					const n = l._prev,
						u = l._next;
					return null === n ? (this._itHead = u) : (n._next = u), null === u ? (this._itTail = n) : (u._prev = n), l;
				}
				_addToMoves(l, n) {
					return l.previousIndex === n ? l : ((this._movesTail = null === this._movesTail ? (this._movesHead = l) : (this._movesTail._nextMoved = l)), l);
				}
				_addToRemovals(l) {
					return (
						null === this._unlinkedRecords && (this._unlinkedRecords = new du()),
						this._unlinkedRecords.put(l),
						(l.currentIndex = null),
						(l._nextRemoved = null),
						null === this._removalsTail
							? ((this._removalsTail = this._removalsHead = l), (l._prevRemoved = null))
							: ((l._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = l)),
						l
					);
				}
				_addIdentityChange(l, n) {
					return (l.item = n), (this._identityChangesTail = null === this._identityChangesTail ? (this._identityChangesHead = l) : (this._identityChangesTail._nextIdentityChange = l)), l;
				}
			}
			class cu {
				constructor(l, n) {
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
				}
			}
			class hu {
				constructor() {
					(this._head = null), (this._tail = null);
				}
				add(l) {
					null === this._head
						? ((this._head = this._tail = l), (l._nextDup = null), (l._prevDup = null))
						: ((this._tail._nextDup = l), (l._prevDup = this._tail), (l._nextDup = null), (this._tail = l));
				}
				get(l, n) {
					let u;
					for (u = this._head; null !== u; u = u._nextDup) if ((null === n || n <= u.currentIndex) && An(u.trackById, l)) return u;
					return null;
				}
				remove(l) {
					const n = l._prevDup,
						u = l._nextDup;
					return null === n ? (this._head = u) : (n._nextDup = u), null === u ? (this._tail = n) : (u._prevDup = n), null === this._head;
				}
			}
			class du {
				constructor() {
					this.map = new Map();
				}
				put(l) {
					const n = l.trackById;
					let u = this.map.get(n);
					u || ((u = new hu()), this.map.set(n, u)), u.add(l);
				}
				get(l, n) {
					const u = this.map.get(l);
					return u ? u.get(l, n) : null;
				}
				remove(l) {
					const n = l.trackById;
					return this.map.get(n).remove(l) && this.map.delete(n), l;
				}
				get isEmpty() {
					return 0 === this.map.size;
				}
				clear() {
					this.map.clear();
				}
			}
			function pu(l, n, u) {
				const e = l.previousIndex;
				if (null === e) return e;
				let t = 0;
				return u && e < u.length && (t = u[e]), e + n + t;
			}
			class gu {
				constructor() {}
				supports(l) {
					return l instanceof Map || Ln(l);
				}
				create() {
					return new fu();
				}
			}
			class fu {
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
				forEachItem(l) {
					let n;
					for (n = this._mapHead; null !== n; n = n._next) l(n);
				}
				forEachPreviousItem(l) {
					let n;
					for (n = this._previousMapHead; null !== n; n = n._nextPrevious) l(n);
				}
				forEachChangedItem(l) {
					let n;
					for (n = this._changesHead; null !== n; n = n._nextChanged) l(n);
				}
				forEachAddedItem(l) {
					let n;
					for (n = this._additionsHead; null !== n; n = n._nextAdded) l(n);
				}
				forEachRemovedItem(l) {
					let n;
					for (n = this._removalsHead; null !== n; n = n._nextRemoved) l(n);
				}
				diff(l) {
					if (l) {
						if (!(l instanceof Map || Ln(l))) throw new Error(`Error trying to diff '${gl(l)}'. Only maps and objects are allowed`);
					} else l = new Map();
					return this.check(l) ? this : null;
				}
				onDestroy() {}
				check(l) {
					this._reset();
					let n = this._mapHead;
					if (
						((this._appendAfter = null),
						this._forEach(l, (l, u) => {
							if (n && n.key === u) this._maybeAddToChanges(n, l), (this._appendAfter = n), (n = n._next);
							else {
								const e = this._getOrCreateRecordForKey(u, l);
								n = this._insertBeforeOrAppend(n, e);
							}
						}),
						n)
					) {
						n._prev && (n._prev._next = null), (this._removalsHead = n);
						for (let l = n; null !== l; l = l._nextRemoved)
							l === this._mapHead && (this._mapHead = null),
								this._records.delete(l.key),
								(l._nextRemoved = l._next),
								(l.previousValue = l.currentValue),
								(l.currentValue = null),
								(l._prev = null),
								(l._next = null);
					}
					return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty;
				}
				_insertBeforeOrAppend(l, n) {
					if (l) {
						const u = l._prev;
						return (n._next = l), (n._prev = u), (l._prev = n), u && (u._next = n), l === this._mapHead && (this._mapHead = n), (this._appendAfter = l), l;
					}
					return this._appendAfter ? ((this._appendAfter._next = n), (n._prev = this._appendAfter)) : (this._mapHead = n), (this._appendAfter = n), null;
				}
				_getOrCreateRecordForKey(l, n) {
					if (this._records.has(l)) {
						const u = this._records.get(l);
						this._maybeAddToChanges(u, n);
						const e = u._prev,
							t = u._next;
						return e && (e._next = t), t && (t._prev = e), (u._next = null), (u._prev = null), u;
					}
					const u = new mu(l);
					return this._records.set(l, u), (u.currentValue = n), this._addToAdditions(u), u;
				}
				_reset() {
					if (this.isDirty) {
						let l;
						for (this._previousMapHead = this._mapHead, l = this._previousMapHead; null !== l; l = l._next) l._nextPrevious = l._next;
						for (l = this._changesHead; null !== l; l = l._nextChanged) l.previousValue = l.currentValue;
						for (l = this._additionsHead; null != l; l = l._nextAdded) l.previousValue = l.currentValue;
						(this._changesHead = this._changesTail = null), (this._additionsHead = this._additionsTail = null), (this._removalsHead = null);
					}
				}
				_maybeAddToChanges(l, n) {
					An(n, l.currentValue) || ((l.previousValue = l.currentValue), (l.currentValue = n), this._addToChanges(l));
				}
				_addToAdditions(l) {
					null === this._additionsHead ? (this._additionsHead = this._additionsTail = l) : ((this._additionsTail._nextAdded = l), (this._additionsTail = l));
				}
				_addToChanges(l) {
					null === this._changesHead ? (this._changesHead = this._changesTail = l) : ((this._changesTail._nextChanged = l), (this._changesTail = l));
				}
				_forEach(l, n) {
					l instanceof Map ? l.forEach(n) : Object.keys(l).forEach((u) => n(l[u], u));
				}
			}
			class mu {
				constructor(l) {
					(this.key = l),
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
			const bu = (() => {
					class l {
						constructor(l) {
							this.factories = l;
						}
						static create(n, u) {
							if (null != u) {
								const l = u.factories.slice();
								n = n.concat(l);
							}
							return new l(n);
						}
						static extend(n) {
							return {
								provide: l,
								useFactory: (u) => {
									if (!u) throw new Error('Cannot extend IterableDiffers without a parent injector');
									return l.create(n, u);
								},
								deps: [[l, new ol(), new rl()]]
							};
						}
						find(l) {
							const n = this.factories.find((n) => n.supports(l));
							if (null != n) return n;
							throw new Error(`Cannot find a differ supporting object '${l}' of type '${((u = l), u.name || typeof u)}'`);
							var u;
						}
					}
					return (l.ngInjectableDef = hl({ providedIn: 'root', factory: () => new l([new au()]) })), l;
				})(),
				yu = (() => {
					class l {
						constructor(l) {
							this.factories = l;
						}
						static create(n, u) {
							if (u) {
								const l = u.factories.slice();
								n = n.concat(l);
							}
							return new l(n);
						}
						static extend(n) {
							return {
								provide: l,
								useFactory: (u) => {
									if (!u) throw new Error('Cannot extend KeyValueDiffers without a parent injector');
									return l.create(n, u);
								},
								deps: [[l, new ol(), new rl()]]
							};
						}
						find(l) {
							const n = this.factories.find((n) => n.supports(l));
							if (n) return n;
							throw new Error(`Cannot find a differ supporting object '${l}'`);
						}
					}
					return (l.ngInjectableDef = hl({ providedIn: 'root', factory: () => new l([new gu()]) })), l;
				})(),
				wu = (() => {
					class l {}
					return (l.__NG_ELEMENT_ID__ = () => ju()), l;
				})(),
				ju = (...l) => {},
				vu = [new gu()],
				xu = new bu([new au()]),
				_u = new yu(vu),
				ku = (() => {
					class l {}
					return (l.__NG_ELEMENT_ID__ = () => Cu(l, Jn)), l;
				})(),
				Cu = Yn,
				Su = (() => {
					class l {}
					return (l.__NG_ELEMENT_ID__ = () => Eu(l, Jn)), l;
				})(),
				Eu = Yn;
			function Iu(l, n, u, e) {
				let t = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${n}'. Current value: '${u}'.`;
				return (
					e && (t += ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
					(function(l, n) {
						const u = new Error(l);
						return Pu(u, n), u;
					})(t, l)
				);
			}
			function Pu(l, n) {
				(l[$l] = n), (l[ql] = n.logError.bind(n));
			}
			function Ou(l) {
				return new Error(`ViewDestroyedError: Attempt to use a destroyed view: ${l}`);
			}
			function Tu(l, n, u) {
				const e = l.state,
					t = 1792 & e;
				return t === n ? ((l.state = (-1793 & e) | u), (l.initIndex = -1), !0) : t === u;
			}
			function Mu(l, n, u) {
				return (1792 & l.state) === n && l.initIndex <= u && ((l.initIndex = u + 1), !0);
			}
			function Ru(l, n) {
				return l.nodes[n];
			}
			function Au(l, n) {
				return l.nodes[n];
			}
			function Nu(l, n) {
				return l.nodes[n];
			}
			function Du(l, n) {
				return l.nodes[n];
			}
			function Uu(l, n) {
				return l.nodes[n];
			}
			const Lu = {
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
				Vu = () => {},
				Fu = new Map();
			function zu(l) {
				let n = Fu.get(l);
				return n || ((n = gl(l) + '_' + Fu.size), Fu.set(l, n)), n;
			}
			const Hu = '$$undefined',
				$u = '$$empty';
			function Bu(l) {
				return { id: Hu, styles: l.styles, encapsulation: l.encapsulation, data: l.data };
			}
			let qu = 0;
			function Gu(l, n, u, e) {
				return !(!(2 & l.state) && An(l.oldValues[n.bindingIndex + u], e));
			}
			function Zu(l, n, u, e) {
				return !!Gu(l, n, u, e) && ((l.oldValues[n.bindingIndex + u] = e), !0);
			}
			function Qu(l, n, u, e) {
				const t = l.oldValues[n.bindingIndex + u];
				if (1 & l.state || !Nn(t, e)) {
					const s = n.bindings[u].name;
					throw Iu(Lu.createDebugContext(l, n.nodeIndex), `${s}: ${t}`, `${s}: ${e}`, 0 != (1 & l.state));
				}
			}
			function Wu(l) {
				let n = l;
				for (; n; ) 2 & n.def.flags && (n.state |= 8), (n = n.viewContainerParent || n.parent);
			}
			function Ku(l, n) {
				let u = l;
				for (; u && u !== n; ) (u.state |= 64), (u = u.viewContainerParent || u.parent);
			}
			function Yu(l, n, u, e) {
				try {
					return Wu(33554432 & l.def.nodes[n].flags ? Au(l, n).componentView : l), Lu.handleEvent(l, n, u, e);
				} catch (t) {
					l.root.errorHandler.handleError(t);
				}
			}
			function Ju(l) {
				return l.parent ? Au(l.parent, l.parentNodeDef.nodeIndex) : null;
			}
			function Xu(l) {
				return l.parent ? l.parentNodeDef.parent : null;
			}
			function le(l, n) {
				switch (201347067 & n.flags) {
					case 1:
						return Au(l, n.nodeIndex).renderElement;
					case 2:
						return Ru(l, n.nodeIndex).renderText;
				}
			}
			function ne(l) {
				return !!l.parent && !!(32768 & l.parentNodeDef.flags);
			}
			function ue(l) {
				return !(!l.parent || 32768 & l.parentNodeDef.flags);
			}
			function ee(l) {
				return 1 << l % 32;
			}
			function te(l) {
				const n = {};
				let u = 0;
				const e = {};
				return (
					l &&
						l.forEach(([l, t]) => {
							'number' == typeof l ? ((n[l] = t), (u |= ee(l))) : (e[l] = t);
						}),
					{ matchedQueries: n, references: e, matchedQueryIds: u }
				);
			}
			function se(l, n) {
				return l.map((l) => {
					let u, e;
					return (
						Array.isArray(l) ? ([e, u] = l) : ((e = 0), (u = l)),
						u && ('function' == typeof u || 'object' == typeof u) && n && Object.defineProperty(u, Cl, { value: n, configurable: !0 }),
						{ flags: e, token: u, tokenKey: zu(u) }
					);
				});
			}
			function re(l, n, u) {
				let e = u.renderParent;
				return e
					? 0 == (1 & e.flags) || 0 == (33554432 & e.flags) || (e.element.componentRendererType && e.element.componentRendererType.encapsulation === Zl.Native)
						? Au(l, u.renderParent.nodeIndex).renderElement
						: void 0
					: n;
			}
			const ae = new WeakMap();
			function oe(l) {
				let n = ae.get(l);
				return n || (((n = l(() => Vu)).factory = l), ae.set(l, n)), n;
			}
			function ie(l, n, u, e, t) {
				3 === n && (u = l.renderer.parentNode(le(l, l.def.lastRenderRootNode))), ce(l, n, 0, l.def.nodes.length - 1, u, e, t);
			}
			function ce(l, n, u, e, t, s, r) {
				for (let a = u; a <= e; a++) {
					const u = l.def.nodes[a];
					11 & u.flags && de(l, u, n, t, s, r), (a += u.childCount);
				}
			}
			function he(l, n, u, e, t, s) {
				let r = l;
				for (; r && !ne(r); ) r = r.parent;
				const a = r.parent,
					o = Xu(r),
					i = o.nodeIndex + o.childCount;
				for (let c = o.nodeIndex + 1; c <= i; c++) {
					const l = a.def.nodes[c];
					l.ngContentIndex === n && de(a, l, u, e, t, s), (c += l.childCount);
				}
				if (!a.parent) {
					const r = l.root.projectableNodes[n];
					if (r) for (let n = 0; n < r.length; n++) pe(l, r[n], u, e, t, s);
				}
			}
			function de(l, n, u, e, t, s) {
				if (8 & n.flags) he(l, n.ngContent.index, u, e, t, s);
				else {
					const r = le(l, n);
					if (
						(3 === u && 33554432 & n.flags && 48 & n.bindingFlags
							? (16 & n.bindingFlags && pe(l, r, u, e, t, s), 32 & n.bindingFlags && pe(Au(l, n.nodeIndex).componentView, r, u, e, t, s))
							: pe(l, r, u, e, t, s),
						16777216 & n.flags)
					) {
						const r = Au(l, n.nodeIndex).viewContainer._embeddedViews;
						for (let l = 0; l < r.length; l++) ie(r[l], u, e, t, s);
					}
					1 & n.flags && !n.element.name && ce(l, u, n.nodeIndex + 1, n.nodeIndex + n.childCount, e, t, s);
				}
			}
			function pe(l, n, u, e, t, s) {
				const r = l.renderer;
				switch (u) {
					case 1:
						r.appendChild(e, n);
						break;
					case 2:
						r.insertBefore(e, n, t);
						break;
					case 3:
						r.removeChild(e, n);
						break;
					case 0:
						s.push(n);
				}
			}
			const ge = /^:([^:]+):(.+)$/;
			function fe(l) {
				if (':' === l[0]) {
					const n = l.match(ge);
					return [n[1], n[2]];
				}
				return ['', l];
			}
			function me(l) {
				let n = 0;
				for (let u = 0; u < l.length; u++) n |= l[u].flags;
				return n;
			}
			const be = new Object(),
				ye = zu(Pl),
				we = zu(El),
				je = zu(Wn);
			function ve(l, n, u, e) {
				return (u = bl(u)), { index: -1, deps: se(e, gl(n)), flags: l, token: n, value: u };
			}
			function xe(l, n, u = Pl.THROW_IF_NOT_FOUND) {
				const e = xl(l);
				try {
					if (8 & n.flags) return n.token;
					if ((2 & n.flags && (u = null), 1 & n.flags)) return l._parent.get(n.token, u);
					const r = n.tokenKey;
					switch (r) {
						case ye:
						case we:
						case je:
							return l;
					}
					const a = l._def.providersByKey[r];
					let o;
					if (a) {
						let n = l._providers[a.index];
						return void 0 === n && (n = l._providers[a.index] = _e(l, a)), n === be ? void 0 : n;
					}
					if (
						(o = dl(n.token)) &&
						((t = l),
						null != (s = o).providedIn &&
							((function(l, n) {
								return l._def.modules.indexOf(s.providedIn) > -1;
							})(t) ||
								('root' === s.providedIn && t._def.isRoot)))
					) {
						const u = l._providers.length;
						return (
							(l._def.providers[u] = l._def.providersByKey[n.tokenKey] = { flags: 5120, value: o.factory, deps: [], index: u, token: n.token }),
							(l._providers[u] = be),
							(l._providers[u] = _e(l, l._def.providersByKey[n.tokenKey]))
						);
					}
					return 4 & n.flags ? u : l._parent.get(n.token, u);
				} finally {
					xl(e);
				}
				var t, s;
			}
			function _e(l, n) {
				let u;
				switch (201347067 & n.flags) {
					case 512:
						u = (function(l, n, u) {
							const e = u.length;
							switch (e) {
								case 0:
									return new n();
								case 1:
									return new n(xe(l, u[0]));
								case 2:
									return new n(xe(l, u[0]), xe(l, u[1]));
								case 3:
									return new n(xe(l, u[0]), xe(l, u[1]), xe(l, u[2]));
								default:
									const t = new Array(e);
									for (let n = 0; n < e; n++) t[n] = xe(l, u[n]);
									return new n(...t);
							}
						})(l, n.value, n.deps);
						break;
					case 1024:
						u = (function(l, n, u) {
							const e = u.length;
							switch (e) {
								case 0:
									return n();
								case 1:
									return n(xe(l, u[0]));
								case 2:
									return n(xe(l, u[0]), xe(l, u[1]));
								case 3:
									return n(xe(l, u[0]), xe(l, u[1]), xe(l, u[2]));
								default:
									const t = Array(e);
									for (let n = 0; n < e; n++) t[n] = xe(l, u[n]);
									return n(...t);
							}
						})(l, n.value, n.deps);
						break;
					case 2048:
						u = xe(l, n.deps[0]);
						break;
					case 256:
						u = n.value;
				}
				return u === be || null === u || 'object' != typeof u || 131072 & n.flags || 'function' != typeof u.ngOnDestroy || (n.flags |= 131072), void 0 === u ? be : u;
			}
			function ke(l, n) {
				const u = l.viewContainer._embeddedViews;
				if (((null == n || n >= u.length) && (n = u.length - 1), n < 0)) return null;
				const e = u[n];
				return (e.viewContainerParent = null), Ie(u, n), Lu.dirtyParentQueries(e), Se(e), e;
			}
			function Ce(l, n, u) {
				const e = n ? le(n, n.def.lastRenderRootNode) : l.renderElement,
					t = u.renderer.parentNode(e),
					s = u.renderer.nextSibling(e);
				ie(u, 2, t, s, void 0);
			}
			function Se(l) {
				ie(l, 3, null, null, void 0);
			}
			function Ee(l, n, u) {
				n >= l.length ? l.push(u) : l.splice(n, 0, u);
			}
			function Ie(l, n) {
				n >= l.length - 1 ? l.pop() : l.splice(n, 1);
			}
			const Pe = new Object();
			function Oe(l, n, u, e, t, s) {
				return new Te(l, n, u, e, t, s);
			}
			class Te extends Hn {
				constructor(l, n, u, e, t, s) {
					super(), (this.selector = l), (this.componentType = n), (this._inputs = e), (this._outputs = t), (this.ngContentSelectors = s), (this.viewDefFactory = u);
				}
				get inputs() {
					const l = [],
						n = this._inputs;
					for (let u in n) l.push({ propName: u, templateName: n[u] });
					return l;
				}
				get outputs() {
					const l = [];
					for (let n in this._outputs) l.push({ propName: n, templateName: this._outputs[n] });
					return l;
				}
				create(l, n, u, e) {
					if (!e) throw new Error('ngModule should be provided');
					const t = oe(this.viewDefFactory),
						s = t.nodes[0].element.componentProvider.nodeIndex,
						r = Lu.createRootView(l, n || [], u, t, e, Pe),
						a = Nu(r, s).instance;
					return u && r.renderer.setAttribute(Au(r, 0).renderElement, 'ng-version', ru.full), new Me(r, new De(r), a);
				}
			}
			class Me extends zn {
				constructor(l, n, u) {
					super(),
						(this._view = l),
						(this._viewRef = n),
						(this._component = u),
						(this._elDef = this._view.def.nodes[0]),
						(this.hostView = n),
						(this.changeDetectorRef = n),
						(this.instance = u);
				}
				get location() {
					return new Jn(Au(this._view, this._elDef.nodeIndex).renderElement);
				}
				get injector() {
					return new Fe(this._view, this._elDef);
				}
				get componentType() {
					return this._component.constructor;
				}
				destroy() {
					this._viewRef.destroy();
				}
				onDestroy(l) {
					this._viewRef.onDestroy(l);
				}
			}
			function Re(l, n, u) {
				return new Ae(l, n, u);
			}
			class Ae {
				constructor(l, n, u) {
					(this._view = l), (this._elDef = n), (this._data = u), (this._embeddedViews = []);
				}
				get element() {
					return new Jn(this._data.renderElement);
				}
				get injector() {
					return new Fe(this._view, this._elDef);
				}
				get parentInjector() {
					let l = this._view,
						n = this._elDef.parent;
					for (; !n && l; ) (n = Xu(l)), (l = l.parent);
					return l ? new Fe(l, n) : new Fe(this._view, null);
				}
				clear() {
					for (let l = this._embeddedViews.length - 1; l >= 0; l--) {
						const n = ke(this._data, l);
						Lu.destroyView(n);
					}
				}
				get(l) {
					const n = this._embeddedViews[l];
					if (n) {
						const l = new De(n);
						return l.attachToViewContainerRef(this), l;
					}
					return null;
				}
				get length() {
					return this._embeddedViews.length;
				}
				createEmbeddedView(l, n, u) {
					const e = l.createEmbeddedView(n || {});
					return this.insert(e, u), e;
				}
				createComponent(l, n, u, e, t) {
					const s = u || this.parentInjector;
					t || l instanceof Qn || (t = s.get(Wn));
					const r = l.create(s, e, void 0, t);
					return this.insert(r.hostView, n), r;
				}
				insert(l, n) {
					if (l.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
					const u = l;
					return (
						(function(l, n, u, e) {
							let t = n.viewContainer._embeddedViews;
							null == u && (u = t.length),
								(e.viewContainerParent = l),
								Ee(t, u, e),
								(function(l, n) {
									const u = Ju(n);
									if (!u || u === l || 16 & n.state) return;
									n.state |= 16;
									let e = u.template._projectedViews;
									e || (e = u.template._projectedViews = []),
										e.push(n),
										(function(l, u) {
											if (4 & u.flags) return;
											(n.parent.def.nodeFlags |= 4), (u.flags |= 4);
											let e = u.parent;
											for (; e; ) (e.childFlags |= 4), (e = e.parent);
										})(0, n.parentNodeDef);
								})(n, e),
								Lu.dirtyParentQueries(e),
								Ce(n, u > 0 ? t[u - 1] : null, e);
						})(this._view, this._data, n, u._view),
						u.attachToViewContainerRef(this),
						l
					);
				}
				move(l, n) {
					if (l.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
					const u = this._embeddedViews.indexOf(l._view);
					return (
						(function(l, n, e) {
							const t = l.viewContainer._embeddedViews,
								s = t[u];
							Ie(t, u), null == e && (e = t.length), Ee(t, e, s), Lu.dirtyParentQueries(s), Se(s), Ce(l, e > 0 ? t[e - 1] : null, s);
						})(this._data, 0, n),
						l
					);
				}
				indexOf(l) {
					return this._embeddedViews.indexOf(l._view);
				}
				remove(l) {
					const n = ke(this._data, l);
					n && Lu.destroyView(n);
				}
				detach(l) {
					const n = ke(this._data, l);
					return n ? new De(n) : null;
				}
			}
			function Ne(l) {
				return new De(l);
			}
			class De {
				constructor(l) {
					(this._view = l), (this._viewContainerRef = null), (this._appRef = null);
				}
				get rootNodes() {
					return (function(l) {
						const n = [];
						return ie(l, 0, void 0, void 0, n), n;
					})(this._view);
				}
				get context() {
					return this._view.context;
				}
				get destroyed() {
					return 0 != (128 & this._view.state);
				}
				markForCheck() {
					Wu(this._view);
				}
				detach() {
					this._view.state &= -5;
				}
				detectChanges() {
					const l = this._view.root.rendererFactory;
					l.begin && l.begin();
					try {
						Lu.checkAndUpdateView(this._view);
					} finally {
						l.end && l.end();
					}
				}
				checkNoChanges() {
					Lu.checkNoChangesView(this._view);
				}
				reattach() {
					this._view.state |= 4;
				}
				onDestroy(l) {
					this._view.disposables || (this._view.disposables = []), this._view.disposables.push(l);
				}
				destroy() {
					this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Lu.destroyView(this._view);
				}
				detachFromAppRef() {
					(this._appRef = null), Se(this._view), Lu.dirtyParentQueries(this._view);
				}
				attachToAppRef(l) {
					if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
					this._appRef = l;
				}
				attachToViewContainerRef(l) {
					if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
					this._viewContainerRef = l;
				}
			}
			function Ue(l, n) {
				return new Le(l, n);
			}
			class Le extends ku {
				constructor(l, n) {
					super(), (this._parentView = l), (this._def = n);
				}
				createEmbeddedView(l) {
					return new De(Lu.createEmbeddedView(this._parentView, this._def, this._def.element.template, l));
				}
				get elementRef() {
					return new Jn(Au(this._parentView, this._def.nodeIndex).renderElement);
				}
			}
			function Ve(l, n) {
				return new Fe(l, n);
			}
			class Fe {
				constructor(l, n) {
					(this.view = l), (this.elDef = n);
				}
				get(l, n = Pl.THROW_IF_NOT_FOUND) {
					return Lu.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: l, tokenKey: zu(l) }, n);
				}
			}
			function ze(l, n) {
				const u = l.def.nodes[n];
				if (1 & u.flags) {
					const n = Au(l, u.nodeIndex);
					return u.element.template ? n.template : n.renderElement;
				}
				if (2 & u.flags) return Ru(l, u.nodeIndex).renderText;
				if (20240 & u.flags) return Nu(l, u.nodeIndex).instance;
				throw new Error(`Illegal state: read nodeValue for node index ${n}`);
			}
			function He(l) {
				return new $e(l.renderer);
			}
			class $e {
				constructor(l) {
					this.delegate = l;
				}
				selectRootElement(l) {
					return this.delegate.selectRootElement(l);
				}
				createElement(l, n) {
					const [u, e] = fe(n),
						t = this.delegate.createElement(e, u);
					return l && this.delegate.appendChild(l, t), t;
				}
				createViewRoot(l) {
					return l;
				}
				createTemplateAnchor(l) {
					const n = this.delegate.createComment('');
					return l && this.delegate.appendChild(l, n), n;
				}
				createText(l, n) {
					const u = this.delegate.createText(n);
					return l && this.delegate.appendChild(l, u), u;
				}
				projectNodes(l, n) {
					for (let u = 0; u < n.length; u++) this.delegate.appendChild(l, n[u]);
				}
				attachViewAfter(l, n) {
					const u = this.delegate.parentNode(l),
						e = this.delegate.nextSibling(l);
					for (let t = 0; t < n.length; t++) this.delegate.insertBefore(u, n[t], e);
				}
				detachView(l) {
					for (let n = 0; n < l.length; n++) {
						const u = l[n],
							e = this.delegate.parentNode(u);
						this.delegate.removeChild(e, u);
					}
				}
				destroyView(l, n) {
					for (let u = 0; u < n.length; u++) this.delegate.destroyNode(n[u]);
				}
				listen(l, n, u) {
					return this.delegate.listen(l, n, u);
				}
				listenGlobal(l, n, u) {
					return this.delegate.listen(l, n, u);
				}
				setElementProperty(l, n, u) {
					this.delegate.setProperty(l, n, u);
				}
				setElementAttribute(l, n, u) {
					const [e, t] = fe(n);
					null != u ? this.delegate.setAttribute(l, t, u, e) : this.delegate.removeAttribute(l, t, e);
				}
				setBindingDebugInfo(l, n, u) {}
				setElementClass(l, n, u) {
					u ? this.delegate.addClass(l, n) : this.delegate.removeClass(l, n);
				}
				setElementStyle(l, n, u) {
					null != u ? this.delegate.setStyle(l, n, u) : this.delegate.removeStyle(l, n);
				}
				invokeElementMethod(l, n, u) {
					l[n].apply(l, u);
				}
				setText(l, n) {
					this.delegate.setValue(l, n);
				}
				animate() {
					throw new Error('Renderer.animate is no longer supported!');
				}
			}
			function Be(l, n, u, e) {
				return new qe(l, n, u, e);
			}
			class qe {
				constructor(l, n, u, e) {
					(this._moduleType = l),
						(this._parent = n),
						(this._bootstrapComponents = u),
						(this._def = e),
						(this._destroyListeners = []),
						(this._destroyed = !1),
						(this.injector = this),
						(function(l) {
							const n = l._def,
								u = (l._providers = new Array(n.providers.length));
							for (let e = 0; e < n.providers.length; e++) {
								const t = n.providers[e];
								4096 & t.flags || (void 0 === u[e] && (u[e] = _e(l, t)));
							}
						})(this);
				}
				get(l, n = Pl.THROW_IF_NOT_FOUND, u = il.Default) {
					let e = 0;
					return u & il.SkipSelf ? (e |= 1) : u & il.Self && (e |= 4), xe(this, { token: l, tokenKey: zu(l), flags: e }, n);
				}
				get instance() {
					return this.get(this._moduleType);
				}
				get componentFactoryResolver() {
					return this.get(Gn);
				}
				destroy() {
					if (this._destroyed) throw new Error(`The ng module ${gl(this.instance.constructor)} has already been destroyed.`);
					(this._destroyed = !0),
						(function(l, n) {
							const u = l._def,
								e = new Set();
							for (let t = 0; t < u.providers.length; t++)
								if (131072 & u.providers[t].flags) {
									const n = l._providers[t];
									if (n && n !== be) {
										const l = n.ngOnDestroy;
										'function' != typeof l || e.has(n) || (l.apply(n), e.add(n));
									}
								}
						})(this),
						this._destroyListeners.forEach((l) => l());
				}
				onDestroy(l) {
					this._destroyListeners.push(l);
				}
			}
			const Ge = zu(lu),
				Ze = zu(eu),
				Qe = zu(Jn),
				We = zu(Su),
				Ke = zu(ku),
				Ye = zu(wu),
				Je = zu(Pl),
				Xe = zu(El);
			function lt(l, n, u, e, t, s, r, a) {
				const o = [];
				if (r)
					for (let c in r) {
						const [l, n] = r[c];
						o[l] = { flags: 8, name: c, nonMinifiedName: n, ns: null, securityContext: null, suffix: null };
					}
				const i = [];
				if (a) for (let c in a) i.push({ type: 1, propName: c, target: null, eventName: a[c] });
				return ut(l, (n |= 16384), u, e, t, t, s, o, i);
			}
			function nt(l, n, u, e, t) {
				return ut(-1, l, n, 0, u, e, t);
			}
			function ut(l, n, u, e, t, s, r, a, o) {
				const { matchedQueries: i, references: c, matchedQueryIds: h } = te(u);
				o || (o = []), a || (a = []), (s = bl(s));
				const d = se(r, gl(t));
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
					matchedQueries: i,
					matchedQueryIds: h,
					references: c,
					ngContentIndex: -1,
					childCount: e,
					bindings: a,
					bindingFlags: me(a),
					outputs: o,
					element: null,
					provider: { token: t, value: s, deps: d },
					text: null,
					query: null,
					ngContent: null
				};
			}
			function et(l, n) {
				return at(l, n);
			}
			function tt(l, n) {
				let u = l;
				for (; u.parent && !ne(u); ) u = u.parent;
				return ot(u.parent, Xu(u), !0, n.provider.value, n.provider.deps);
			}
			function st(l, n) {
				const u = ot(l, n.parent, (32768 & n.flags) > 0, n.provider.value, n.provider.deps);
				if (n.outputs.length)
					for (let e = 0; e < n.outputs.length; e++) {
						const t = n.outputs[e],
							s = u[t.propName];
						if (!Tn(s)) throw new Error(`@Output ${t.propName} not initialized in '${u.constructor.name}'.`);
						{
							const u = s.subscribe(rt(l, n.parent.nodeIndex, t.eventName));
							l.disposables[n.outputIndex + e] = u.unsubscribe.bind(u);
						}
					}
				return u;
			}
			function rt(l, n, u) {
				return (e) => Yu(l, n, u, e);
			}
			function at(l, n) {
				const u = (8192 & n.flags) > 0,
					e = n.provider;
				switch (201347067 & n.flags) {
					case 512:
						return ot(l, n.parent, u, e.value, e.deps);
					case 1024:
						return (function(l, n, u, e, t) {
							const s = t.length;
							switch (s) {
								case 0:
									return e();
								case 1:
									return e(ct(l, n, u, t[0]));
								case 2:
									return e(ct(l, n, u, t[0]), ct(l, n, u, t[1]));
								case 3:
									return e(ct(l, n, u, t[0]), ct(l, n, u, t[1]), ct(l, n, u, t[2]));
								default:
									const r = Array(s);
									for (let e = 0; e < s; e++) r[e] = ct(l, n, u, t[e]);
									return e(...r);
							}
						})(l, n.parent, u, e.value, e.deps);
					case 2048:
						return ct(l, n.parent, u, e.deps[0]);
					case 256:
						return e.value;
				}
			}
			function ot(l, n, u, e, t) {
				const s = t.length;
				switch (s) {
					case 0:
						return new e();
					case 1:
						return new e(ct(l, n, u, t[0]));
					case 2:
						return new e(ct(l, n, u, t[0]), ct(l, n, u, t[1]));
					case 3:
						return new e(ct(l, n, u, t[0]), ct(l, n, u, t[1]), ct(l, n, u, t[2]));
					default:
						const r = new Array(s);
						for (let e = 0; e < s; e++) r[e] = ct(l, n, u, t[e]);
						return new e(...r);
				}
			}
			const it = {};
			function ct(l, n, u, e, t = Pl.THROW_IF_NOT_FOUND) {
				if (8 & e.flags) return e.token;
				const s = l;
				2 & e.flags && (t = null);
				const r = e.tokenKey;
				r === Ye && (u = !(!n || !n.element.componentView)), n && 1 & e.flags && ((u = !1), (n = n.parent));
				let a = l;
				for (; a; ) {
					if (n)
						switch (r) {
							case Ge:
								return He(ht(a, n, u));
							case Ze:
								return ht(a, n, u).renderer;
							case Qe:
								return new Jn(Au(a, n.nodeIndex).renderElement);
							case We:
								return Au(a, n.nodeIndex).viewContainer;
							case Ke:
								if (n.element.template) return Au(a, n.nodeIndex).template;
								break;
							case Ye:
								return Ne(ht(a, n, u));
							case Je:
							case Xe:
								return Ve(a, n);
							default:
								const l = (u ? n.element.allProviders : n.element.publicProviders)[r];
								if (l) {
									let n = Nu(a, l.nodeIndex);
									return n || ((n = { instance: at(a, l) }), (a.nodes[l.nodeIndex] = n)), n.instance;
								}
						}
					(u = ne(a)), (n = Xu(a)), (a = a.parent), 4 & e.flags && (a = null);
				}
				const o = s.root.injector.get(e.token, it);
				return o !== it || t === it ? o : s.root.ngModule.injector.get(e.token, t);
			}
			function ht(l, n, u) {
				let e;
				if (u) e = Au(l, n.nodeIndex).componentView;
				else for (e = l; e.parent && !ne(e); ) e = e.parent;
				return e;
			}
			function dt(l, n, u, e, t, s) {
				if (32768 & u.flags) {
					const n = Au(l, u.parent.nodeIndex).componentView;
					2 & n.def.flags && (n.state |= 8);
				}
				if (((n.instance[u.bindings[e].name] = t), 524288 & u.flags)) {
					s = s || {};
					const n = Dn.unwrap(l.oldValues[u.bindingIndex + e]);
					s[u.bindings[e].nonMinifiedName] = new Vn(n, t, 0 != (2 & l.state));
				}
				return (l.oldValues[u.bindingIndex + e] = t), s;
			}
			function pt(l, n) {
				if (!(l.def.nodeFlags & n)) return;
				const u = l.def.nodes;
				let e = 0;
				for (let t = 0; t < u.length; t++) {
					const s = u[t];
					let r = s.parent;
					for (!r && s.flags & n && ft(l, t, s.flags & n, e++), 0 == (s.childFlags & n) && (t += s.childCount); r && 1 & r.flags && t === r.nodeIndex + r.childCount; )
						r.directChildFlags & n && (e = gt(l, r, n, e)), (r = r.parent);
				}
			}
			function gt(l, n, u, e) {
				for (let t = n.nodeIndex + 1; t <= n.nodeIndex + n.childCount; t++) {
					const n = l.def.nodes[t];
					n.flags & u && ft(l, t, n.flags & u, e++), (t += n.childCount);
				}
				return e;
			}
			function ft(l, n, u, e) {
				const t = Nu(l, n);
				if (!t) return;
				const s = t.instance;
				s &&
					(Lu.setCurrentNode(l, n),
					1048576 & u && Mu(l, 512, e) && s.ngAfterContentInit(),
					2097152 & u && s.ngAfterContentChecked(),
					4194304 & u && Mu(l, 768, e) && s.ngAfterViewInit(),
					8388608 & u && s.ngAfterViewChecked(),
					131072 & u && s.ngOnDestroy());
			}
			const mt = new kl('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => Ql });
			class bt extends E {
				constructor(l = !1) {
					super(), (this.__isAsync = l);
				}
				emit(l) {
					super.next(l);
				}
				subscribe(l, n, u) {
					let e,
						t = (l) => null,
						s = () => null;
					l && 'object' == typeof l
						? ((e = this.__isAsync
								? (n) => {
										setTimeout(() => l.next(n));
								  }
								: (n) => {
										l.next(n);
								  }),
						  l.error &&
								(t = this.__isAsync
									? (n) => {
											setTimeout(() => l.error(n));
									  }
									: (n) => {
											l.error(n);
									  }),
						  l.complete &&
								(s = this.__isAsync
									? () => {
											setTimeout(() => l.complete());
									  }
									: () => {
											l.complete();
									  }))
						: ((e = this.__isAsync
								? (n) => {
										setTimeout(() => l(n));
								  }
								: (n) => {
										l(n);
								  }),
						  n &&
								(t = this.__isAsync
									? (l) => {
											setTimeout(() => n(l));
									  }
									: (l) => {
											n(l);
									  }),
						  u &&
								(s = this.__isAsync
									? () => {
											setTimeout(() => u());
									  }
									: () => {
											u();
									  }));
					const r = super.subscribe(e, t, s);
					return l instanceof d && l.add(r), r;
				}
			}
			class yt {
				constructor() {
					(this.dirty = !0), (this._results = []), (this.changes = new bt()), (this.length = 0);
				}
				map(l) {
					return this._results.map(l);
				}
				filter(l) {
					return this._results.filter(l);
				}
				find(l) {
					return this._results.find(l);
				}
				reduce(l, n) {
					return this._results.reduce(l, n);
				}
				forEach(l) {
					this._results.forEach(l);
				}
				some(l) {
					return this._results.some(l);
				}
				toArray() {
					return this._results.slice();
				}
				[Rn()]() {
					return this._results[Rn()]();
				}
				toString() {
					return this._results.toString();
				}
				reset(l) {
					(this._results = (function l(n, u) {
						void 0 === u && (u = n);
						for (let e = 0; e < n.length; e++) {
							let t = n[e];
							Array.isArray(t) ? (u === n && (u = n.slice(0, e)), l(t, u)) : u !== n && u.push(t);
						}
						return u;
					})(l)),
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
			class wt {}
			const jt = new kl('Application Initializer'),
				vt = (() =>
					class {
						constructor(l) {
							(this.appInits = l),
								(this.initialized = !1),
								(this.done = !1),
								(this.donePromise = new Promise((l, n) => {
									(this.resolve = l), (this.reject = n);
								}));
						}
						runInitializers() {
							if (this.initialized) return;
							const l = [],
								n = () => {
									(this.done = !0), this.resolve();
								};
							if (this.appInits)
								for (let u = 0; u < this.appInits.length; u++) {
									const n = this.appInits[u]();
									On(n) && l.push(n);
								}
							Promise.all(l)
								.then(() => {
									n();
								})
								.catch((l) => {
									this.reject(l);
								}),
								0 === l.length && n(),
								(this.initialized = !0);
						}
					})(),
				xt = new kl('AppId');
			function _t() {
				return `${kt()}${kt()}${kt()}`;
			}
			function kt() {
				return String.fromCharCode(97 + Math.floor(25 * Math.random()));
			}
			const Ct = new kl('Platform Initializer'),
				St = new kl('Platform ID'),
				Et = new kl('appBootstrapListener'),
				It = (() =>
					class {
						log(l) {
							console.log(l);
						}
						warn(l) {
							console.warn(l);
						}
					})();
			function Pt() {
				throw new Error('Runtime compiler is not loaded');
			}
			const Ot = Pt,
				Tt = Pt,
				Mt = Pt,
				Rt = Pt,
				At = (() =>
					class {
						constructor() {
							(this.compileModuleSync = Ot), (this.compileModuleAsync = Tt), (this.compileModuleAndAllComponentsSync = Mt), (this.compileModuleAndAllComponentsAsync = Rt);
						}
						clearCache() {}
						clearCacheFor(l) {}
						getModuleId(l) {}
					})();
			class Nt {}
			let Dt, Ut;
			function Lt() {
				const l = wl.wtf;
				return !(!l || !(Dt = l.trace) || ((Ut = Dt.events), 0));
			}
			const Vt = Lt(),
				Ft = Vt
					? function(l, n = null) {
							return Ut.createScope(l, n);
					  }
					: (l, n) =>
							function(l, n) {
								return null;
							},
				zt = Vt
					? function(l, n) {
							return Dt.leaveScope(l, n), n;
					  }
					: (l, n) => n,
				Ht = (() => Promise.resolve(0))();
			function $t(l) {
				'undefined' == typeof Zone
					? Ht.then(() => {
							l && l.apply(null, null);
					  })
					: Zone.current.scheduleMicroTask('scheduleMicrotask', l);
			}
			class Bt {
				constructor({ enableLongStackTrace: l = !1 }) {
					if (
						((this.hasPendingMicrotasks = !1),
						(this.hasPendingMacrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new bt(!1)),
						(this.onMicrotaskEmpty = new bt(!1)),
						(this.onStable = new bt(!1)),
						(this.onError = new bt(!1)),
						'undefined' == typeof Zone)
					)
						throw new Error('In this configuration Angular requires Zone.js');
					var n;
					Zone.assertZonePatched(),
						(this._nesting = 0),
						(this._outer = this._inner = Zone.current),
						Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
						Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
						l && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
						((n = this)._inner = n._inner.fork({
							name: 'angular',
							properties: { isAngularZone: !0 },
							onInvokeTask: (l, u, e, t, s, r) => {
								try {
									return Qt(n), l.invokeTask(e, t, s, r);
								} finally {
									Wt(n);
								}
							},
							onInvoke: (l, u, e, t, s, r, a) => {
								try {
									return Qt(n), l.invoke(e, t, s, r, a);
								} finally {
									Wt(n);
								}
							},
							onHasTask: (l, u, e, t) => {
								l.hasTask(e, t),
									u === e && ('microTask' == t.change ? ((n.hasPendingMicrotasks = t.microTask), Zt(n)) : 'macroTask' == t.change && (n.hasPendingMacrotasks = t.macroTask));
							},
							onHandleError: (l, u, e, t) => (l.handleError(e, t), n.runOutsideAngular(() => n.onError.emit(t)), !1)
						}));
				}
				static isInAngularZone() {
					return !0 === Zone.current.get('isAngularZone');
				}
				static assertInAngularZone() {
					if (!Bt.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
				}
				static assertNotInAngularZone() {
					if (Bt.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
				}
				run(l, n, u) {
					return this._inner.run(l, n, u);
				}
				runTask(l, n, u, e) {
					const t = this._inner,
						s = t.scheduleEventTask('NgZoneEvent: ' + e, l, Gt, qt, qt);
					try {
						return t.runTask(s, n, u);
					} finally {
						t.cancelTask(s);
					}
				}
				runGuarded(l, n, u) {
					return this._inner.runGuarded(l, n, u);
				}
				runOutsideAngular(l) {
					return this._outer.run(l);
				}
			}
			function qt() {}
			const Gt = {};
			function Zt(l) {
				if (0 == l._nesting && !l.hasPendingMicrotasks && !l.isStable)
					try {
						l._nesting++, l.onMicrotaskEmpty.emit(null);
					} finally {
						if ((l._nesting--, !l.hasPendingMicrotasks))
							try {
								l.runOutsideAngular(() => l.onStable.emit(null));
							} finally {
								l.isStable = !0;
							}
					}
			}
			function Qt(l) {
				l._nesting++, l.isStable && ((l.isStable = !1), l.onUnstable.emit(null));
			}
			function Wt(l) {
				l._nesting--, Zt(l);
			}
			class Kt {
				constructor() {
					(this.hasPendingMicrotasks = !1),
						(this.hasPendingMacrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new bt()),
						(this.onMicrotaskEmpty = new bt()),
						(this.onStable = new bt()),
						(this.onError = new bt());
				}
				run(l) {
					return l();
				}
				runGuarded(l) {
					return l();
				}
				runOutsideAngular(l) {
					return l();
				}
				runTask(l) {
					return l();
				}
			}
			const Yt = (() =>
					class {
						constructor(l) {
							(this._ngZone = l),
								(this._pendingCount = 0),
								(this._isZoneStable = !0),
								(this._didWork = !1),
								(this._callbacks = []),
								(this.taskTrackingZone = null),
								this._watchAngularEvents(),
								l.run(() => {
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
											Bt.assertNotInAngularZone(),
												$t(() => {
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
								$t(() => {
									for (; 0 !== this._callbacks.length; ) {
										let l = this._callbacks.pop();
										clearTimeout(l.timeoutId), l.doneCb(this._didWork);
									}
									this._didWork = !1;
								});
							else {
								let l = this.getPendingTasks();
								(this._callbacks = this._callbacks.filter((n) => !n.updateCb || !n.updateCb(l) || (clearTimeout(n.timeoutId), !1))), (this._didWork = !0);
							}
						}
						getPendingTasks() {
							return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map((l) => ({ source: l.source, creationLocation: l.creationLocation, data: l.data })) : [];
						}
						addCallback(l, n, u) {
							let e = -1;
							n &&
								n > 0 &&
								(e = setTimeout(() => {
									(this._callbacks = this._callbacks.filter((l) => l.timeoutId !== e)), l(this._didWork, this.getPendingTasks());
								}, n)),
								this._callbacks.push({ doneCb: l, timeoutId: e, updateCb: u });
						}
						whenStable(l, n, u) {
							if (u && !this.taskTrackingZone)
								throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
							this.addCallback(l, n, u), this._runCallbacksIfReady();
						}
						getPendingRequestCount() {
							return this._pendingCount;
						}
						findProviders(l, n, u) {
							return [];
						}
					})(),
				Jt = (() => {
					class l {
						constructor() {
							(this._applications = new Map()), ns.addToWindow(this);
						}
						registerApplication(l, n) {
							this._applications.set(l, n);
						}
						unregisterApplication(l) {
							this._applications.delete(l);
						}
						unregisterAllApplications() {
							this._applications.clear();
						}
						getTestability(l) {
							return this._applications.get(l) || null;
						}
						getAllTestabilities() {
							return Array.from(this._applications.values());
						}
						getAllRootElements() {
							return Array.from(this._applications.keys());
						}
						findTestabilityInTree(l, n = !0) {
							return ns.findTestabilityInTree(this, l, n);
						}
					}
					return (l.ctorParameters = () => []), l;
				})();
			class Xt {
				addToWindow(l) {}
				findTestabilityInTree(l, n, u) {
					return null;
				}
			}
			let ls,
				ns = new Xt(),
				us = function(l) {
					return l instanceof Qn;
				};
			const es = new kl('AllowMultipleToken');
			class ts {
				constructor(l, n) {
					(this.name = l), (this.token = n);
				}
			}
			function ss(l, n, u = []) {
				const e = `Platform: ${n}`,
					t = new kl(e);
				return (n = []) => {
					let s = rs();
					if (!s || s.injector.get(es, !1))
						if (l) l(u.concat(n).concat({ provide: t, useValue: !0 }));
						else {
							const l = u.concat(n).concat({ provide: t, useValue: !0 });
							!(function(l) {
								if (ls && !ls.destroyed && !ls.injector.get(es, !1)) throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
								ls = l.get(as);
								const n = l.get(Ct, null);
								n && n.forEach((l) => l());
							})(Pl.create({ providers: l, name: e }));
						}
					return (function(l) {
						const n = rs();
						if (!n) throw new Error('No platform exists!');
						if (!n.injector.get(l, null)) throw new Error('A platform with a different configuration has been created. Please destroy it first.');
						return n;
					})(t);
				};
			}
			function rs() {
				return ls && !ls.destroyed ? ls : null;
			}
			const as = (() =>
				class {
					constructor(l) {
						(this._injector = l), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
					}
					bootstrapModuleFactory(l, n) {
						const u = 'noop' === (t = n ? n.ngZone : void 0) ? new Kt() : ('zone.js' === t ? void 0 : t) || new Bt({ enableLongStackTrace: nn() }),
							e = [{ provide: Bt, useValue: u }];
						var t;
						return u.run(() => {
							const n = Pl.create({ providers: e, parent: this.injector, name: l.moduleType.name }),
								t = l.create(n),
								s = t.injector.get(Jl, null);
							if (!s) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
							return (
								t.onDestroy(() => cs(this._modules, t)),
								u.runOutsideAngular(() =>
									u.onError.subscribe({
										next: (l) => {
											s.handleError(l);
										}
									})
								),
								(function(l, n, u) {
									try {
										const t = u();
										return On(t)
											? t.catch((u) => {
													throw (n.runOutsideAngular(() => l.handleError(u)), u);
											  })
											: t;
									} catch (e) {
										throw (n.runOutsideAngular(() => l.handleError(e)), e);
									}
								})(s, u, () => {
									const l = t.injector.get(vt);
									return l.runInitializers(), l.donePromise.then(() => (this._moduleDoBootstrap(t), t));
								})
							);
						});
					}
					bootstrapModule(l, n = []) {
						const u = os({}, n);
						return (function(l, n, u) {
							return l
								.get(Nt)
								.createCompiler([n])
								.compileModuleAsync(u);
						})(this.injector, u, l).then((l) => this.bootstrapModuleFactory(l, u));
					}
					_moduleDoBootstrap(l) {
						const n = l.injector.get(is);
						if (l._bootstrapComponents.length > 0) l._bootstrapComponents.forEach((l) => n.bootstrap(l));
						else {
							if (!l.instance.ngDoBootstrap)
								throw new Error(
									`The module ${gl(l.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
										'Please define one of these.'
								);
							l.instance.ngDoBootstrap(n);
						}
						this._modules.push(l);
					}
					onDestroy(l) {
						this._destroyListeners.push(l);
					}
					get injector() {
						return this._injector;
					}
					destroy() {
						if (this._destroyed) throw new Error('The platform has already been destroyed!');
						this._modules.slice().forEach((l) => l.destroy()), this._destroyListeners.forEach((l) => l()), (this._destroyed = !0);
					}
					get destroyed() {
						return this._destroyed;
					}
				})();
			function os(l, n) {
				return Array.isArray(n) ? n.reduce(os, l) : Object.assign({}, l, n);
			}
			const is = (() => {
				class l {
					constructor(l, n, u, e, t, s) {
						(this._zone = l),
							(this._console = n),
							(this._injector = u),
							(this._exceptionHandler = e),
							(this._componentFactoryResolver = t),
							(this._initStatus = s),
							(this._bootstrapListeners = []),
							(this._views = []),
							(this._runningTick = !1),
							(this._enforceNoNewChanges = !1),
							(this._stable = !0),
							(this.componentTypes = []),
							(this.components = []),
							(this._enforceNoNewChanges = nn()),
							this._zone.onMicrotaskEmpty.subscribe({
								next: () => {
									this._zone.run(() => {
										this.tick();
									});
								}
							});
						const r = new v((l) => {
								(this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
									this._zone.runOutsideAngular(() => {
										l.next(this._stable), l.complete();
									});
							}),
							a = new v((l) => {
								let n;
								this._zone.runOutsideAngular(() => {
									n = this._zone.onStable.subscribe(() => {
										Bt.assertNotInAngularZone(),
											$t(() => {
												this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || ((this._stable = !0), l.next(!0));
											});
									});
								});
								const u = this._zone.onUnstable.subscribe(() => {
									Bt.assertInAngularZone(),
										this._stable &&
											((this._stable = !1),
											this._zone.runOutsideAngular(() => {
												l.next(!1);
											}));
								});
								return () => {
									n.unsubscribe(), u.unsubscribe();
								};
							});
						this.isStable = (function(...l) {
							let n = Number.POSITIVE_INFINITY,
								u = null,
								e = l[l.length - 1];
							return (
								P(e) ? ((u = l.pop()), l.length > 1 && 'number' == typeof l[l.length - 1] && (n = l.pop())) : 'number' == typeof e && (n = l.pop()),
								null === u && 1 === l.length && l[0] instanceof v ? l[0] : Q(n)(W(l, u))
							);
						})(
							r,
							a.pipe((l) =>
								K()(
									(function(l, n) {
										return function(n) {
											let u;
											u =
												'function' == typeof l
													? l
													: function() {
															return l;
													  };
											const e = Object.create(n, ll);
											return (e.source = n), (e.subjectFactory = u), e;
										};
									})(ul)(l)
								)
							)
						);
					}
					bootstrap(l, n) {
						if (!this._initStatus.done)
							throw new Error('Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.');
						let u;
						(u = l instanceof Hn ? l : this._componentFactoryResolver.resolveComponentFactory(l)), this.componentTypes.push(u.componentType);
						const e = us(u) ? null : this._injector.get(Wn),
							t = u.create(Pl.NULL, [], n || u.selector, e);
						t.onDestroy(() => {
							this._unloadComponent(t);
						});
						const s = t.injector.get(Yt, null);
						return (
							s && t.injector.get(Jt).registerApplication(t.location.nativeElement, s),
							this._loadComponent(t),
							nn() && this._console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.'),
							t
						);
					}
					tick() {
						if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
						const n = l._tickScope();
						try {
							this._runningTick = !0;
							for (let l of this._views) l.detectChanges();
							if (this._enforceNoNewChanges) for (let l of this._views) l.checkNoChanges();
						} catch (u) {
							this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(u));
						} finally {
							(this._runningTick = !1), zt(n);
						}
					}
					attachView(l) {
						const n = l;
						this._views.push(n), n.attachToAppRef(this);
					}
					detachView(l) {
						const n = l;
						cs(this._views, n), n.detachFromAppRef();
					}
					_loadComponent(l) {
						this.attachView(l.hostView),
							this.tick(),
							this.components.push(l),
							this._injector
								.get(Et, [])
								.concat(this._bootstrapListeners)
								.forEach((n) => n(l));
					}
					_unloadComponent(l) {
						this.detachView(l.hostView), cs(this.components, l);
					}
					ngOnDestroy() {
						this._views.slice().forEach((l) => l.destroy());
					}
					get viewCount() {
						return this._views.length;
					}
				}
				return (l._tickScope = Ft('ApplicationRef#tick()')), l;
			})();
			function cs(l, n) {
				const u = l.indexOf(n);
				u > -1 && l.splice(u, 1);
			}
			class hs {}
			const ds = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
				ps = (() =>
					class {
						constructor(l, n) {
							(this._compiler = l), (this._config = n || ds);
						}
						load(l) {
							return this._compiler instanceof At ? this.loadFactory(l) : this.loadAndCompile(l);
						}
						loadAndCompile(l) {
							let [n, e] = l.split('#');
							return (
								void 0 === e && (e = 'default'),
								u('crnd')(n)
									.then((l) => l[e])
									.then((l) => gs(l, n, e))
									.then((l) => this._compiler.compileModuleAsync(l))
							);
						}
						loadFactory(l) {
							let [n, e] = l.split('#'),
								t = 'NgFactory';
							return (
								void 0 === e && ((e = 'default'), (t = '')),
								u('crnd')(this._config.factoryPathPrefix + n + this._config.factoryPathSuffix)
									.then((l) => l[e + t])
									.then((l) => gs(l, n, e))
							);
						}
					})();
			function gs(l, n, u) {
				if (!l) throw new Error(`Cannot find '${u}' in '${n}'`);
				return l;
			}
			class fs {
				constructor(l, n) {
					(this.name = l), (this.callback = n);
				}
			}
			class ms {
				constructor(l, n, u) {
					(this.listeners = []), (this.parent = null), (this._debugContext = u), (this.nativeNode = l), n && n instanceof bs && n.addChild(this);
				}
				get injector() {
					return this._debugContext.injector;
				}
				get componentInstance() {
					return this._debugContext.component;
				}
				get context() {
					return this._debugContext.context;
				}
				get references() {
					return this._debugContext.references;
				}
				get providerTokens() {
					return this._debugContext.providerTokens;
				}
			}
			class bs extends ms {
				constructor(l, n, u) {
					super(l, n, u), (this.properties = {}), (this.attributes = {}), (this.classes = {}), (this.styles = {}), (this.childNodes = []), (this.nativeElement = l);
				}
				addChild(l) {
					l && (this.childNodes.push(l), (l.parent = this));
				}
				removeChild(l) {
					const n = this.childNodes.indexOf(l);
					-1 !== n && ((l.parent = null), this.childNodes.splice(n, 1));
				}
				insertChildrenAfter(l, n) {
					const u = this.childNodes.indexOf(l);
					-1 !== u &&
						(this.childNodes.splice(u + 1, 0, ...n),
						n.forEach((n) => {
							n.parent && n.parent.removeChild(n), (l.parent = this);
						}));
				}
				insertBefore(l, n) {
					const u = this.childNodes.indexOf(l);
					-1 === u ? this.addChild(n) : (n.parent && n.parent.removeChild(n), (n.parent = this), this.childNodes.splice(u, 0, n));
				}
				query(l) {
					return this.queryAll(l)[0] || null;
				}
				queryAll(l) {
					const n = [];
					return (
						(function l(n, u, e) {
							n.childNodes.forEach((n) => {
								n instanceof bs && (u(n) && e.push(n), l(n, u, e));
							});
						})(this, l, n),
						n
					);
				}
				queryAllNodes(l) {
					const n = [];
					return (
						(function l(n, u, e) {
							n instanceof bs &&
								n.childNodes.forEach((n) => {
									u(n) && e.push(n), n instanceof bs && l(n, u, e);
								});
						})(this, l, n),
						n
					);
				}
				get children() {
					return this.childNodes.filter((l) => l instanceof bs);
				}
				triggerEventHandler(l, n) {
					this.listeners.forEach((u) => {
						u.name == l && u.callback(n);
					});
				}
			}
			const ys = new Map(),
				ws = function(l) {
					return ys.get(l) || null;
				};
			function js(l) {
				ys.set(l.nativeNode, l);
			}
			const vs = ss(null, 'core', [{ provide: St, useValue: 'unknown' }, { provide: as, deps: [Pl] }, { provide: Jt, deps: [] }, { provide: It, deps: [] }]),
				xs = new kl('LocaleId');
			function _s() {
				return xu;
			}
			function ks() {
				return _u;
			}
			function Cs(l) {
				return l || 'en-US';
			}
			function Ss(l) {
				let n = [];
				return (
					l.onStable.subscribe(() => {
						for (; n.length; ) n.pop()();
					}),
					function(l) {
						n.push(l);
					}
				);
			}
			const Es = (() =>
				class {
					constructor(l) {}
				})();
			function Is(l, n, u, e, t, s) {
				l |= 1;
				const { matchedQueries: r, references: a, matchedQueryIds: o } = te(n);
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
					matchedQueries: r,
					matchedQueryIds: o,
					references: a,
					ngContentIndex: u,
					childCount: e,
					bindings: [],
					bindingFlags: 0,
					outputs: [],
					element: {
						ns: null,
						name: null,
						attrs: null,
						template: s ? oe(s) : null,
						componentProvider: null,
						componentView: null,
						componentRendererType: null,
						publicProviders: null,
						allProviders: null,
						handleEvent: t || Vu
					},
					provider: null,
					text: null,
					query: null,
					ngContent: null
				};
			}
			function Ps(l, n, u, e, t, s, r = [], a, o, i, c, h) {
				i || (i = Vu);
				const { matchedQueries: d, references: p, matchedQueryIds: g } = te(u);
				let f = null,
					m = null;
				s && ([f, m] = fe(s)), (a = a || []);
				const b = new Array(a.length);
				for (let j = 0; j < a.length; j++) {
					const [l, n, u] = a[j],
						[e, t] = fe(n);
					let s = void 0,
						r = void 0;
					switch (15 & l) {
						case 4:
							r = u;
							break;
						case 1:
						case 8:
							s = u;
					}
					b[j] = { flags: l, ns: e, name: t, nonMinifiedName: t, securityContext: s, suffix: r };
				}
				o = o || [];
				const y = new Array(o.length);
				for (let j = 0; j < o.length; j++) {
					const [l, n] = o[j];
					y[j] = { type: 0, target: l, eventName: n, propName: null };
				}
				const w = (r = r || []).map(([l, n]) => {
					const [u, e] = fe(l);
					return [u, e, n];
				});
				return (
					(h = (function(l) {
						if (l && l.id === Hu) {
							const n = (null != l.encapsulation && l.encapsulation !== Zl.None) || l.styles.length || Object.keys(l.data).length;
							l.id = n ? `c${qu++}` : $u;
						}
						return l && l.id === $u && (l = null), l || null;
					})(h)),
					c && (n |= 33554432),
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
						matchedQueries: d,
						matchedQueryIds: g,
						references: p,
						ngContentIndex: e,
						childCount: t,
						bindings: b,
						bindingFlags: me(b),
						outputs: y,
						element: {
							ns: f,
							name: m,
							attrs: w,
							template: null,
							componentProvider: null,
							componentView: c || null,
							componentRendererType: h,
							publicProviders: null,
							allProviders: null,
							handleEvent: i || Vu
						},
						provider: null,
						text: null,
						query: null,
						ngContent: null
					}
				);
			}
			function Os(l, n, u) {
				const e = u.element,
					t = l.root.selectorOrNode,
					s = l.renderer;
				let r;
				if (l.parent || !t) {
					r = e.name ? s.createElement(e.name, e.ns) : s.createComment('');
					const t = re(l, n, u);
					t && s.appendChild(t, r);
				} else r = s.selectRootElement(t, !!e.componentRendererType && e.componentRendererType.encapsulation === Zl.ShadowDom);
				if (e.attrs)
					for (let a = 0; a < e.attrs.length; a++) {
						const [l, n, u] = e.attrs[a];
						s.setAttribute(r, n, u, l);
					}
				return r;
			}
			function Ts(l, n, u, e) {
				for (let r = 0; r < u.outputs.length; r++) {
					const a = u.outputs[r],
						o = Ms(l, u.nodeIndex, ((s = a.eventName), (t = a.target) ? `${t}:${s}` : s));
					let i = a.target,
						c = l;
					'component' === a.target && ((i = null), (c = n));
					const h = c.renderer.listen(i || e, a.eventName, o);
					l.disposables[u.outputIndex + r] = h;
				}
				var t, s;
			}
			function Ms(l, n, u) {
				return (e) => Yu(l, n, u, e);
			}
			function Rs(l, n, u, e) {
				if (!Zu(l, n, u, e)) return !1;
				const t = n.bindings[u],
					s = Au(l, n.nodeIndex),
					r = s.renderElement,
					a = t.name;
				switch (15 & t.flags) {
					case 1:
						!(function(l, n, u, e, t, s) {
							const r = n.securityContext;
							let a = r ? l.root.sanitizer.sanitize(r, s) : s;
							a = null != a ? a.toString() : null;
							const o = l.renderer;
							null != s ? o.setAttribute(u, t, a, e) : o.removeAttribute(u, t, e);
						})(l, t, r, t.ns, a, e);
						break;
					case 2:
						!(function(l, n, u, e) {
							const t = l.renderer;
							e ? t.addClass(n, u) : t.removeClass(n, u);
						})(l, r, a, e);
						break;
					case 4:
						!(function(l, n, u, e, t) {
							let s = l.root.sanitizer.sanitize(kn.STYLE, t);
							if (null != s) {
								s = s.toString();
								const l = n.suffix;
								null != l && (s += l);
							} else s = null;
							const r = l.renderer;
							null != s ? r.setStyle(u, e, s) : r.removeStyle(u, e);
						})(l, t, r, a, e);
						break;
					case 8:
						!(function(l, n, u, e, t) {
							const s = n.securityContext;
							let r = s ? l.root.sanitizer.sanitize(s, t) : t;
							l.renderer.setProperty(u, e, r);
						})(33554432 & n.flags && 32 & t.flags ? s.componentView : l, t, r, a, e);
				}
				return !0;
			}
			function As(l, n, u) {
				let e = [];
				for (let t in u) e.push({ propName: t, bindingType: u[t] });
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
					query: { id: n, filterId: ee(n), bindings: e },
					ngContent: null
				};
			}
			function Ns(l) {
				const n = l.def.nodeMatchedQueries;
				for (; l.parent && ue(l); ) {
					let u = l.parentNodeDef;
					l = l.parent;
					const e = u.nodeIndex + u.childCount;
					for (let t = 0; t <= e; t++) {
						const e = l.def.nodes[t];
						67108864 & e.flags && 536870912 & e.flags && (e.query.filterId & n) === e.query.filterId && Uu(l, t).setDirty(),
							(!(1 & e.flags && t + e.childCount < u.nodeIndex) && 67108864 & e.childFlags && 536870912 & e.childFlags) || (t += e.childCount);
					}
				}
				if (134217728 & l.def.nodeFlags)
					for (let u = 0; u < l.def.nodes.length; u++) {
						const n = l.def.nodes[u];
						134217728 & n.flags && 536870912 & n.flags && Uu(l, u).setDirty(), (u += n.childCount);
					}
			}
			function Ds(l, n) {
				const u = Uu(l, n.nodeIndex);
				if (!u.dirty) return;
				let e,
					t = void 0;
				if (67108864 & n.flags) {
					const u = n.parent.parent;
					(t = Us(l, u.nodeIndex, u.nodeIndex + u.childCount, n.query, [])), (e = Nu(l, n.parent.nodeIndex).instance);
				} else 134217728 & n.flags && ((t = Us(l, 0, l.def.nodes.length - 1, n.query, [])), (e = l.component));
				u.reset(t);
				const s = n.query.bindings;
				let r = !1;
				for (let a = 0; a < s.length; a++) {
					const l = s[a];
					let n;
					switch (l.bindingType) {
						case 0:
							n = u.first;
							break;
						case 1:
							(n = u), (r = !0);
					}
					e[l.propName] = n;
				}
				r && u.notifyOnChanges();
			}
			function Us(l, n, u, e, t) {
				for (let s = n; s <= u; s++) {
					const n = l.def.nodes[s],
						u = n.matchedQueries[e.id];
					if ((null != u && t.push(Ls(l, n, u)), 1 & n.flags && n.element.template && (n.element.template.nodeMatchedQueries & e.filterId) === e.filterId)) {
						const u = Au(l, s);
						if (((n.childMatchedQueries & e.filterId) === e.filterId && (Us(l, s + 1, s + n.childCount, e, t), (s += n.childCount)), 16777216 & n.flags)) {
							const l = u.viewContainer._embeddedViews;
							for (let n = 0; n < l.length; n++) {
								const s = l[n],
									r = Ju(s);
								r && r === u && Us(s, 0, s.def.nodes.length - 1, e, t);
							}
						}
						const r = u.template._projectedViews;
						if (r)
							for (let l = 0; l < r.length; l++) {
								const n = r[l];
								Us(n, 0, n.def.nodes.length - 1, e, t);
							}
					}
					(n.childMatchedQueries & e.filterId) !== e.filterId && (s += n.childCount);
				}
				return t;
			}
			function Ls(l, n, u) {
				if (null != u)
					switch (u) {
						case 1:
							return Au(l, n.nodeIndex).renderElement;
						case 0:
							return new Jn(Au(l, n.nodeIndex).renderElement);
						case 2:
							return Au(l, n.nodeIndex).template;
						case 3:
							return Au(l, n.nodeIndex).viewContainer;
						case 4:
							return Nu(l, n.nodeIndex).instance;
					}
			}
			function Vs(l, n) {
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
			function Fs(l, n, u) {
				const e = re(l, n, u);
				e && he(l, u.ngContent.index, 1, e, null, void 0);
			}
			function zs(l, n) {
				const u = Object.keys(n),
					e = u.length,
					t = new Array(e);
				for (let s = 0; s < e; s++) {
					const l = u[s];
					t[n[l]] = l;
				}
				return (function(l, n, u) {
					const e = new Array(u.length);
					for (let t = 0; t < u.length; t++) {
						const l = u[t];
						e[t] = { flags: 8, name: l, ns: null, nonMinifiedName: l, securityContext: null, suffix: null };
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
						bindingFlags: me(e),
						outputs: [],
						element: null,
						provider: null,
						text: null,
						query: null,
						ngContent: null
					};
				})(0, l, t);
			}
			function Hs(l, n, u) {
				const e = new Array(u.length - 1);
				for (let t = 1; t < u.length; t++) e[t - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: u[t] };
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
			function $s(l, n, u) {
				let e;
				const t = l.renderer;
				e = t.createText(u.text.prefix);
				const s = re(l, n, u);
				return s && t.appendChild(s, e), { renderText: e };
			}
			function Bs(l, n) {
				return (null != l ? l.toString() : '') + n.suffix;
			}
			function qs(l, n, u, e) {
				let t = 0,
					s = 0,
					r = 0,
					a = 0,
					o = 0,
					i = null,
					c = null,
					h = !1,
					d = !1,
					p = null;
				for (let g = 0; g < n.length; g++) {
					const l = n[g];
					if (((l.nodeIndex = g), (l.parent = i), (l.bindingIndex = t), (l.outputIndex = s), (l.renderParent = c), (r |= l.flags), (o |= l.matchedQueryIds), l.element)) {
						const n = l.element;
						(n.publicProviders = i ? i.element.publicProviders : Object.create(null)),
							(n.allProviders = n.publicProviders),
							(h = !1),
							(d = !1),
							l.element.template && (o |= l.element.template.nodeMatchedQueries);
					}
					if ((Zs(i, l, n.length), (t += l.bindings.length), (s += l.outputs.length), !c && 3 & l.flags && (p = l), 20224 & l.flags)) {
						h || ((h = !0), (i.element.publicProviders = Object.create(i.element.publicProviders)), (i.element.allProviders = i.element.publicProviders));
						const n = 0 != (32768 & l.flags);
						0 == (8192 & l.flags) || n
							? (i.element.publicProviders[zu(l.provider.token)] = l)
							: (d || ((d = !0), (i.element.allProviders = Object.create(i.element.publicProviders))), (i.element.allProviders[zu(l.provider.token)] = l)),
							n && (i.element.componentProvider = l);
					}
					if (
						(i
							? ((i.childFlags |= l.flags),
							  (i.directChildFlags |= l.flags),
							  (i.childMatchedQueries |= l.matchedQueryIds),
							  l.element && l.element.template && (i.childMatchedQueries |= l.element.template.nodeMatchedQueries))
							: (a |= l.flags),
						l.childCount > 0)
					)
						(i = l), Gs(l) || (c = l);
					else
						for (; i && g === i.nodeIndex + i.childCount; ) {
							const l = i.parent;
							l && ((l.childFlags |= i.childFlags), (l.childMatchedQueries |= i.childMatchedQueries)), (c = (i = l) && Gs(i) ? i.renderParent : i);
						}
				}
				return {
					factory: null,
					nodeFlags: r,
					rootNodeFlags: a,
					nodeMatchedQueries: o,
					flags: l,
					nodes: n,
					updateDirectives: u || Vu,
					updateRenderer: e || Vu,
					handleEvent: (l, u, e, t) => n[u].element.handleEvent(l, e, t),
					bindingCount: t,
					outputCount: s,
					lastRenderRootNode: p
				};
			}
			function Gs(l) {
				return 0 != (1 & l.flags) && null === l.element.name;
			}
			function Zs(l, n, u) {
				const e = n.element && n.element.template;
				if (e) {
					if (!e.lastRenderRootNode) throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
					if (e.lastRenderRootNode && 16777216 & e.lastRenderRootNode.flags)
						throw new Error(`Illegal State: Last root node of a template can't have embedded views, at index ${n.nodeIndex}!`);
				}
				if (20224 & n.flags && 0 == (1 & (l ? l.flags : 0)))
					throw new Error(`Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${n.nodeIndex}!`);
				if (n.query) {
					if (67108864 & n.flags && (!l || 0 == (16384 & l.flags))) throw new Error(`Illegal State: Content Query nodes need to be children of directives, at index ${n.nodeIndex}!`);
					if (134217728 & n.flags && l) throw new Error(`Illegal State: View Query nodes have to be top level nodes, at index ${n.nodeIndex}!`);
				}
				if (n.childCount) {
					const e = l ? l.nodeIndex + l.childCount : u - 1;
					if (n.nodeIndex <= e && n.nodeIndex + n.childCount > e) throw new Error(`Illegal State: childCount of node leads outside of parent, at index ${n.nodeIndex}!`);
				}
			}
			function Qs(l, n, u, e) {
				const t = Ys(l.root, l.renderer, l, n, u);
				return Js(t, l.component, e), Xs(t), t;
			}
			function Ws(l, n, u) {
				const e = Ys(l, l.renderer, null, null, n);
				return Js(e, u, u), Xs(e), e;
			}
			function Ks(l, n, u, e) {
				const t = n.element.componentRendererType;
				let s;
				return (s = t ? l.root.rendererFactory.createRenderer(e, t) : l.root.renderer), Ys(l.root, s, l, n.element.componentProvider, u);
			}
			function Ys(l, n, u, e, t) {
				const s = new Array(t.nodes.length),
					r = t.outputCount ? new Array(t.outputCount) : null;
				return {
					def: t,
					parent: u,
					viewContainerParent: null,
					parentNodeDef: e,
					context: null,
					component: null,
					nodes: s,
					state: 13,
					root: l,
					renderer: n,
					oldValues: new Array(t.bindingCount),
					disposables: r,
					initIndex: -1
				};
			}
			function Js(l, n, u) {
				(l.component = n), (l.context = u);
			}
			function Xs(l) {
				let n;
				ne(l) && (n = Au(l.parent, l.parentNodeDef.parent.nodeIndex).renderElement);
				const u = l.def,
					e = l.nodes;
				for (let t = 0; t < u.nodes.length; t++) {
					const s = u.nodes[t];
					let r;
					switch ((Lu.setCurrentNode(l, t), 201347067 & s.flags)) {
						case 1:
							const u = Os(l, n, s);
							let a = void 0;
							if (33554432 & s.flags) {
								const n = oe(s.element.componentView);
								a = Lu.createComponentView(l, s, n, u);
							}
							Ts(l, a, s, u),
								(r = { renderElement: u, componentView: a, viewContainer: null, template: s.element.template ? Ue(l, s) : void 0 }),
								16777216 & s.flags && (r.viewContainer = Re(l, s, r));
							break;
						case 2:
							r = $s(l, n, s);
							break;
						case 512:
						case 1024:
						case 2048:
						case 256:
							(r = e[t]) || 4096 & s.flags || (r = { instance: et(l, s) });
							break;
						case 16:
							r = { instance: tt(l, s) };
							break;
						case 16384:
							(r = e[t]) || (r = { instance: st(l, s) }), 32768 & s.flags && Js(Au(l, s.parent.nodeIndex).componentView, r.instance, r.instance);
							break;
						case 32:
						case 64:
						case 128:
							r = { value: void 0 };
							break;
						case 67108864:
						case 134217728:
							r = new yt();
							break;
						case 8:
							Fs(l, n, s), (r = void 0);
					}
					e[t] = r;
				}
				or(l, ar.CreateViewNodes), dr(l, 201326592, 268435456, 0);
			}
			function lr(l) {
				er(l), Lu.updateDirectives(l, 1), ir(l, ar.CheckNoChanges), Lu.updateRenderer(l, 1), or(l, ar.CheckNoChanges), (l.state &= -97);
			}
			function nr(l) {
				1 & l.state ? ((l.state &= -2), (l.state |= 2)) : (l.state &= -3), Tu(l, 0, 256), er(l), Lu.updateDirectives(l, 0), ir(l, ar.CheckAndUpdate), dr(l, 67108864, 536870912, 0);
				let n = Tu(l, 256, 512);
				pt(l, 2097152 | (n ? 1048576 : 0)),
					Lu.updateRenderer(l, 0),
					or(l, ar.CheckAndUpdate),
					dr(l, 134217728, 536870912, 0),
					pt(l, 8388608 | ((n = Tu(l, 512, 768)) ? 4194304 : 0)),
					2 & l.def.flags && (l.state &= -9),
					(l.state &= -97),
					Tu(l, 768, 1024);
			}
			function ur(l, n, u, e, t, s, r, a, o, i, c, h, d) {
				return 0 === u
					? (function(l, n, u, e, t, s, r, a, o, i, c, h) {
							switch (201347067 & n.flags) {
								case 1:
									return (function(l, n, u, e, t, s, r, a, o, i, c, h) {
										const d = n.bindings.length;
										let p = !1;
										return (
											d > 0 && Rs(l, n, 0, u) && (p = !0),
											d > 1 && Rs(l, n, 1, e) && (p = !0),
											d > 2 && Rs(l, n, 2, t) && (p = !0),
											d > 3 && Rs(l, n, 3, s) && (p = !0),
											d > 4 && Rs(l, n, 4, r) && (p = !0),
											d > 5 && Rs(l, n, 5, a) && (p = !0),
											d > 6 && Rs(l, n, 6, o) && (p = !0),
											d > 7 && Rs(l, n, 7, i) && (p = !0),
											d > 8 && Rs(l, n, 8, c) && (p = !0),
											d > 9 && Rs(l, n, 9, h) && (p = !0),
											p
										);
									})(l, n, u, e, t, s, r, a, o, i, c, h);
								case 2:
									return (function(l, n, u, e, t, s, r, a, o, i, c, h) {
										let d = !1;
										const p = n.bindings,
											g = p.length;
										if (
											(g > 0 && Zu(l, n, 0, u) && (d = !0),
											g > 1 && Zu(l, n, 1, e) && (d = !0),
											g > 2 && Zu(l, n, 2, t) && (d = !0),
											g > 3 && Zu(l, n, 3, s) && (d = !0),
											g > 4 && Zu(l, n, 4, r) && (d = !0),
											g > 5 && Zu(l, n, 5, a) && (d = !0),
											g > 6 && Zu(l, n, 6, o) && (d = !0),
											g > 7 && Zu(l, n, 7, i) && (d = !0),
											g > 8 && Zu(l, n, 8, c) && (d = !0),
											g > 9 && Zu(l, n, 9, h) && (d = !0),
											d)
										) {
											let d = n.text.prefix;
											g > 0 && (d += Bs(u, p[0])),
												g > 1 && (d += Bs(e, p[1])),
												g > 2 && (d += Bs(t, p[2])),
												g > 3 && (d += Bs(s, p[3])),
												g > 4 && (d += Bs(r, p[4])),
												g > 5 && (d += Bs(a, p[5])),
												g > 6 && (d += Bs(o, p[6])),
												g > 7 && (d += Bs(i, p[7])),
												g > 8 && (d += Bs(c, p[8])),
												g > 9 && (d += Bs(h, p[9]));
											const f = Ru(l, n.nodeIndex).renderText;
											l.renderer.setValue(f, d);
										}
										return d;
									})(l, n, u, e, t, s, r, a, o, i, c, h);
								case 16384:
									return (function(l, n, u, e, t, s, r, a, o, i, c, h) {
										const d = Nu(l, n.nodeIndex),
											p = d.instance;
										let g = !1,
											f = void 0;
										const m = n.bindings.length;
										return (
											m > 0 && Gu(l, n, 0, u) && ((g = !0), (f = dt(l, d, n, 0, u, f))),
											m > 1 && Gu(l, n, 1, e) && ((g = !0), (f = dt(l, d, n, 1, e, f))),
											m > 2 && Gu(l, n, 2, t) && ((g = !0), (f = dt(l, d, n, 2, t, f))),
											m > 3 && Gu(l, n, 3, s) && ((g = !0), (f = dt(l, d, n, 3, s, f))),
											m > 4 && Gu(l, n, 4, r) && ((g = !0), (f = dt(l, d, n, 4, r, f))),
											m > 5 && Gu(l, n, 5, a) && ((g = !0), (f = dt(l, d, n, 5, a, f))),
											m > 6 && Gu(l, n, 6, o) && ((g = !0), (f = dt(l, d, n, 6, o, f))),
											m > 7 && Gu(l, n, 7, i) && ((g = !0), (f = dt(l, d, n, 7, i, f))),
											m > 8 && Gu(l, n, 8, c) && ((g = !0), (f = dt(l, d, n, 8, c, f))),
											m > 9 && Gu(l, n, 9, h) && ((g = !0), (f = dt(l, d, n, 9, h, f))),
											f && p.ngOnChanges(f),
											65536 & n.flags && Mu(l, 256, n.nodeIndex) && p.ngOnInit(),
											262144 & n.flags && p.ngDoCheck(),
											g
										);
									})(l, n, u, e, t, s, r, a, o, i, c, h);
								case 32:
								case 64:
								case 128:
									return (function(l, n, u, e, t, s, r, a, o, i, c, h) {
										const d = n.bindings;
										let p = !1;
										const g = d.length;
										if (
											(g > 0 && Zu(l, n, 0, u) && (p = !0),
											g > 1 && Zu(l, n, 1, e) && (p = !0),
											g > 2 && Zu(l, n, 2, t) && (p = !0),
											g > 3 && Zu(l, n, 3, s) && (p = !0),
											g > 4 && Zu(l, n, 4, r) && (p = !0),
											g > 5 && Zu(l, n, 5, a) && (p = !0),
											g > 6 && Zu(l, n, 6, o) && (p = !0),
											g > 7 && Zu(l, n, 7, i) && (p = !0),
											g > 8 && Zu(l, n, 8, c) && (p = !0),
											g > 9 && Zu(l, n, 9, h) && (p = !0),
											p)
										) {
											const p = Du(l, n.nodeIndex);
											let f;
											switch (201347067 & n.flags) {
												case 32:
													(f = new Array(d.length)),
														g > 0 && (f[0] = u),
														g > 1 && (f[1] = e),
														g > 2 && (f[2] = t),
														g > 3 && (f[3] = s),
														g > 4 && (f[4] = r),
														g > 5 && (f[5] = a),
														g > 6 && (f[6] = o),
														g > 7 && (f[7] = i),
														g > 8 && (f[8] = c),
														g > 9 && (f[9] = h);
													break;
												case 64:
													(f = {}),
														g > 0 && (f[d[0].name] = u),
														g > 1 && (f[d[1].name] = e),
														g > 2 && (f[d[2].name] = t),
														g > 3 && (f[d[3].name] = s),
														g > 4 && (f[d[4].name] = r),
														g > 5 && (f[d[5].name] = a),
														g > 6 && (f[d[6].name] = o),
														g > 7 && (f[d[7].name] = i),
														g > 8 && (f[d[8].name] = c),
														g > 9 && (f[d[9].name] = h);
													break;
												case 128:
													const l = u;
													switch (g) {
														case 1:
															f = l.transform(u);
															break;
														case 2:
															f = l.transform(e);
															break;
														case 3:
															f = l.transform(e, t);
															break;
														case 4:
															f = l.transform(e, t, s);
															break;
														case 5:
															f = l.transform(e, t, s, r);
															break;
														case 6:
															f = l.transform(e, t, s, r, a);
															break;
														case 7:
															f = l.transform(e, t, s, r, a, o);
															break;
														case 8:
															f = l.transform(e, t, s, r, a, o, i);
															break;
														case 9:
															f = l.transform(e, t, s, r, a, o, i, c);
															break;
														case 10:
															f = l.transform(e, t, s, r, a, o, i, c, h);
													}
											}
											p.value = f;
										}
										return p;
									})(l, n, u, e, t, s, r, a, o, i, c, h);
								default:
									throw 'unreachable';
							}
					  })(l, n, e, t, s, r, a, o, i, c, h, d)
					: (function(l, n, u) {
							switch (201347067 & n.flags) {
								case 1:
									return (function(l, n, u) {
										let e = !1;
										for (let t = 0; t < u.length; t++) Rs(l, n, t, u[t]) && (e = !0);
										return e;
									})(l, n, u);
								case 2:
									return (function(l, n, u) {
										const e = n.bindings;
										let t = !1;
										for (let s = 0; s < u.length; s++) Zu(l, n, s, u[s]) && (t = !0);
										if (t) {
											let t = '';
											for (let l = 0; l < u.length; l++) t += Bs(u[l], e[l]);
											t = n.text.prefix + t;
											const s = Ru(l, n.nodeIndex).renderText;
											l.renderer.setValue(s, t);
										}
										return t;
									})(l, n, u);
								case 16384:
									return (function(l, n, u) {
										const e = Nu(l, n.nodeIndex),
											t = e.instance;
										let s = !1,
											r = void 0;
										for (let a = 0; a < u.length; a++) Gu(l, n, a, u[a]) && ((s = !0), (r = dt(l, e, n, a, u[a], r)));
										return r && t.ngOnChanges(r), 65536 & n.flags && Mu(l, 256, n.nodeIndex) && t.ngOnInit(), 262144 & n.flags && t.ngDoCheck(), s;
									})(l, n, u);
								case 32:
								case 64:
								case 128:
									return (function(l, n, u) {
										const e = n.bindings;
										let t = !1;
										for (let s = 0; s < u.length; s++) Zu(l, n, s, u[s]) && (t = !0);
										if (t) {
											const t = Du(l, n.nodeIndex);
											let s;
											switch (201347067 & n.flags) {
												case 32:
													s = u;
													break;
												case 64:
													s = {};
													for (let n = 0; n < u.length; n++) s[e[n].name] = u[n];
													break;
												case 128:
													const l = u[0],
														t = u.slice(1);
													s = l.transform(...t);
											}
											t.value = s;
										}
										return t;
									})(l, n, u);
								default:
									throw 'unreachable';
							}
					  })(l, n, e);
			}
			function er(l) {
				const n = l.def;
				if (4 & n.nodeFlags)
					for (let u = 0; u < n.nodes.length; u++) {
						const e = n.nodes[u];
						if (4 & e.flags) {
							const n = Au(l, u).template._projectedViews;
							if (n)
								for (let u = 0; u < n.length; u++) {
									const e = n[u];
									(e.state |= 32), Ku(e, l);
								}
						} else 0 == (4 & e.childFlags) && (u += e.childCount);
					}
			}
			function tr(l, n, u, e, t, s, r, a, o, i, c, h, d) {
				return (
					0 === u
						? (function(l, n, u, e, t, s, r, a, o, i, c, h) {
								const d = n.bindings.length;
								d > 0 && Qu(l, n, 0, u),
									d > 1 && Qu(l, n, 1, e),
									d > 2 && Qu(l, n, 2, t),
									d > 3 && Qu(l, n, 3, s),
									d > 4 && Qu(l, n, 4, r),
									d > 5 && Qu(l, n, 5, a),
									d > 6 && Qu(l, n, 6, o),
									d > 7 && Qu(l, n, 7, i),
									d > 8 && Qu(l, n, 8, c),
									d > 9 && Qu(l, n, 9, h);
						  })(l, n, e, t, s, r, a, o, i, c, h, d)
						: (function(l, n, u) {
								for (let e = 0; e < u.length; e++) Qu(l, n, e, u[e]);
						  })(l, n, e),
					!1
				);
			}
			function sr(l, n) {
				if (Uu(l, n.nodeIndex).dirty) throw Iu(Lu.createDebugContext(l, n.nodeIndex), `Query ${n.query.id} not dirty`, `Query ${n.query.id} dirty`, 0 != (1 & l.state));
			}
			function rr(l) {
				if (!(128 & l.state)) {
					if ((ir(l, ar.Destroy), or(l, ar.Destroy), pt(l, 131072), l.disposables)) for (let n = 0; n < l.disposables.length; n++) l.disposables[n]();
					!(function(l) {
						if (!(16 & l.state)) return;
						const n = Ju(l);
						if (n) {
							const u = n.template._projectedViews;
							u && (Ie(u, u.indexOf(l)), Lu.dirtyParentQueries(l));
						}
					})(l),
						l.renderer.destroyNode &&
							(function(l) {
								const n = l.def.nodes.length;
								for (let u = 0; u < n; u++) {
									const n = l.def.nodes[u];
									1 & n.flags
										? l.renderer.destroyNode(Au(l, u).renderElement)
										: 2 & n.flags
										? l.renderer.destroyNode(Ru(l, u).renderText)
										: (67108864 & n.flags || 134217728 & n.flags) && Uu(l, u).destroy();
								}
							})(l),
						ne(l) && l.renderer.destroy(),
						(l.state |= 128);
				}
			}
			const ar = (function() {
				var l = { CreateViewNodes: 0, CheckNoChanges: 1, CheckNoChangesProjectedViews: 2, CheckAndUpdate: 3, CheckAndUpdateProjectedViews: 4, Destroy: 5 };
				return (
					(l[l.CreateViewNodes] = 'CreateViewNodes'),
					(l[l.CheckNoChanges] = 'CheckNoChanges'),
					(l[l.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
					(l[l.CheckAndUpdate] = 'CheckAndUpdate'),
					(l[l.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
					(l[l.Destroy] = 'Destroy'),
					l
				);
			})();
			function or(l, n) {
				const u = l.def;
				if (33554432 & u.nodeFlags)
					for (let e = 0; e < u.nodes.length; e++) {
						const t = u.nodes[e];
						33554432 & t.flags ? cr(Au(l, e).componentView, n) : 0 == (33554432 & t.childFlags) && (e += t.childCount);
					}
			}
			function ir(l, n) {
				const u = l.def;
				if (16777216 & u.nodeFlags)
					for (let e = 0; e < u.nodes.length; e++) {
						const t = u.nodes[e];
						if (16777216 & t.flags) {
							const u = Au(l, e).viewContainer._embeddedViews;
							for (let l = 0; l < u.length; l++) cr(u[l], n);
						} else 0 == (16777216 & t.childFlags) && (e += t.childCount);
					}
			}
			function cr(l, n) {
				const u = l.state;
				switch (n) {
					case ar.CheckNoChanges:
						0 == (128 & u) && (12 == (12 & u) ? lr(l) : 64 & u && hr(l, ar.CheckNoChangesProjectedViews));
						break;
					case ar.CheckNoChangesProjectedViews:
						0 == (128 & u) && (32 & u ? lr(l) : 64 & u && hr(l, n));
						break;
					case ar.CheckAndUpdate:
						0 == (128 & u) && (12 == (12 & u) ? nr(l) : 64 & u && hr(l, ar.CheckAndUpdateProjectedViews));
						break;
					case ar.CheckAndUpdateProjectedViews:
						0 == (128 & u) && (32 & u ? nr(l) : 64 & u && hr(l, n));
						break;
					case ar.Destroy:
						rr(l);
						break;
					case ar.CreateViewNodes:
						Xs(l);
				}
			}
			function hr(l, n) {
				ir(l, n), or(l, n);
			}
			function dr(l, n, u, e) {
				if (!(l.def.nodeFlags & n && l.def.nodeFlags & u)) return;
				const t = l.def.nodes.length;
				for (let s = 0; s < t; s++) {
					const t = l.def.nodes[s];
					if (t.flags & n && t.flags & u)
						switch ((Lu.setCurrentNode(l, t.nodeIndex), e)) {
							case 0:
								Ds(l, t);
								break;
							case 1:
								sr(l, t);
						}
					(t.childFlags & n && t.childFlags & u) || (s += t.childCount);
				}
			}
			let pr = !1;
			function gr(l, n, u, e, t, s) {
				const r = t.injector.get(nu);
				return Ws(mr(l, t, r, n, u), e, s);
			}
			function fr(l, n, u, e, t, s) {
				const r = t.injector.get(nu),
					a = mr(l, t, new Qr(r), n, u),
					o = Sr(e);
				return Gr(Mr.create, Ws, null, [a, o, s]);
			}
			function mr(l, n, u, e, t) {
				const s = n.injector.get(Cn),
					r = n.injector.get(Jl),
					a = u.createRenderer(null, null);
				return { ngModule: n, injector: l, projectableNodes: e, selectorOrNode: t, sanitizer: s, rendererFactory: u, renderer: a, errorHandler: r };
			}
			function br(l, n, u, e) {
				const t = Sr(u);
				return Gr(Mr.create, Qs, null, [l, n, t, e]);
			}
			function yr(l, n, u, e) {
				return (u = xr.get(n.element.componentProvider.provider.token) || Sr(u)), Gr(Mr.create, Ks, null, [l, n, u, e]);
			}
			function wr(l, n, u, e) {
				return Be(
					l,
					n,
					u,
					(function(l) {
						const { hasOverrides: n, hasDeprecatedOverrides: u } = (function(l) {
							let n = !1,
								u = !1;
							return 0 === jr.size
								? { hasOverrides: n, hasDeprecatedOverrides: u }
								: (l.providers.forEach((l) => {
										const e = jr.get(l.token);
										3840 & l.flags && e && ((n = !0), (u = u || e.deprecatedBehavior));
								  }),
								  l.modules.forEach((l) => {
										vr.forEach((e, t) => {
											dl(t).providedIn === l && ((n = !0), (u = u || e.deprecatedBehavior));
										});
								  }),
								  { hasOverrides: n, hasDeprecatedOverrides: u });
						})(l);
						return n
							? ((function(l) {
									for (let n = 0; n < l.providers.length; n++) {
										const e = l.providers[n];
										u && (e.flags |= 4096);
										const t = jr.get(e.token);
										t && ((e.flags = (-3841 & e.flags) | t.flags), (e.deps = se(t.deps)), (e.value = t.value));
									}
									if (vr.size > 0) {
										let n = new Set(l.modules);
										vr.forEach((e, t) => {
											if (n.has(dl(t).providedIn)) {
												let n = { token: t, flags: e.flags | (u ? 4096 : 0), deps: se(e.deps), value: e.value, index: l.providers.length };
												l.providers.push(n), (l.providersByKey[zu(t)] = n);
											}
										});
									}
							  })((l = l.factory(() => Vu))),
							  l)
							: l;
					})(e)
				);
			}
			const jr = new Map(),
				vr = new Map(),
				xr = new Map();
			function _r(l) {
				let n;
				jr.set(l.token, l), 'function' == typeof l.token && (n = dl(l.token)) && 'function' == typeof n.providedIn && vr.set(l.token, l);
			}
			function kr(l, n) {
				const u = oe(n.viewDefFactory),
					e = oe(u.nodes[0].element.componentView);
				xr.set(l, e);
			}
			function Cr() {
				jr.clear(), vr.clear(), xr.clear();
			}
			function Sr(l) {
				if (0 === jr.size) return l;
				const n = (function(l) {
					const n = [];
					let u = null;
					for (let e = 0; e < l.nodes.length; e++) {
						const t = l.nodes[e];
						1 & t.flags && (u = t), u && 3840 & t.flags && jr.has(t.provider.token) && (n.push(u.nodeIndex), (u = null));
					}
					return n;
				})(l);
				if (0 === n.length) return l;
				l = l.factory(() => Vu);
				for (let e = 0; e < n.length; e++) u(l, n[e]);
				return l;
				function u(l, n) {
					for (let u = n + 1; u < l.nodes.length; u++) {
						const n = l.nodes[u];
						if (1 & n.flags) return;
						if (3840 & n.flags) {
							const l = n.provider,
								u = jr.get(l.token);
							u && ((n.flags = (-3841 & n.flags) | u.flags), (l.deps = se(u.deps)), (l.value = u.value));
						}
					}
				}
			}
			function Er(l, n, u, e, t, s, r, a, o, i, c, h, d) {
				const p = l.def.nodes[n];
				return ur(l, p, u, e, t, s, r, a, o, i, c, h, d), 224 & p.flags ? Du(l, n).value : void 0;
			}
			function Ir(l, n, u, e, t, s, r, a, o, i, c, h, d) {
				const p = l.def.nodes[n];
				return tr(l, p, u, e, t, s, r, a, o, i, c, h, d), 224 & p.flags ? Du(l, n).value : void 0;
			}
			function Pr(l) {
				return Gr(Mr.detectChanges, nr, null, [l]);
			}
			function Or(l) {
				return Gr(Mr.checkNoChanges, lr, null, [l]);
			}
			function Tr(l) {
				return Gr(Mr.destroy, rr, null, [l]);
			}
			const Mr = (function() {
				var l = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 };
				return (l[l.create] = 'create'), (l[l.detectChanges] = 'detectChanges'), (l[l.checkNoChanges] = 'checkNoChanges'), (l[l.destroy] = 'destroy'), (l[l.handleEvent] = 'handleEvent'), l;
			})();
			let Rr, Ar, Nr;
			function Dr(l, n) {
				(Ar = l), (Nr = n);
			}
			function Ur(l, n, u, e) {
				return Dr(l, n), Gr(Mr.handleEvent, l.def.handleEvent, null, [l, n, u, e]);
			}
			function Lr(l, n) {
				if (128 & l.state) throw Ou(Mr[Rr]);
				return (
					Dr(l, Hr(l, 0)),
					l.def.updateDirectives(function(l, u, e, ...t) {
						const s = l.def.nodes[u];
						return 0 === n ? Fr(l, s, e, t) : zr(l, s, e, t), 16384 & s.flags && Dr(l, Hr(l, u)), 224 & s.flags ? Du(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function Vr(l, n) {
				if (128 & l.state) throw Ou(Mr[Rr]);
				return (
					Dr(l, $r(l, 0)),
					l.def.updateRenderer(function(l, u, e, ...t) {
						const s = l.def.nodes[u];
						return 0 === n ? Fr(l, s, e, t) : zr(l, s, e, t), 3 & s.flags && Dr(l, $r(l, u)), 224 & s.flags ? Du(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function Fr(l, n, u, e) {
				if (ur(l, n, u, ...e)) {
					const r = 1 === u ? e[0] : e;
					if (16384 & n.flags) {
						const u = {};
						for (let l = 0; l < n.bindings.length; l++) {
							const e = n.bindings[l],
								a = r[l];
							8 & e.flags && (u[((t = e.nonMinifiedName), (s = void 0), (s = t.replace(/[$@]/g, '_')), `ng-reflect-${(t = s.replace(In, (...l) => '-' + l[1].toLowerCase()))}`)] = Pn(a));
						}
						const e = n.parent,
							a = Au(l, e.nodeIndex).renderElement;
						if (e.element.name)
							for (let n in u) {
								const e = u[n];
								null != e ? l.renderer.setAttribute(a, n, e) : l.renderer.removeAttribute(a, n);
							}
						else l.renderer.setValue(a, `bindings=${JSON.stringify(u, null, 2)}`);
					}
				}
				var t, s;
			}
			function zr(l, n, u, e) {
				tr(l, n, u, ...e);
			}
			function Hr(l, n) {
				for (let u = n; u < l.def.nodes.length; u++) {
					const n = l.def.nodes[u];
					if (16384 & n.flags && n.bindings && n.bindings.length) return u;
				}
				return null;
			}
			function $r(l, n) {
				for (let u = n; u < l.def.nodes.length; u++) {
					const n = l.def.nodes[u];
					if (3 & n.flags && n.bindings && n.bindings.length) return u;
				}
				return null;
			}
			class Br {
				constructor(l, n) {
					(this.view = l), (this.nodeIndex = n), null == n && (this.nodeIndex = n = 0), (this.nodeDef = l.def.nodes[n]);
					let u = this.nodeDef,
						e = l;
					for (; u && 0 == (1 & u.flags); ) u = u.parent;
					if (!u) for (; !u && e; ) (u = Xu(e)), (e = e.parent);
					(this.elDef = u), (this.elView = e);
				}
				get elOrCompView() {
					return Au(this.elView, this.elDef.nodeIndex).componentView || this.view;
				}
				get injector() {
					return Ve(this.elView, this.elDef);
				}
				get component() {
					return this.elOrCompView.component;
				}
				get context() {
					return this.elOrCompView.context;
				}
				get providerTokens() {
					const l = [];
					if (this.elDef)
						for (let n = this.elDef.nodeIndex + 1; n <= this.elDef.nodeIndex + this.elDef.childCount; n++) {
							const u = this.elView.def.nodes[n];
							20224 & u.flags && l.push(u.provider.token), (n += u.childCount);
						}
					return l;
				}
				get references() {
					const l = {};
					if (this.elDef) {
						qr(this.elView, this.elDef, l);
						for (let n = this.elDef.nodeIndex + 1; n <= this.elDef.nodeIndex + this.elDef.childCount; n++) {
							const u = this.elView.def.nodes[n];
							20224 & u.flags && qr(this.elView, u, l), (n += u.childCount);
						}
					}
					return l;
				}
				get componentRenderElement() {
					const l = (function(l) {
						for (; l && !ne(l); ) l = l.parent;
						return l.parent ? Au(l.parent, Xu(l).nodeIndex) : null;
					})(this.elOrCompView);
					return l ? l.renderElement : void 0;
				}
				get renderNode() {
					return 2 & this.nodeDef.flags ? le(this.view, this.nodeDef) : le(this.elView, this.elDef);
				}
				logError(l, ...n) {
					let u, e;
					2 & this.nodeDef.flags ? ((u = this.view.def), (e = this.nodeDef.nodeIndex)) : ((u = this.elView.def), (e = this.elDef.nodeIndex));
					const t = (function(l, n) {
						let u = -1;
						for (let e = 0; e <= n; e++) 3 & l.nodes[e].flags && u++;
						return u;
					})(u, e);
					let s = -1;
					u.factory(() => (++s === t ? l.error.bind(l, ...n) : Vu)), s < t && (l.error('Illegal state: the ViewDefinitionFactory did not call the logger!'), l.error(...n));
				}
			}
			function qr(l, n, u) {
				for (let e in n.references) u[e] = Ls(l, n, n.references[e]);
			}
			function Gr(l, n, u, e) {
				const t = Rr,
					s = Ar,
					r = Nr;
				try {
					Rr = l;
					const o = n.apply(u, e);
					return (Ar = s), (Nr = r), (Rr = t), o;
				} catch (a) {
					if (Wl(a) || !Ar) throw a;
					throw (function(l, n) {
						return l instanceof Error || (l = new Error(l.toString())), Pu(l, n), l;
					})(a, Zr());
				}
			}
			function Zr() {
				return Ar ? new Br(Ar, Nr) : null;
			}
			class Qr {
				constructor(l) {
					this.delegate = l;
				}
				createRenderer(l, n) {
					return new Wr(this.delegate.createRenderer(l, n));
				}
				begin() {
					this.delegate.begin && this.delegate.begin();
				}
				end() {
					this.delegate.end && this.delegate.end();
				}
				whenRenderingDone() {
					return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null);
				}
			}
			class Wr {
				constructor(l) {
					(this.delegate = l), (this.debugContextFactory = Zr), (this.data = this.delegate.data);
				}
				createDebugContext(l) {
					return this.debugContextFactory(l);
				}
				destroyNode(l) {
					!(function(l) {
						ys.delete(l.nativeNode);
					})(ws(l)),
						this.delegate.destroyNode && this.delegate.destroyNode(l);
				}
				destroy() {
					this.delegate.destroy();
				}
				createElement(l, n) {
					const u = this.delegate.createElement(l, n),
						e = this.createDebugContext(u);
					if (e) {
						const n = new bs(u, null, e);
						(n.name = l), js(n);
					}
					return u;
				}
				createComment(l) {
					const n = this.delegate.createComment(l),
						u = this.createDebugContext(n);
					return u && js(new ms(n, null, u)), n;
				}
				createText(l) {
					const n = this.delegate.createText(l),
						u = this.createDebugContext(n);
					return u && js(new ms(n, null, u)), n;
				}
				appendChild(l, n) {
					const u = ws(l),
						e = ws(n);
					u && e && u instanceof bs && u.addChild(e), this.delegate.appendChild(l, n);
				}
				insertBefore(l, n, u) {
					const e = ws(l),
						t = ws(n),
						s = ws(u);
					e && t && e instanceof bs && e.insertBefore(s, t), this.delegate.insertBefore(l, n, u);
				}
				removeChild(l, n) {
					const u = ws(l),
						e = ws(n);
					u && e && u instanceof bs && u.removeChild(e), this.delegate.removeChild(l, n);
				}
				selectRootElement(l, n) {
					const u = this.delegate.selectRootElement(l, n),
						e = Zr();
					return e && js(new bs(u, null, e)), u;
				}
				setAttribute(l, n, u, e) {
					const t = ws(l);
					t && t instanceof bs && (t.attributes[e ? e + ':' + n : n] = u), this.delegate.setAttribute(l, n, u, e);
				}
				removeAttribute(l, n, u) {
					const e = ws(l);
					e && e instanceof bs && (e.attributes[u ? u + ':' + n : n] = null), this.delegate.removeAttribute(l, n, u);
				}
				addClass(l, n) {
					const u = ws(l);
					u && u instanceof bs && (u.classes[n] = !0), this.delegate.addClass(l, n);
				}
				removeClass(l, n) {
					const u = ws(l);
					u && u instanceof bs && (u.classes[n] = !1), this.delegate.removeClass(l, n);
				}
				setStyle(l, n, u, e) {
					const t = ws(l);
					t && t instanceof bs && (t.styles[n] = u), this.delegate.setStyle(l, n, u, e);
				}
				removeStyle(l, n, u) {
					const e = ws(l);
					e && e instanceof bs && (e.styles[n] = null), this.delegate.removeStyle(l, n, u);
				}
				setProperty(l, n, u) {
					const e = ws(l);
					e && e instanceof bs && (e.properties[n] = u), this.delegate.setProperty(l, n, u);
				}
				listen(l, n, u) {
					if ('string' != typeof l) {
						const e = ws(l);
						e && e.listeners.push(new fs(n, u));
					}
					return this.delegate.listen(l, n, u);
				}
				parentNode(l) {
					return this.delegate.parentNode(l);
				}
				nextSibling(l) {
					return this.delegate.nextSibling(l);
				}
				setValue(l, n) {
					return this.delegate.setValue(l, n);
				}
			}
			function Kr(l, n, u) {
				return new Yr(l, n, u);
			}
			class Yr extends Kn {
				constructor(l, n, u) {
					super(), (this.moduleType = l), (this._bootstrapComponents = n), (this._ngModuleDefFactory = u);
				}
				create(l) {
					!(function() {
						if (pr) return;
						pr = !0;
						const l = nn()
							? {
									setCurrentNode: Dr,
									createRootView: fr,
									createEmbeddedView: br,
									createComponentView: yr,
									createNgModuleRef: wr,
									overrideProvider: _r,
									overrideComponentView: kr,
									clearOverrides: Cr,
									checkAndUpdateView: Pr,
									checkNoChangesView: Or,
									destroyView: Tr,
									createDebugContext: (l, n) => new Br(l, n),
									handleEvent: Ur,
									updateDirectives: Lr,
									updateRenderer: Vr
							  }
							: {
									setCurrentNode: () => {},
									createRootView: gr,
									createEmbeddedView: Qs,
									createComponentView: Ks,
									createNgModuleRef: Be,
									overrideProvider: Vu,
									overrideComponentView: Vu,
									clearOverrides: Vu,
									checkAndUpdateView: nr,
									checkNoChangesView: lr,
									destroyView: rr,
									createDebugContext: (l, n) => new Br(l, n),
									handleEvent: (l, n, u, e) => l.def.handleEvent(l, n, u, e),
									updateDirectives: (l, n) => l.def.updateDirectives(0 === n ? Er : Ir, l),
									updateRenderer: (l, n) => l.def.updateRenderer(0 === n ? Er : Ir, l)
							  };
						(Lu.setCurrentNode = l.setCurrentNode),
							(Lu.createRootView = l.createRootView),
							(Lu.createEmbeddedView = l.createEmbeddedView),
							(Lu.createComponentView = l.createComponentView),
							(Lu.createNgModuleRef = l.createNgModuleRef),
							(Lu.overrideProvider = l.overrideProvider),
							(Lu.overrideComponentView = l.overrideComponentView),
							(Lu.clearOverrides = l.clearOverrides),
							(Lu.checkAndUpdateView = l.checkAndUpdateView),
							(Lu.checkNoChangesView = l.checkNoChangesView),
							(Lu.destroyView = l.destroyView),
							(Lu.resolveDep = ct),
							(Lu.createDebugContext = l.createDebugContext),
							(Lu.handleEvent = l.handleEvent),
							(Lu.updateDirectives = l.updateDirectives),
							(Lu.updateRenderer = l.updateRenderer),
							(Lu.dirtyParentQueries = Ns);
					})();
					const n = (function(l) {
						const n = Array.from(l.providers),
							u = Array.from(l.modules),
							e = {};
						for (const t in l.providersByKey) e[t] = l.providersByKey[t];
						return { factory: l.factory, isRoot: l.isRoot, providers: n, modules: u, providersByKey: e };
					})(oe(this._ngModuleDefFactory));
					return Lu.createNgModuleRef(this.moduleType, l || Pl.NULL, this._bootstrapComponents, n);
				}
			}
			class Jr {}
			class Xr {
				constructor() {}
			}
			class la {}
			const na = new kl('Location Initialized');
			class ua {}
			const ea = new kl('appBaseHref'),
				ta = (() => {
					class l {
						constructor(n, u) {
							(this._subject = new bt()), (this._urlChangeListeners = []), (this._platformStrategy = n);
							const e = this._platformStrategy.getBaseHref();
							(this._platformLocation = u),
								(this._baseHref = l.stripTrailingSlash(sa(e))),
								this._platformStrategy.onPopState((l) => {
									this._subject.emit({ url: this.path(!0), pop: !0, state: l.state, type: l.type });
								});
						}
						path(l = !1) {
							return this.normalize(this._platformStrategy.path(l));
						}
						getState() {
							return this._platformLocation.getState();
						}
						isCurrentPathEqualTo(n, u = '') {
							return this.path() == this.normalize(n + l.normalizeQueryParams(u));
						}
						normalize(n) {
							return l.stripTrailingSlash(
								(function(l, n) {
									return l && n.startsWith(l) ? n.substring(l.length) : n;
								})(this._baseHref, sa(n))
							);
						}
						prepareExternalUrl(l) {
							return l && '/' !== l[0] && (l = '/' + l), this._platformStrategy.prepareExternalUrl(l);
						}
						go(n, u = '', e = null) {
							this._platformStrategy.pushState(e, '', n, u), this._notifyUrlChangeListeners(this.prepareExternalUrl(n + l.normalizeQueryParams(u)), e);
						}
						replaceState(n, u = '', e = null) {
							this._platformStrategy.replaceState(e, '', n, u), this._notifyUrlChangeListeners(this.prepareExternalUrl(n + l.normalizeQueryParams(u)), e);
						}
						forward() {
							this._platformStrategy.forward();
						}
						back() {
							this._platformStrategy.back();
						}
						onUrlChange(l) {
							this._urlChangeListeners.push(l),
								this.subscribe((l) => {
									this._notifyUrlChangeListeners(l.url, l.state);
								});
						}
						_notifyUrlChangeListeners(l = '', n) {
							this._urlChangeListeners.forEach((u) => u(l, n));
						}
						subscribe(l, n, u) {
							return this._subject.subscribe({ next: l, error: n, complete: u });
						}
						static normalizeQueryParams(l) {
							return l && '?' !== l[0] ? '?' + l : l;
						}
						static joinWithSlash(l, n) {
							if (0 == l.length) return n;
							if (0 == n.length) return l;
							let u = 0;
							return l.endsWith('/') && u++, n.startsWith('/') && u++, 2 == u ? l + n.substring(1) : 1 == u ? l + n : l + '/' + n;
						}
						static stripTrailingSlash(l) {
							const n = l.match(/#|\?|$/),
								u = (n && n.index) || l.length;
							return l.slice(0, u - ('/' === l[u - 1] ? 1 : 0)) + l.slice(u);
						}
					}
					return l;
				})();
			function sa(l) {
				return l.replace(/\/index.html$/, '');
			}
			const ra = (() =>
					class extends ua {
						constructor(l, n) {
							super(), (this._platformLocation = l), (this._baseHref = ''), null != n && (this._baseHref = n);
						}
						onPopState(l) {
							this._platformLocation.onPopState(l), this._platformLocation.onHashChange(l);
						}
						getBaseHref() {
							return this._baseHref;
						}
						path(l = !1) {
							let n = this._platformLocation.hash;
							return null == n && (n = '#'), n.length > 0 ? n.substring(1) : n;
						}
						prepareExternalUrl(l) {
							const n = ta.joinWithSlash(this._baseHref, l);
							return n.length > 0 ? '#' + n : n;
						}
						pushState(l, n, u, e) {
							let t = this.prepareExternalUrl(u + ta.normalizeQueryParams(e));
							0 == t.length && (t = this._platformLocation.pathname), this._platformLocation.pushState(l, n, t);
						}
						replaceState(l, n, u, e) {
							let t = this.prepareExternalUrl(u + ta.normalizeQueryParams(e));
							0 == t.length && (t = this._platformLocation.pathname), this._platformLocation.replaceState(l, n, t);
						}
						forward() {
							this._platformLocation.forward();
						}
						back() {
							this._platformLocation.back();
						}
					})(),
				aa = (() =>
					class extends ua {
						constructor(l, n) {
							if ((super(), (this._platformLocation = l), null == n && (n = this._platformLocation.getBaseHrefFromDOM()), null == n))
								throw new Error('No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.');
							this._baseHref = n;
						}
						onPopState(l) {
							this._platformLocation.onPopState(l), this._platformLocation.onHashChange(l);
						}
						getBaseHref() {
							return this._baseHref;
						}
						prepareExternalUrl(l) {
							return ta.joinWithSlash(this._baseHref, l);
						}
						path(l = !1) {
							const n = this._platformLocation.pathname + ta.normalizeQueryParams(this._platformLocation.search),
								u = this._platformLocation.hash;
							return u && l ? `${n}${u}` : n;
						}
						pushState(l, n, u, e) {
							const t = this.prepareExternalUrl(u + ta.normalizeQueryParams(e));
							this._platformLocation.pushState(l, n, t);
						}
						replaceState(l, n, u, e) {
							const t = this.prepareExternalUrl(u + ta.normalizeQueryParams(e));
							this._platformLocation.replaceState(l, n, t);
						}
						forward() {
							this._platformLocation.forward();
						}
						back() {
							this._platformLocation.back();
						}
					})(),
				oa = void 0;
			var ia = [
				'en',
				[['a', 'p'], ['AM', 'PM'], oa],
				[['AM', 'PM'], oa, oa],
				[
					['S', 'M', 'T', 'W', 'T', 'F', 'S'],
					['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
					['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
				],
				oa,
				[
					['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
					['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
				],
				oa,
				[['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
				0,
				[6, 0],
				['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
				['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
				['{1}, {0}', oa, "{1} 'at' {0}", oa],
				['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
				['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
				'$',
				'US Dollar',
				{},
				function(l) {
					let n = Math.floor(Math.abs(l)),
						u = l.toString().replace(/^[^.]*\.?/, '').length;
					return 1 === n && 0 === u ? 1 : 5;
				}
			];
			const ca = {},
				ha = (function() {
					var l = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
					return (l[l.Zero] = 'Zero'), (l[l.One] = 'One'), (l[l.Two] = 'Two'), (l[l.Few] = 'Few'), (l[l.Many] = 'Many'), (l[l.Other] = 'Other'), l;
				})(),
				da = new kl('UseV4Plurals');
			class pa {}
			const ga = (() =>
				class extends pa {
					constructor(l, n) {
						super(), (this.locale = l), (this.deprecatedPluralFn = n);
					}
					getPluralCategory(l, n) {
						switch (
							this.deprecatedPluralFn
								? this.deprecatedPluralFn(n || this.locale, l)
								: (function(l) {
										return (function(l) {
											const n = l.toLowerCase().replace(/_/g, '-');
											let u = ca[n];
											if (u) return u;
											const e = n.split('-')[0];
											if ((u = ca[e])) return u;
											if ('en' === e) return ia;
											throw new Error(`Missing locale data for the locale "${l}".`);
										})(l)[18];
								  })(n || this.locale)(l)
						) {
							case ha.Zero:
								return 'zero';
							case ha.One:
								return 'one';
							case ha.Two:
								return 'two';
							case ha.Few:
								return 'few';
							case ha.Many:
								return 'many';
							default:
								return 'other';
						}
					}
				})();
			class fa {}
			const ma = (() =>
					class {
						constructor(l, n, u, e) {
							(this._iterableDiffers = l), (this._keyValueDiffers = n), (this._ngEl = u), (this._renderer = e), (this._initialClasses = []);
						}
						getValue() {
							return null;
						}
						setClass(l) {
							this._removeClasses(this._initialClasses),
								(this._initialClasses = 'string' == typeof l ? l.split(/\s+/) : []),
								this._applyClasses(this._initialClasses),
								this._applyClasses(this._rawClass);
						}
						setNgClass(l) {
							this._removeClasses(this._rawClass),
								this._applyClasses(this._initialClasses),
								(this._iterableDiffer = null),
								(this._keyValueDiffer = null),
								(this._rawClass = 'string' == typeof l ? l.split(/\s+/) : l),
								this._rawClass &&
									(Un(this._rawClass)
										? (this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create())
										: (this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()));
						}
						applyChanges() {
							if (this._iterableDiffer) {
								const l = this._iterableDiffer.diff(this._rawClass);
								l && this._applyIterableChanges(l);
							} else if (this._keyValueDiffer) {
								const l = this._keyValueDiffer.diff(this._rawClass);
								l && this._applyKeyValueChanges(l);
							}
						}
						_applyKeyValueChanges(l) {
							l.forEachAddedItem((l) => this._toggleClass(l.key, l.currentValue)),
								l.forEachChangedItem((l) => this._toggleClass(l.key, l.currentValue)),
								l.forEachRemovedItem((l) => {
									l.previousValue && this._toggleClass(l.key, !1);
								});
						}
						_applyIterableChanges(l) {
							l.forEachAddedItem((l) => {
								if ('string' != typeof l.item) throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${gl(l.item)}`);
								this._toggleClass(l.item, !0);
							}),
								l.forEachRemovedItem((l) => this._toggleClass(l.item, !1));
						}
						_applyClasses(l) {
							l && (Array.isArray(l) || l instanceof Set ? l.forEach((l) => this._toggleClass(l, !0)) : Object.keys(l).forEach((n) => this._toggleClass(n, !!l[n])));
						}
						_removeClasses(l) {
							l && (Array.isArray(l) || l instanceof Set ? l.forEach((l) => this._toggleClass(l, !1)) : Object.keys(l).forEach((l) => this._toggleClass(l, !1)));
						}
						_toggleClass(l, n) {
							(l = l.trim()) &&
								l.split(/\s+/g).forEach((l) => {
									n ? this._renderer.addClass(this._ngEl.nativeElement, l) : this._renderer.removeClass(this._ngEl.nativeElement, l);
								});
						}
					})(),
				ba = (() => {
					class l {
						constructor(l) {
							this._delegate = l;
						}
						getValue() {
							return this._delegate.getValue();
						}
					}
					return (l.ngDirectiveDef = void 0), l;
				})(),
				ya = (() =>
					class extends ba {
						constructor(l) {
							super(l);
						}
						set klass(l) {
							this._delegate.setClass(l);
						}
						set ngClass(l) {
							this._delegate.setNgClass(l);
						}
						ngDoCheck() {
							this._delegate.applyChanges();
						}
					})(),
				wa = (() =>
					class {
						constructor(l, n) {
							(this._viewContainer = l),
								(this._context = new ja()),
								(this._thenTemplateRef = null),
								(this._elseTemplateRef = null),
								(this._thenViewRef = null),
								(this._elseViewRef = null),
								(this._thenTemplateRef = n);
						}
						set ngIf(l) {
							(this._context.$implicit = this._context.ngIf = l), this._updateView();
						}
						set ngIfThen(l) {
							va('ngIfThen', l), (this._thenTemplateRef = l), (this._thenViewRef = null), this._updateView();
						}
						set ngIfElse(l) {
							va('ngIfElse', l), (this._elseTemplateRef = l), (this._elseViewRef = null), this._updateView();
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
						static ngTemplateGuard_ngIf(l, n) {
							return !0;
						}
					})();
			class ja {
				constructor() {
					(this.$implicit = null), (this.ngIf = null);
				}
			}
			function va(l, n) {
				if (n && !n.createEmbeddedView) throw new Error(`${l} must be a TemplateRef, but received '${gl(n)}'.`);
			}
			const xa = (() => class {})(),
				_a = new kl('DocumentToken'),
				ka = (() => {
					class l {}
					return (l.ngInjectableDef = hl({ providedIn: 'root', factory: () => new Ca(_l(_a), window, _l(Jl)) })), l;
				})();
			class Ca {
				constructor(l, n, u) {
					(this.document = l), (this.window = n), (this.errorHandler = u), (this.offset = () => [0, 0]);
				}
				setOffset(l) {
					this.offset = Array.isArray(l) ? () => l : l;
				}
				getScrollPosition() {
					return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
				}
				scrollToPosition(l) {
					this.supportScrollRestoration() && this.window.scrollTo(l[0], l[1]);
				}
				scrollToAnchor(l) {
					if (this.supportScrollRestoration()) {
						l = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(l) : l.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
						try {
							const u = this.document.querySelector(`#${l}`);
							if (u) return void this.scrollToElement(u);
							const e = this.document.querySelector(`[name='${l}']`);
							if (e) return void this.scrollToElement(e);
						} catch (n) {
							this.errorHandler.handleError(n);
						}
					}
				}
				setHistoryScrollRestoration(l) {
					if (this.supportScrollRestoration()) {
						const n = this.window.history;
						n && n.scrollRestoration && (n.scrollRestoration = l);
					}
				}
				scrollToElement(l) {
					const n = l.getBoundingClientRect(),
						u = n.left + this.window.pageXOffset,
						e = n.top + this.window.pageYOffset,
						t = this.offset();
					this.window.scrollTo(u - t[0], e - t[1]);
				}
				supportScrollRestoration() {
					try {
						return !!this.window && !!this.window.scrollTo;
					} catch (l) {
						return !1;
					}
				}
			}
			function Sa(...l) {
				let n = l[l.length - 1];
				return P(n) ? (l.pop(), H(l, n)) : W(l);
			}
			class Ea extends E {
				constructor(l) {
					super(), (this._value = l);
				}
				get value() {
					return this.getValue();
				}
				_subscribe(l) {
					const n = super._subscribe(l);
					return n && !n.closed && l.next(this._value), n;
				}
				getValue() {
					if (this.hasError) throw this.thrownError;
					if (this.closed) throw new k();
					return this._value;
				}
				next(l) {
					super.next((this._value = l));
				}
			}
			function Ia() {
				return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
			}
			Ia.prototype = Object.create(Error.prototype);
			const Pa = Ia,
				Oa = {};
			class Ta {
				constructor(l) {
					this.resultSelector = l;
				}
				call(l, n) {
					return n.subscribe(new Ma(l, this.resultSelector));
				}
			}
			class Ma extends L {
				constructor(l, n) {
					super(l), (this.resultSelector = n), (this.active = 0), (this.values = []), (this.observables = []);
				}
				_next(l) {
					this.values.push(Oa), this.observables.push(l);
				}
				_complete() {
					const l = this.observables,
						n = l.length;
					if (0 === n) this.destination.complete();
					else {
						(this.active = n), (this.toRespond = n);
						for (let u = 0; u < n; u++) {
							const n = l[u];
							this.add(U(this, n, n, u));
						}
					}
				}
				notifyComplete(l) {
					0 == (this.active -= 1) && this.destination.complete();
				}
				notifyNext(l, n, u, e, t) {
					const s = this.values,
						r = this.toRespond ? (s[u] === Oa ? --this.toRespond : this.toRespond) : 0;
					(s[u] = n), 0 === r && (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()));
				}
				_tryResultSelector(l) {
					let n;
					try {
						n = this.resultSelector.apply(this, l);
					} catch (u) {
						return void this.destination.error(u);
					}
					this.destination.next(n);
				}
			}
			const Ra = new v((l) => l.complete());
			function Aa(l) {
				return l
					? (function(l) {
							return new v((n) => l.schedule(() => n.complete()));
					  })(l)
					: Ra;
			}
			function Na(l) {
				return new v((n) => {
					let u;
					try {
						u = l();
					} catch (e) {
						return void n.error(e);
					}
					return (u ? $(u) : Aa()).subscribe(n);
				});
			}
			function Da() {
				return Q(1);
			}
			function Ua(l, n) {
				return function(u) {
					return u.lift(new La(l, n));
				};
			}
			class La {
				constructor(l, n) {
					(this.predicate = l), (this.thisArg = n);
				}
				call(l, n) {
					return n.subscribe(new Va(l, this.predicate, this.thisArg));
				}
			}
			class Va extends f {
				constructor(l, n, u) {
					super(l), (this.predicate = n), (this.thisArg = u), (this.count = 0);
				}
				_next(l) {
					let n;
					try {
						n = this.predicate.call(this.thisArg, l, this.count++);
					} catch (u) {
						return void this.destination.error(u);
					}
					n && this.destination.next(l);
				}
			}
			function Fa() {
				return Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this;
			}
			Fa.prototype = Object.create(Error.prototype);
			const za = Fa;
			function Ha(l) {
				return function(n) {
					return 0 === l ? Aa() : n.lift(new $a(l));
				};
			}
			class $a {
				constructor(l) {
					if (((this.total = l), this.total < 0)) throw new za();
				}
				call(l, n) {
					return n.subscribe(new Ba(l, this.total));
				}
			}
			class Ba extends f {
				constructor(l, n) {
					super(l), (this.total = n), (this.ring = new Array()), (this.count = 0);
				}
				_next(l) {
					const n = this.ring,
						u = this.total,
						e = this.count++;
					n.length < u ? n.push(l) : (n[e % u] = l);
				}
				_complete() {
					const l = this.destination;
					let n = this.count;
					if (n > 0) {
						const u = this.count >= this.total ? this.total : this.count,
							e = this.ring;
						for (let t = 0; t < u; t++) {
							const t = n++ % u;
							l.next(e[t]);
						}
					}
					l.complete();
				}
			}
			function qa(
				l = function() {
					return new Pa();
				}
			) {
				return (n) => n.lift(new Ga(l));
			}
			class Ga {
				constructor(l) {
					this.errorFactory = l;
				}
				call(l, n) {
					return n.subscribe(new Za(l, this.errorFactory));
				}
			}
			class Za extends f {
				constructor(l, n) {
					super(l), (this.errorFactory = n), (this.hasValue = !1);
				}
				_next(l) {
					(this.hasValue = !0), this.destination.next(l);
				}
				_complete() {
					if (this.hasValue) return this.destination.complete();
					{
						let n;
						try {
							n = this.errorFactory();
						} catch (l) {
							n = l;
						}
						this.destination.error(n);
					}
				}
			}
			function Qa(l = null) {
				return (n) => n.lift(new Wa(l));
			}
			class Wa {
				constructor(l) {
					this.defaultValue = l;
				}
				call(l, n) {
					return n.subscribe(new Ka(l, this.defaultValue));
				}
			}
			class Ka extends f {
				constructor(l, n) {
					super(l), (this.defaultValue = n), (this.isEmpty = !0);
				}
				_next(l) {
					(this.isEmpty = !1), this.destination.next(l);
				}
				_complete() {
					this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
				}
			}
			function Ya(l, n) {
				const u = arguments.length >= 2;
				return (e) =>
					e.pipe(
						l ? Ua((n, u) => l(n, u, e)) : Z,
						Ha(1),
						u ? Qa(n) : qa(() => new Pa())
					);
			}
			function Ja(l) {
				return function(n) {
					const u = new Xa(l),
						e = n.lift(u);
					return (u.caught = e);
				};
			}
			class Xa {
				constructor(l) {
					this.selector = l;
				}
				call(l, n) {
					return n.subscribe(new lo(l, this.selector, this.caught));
				}
			}
			class lo extends L {
				constructor(l, n, u) {
					super(l), (this.selector = n), (this.caught = u);
				}
				error(l) {
					if (!this.isStopped) {
						let u;
						try {
							u = this.selector(l, this.caught);
						} catch (n) {
							return void super.error(n);
						}
						this._unsubscribeAndRecycle();
						const e = new O(this, void 0, void 0);
						this.add(e), U(this, u, void 0, void 0, e);
					}
				}
			}
			function no(l) {
				return (n) => (0 === l ? Aa() : n.lift(new uo(l)));
			}
			class uo {
				constructor(l) {
					if (((this.total = l), this.total < 0)) throw new za();
				}
				call(l, n) {
					return n.subscribe(new eo(l, this.total));
				}
			}
			class eo extends f {
				constructor(l, n) {
					super(l), (this.total = n), (this.count = 0);
				}
				_next(l) {
					const n = this.total,
						u = ++this.count;
					u <= n && (this.destination.next(l), u === n && (this.destination.complete(), this.unsubscribe()));
				}
			}
			function to(l, n) {
				const u = arguments.length >= 2;
				return (e) =>
					e.pipe(
						l ? Ua((n, u) => l(n, u, e)) : Z,
						no(1),
						u ? Qa(n) : qa(() => new Pa())
					);
			}
			class so {
				constructor(l, n, u) {
					(this.predicate = l), (this.thisArg = n), (this.source = u);
				}
				call(l, n) {
					return n.subscribe(new ro(l, this.predicate, this.thisArg, this.source));
				}
			}
			class ro extends f {
				constructor(l, n, u, e) {
					super(l), (this.predicate = n), (this.thisArg = u), (this.source = e), (this.index = 0), (this.thisArg = u || this);
				}
				notifyComplete(l) {
					this.destination.next(l), this.destination.complete();
				}
				_next(l) {
					let n = !1;
					try {
						n = this.predicate.call(this.thisArg, l, this.index++, this.source);
					} catch (u) {
						return void this.destination.error(u);
					}
					n || this.notifyComplete(!1);
				}
				_complete() {
					this.notifyComplete(!0);
				}
			}
			function ao(l, n) {
				return 'function' == typeof n ? (u) => u.pipe(ao((u, e) => $(l(u, e)).pipe(V((l, t) => n(u, l, e, t))))) : (n) => n.lift(new oo(l));
			}
			class oo {
				constructor(l) {
					this.project = l;
				}
				call(l, n) {
					return n.subscribe(new io(l, this.project));
				}
			}
			class io extends L {
				constructor(l, n) {
					super(l), (this.project = n), (this.index = 0);
				}
				_next(l) {
					let n;
					const u = this.index++;
					try {
						n = this.project(l, u);
					} catch (e) {
						return void this.destination.error(e);
					}
					this._innerSub(n, l, u);
				}
				_innerSub(l, n, u) {
					const e = this.innerSubscription;
					e && e.unsubscribe();
					const t = new O(this, void 0, void 0);
					this.destination.add(t), (this.innerSubscription = U(this, l, n, u, t));
				}
				_complete() {
					const { innerSubscription: l } = this;
					(l && !l.closed) || super._complete(), this.unsubscribe();
				}
				_unsubscribe() {
					this.innerSubscription = null;
				}
				notifyComplete(l) {
					this.destination.remove(l), (this.innerSubscription = null), this.isStopped && super._complete();
				}
				notifyNext(l, n, u, e, t) {
					this.destination.next(n);
				}
			}
			function co(...l) {
				return Da()(Sa(...l));
			}
			function ho(l, n) {
				let u = !1;
				return (
					arguments.length >= 2 && (u = !0),
					function(e) {
						return e.lift(new po(l, n, u));
					}
				);
			}
			class po {
				constructor(l, n, u = !1) {
					(this.accumulator = l), (this.seed = n), (this.hasSeed = u);
				}
				call(l, n) {
					return n.subscribe(new go(l, this.accumulator, this.seed, this.hasSeed));
				}
			}
			class go extends f {
				constructor(l, n, u, e) {
					super(l), (this.accumulator = n), (this._seed = u), (this.hasSeed = e), (this.index = 0);
				}
				get seed() {
					return this._seed;
				}
				set seed(l) {
					(this.hasSeed = !0), (this._seed = l);
				}
				_next(l) {
					if (this.hasSeed) return this._tryNext(l);
					(this.seed = l), this.destination.next(l);
				}
				_tryNext(l) {
					const n = this.index++;
					let u;
					try {
						u = this.accumulator(this.seed, l, n);
					} catch (e) {
						this.destination.error(e);
					}
					(this.seed = u), this.destination.next(u);
				}
			}
			function fo(l, n) {
				return B(l, n, 1);
			}
			function mo(l, n, u) {
				return function(e) {
					return e.lift(new bo(l, n, u));
				};
			}
			class bo {
				constructor(l, n, u) {
					(this.nextOrObserver = l), (this.error = n), (this.complete = u);
				}
				call(l, n) {
					return n.subscribe(new yo(l, this.nextOrObserver, this.error, this.complete));
				}
			}
			class yo extends f {
				constructor(l, n, u, t) {
					super(l),
						(this._tapNext = y),
						(this._tapError = y),
						(this._tapComplete = y),
						(this._tapError = u || y),
						(this._tapComplete = t || y),
						e(n)
							? ((this._context = this), (this._tapNext = n))
							: n && ((this._context = n), (this._tapNext = n.next || y), (this._tapError = n.error || y), (this._tapComplete = n.complete || y));
				}
				_next(l) {
					try {
						this._tapNext.call(this._context, l);
					} catch (n) {
						return void this.destination.error(n);
					}
					this.destination.next(l);
				}
				_error(l) {
					try {
						this._tapError.call(this._context, l);
					} catch (l) {
						return void this.destination.error(l);
					}
					this.destination.error(l);
				}
				_complete() {
					try {
						this._tapComplete.call(this._context);
					} catch (l) {
						return void this.destination.error(l);
					}
					return this.destination.complete();
				}
			}
			class wo {
				constructor(l) {
					this.callback = l;
				}
				call(l, n) {
					return n.subscribe(new jo(l, this.callback));
				}
			}
			class jo extends f {
				constructor(l, n) {
					super(l), this.add(new d(n));
				}
			}
			let vo = null;
			function xo() {
				return vo;
			}
			class _o {
				constructor() {
					this.resourceLoaderType = null;
				}
				get attrToPropMap() {
					return this._attrToPropMap;
				}
				set attrToPropMap(l) {
					this._attrToPropMap = l;
				}
			}
			class ko extends _o {
				constructor() {
					super(), (this._animationPrefix = null), (this._transitionEnd = null);
					try {
						const n = this.createElement('div', document);
						if (null != this.getStyle(n, 'animationName')) this._animationPrefix = '';
						else {
							const l = ['Webkit', 'Moz', 'O', 'ms'];
							for (let u = 0; u < l.length; u++)
								if (null != this.getStyle(n, l[u] + 'AnimationName')) {
									this._animationPrefix = '-' + l[u].toLowerCase() + '-';
									break;
								}
						}
						const u = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd otransitionend', transition: 'transitionend' };
						Object.keys(u).forEach((l) => {
							null != this.getStyle(n, l) && (this._transitionEnd = u[l]);
						});
					} catch (l) {
						(this._animationPrefix = null), (this._transitionEnd = null);
					}
				}
				getDistributedNodes(l) {
					return l.getDistributedNodes();
				}
				resolveAndSetHref(l, n, u) {
					l.href = null == u ? n : n + '/../' + u;
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
			const Co = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
				So = 3,
				Eo = {
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
				Io = { A: '1', B: '2', C: '3', D: '4', E: '5', F: '6', G: '7', H: '8', I: '9', J: '*', K: '+', M: '-', N: '.', O: '/', '`': '0', '\x90': 'NumLock' },
				Po = (() => {
					if (wl.Node)
						return (
							wl.Node.prototype.contains ||
							function(l) {
								return !!(16 & this.compareDocumentPosition(l));
							}
						);
				})();
			class Oo extends ko {
				parse(l) {
					throw new Error('parse not implemented');
				}
				static makeCurrent() {
					var l;
					(l = new Oo()), vo || (vo = l);
				}
				hasProperty(l, n) {
					return n in l;
				}
				setProperty(l, n, u) {
					l[n] = u;
				}
				getProperty(l, n) {
					return l[n];
				}
				invoke(l, n, u) {
					l[n](...u);
				}
				logError(l) {
					window.console && (console.error ? console.error(l) : console.log(l));
				}
				log(l) {
					window.console && window.console.log && window.console.log(l);
				}
				logGroup(l) {
					window.console && window.console.group && window.console.group(l);
				}
				logGroupEnd() {
					window.console && window.console.groupEnd && window.console.groupEnd();
				}
				get attrToPropMap() {
					return Co;
				}
				contains(l, n) {
					return Po.call(l, n);
				}
				querySelector(l, n) {
					return l.querySelector(n);
				}
				querySelectorAll(l, n) {
					return l.querySelectorAll(n);
				}
				on(l, n, u) {
					l.addEventListener(n, u, !1);
				}
				onAndCancel(l, n, u) {
					return (
						l.addEventListener(n, u, !1),
						() => {
							l.removeEventListener(n, u, !1);
						}
					);
				}
				dispatchEvent(l, n) {
					l.dispatchEvent(n);
				}
				createMouseEvent(l) {
					const n = this.getDefaultDocument().createEvent('MouseEvent');
					return n.initEvent(l, !0, !0), n;
				}
				createEvent(l) {
					const n = this.getDefaultDocument().createEvent('Event');
					return n.initEvent(l, !0, !0), n;
				}
				preventDefault(l) {
					l.preventDefault(), (l.returnValue = !1);
				}
				isPrevented(l) {
					return l.defaultPrevented || (null != l.returnValue && !l.returnValue);
				}
				getInnerHTML(l) {
					return l.innerHTML;
				}
				getTemplateContent(l) {
					return 'content' in l && this.isTemplateElement(l) ? l.content : null;
				}
				getOuterHTML(l) {
					return l.outerHTML;
				}
				nodeName(l) {
					return l.nodeName;
				}
				nodeValue(l) {
					return l.nodeValue;
				}
				type(l) {
					return l.type;
				}
				content(l) {
					return this.hasProperty(l, 'content') ? l.content : l;
				}
				firstChild(l) {
					return l.firstChild;
				}
				nextSibling(l) {
					return l.nextSibling;
				}
				parentElement(l) {
					return l.parentNode;
				}
				childNodes(l) {
					return l.childNodes;
				}
				childNodesAsList(l) {
					const n = l.childNodes,
						u = new Array(n.length);
					for (let e = 0; e < n.length; e++) u[e] = n[e];
					return u;
				}
				clearNodes(l) {
					for (; l.firstChild; ) l.removeChild(l.firstChild);
				}
				appendChild(l, n) {
					l.appendChild(n);
				}
				removeChild(l, n) {
					l.removeChild(n);
				}
				replaceChild(l, n, u) {
					l.replaceChild(n, u);
				}
				remove(l) {
					return l.parentNode && l.parentNode.removeChild(l), l;
				}
				insertBefore(l, n, u) {
					l.insertBefore(u, n);
				}
				insertAllBefore(l, n, u) {
					u.forEach((u) => l.insertBefore(u, n));
				}
				insertAfter(l, n, u) {
					l.insertBefore(u, n.nextSibling);
				}
				setInnerHTML(l, n) {
					l.innerHTML = n;
				}
				getText(l) {
					return l.textContent;
				}
				setText(l, n) {
					l.textContent = n;
				}
				getValue(l) {
					return l.value;
				}
				setValue(l, n) {
					l.value = n;
				}
				getChecked(l) {
					return l.checked;
				}
				setChecked(l, n) {
					l.checked = n;
				}
				createComment(l) {
					return this.getDefaultDocument().createComment(l);
				}
				createTemplate(l) {
					const n = this.getDefaultDocument().createElement('template');
					return (n.innerHTML = l), n;
				}
				createElement(l, n) {
					return (n = n || this.getDefaultDocument()).createElement(l);
				}
				createElementNS(l, n, u) {
					return (u = u || this.getDefaultDocument()).createElementNS(l, n);
				}
				createTextNode(l, n) {
					return (n = n || this.getDefaultDocument()).createTextNode(l);
				}
				createScriptTag(l, n, u) {
					const e = (u = u || this.getDefaultDocument()).createElement('SCRIPT');
					return e.setAttribute(l, n), e;
				}
				createStyleElement(l, n) {
					const u = (n = n || this.getDefaultDocument()).createElement('style');
					return this.appendChild(u, this.createTextNode(l, n)), u;
				}
				createShadowRoot(l) {
					return l.createShadowRoot();
				}
				getShadowRoot(l) {
					return l.shadowRoot;
				}
				getHost(l) {
					return l.host;
				}
				clone(l) {
					return l.cloneNode(!0);
				}
				getElementsByClassName(l, n) {
					return l.getElementsByClassName(n);
				}
				getElementsByTagName(l, n) {
					return l.getElementsByTagName(n);
				}
				classList(l) {
					return Array.prototype.slice.call(l.classList, 0);
				}
				addClass(l, n) {
					l.classList.add(n);
				}
				removeClass(l, n) {
					l.classList.remove(n);
				}
				hasClass(l, n) {
					return l.classList.contains(n);
				}
				setStyle(l, n, u) {
					l.style[n] = u;
				}
				removeStyle(l, n) {
					l.style[n] = '';
				}
				getStyle(l, n) {
					return l.style[n];
				}
				hasStyle(l, n, u) {
					const e = this.getStyle(l, n) || '';
					return u ? e == u : e.length > 0;
				}
				tagName(l) {
					return l.tagName;
				}
				attributeMap(l) {
					const n = new Map(),
						u = l.attributes;
					for (let e = 0; e < u.length; e++) {
						const l = u.item(e);
						n.set(l.name, l.value);
					}
					return n;
				}
				hasAttribute(l, n) {
					return l.hasAttribute(n);
				}
				hasAttributeNS(l, n, u) {
					return l.hasAttributeNS(n, u);
				}
				getAttribute(l, n) {
					return l.getAttribute(n);
				}
				getAttributeNS(l, n, u) {
					return l.getAttributeNS(n, u);
				}
				setAttribute(l, n, u) {
					l.setAttribute(n, u);
				}
				setAttributeNS(l, n, u, e) {
					l.setAttributeNS(n, u, e);
				}
				removeAttribute(l, n) {
					l.removeAttribute(n);
				}
				removeAttributeNS(l, n, u) {
					l.removeAttributeNS(n, u);
				}
				templateAwareRoot(l) {
					return this.isTemplateElement(l) ? this.content(l) : l;
				}
				createHtmlDocument() {
					return document.implementation.createHTMLDocument('fakeTitle');
				}
				getDefaultDocument() {
					return document;
				}
				getBoundingClientRect(l) {
					try {
						return l.getBoundingClientRect();
					} catch (n) {
						return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
					}
				}
				getTitle(l) {
					return l.title;
				}
				setTitle(l, n) {
					l.title = n || '';
				}
				elementMatches(l, n) {
					return !!this.isElementNode(l) && ((l.matches && l.matches(n)) || (l.msMatchesSelector && l.msMatchesSelector(n)) || (l.webkitMatchesSelector && l.webkitMatchesSelector(n)));
				}
				isTemplateElement(l) {
					return this.isElementNode(l) && 'TEMPLATE' === l.nodeName;
				}
				isTextNode(l) {
					return l.nodeType === Node.TEXT_NODE;
				}
				isCommentNode(l) {
					return l.nodeType === Node.COMMENT_NODE;
				}
				isElementNode(l) {
					return l.nodeType === Node.ELEMENT_NODE;
				}
				hasShadowRoot(l) {
					return null != l.shadowRoot && l instanceof HTMLElement;
				}
				isShadowRoot(l) {
					return l instanceof DocumentFragment;
				}
				importIntoDoc(l) {
					return document.importNode(this.templateAwareRoot(l), !0);
				}
				adoptNode(l) {
					return document.adoptNode(l);
				}
				getHref(l) {
					return l.getAttribute('href');
				}
				getEventKey(l) {
					let n = l.key;
					if (null == n) {
						if (null == (n = l.keyIdentifier)) return 'Unidentified';
						n.startsWith('U+') && ((n = String.fromCharCode(parseInt(n.substring(2), 16))), l.location === So && Io.hasOwnProperty(n) && (n = Io[n]));
					}
					return Eo[n] || n;
				}
				getGlobalEventTarget(l, n) {
					return 'window' === n ? window : 'document' === n ? l : 'body' === n ? l.body : null;
				}
				getHistory() {
					return window.history;
				}
				getLocation() {
					return window.location;
				}
				getBaseHref(l) {
					const n = Mo || (Mo = document.querySelector('base')) ? Mo.getAttribute('href') : null;
					return null == n ? null : ((u = n), To || (To = document.createElement('a')), To.setAttribute('href', u), '/' === To.pathname.charAt(0) ? To.pathname : '/' + To.pathname);
					var u;
				}
				resetBaseElement() {
					Mo = null;
				}
				getUserAgent() {
					return window.navigator.userAgent;
				}
				setData(l, n, u) {
					this.setAttribute(l, 'data-' + n, u);
				}
				getData(l, n) {
					return this.getAttribute(l, 'data-' + n);
				}
				getComputedStyle(l) {
					return getComputedStyle(l);
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
				getCookie(l) {
					return (function(l, n) {
						n = encodeURIComponent(n);
						for (const u of l.split(';')) {
							const l = u.indexOf('='),
								[e, t] = -1 == l ? [u, ''] : [u.slice(0, l), u.slice(l + 1)];
							if (e.trim() === n) return decodeURIComponent(t);
						}
						return null;
					})(document.cookie, l);
				}
				setCookie(l, n) {
					document.cookie = encodeURIComponent(l) + '=' + encodeURIComponent(n);
				}
			}
			let To,
				Mo = null;
			function Ro() {
				return !!window.history.pushState;
			}
			const Ao = (() => {
					class l extends la {
						constructor(l) {
							super(), (this._doc = l), this._init();
						}
						_init() {
							(this.location = xo().getLocation()), (this._history = xo().getHistory());
						}
						getBaseHrefFromDOM() {
							return xo().getBaseHref(this._doc);
						}
						onPopState(l) {
							xo()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('popstate', l, !1);
						}
						onHashChange(l) {
							xo()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('hashchange', l, !1);
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
						set pathname(l) {
							this.location.pathname = l;
						}
						pushState(l, n, u) {
							Ro() ? this._history.pushState(l, n, u) : (this.location.hash = u);
						}
						replaceState(l, n, u) {
							Ro() ? this._history.replaceState(l, n, u) : (this.location.hash = u);
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
					return (l.ctorParameters = () => [{ type: void 0, decorators: [{ type: sl, args: [_a] }] }]), l;
				})(),
				No = new kl('TRANSITION_ID'),
				Do = [
					{
						provide: jt,
						useFactory: function(l, n, u) {
							return () => {
								u.get(vt).donePromise.then(() => {
									const u = xo();
									Array.prototype.slice
										.apply(u.querySelectorAll(n, 'style[ng-transition]'))
										.filter((n) => u.getAttribute(n, 'ng-transition') === l)
										.forEach((l) => u.remove(l));
								});
							};
						},
						deps: [No, _a, Pl],
						multi: !0
					}
				];
			class Uo {
				static init() {
					var l;
					(l = new Uo()), (ns = l);
				}
				addToWindow(l) {
					(wl.getAngularTestability = (n, u = !0) => {
						const e = l.findTestabilityInTree(n, u);
						if (null == e) throw new Error('Could not find testability for element.');
						return e;
					}),
						(wl.getAllAngularTestabilities = () => l.getAllTestabilities()),
						(wl.getAllAngularRootElements = () => l.getAllRootElements()),
						wl.frameworkStabilizers || (wl.frameworkStabilizers = []),
						wl.frameworkStabilizers.push((l) => {
							const n = wl.getAllAngularTestabilities();
							let u = n.length,
								e = !1;
							const t = function(n) {
								(e = e || n), 0 == --u && l(e);
							};
							n.forEach(function(l) {
								l.whenStable(t);
							});
						});
				}
				findTestabilityInTree(l, n, u) {
					if (null == n) return null;
					const e = l.getTestability(n);
					return null != e ? e : u ? (xo().isShadowRoot(n) ? this.findTestabilityInTree(l, xo().getHost(n), !0) : this.findTestabilityInTree(l, xo().parentElement(n), !0)) : null;
				}
			}
			function Lo(l, n) {
				('undefined' != typeof COMPILED && COMPILED) || ((wl.ng = wl.ng || {})[l] = n);
			}
			const Vo = (() => ({ ApplicationRef: is, NgZone: Bt }))();
			function Fo(l) {
				return ws(l);
			}
			const zo = new kl('EventManagerPlugins'),
				Ho = (() =>
					class {
						constructor(l, n) {
							(this._zone = n), (this._eventNameToPlugin = new Map()), l.forEach((l) => (l.manager = this)), (this._plugins = l.slice().reverse());
						}
						addEventListener(l, n, u) {
							return this._findPluginFor(n).addEventListener(l, n, u);
						}
						addGlobalEventListener(l, n, u) {
							return this._findPluginFor(n).addGlobalEventListener(l, n, u);
						}
						getZone() {
							return this._zone;
						}
						_findPluginFor(l) {
							const n = this._eventNameToPlugin.get(l);
							if (n) return n;
							const u = this._plugins;
							for (let e = 0; e < u.length; e++) {
								const n = u[e];
								if (n.supports(l)) return this._eventNameToPlugin.set(l, n), n;
							}
							throw new Error(`No event manager plugin found for event ${l}`);
						}
					})();
			class $o {
				constructor(l) {
					this._doc = l;
				}
				addGlobalEventListener(l, n, u) {
					const e = xo().getGlobalEventTarget(this._doc, l);
					if (!e) throw new Error(`Unsupported event target ${e} for event ${n}`);
					return this.addEventListener(e, n, u);
				}
			}
			const Bo = (() =>
					class {
						constructor() {
							this._stylesSet = new Set();
						}
						addStyles(l) {
							const n = new Set();
							l.forEach((l) => {
								this._stylesSet.has(l) || (this._stylesSet.add(l), n.add(l));
							}),
								this.onStylesAdded(n);
						}
						onStylesAdded(l) {}
						getAllStyles() {
							return Array.from(this._stylesSet);
						}
					})(),
				qo = (() =>
					class extends Bo {
						constructor(l) {
							super(), (this._doc = l), (this._hostNodes = new Set()), (this._styleNodes = new Set()), this._hostNodes.add(l.head);
						}
						_addStylesToHost(l, n) {
							l.forEach((l) => {
								const u = this._doc.createElement('style');
								(u.textContent = l), this._styleNodes.add(n.appendChild(u));
							});
						}
						addHost(l) {
							this._addStylesToHost(this._stylesSet, l), this._hostNodes.add(l);
						}
						removeHost(l) {
							this._hostNodes.delete(l);
						}
						onStylesAdded(l) {
							this._hostNodes.forEach((n) => this._addStylesToHost(l, n));
						}
						ngOnDestroy() {
							this._styleNodes.forEach((l) => xo().remove(l));
						}
					})(),
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
				for (let e = 0; e < n.length; e++) {
					let t = n[e];
					Array.isArray(t) ? Ko(l, t, u) : ((t = t.replace(Zo, l)), u.push(t));
				}
				return u;
			}
			function Yo(l) {
				return (n) => {
					!1 === l(n) && (n.preventDefault(), (n.returnValue = !1));
				};
			}
			const Jo = (() =>
				class {
					constructor(l, n, u) {
						(this.eventManager = l), (this.sharedStylesHost = n), (this.appId = u), (this.rendererByCompId = new Map()), (this.defaultRenderer = new Xo(l));
					}
					createRenderer(l, n) {
						if (!l || !n) return this.defaultRenderer;
						switch (n.encapsulation) {
							case Zl.Emulated: {
								let u = this.rendererByCompId.get(n.id);
								return u || ((u = new ui(this.eventManager, this.sharedStylesHost, n, this.appId)), this.rendererByCompId.set(n.id, u)), u.applyToHost(l), u;
							}
							case Zl.Native:
							case Zl.ShadowDom:
								return new ei(this.eventManager, this.sharedStylesHost, l, n);
							default:
								if (!this.rendererByCompId.has(n.id)) {
									const l = Ko(n.id, n.styles, []);
									this.sharedStylesHost.addStyles(l), this.rendererByCompId.set(n.id, this.defaultRenderer);
								}
								return this.defaultRenderer;
						}
					}
					begin() {}
					end() {}
				})();
			class Xo {
				constructor(l) {
					(this.eventManager = l), (this.data = Object.create(null));
				}
				destroy() {}
				createElement(l, n) {
					return n ? document.createElementNS(Go[n] || n, l) : document.createElement(l);
				}
				createComment(l) {
					return document.createComment(l);
				}
				createText(l) {
					return document.createTextNode(l);
				}
				appendChild(l, n) {
					l.appendChild(n);
				}
				insertBefore(l, n, u) {
					l && l.insertBefore(n, u);
				}
				removeChild(l, n) {
					l && l.removeChild(n);
				}
				selectRootElement(l, n) {
					let u = 'string' == typeof l ? document.querySelector(l) : l;
					if (!u) throw new Error(`The selector "${l}" did not match any elements`);
					return n || (u.textContent = ''), u;
				}
				parentNode(l) {
					return l.parentNode;
				}
				nextSibling(l) {
					return l.nextSibling;
				}
				setAttribute(l, n, u, e) {
					if (e) {
						n = `${e}:${n}`;
						const t = Go[e];
						t ? l.setAttributeNS(t, n, u) : l.setAttribute(n, u);
					} else l.setAttribute(n, u);
				}
				removeAttribute(l, n, u) {
					if (u) {
						const e = Go[u];
						e ? l.removeAttributeNS(e, n) : l.removeAttribute(`${u}:${n}`);
					} else l.removeAttribute(n);
				}
				addClass(l, n) {
					l.classList.add(n);
				}
				removeClass(l, n) {
					l.classList.remove(n);
				}
				setStyle(l, n, u, e) {
					e & uu.DashCase ? l.style.setProperty(n, u, e & uu.Important ? 'important' : '') : (l.style[n] = u);
				}
				removeStyle(l, n, u) {
					u & uu.DashCase ? l.style.removeProperty(n) : (l.style[n] = '');
				}
				setProperty(l, n, u) {
					ni(n, 'property'), (l[n] = u);
				}
				setValue(l, n) {
					l.nodeValue = n;
				}
				listen(l, n, u) {
					return ni(n, 'listener'), 'string' == typeof l ? this.eventManager.addGlobalEventListener(l, n, Yo(u)) : this.eventManager.addEventListener(l, n, Yo(u));
				}
			}
			const li = (() => '@'.charCodeAt(0))();
			function ni(l, n) {
				if (l.charCodeAt(0) === li) throw new Error(`Found the synthetic ${n} ${l}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`);
			}
			class ui extends Xo {
				constructor(l, n, u, e) {
					super(l), (this.component = u);
					const t = Ko(e + '-' + u.id, u.styles, []);
					n.addStyles(t), (this.contentAttr = Wo.replace(Zo, e + '-' + u.id)), (this.hostAttr = Qo.replace(Zo, e + '-' + u.id));
				}
				applyToHost(l) {
					super.setAttribute(l, this.hostAttr, '');
				}
				createElement(l, n) {
					const u = super.createElement(l, n);
					return super.setAttribute(u, this.contentAttr, ''), u;
				}
			}
			class ei extends Xo {
				constructor(l, n, u, e) {
					super(l),
						(this.sharedStylesHost = n),
						(this.hostEl = u),
						(this.component = e),
						(this.shadowRoot = e.encapsulation === Zl.ShadowDom ? u.attachShadow({ mode: 'open' }) : u.createShadowRoot()),
						this.sharedStylesHost.addHost(this.shadowRoot);
					const t = Ko(e.id, e.styles, []);
					for (let s = 0; s < t.length; s++) {
						const l = document.createElement('style');
						(l.textContent = t[s]), this.shadowRoot.appendChild(l);
					}
				}
				nodeOrShadowRoot(l) {
					return l === this.hostEl ? this.shadowRoot : l;
				}
				destroy() {
					this.sharedStylesHost.removeHost(this.shadowRoot);
				}
				appendChild(l, n) {
					return super.appendChild(this.nodeOrShadowRoot(l), n);
				}
				insertBefore(l, n, u) {
					return super.insertBefore(this.nodeOrShadowRoot(l), n, u);
				}
				removeChild(l, n) {
					return super.removeChild(this.nodeOrShadowRoot(l), n);
				}
				parentNode(l) {
					return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(l)));
				}
			}
			const ti = (() =>
					('undefined' != typeof Zone && Zone.__symbol__) ||
					function(l) {
						return '__zone_symbol__' + l;
					})(),
				si = ti('addEventListener'),
				ri = ti('removeEventListener'),
				ai = {},
				oi = '__zone_symbol__propagationStopped',
				ii = (() => {
					const l = 'undefined' != typeof Zone && Zone[ti('BLACK_LISTED_EVENTS')];
					if (l) {
						const n = {};
						return (
							l.forEach((l) => {
								n[l] = l;
							}),
							n
						);
					}
				})(),
				ci = function(l) {
					return !!ii && ii.hasOwnProperty(l);
				},
				hi = function(l) {
					const n = ai[l.type];
					if (!n) return;
					const u = this[n];
					if (!u) return;
					const e = [l];
					if (1 === u.length) {
						const l = u[0];
						return l.zone !== Zone.current ? l.zone.run(l.handler, this, e) : l.handler.apply(this, e);
					}
					{
						const n = u.slice();
						for (let u = 0; u < n.length && !0 !== l[oi]; u++) {
							const l = n[u];
							l.zone !== Zone.current ? l.zone.run(l.handler, this, e) : l.handler.apply(this, e);
						}
					}
				},
				di = (() =>
					class extends $o {
						constructor(l, n, u) {
							super(l),
								(this.ngZone = n),
								(u &&
									(function(l) {
										return 'server' === l;
									})(u)) ||
									this.patchEvent();
						}
						patchEvent() {
							if ('undefined' == typeof Event || !Event || !Event.prototype) return;
							if (Event.prototype.__zone_symbol__stopImmediatePropagation) return;
							const l = (Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation);
							Event.prototype.stopImmediatePropagation = function() {
								this && (this[oi] = !0), l && l.apply(this, arguments);
							};
						}
						supports(l) {
							return !0;
						}
						addEventListener(l, n, u) {
							let e = u;
							if (!l[si] || (Bt.isInAngularZone() && !ci(n))) l.addEventListener(n, e, !1);
							else {
								let u = ai[n];
								u || (u = ai[n] = ti('ANGULAR' + n + 'FALSE'));
								let t = l[u];
								const s = t && t.length > 0;
								t || (t = l[u] = []);
								const r = ci(n) ? Zone.root : Zone.current;
								if (0 === t.length) t.push({ zone: r, handler: e });
								else {
									let l = !1;
									for (let n = 0; n < t.length; n++)
										if (t[n].handler === e) {
											l = !0;
											break;
										}
									l || t.push({ zone: r, handler: e });
								}
								s || l[si](n, hi, !1);
							}
							return () => this.removeEventListener(l, n, e);
						}
						removeEventListener(l, n, u) {
							let e = l[ri];
							if (!e) return l.removeEventListener.apply(l, [n, u, !1]);
							let t = ai[n],
								s = t && l[t];
							if (!s) return l.removeEventListener.apply(l, [n, u, !1]);
							let r = !1;
							for (let a = 0; a < s.length; a++)
								if (s[a].handler === u) {
									(r = !0), s.splice(a, 1);
									break;
								}
							r ? 0 === s.length && e.apply(l, [n, hi, !1]) : l.removeEventListener.apply(l, [n, u, !1]);
						}
					})(),
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
				gi = new kl('HammerGestureConfig'),
				fi = new kl('HammerLoader'),
				mi = (() =>
					class {
						constructor() {
							(this.events = []), (this.overrides = {});
						}
						buildHammer(l) {
							const n = new Hammer(l, this.options);
							n.get('pinch').set({ enable: !0 }), n.get('rotate').set({ enable: !0 });
							for (const u in this.overrides) n.get(u).set(this.overrides[u]);
							return n;
						}
					})(),
				bi = (() =>
					class extends $o {
						constructor(l, n, u, e) {
							super(l), (this._config = n), (this.console = u), (this.loader = e);
						}
						supports(l) {
							return !(
								(!pi.hasOwnProperty(l.toLowerCase()) && !this.isCustomEvent(l)) ||
								(!window.Hammer &&
									!this.loader &&
									(this.console.warn(`The "${l}" event cannot be bound because Hammer.JS is not ` + 'loaded and no custom loader has been specified.'), 1))
							);
						}
						addEventListener(l, n, u) {
							const e = this.manager.getZone();
							if (((n = n.toLowerCase()), !window.Hammer && this.loader)) {
								let e = !1,
									t = () => {
										e = !0;
									};
								return (
									this.loader()
										.then(() => {
											if (!window.Hammer) return this.console.warn('The custom HAMMER_LOADER completed, but Hammer.JS is not present.'), void (t = () => {});
											e || (t = this.addEventListener(l, n, u));
										})
										.catch(() => {
											this.console.warn(`The "${n}" event cannot be bound because the custom ` + 'Hammer.JS loader failed.'), (t = () => {});
										}),
									() => {
										t();
									}
								);
							}
							return e.runOutsideAngular(() => {
								const t = this._config.buildHammer(l),
									s = function(l) {
										e.runGuarded(function() {
											u(l);
										});
									};
								return (
									t.on(n, s),
									() => {
										t.off(n, s), 'function' == typeof t.destroy && t.destroy();
									}
								);
							});
						}
						isCustomEvent(l) {
							return this._config.events.indexOf(l) > -1;
						}
					})(),
				yi = ['alt', 'control', 'meta', 'shift'],
				wi = { alt: (l) => l.altKey, control: (l) => l.ctrlKey, meta: (l) => l.metaKey, shift: (l) => l.shiftKey },
				ji = (() => {
					class l extends $o {
						constructor(l) {
							super(l);
						}
						supports(n) {
							return null != l.parseEventName(n);
						}
						addEventListener(n, u, e) {
							const t = l.parseEventName(u),
								s = l.eventCallback(t.fullKey, e, this.manager.getZone());
							return this.manager.getZone().runOutsideAngular(() => xo().onAndCancel(n, t.domEventName, s));
						}
						static parseEventName(n) {
							const u = n.toLowerCase().split('.'),
								e = u.shift();
							if (0 === u.length || ('keydown' !== e && 'keyup' !== e)) return null;
							const t = l._normalizeKey(u.pop());
							let s = '';
							if (
								(yi.forEach((l) => {
									const n = u.indexOf(l);
									n > -1 && (u.splice(n, 1), (s += l + '.'));
								}),
								(s += t),
								0 != u.length || 0 === t.length)
							)
								return null;
							const r = {};
							return (r.domEventName = e), (r.fullKey = s), r;
						}
						static getEventFullKey(l) {
							let n = '',
								u = xo().getEventKey(l);
							return (
								' ' === (u = u.toLowerCase()) ? (u = 'space') : '.' === u && (u = 'dot'),
								yi.forEach((e) => {
									e != u && (0, wi[e])(l) && (n += e + '.');
								}),
								(n += u)
							);
						}
						static eventCallback(n, u, e) {
							return (t) => {
								l.getEventFullKey(t) === n && e.runGuarded(() => u(t));
							};
						}
						static _normalizeKey(l) {
							switch (l) {
								case 'esc':
									return 'escape';
								default:
									return l;
							}
						}
					}
					return l;
				})();
			class vi {}
			const xi = (() =>
				class extends vi {
					constructor(l) {
						super(), (this._doc = l);
					}
					sanitize(l, n) {
						if (null == n) return null;
						switch (l) {
							case kn.NONE:
								return n;
							case kn.HTML:
								return n instanceof ki
									? n.changingThisBreaksApplicationSecurity
									: (this.checkNotSafeValue(n, 'HTML'),
									  (function(l, n) {
											let u = null;
											try {
												xn = xn || new un(l);
												let e = n ? String(n) : '';
												u = xn.getInertBodyElement(e);
												let t = 5,
													s = e;
												do {
													if (0 === t) throw new Error('Failed to sanitize html because the input is unstable');
													t--, (e = s), (s = u.innerHTML), (u = xn.getInertBodyElement(e));
												} while (e !== s);
												const r = new yn(),
													a = r.sanitizeChildren(_n(u) || u);
												return nn() && r.sanitizedSomething && console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'), a;
											} finally {
												if (u) {
													const l = _n(u) || u;
													for (; l.firstChild; ) l.removeChild(l.firstChild);
												}
											}
									  })(this._doc, String(n)));
							case kn.STYLE:
								return n instanceof Ci
									? n.changingThisBreaksApplicationSecurity
									: (this.checkNotSafeValue(n, 'Style'),
									  (function(l) {
											if (!(l = String(l).trim())) return '';
											const n = l.match(En);
											return (n && sn(n[1]) === n[1]) ||
												(l.match(Sn) &&
													(function(l) {
														let n = !0,
															u = !0;
														for (let e = 0; e < l.length; e++) {
															const t = l.charAt(e);
															"'" === t && u ? (n = !n) : '"' === t && n && (u = !u);
														}
														return n && u;
													})(l))
												? l
												: (nn() && console.warn(`WARNING: sanitizing unsafe style value ${l} (see http://g.co/ng/security#xss).`), 'unsafe');
									  })(n));
							case kn.SCRIPT:
								if (n instanceof Si) return n.changingThisBreaksApplicationSecurity;
								throw (this.checkNotSafeValue(n, 'Script'), new Error('unsafe value used in a script context'));
							case kn.URL:
								return n instanceof Ii || n instanceof Ei ? n.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(n, 'URL'), sn(String(n)));
							case kn.RESOURCE_URL:
								if (n instanceof Ii) return n.changingThisBreaksApplicationSecurity;
								throw (this.checkNotSafeValue(n, 'ResourceURL'), new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
							default:
								throw new Error(`Unexpected SecurityContext ${l} (see http://g.co/ng/security#xss)`);
						}
					}
					checkNotSafeValue(l, n) {
						if (l instanceof _i) throw new Error(`Required a safe ${n}, got a ${l.getTypeName()} ` + '(see http://g.co/ng/security#xss)');
					}
					bypassSecurityTrustHtml(l) {
						return new ki(l);
					}
					bypassSecurityTrustStyle(l) {
						return new Ci(l);
					}
					bypassSecurityTrustScript(l) {
						return new Si(l);
					}
					bypassSecurityTrustUrl(l) {
						return new Ei(l);
					}
					bypassSecurityTrustResourceUrl(l) {
						return new Ii(l);
					}
				})();
			class _i {
				constructor(l) {
					this.changingThisBreaksApplicationSecurity = l;
				}
				toString() {
					return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + ' (see http://g.co/ng/security#xss)';
				}
			}
			class ki extends _i {
				getTypeName() {
					return 'HTML';
				}
			}
			class Ci extends _i {
				getTypeName() {
					return 'Style';
				}
			}
			class Si extends _i {
				getTypeName() {
					return 'Script';
				}
			}
			class Ei extends _i {
				getTypeName() {
					return 'URL';
				}
			}
			class Ii extends _i {
				getTypeName() {
					return 'ResourceURL';
				}
			}
			const Pi = ss(vs, 'browser', [
				{ provide: St, useValue: 'browser' },
				{
					provide: Ct,
					useValue: function() {
						Oo.makeCurrent(), Uo.init();
					},
					multi: !0
				},
				{ provide: la, useClass: Ao, deps: [_a] },
				{
					provide: _a,
					useFactory: function() {
						return document;
					},
					deps: []
				}
			]);
			function Oi() {
				return new Jl();
			}
			const Ti = (() => {
				class l {
					constructor(l) {
						if (l)
							throw new Error(
								'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
							);
					}
					static withServerTransition(n) {
						return { ngModule: l, providers: [{ provide: xt, useValue: n.appId }, { provide: No, useExisting: xt }, Do] };
					}
				}
				return l;
			})();
			'undefined' != typeof window && window;
			class Mi {
				constructor(l, n) {
					(this.id = l), (this.url = n);
				}
			}
			class Ri extends Mi {
				constructor(l, n, u = 'imperative', e = null) {
					super(l, n), (this.navigationTrigger = u), (this.restoredState = e);
				}
				toString() {
					return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
				}
			}
			class Ai extends Mi {
				constructor(l, n, u) {
					super(l, n), (this.urlAfterRedirects = u);
				}
				toString() {
					return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
				}
			}
			class Ni extends Mi {
				constructor(l, n, u) {
					super(l, n), (this.reason = u);
				}
				toString() {
					return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
				}
			}
			class Di extends Mi {
				constructor(l, n, u) {
					super(l, n), (this.error = u);
				}
				toString() {
					return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
				}
			}
			class Ui extends Mi {
				constructor(l, n, u, e) {
					super(l, n), (this.urlAfterRedirects = u), (this.state = e);
				}
				toString() {
					return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Li extends Mi {
				constructor(l, n, u, e) {
					super(l, n), (this.urlAfterRedirects = u), (this.state = e);
				}
				toString() {
					return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Vi extends Mi {
				constructor(l, n, u, e, t) {
					super(l, n), (this.urlAfterRedirects = u), (this.state = e), (this.shouldActivate = t);
				}
				toString() {
					return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
				}
			}
			class Fi extends Mi {
				constructor(l, n, u, e) {
					super(l, n), (this.urlAfterRedirects = u), (this.state = e);
				}
				toString() {
					return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class zi extends Mi {
				constructor(l, n, u, e) {
					super(l, n), (this.urlAfterRedirects = u), (this.state = e);
				}
				toString() {
					return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Hi {
				constructor(l) {
					this.route = l;
				}
				toString() {
					return `RouteConfigLoadStart(path: ${this.route.path})`;
				}
			}
			class $i {
				constructor(l) {
					this.route = l;
				}
				toString() {
					return `RouteConfigLoadEnd(path: ${this.route.path})`;
				}
			}
			class Bi {
				constructor(l) {
					this.snapshot = l;
				}
				toString() {
					return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class qi {
				constructor(l) {
					this.snapshot = l;
				}
				toString() {
					return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class Gi {
				constructor(l) {
					this.snapshot = l;
				}
				toString() {
					return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class Zi {
				constructor(l) {
					this.snapshot = l;
				}
				toString() {
					return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class Qi {
				constructor(l, n, u) {
					(this.routerEvent = l), (this.position = n), (this.anchor = u);
				}
				toString() {
					return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`;
				}
			}
			const Wi = (() => class {})(),
				Ki = 'primary';
			class Yi {
				constructor(l) {
					this.params = l || {};
				}
				has(l) {
					return this.params.hasOwnProperty(l);
				}
				get(l) {
					if (this.has(l)) {
						const n = this.params[l];
						return Array.isArray(n) ? n[0] : n;
					}
					return null;
				}
				getAll(l) {
					if (this.has(l)) {
						const n = this.params[l];
						return Array.isArray(n) ? n : [n];
					}
					return [];
				}
				get keys() {
					return Object.keys(this.params);
				}
			}
			function Ji(l) {
				return new Yi(l);
			}
			const Xi = 'ngNavigationCancelingError';
			function lc(l) {
				const n = Error('NavigationCancelingError: ' + l);
				return (n[Xi] = !0), n;
			}
			function nc(l, n, u) {
				const e = u.path.split('/');
				if (e.length > l.length) return null;
				if ('full' === u.pathMatch && (n.hasChildren() || e.length < l.length)) return null;
				const t = {};
				for (let s = 0; s < e.length; s++) {
					const n = e[s],
						u = l[s];
					if (n.startsWith(':')) t[n.substring(1)] = u;
					else if (n !== u.path) return null;
				}
				return { consumed: l.slice(0, e.length), posParams: t };
			}
			class uc {
				constructor(l, n) {
					(this.routes = l), (this.module = n);
				}
			}
			function ec(l, n = '') {
				for (let u = 0; u < l.length; u++) {
					const e = l[u];
					tc(e, sc(n, e));
				}
			}
			function tc(l, n) {
				if (!l)
					throw new Error(
						`\n      Invalid configuration of route '${n}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
					);
				if (Array.isArray(l)) throw new Error(`Invalid configuration of route '${n}': Array cannot be specified`);
				if (!l.component && !l.children && !l.loadChildren && l.outlet && l.outlet !== Ki)
					throw new Error(`Invalid configuration of route '${n}': a componentless route without children or loadChildren cannot have a named outlet set`);
				if (l.redirectTo && l.children) throw new Error(`Invalid configuration of route '${n}': redirectTo and children cannot be used together`);
				if (l.redirectTo && l.loadChildren) throw new Error(`Invalid configuration of route '${n}': redirectTo and loadChildren cannot be used together`);
				if (l.children && l.loadChildren) throw new Error(`Invalid configuration of route '${n}': children and loadChildren cannot be used together`);
				if (l.redirectTo && l.component) throw new Error(`Invalid configuration of route '${n}': redirectTo and component cannot be used together`);
				if (l.path && l.matcher) throw new Error(`Invalid configuration of route '${n}': path and matcher cannot be used together`);
				if (void 0 === l.redirectTo && !l.component && !l.children && !l.loadChildren)
					throw new Error(`Invalid configuration of route '${n}'. One of the following must be provided: component, redirectTo, children or loadChildren`);
				if (void 0 === l.path && void 0 === l.matcher) throw new Error(`Invalid configuration of route '${n}': routes must have either a path or a matcher specified`);
				if ('string' == typeof l.path && '/' === l.path.charAt(0)) throw new Error(`Invalid configuration of route '${n}': path cannot start with a slash`);
				if ('' === l.path && void 0 !== l.redirectTo && void 0 === l.pathMatch)
					throw new Error(
						`Invalid configuration of route '{path: "${n}", redirectTo: "${l.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
					);
				if (void 0 !== l.pathMatch && 'full' !== l.pathMatch && 'prefix' !== l.pathMatch)
					throw new Error(`Invalid configuration of route '${n}': pathMatch can only be set to 'prefix' or 'full'`);
				l.children && ec(l.children, n);
			}
			function sc(l, n) {
				return n ? (l || n.path ? (l && !n.path ? `${l}/` : !l && n.path ? n.path : `${l}/${n.path}`) : '') : l;
			}
			function rc(l) {
				const n = l.children && l.children.map(rc),
					u = n ? Object.assign({}, l, { children: n }) : Object.assign({}, l);
				return !u.component && (n || u.loadChildren) && u.outlet && u.outlet !== Ki && (u.component = Wi), u;
			}
			function ac(l, n) {
				const u = Object.keys(l),
					e = Object.keys(n);
				if (!u || !e || u.length != e.length) return !1;
				let t;
				for (let s = 0; s < u.length; s++) if (l[(t = u[s])] !== n[t]) return !1;
				return !0;
			}
			function oc(l) {
				return Array.prototype.concat.apply([], l);
			}
			function ic(l) {
				return l.length > 0 ? l[l.length - 1] : null;
			}
			function cc(l, n) {
				for (const u in l) l.hasOwnProperty(u) && n(l[u], u);
			}
			function hc(l) {
				return Tn(l) ? l : On(l) ? $(Promise.resolve(l)) : Sa(l);
			}
			function dc(l, n, u) {
				return u
					? (function(l, n) {
							return ac(l, n);
					  })(l.queryParams, n.queryParams) &&
							(function l(n, u) {
								if (!mc(n.segments, u.segments)) return !1;
								if (n.numberOfChildren !== u.numberOfChildren) return !1;
								for (const e in u.children) {
									if (!n.children[e]) return !1;
									if (!l(n.children[e], u.children[e])) return !1;
								}
								return !0;
							})(l.root, n.root)
					: (function(l, n) {
							return Object.keys(n).length <= Object.keys(l).length && Object.keys(n).every((u) => n[u] === l[u]);
					  })(l.queryParams, n.queryParams) &&
							(function l(n, u) {
								return (function n(u, e, t) {
									if (u.segments.length > t.length) {
										return !!mc(u.segments.slice(0, t.length), t) && !e.hasChildren();
									}
									if (u.segments.length === t.length) {
										if (!mc(u.segments, t)) return !1;
										for (const n in e.children) {
											if (!u.children[n]) return !1;
											if (!l(u.children[n], e.children[n])) return !1;
										}
										return !0;
									}
									{
										const l = t.slice(0, u.segments.length),
											s = t.slice(u.segments.length);
										return !!mc(u.segments, l) && !!u.children[Ki] && n(u.children[Ki], e, s);
									}
								})(n, u, u.segments);
							})(l.root, n.root);
			}
			class pc {
				constructor(l, n, u) {
					(this.root = l), (this.queryParams = n), (this.fragment = u);
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = Ji(this.queryParams)), this._queryParamMap;
				}
				toString() {
					return jc.serialize(this);
				}
			}
			class gc {
				constructor(l, n) {
					(this.segments = l), (this.children = n), (this.parent = null), cc(n, (l, n) => (l.parent = this));
				}
				hasChildren() {
					return this.numberOfChildren > 0;
				}
				get numberOfChildren() {
					return Object.keys(this.children).length;
				}
				toString() {
					return vc(this);
				}
			}
			class fc {
				constructor(l, n) {
					(this.path = l), (this.parameters = n);
				}
				get parameterMap() {
					return this._parameterMap || (this._parameterMap = Ji(this.parameters)), this._parameterMap;
				}
				toString() {
					return Ec(this);
				}
			}
			function mc(l, n) {
				return l.length === n.length && l.every((l, u) => l.path === n[u].path);
			}
			function bc(l, n) {
				let u = [];
				return (
					cc(l.children, (l, e) => {
						e === Ki && (u = u.concat(n(l, e)));
					}),
					cc(l.children, (l, e) => {
						e !== Ki && (u = u.concat(n(l, e)));
					}),
					u
				);
			}
			class yc {}
			class wc {
				parse(l) {
					const n = new Mc(l);
					return new pc(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment());
				}
				serialize(l) {
					var n;
					return `${`/${(function l(n, u) {
						if (!n.hasChildren()) return vc(n);
						if (u) {
							const u = n.children[Ki] ? l(n.children[Ki], !1) : '',
								e = [];
							return (
								cc(n.children, (n, u) => {
									u !== Ki && e.push(`${u}:${l(n, !1)}`);
								}),
								e.length > 0 ? `${u}(${e.join('//')})` : u
							);
						}
						{
							const u = bc(n, (u, e) => (e === Ki ? [l(n.children[Ki], !1)] : [`${e}:${l(u, !1)}`]));
							return `${vc(n)}/(${u.join('//')})`;
						}
					})(l.root, !0)}`}${(function(l) {
						const n = Object.keys(l).map((n) => {
							const u = l[n];
							return Array.isArray(u) ? u.map((l) => `${_c(n)}=${_c(l)}`).join('&') : `${_c(n)}=${_c(u)}`;
						});
						return n.length ? `?${n.join('&')}` : '';
					})(l.queryParams)}${'string' == typeof l.fragment ? `#${((n = l.fragment), encodeURI(n))}` : ''}`;
				}
			}
			const jc = new wc();
			function vc(l) {
				return l.segments.map((l) => Ec(l)).join('/');
			}
			function xc(l) {
				return encodeURIComponent(l)
					.replace(/%40/g, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',');
			}
			function _c(l) {
				return xc(l).replace(/%3B/gi, ';');
			}
			function kc(l) {
				return xc(l)
					.replace(/\(/g, '%28')
					.replace(/\)/g, '%29')
					.replace(/%26/gi, '&');
			}
			function Cc(l) {
				return decodeURIComponent(l);
			}
			function Sc(l) {
				return Cc(l.replace(/\+/g, '%20'));
			}
			function Ec(l) {
				return `${kc(l.path)}${((n = l.parameters),
				Object.keys(n)
					.map((l) => `;${kc(l)}=${kc(n[l])}`)
					.join(''))}`;
				var n;
			}
			const Ic = /^[^\/()?;=#]+/;
			function Pc(l) {
				const n = l.match(Ic);
				return n ? n[0] : '';
			}
			const Oc = /^[^=?&#]+/,
				Tc = /^[^?&#]+/;
			class Mc {
				constructor(l) {
					(this.url = l), (this.remaining = l);
				}
				parseRootSegment() {
					return this.consumeOptional('/'), '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#') ? new gc([], {}) : new gc([], this.parseChildren());
				}
				parseQueryParams() {
					const l = {};
					if (this.consumeOptional('?'))
						do {
							this.parseQueryParam(l);
						} while (this.consumeOptional('&'));
					return l;
				}
				parseFragment() {
					return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
				}
				parseChildren() {
					if ('' === this.remaining) return {};
					this.consumeOptional('/');
					const l = [];
					for (this.peekStartsWith('(') || l.push(this.parseSegment()); this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/('); )
						this.capture('/'), l.push(this.parseSegment());
					let n = {};
					this.peekStartsWith('/(') && (this.capture('/'), (n = this.parseParens(!0)));
					let u = {};
					return this.peekStartsWith('(') && (u = this.parseParens(!1)), (l.length > 0 || Object.keys(n).length > 0) && (u[Ki] = new gc(l, n)), u;
				}
				parseSegment() {
					const l = Pc(this.remaining);
					if ('' === l && this.peekStartsWith(';')) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
					return this.capture(l), new fc(Cc(l), this.parseMatrixParams());
				}
				parseMatrixParams() {
					const l = {};
					for (; this.consumeOptional(';'); ) this.parseParam(l);
					return l;
				}
				parseParam(l) {
					const n = Pc(this.remaining);
					if (!n) return;
					this.capture(n);
					let u = '';
					if (this.consumeOptional('=')) {
						const l = Pc(this.remaining);
						l && this.capture((u = l));
					}
					l[Cc(n)] = Cc(u);
				}
				parseQueryParam(l) {
					const n = (function(l) {
						const n = l.match(Oc);
						return n ? n[0] : '';
					})(this.remaining);
					if (!n) return;
					this.capture(n);
					let u = '';
					if (this.consumeOptional('=')) {
						const l = (function(l) {
							const n = l.match(Tc);
							return n ? n[0] : '';
						})(this.remaining);
						l && this.capture((u = l));
					}
					const e = Sc(n),
						t = Sc(u);
					if (l.hasOwnProperty(e)) {
						let n = l[e];
						Array.isArray(n) || (l[e] = n = [n]), n.push(t);
					} else l[e] = t;
				}
				parseParens(l) {
					const n = {};
					for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
						const u = Pc(this.remaining),
							e = this.remaining[u.length];
						if ('/' !== e && ')' !== e && ';' !== e) throw new Error(`Cannot parse url '${this.url}'`);
						let t = void 0;
						u.indexOf(':') > -1 ? ((t = u.substr(0, u.indexOf(':'))), this.capture(t), this.capture(':')) : l && (t = Ki);
						const s = this.parseChildren();
						(n[t] = 1 === Object.keys(s).length ? s[Ki] : new gc([], s)), this.consumeOptional('//');
					}
					return n;
				}
				peekStartsWith(l) {
					return this.remaining.startsWith(l);
				}
				consumeOptional(l) {
					return !!this.peekStartsWith(l) && ((this.remaining = this.remaining.substring(l.length)), !0);
				}
				capture(l) {
					if (!this.consumeOptional(l)) throw new Error(`Expected "${l}".`);
				}
			}
			class Rc {
				constructor(l) {
					this._root = l;
				}
				get root() {
					return this._root.value;
				}
				parent(l) {
					const n = this.pathFromRoot(l);
					return n.length > 1 ? n[n.length - 2] : null;
				}
				children(l) {
					const n = Ac(l, this._root);
					return n ? n.children.map((l) => l.value) : [];
				}
				firstChild(l) {
					const n = Ac(l, this._root);
					return n && n.children.length > 0 ? n.children[0].value : null;
				}
				siblings(l) {
					const n = Nc(l, this._root);
					return n.length < 2 ? [] : n[n.length - 2].children.map((l) => l.value).filter((n) => n !== l);
				}
				pathFromRoot(l) {
					return Nc(l, this._root).map((l) => l.value);
				}
			}
			function Ac(l, n) {
				if (l === n.value) return n;
				for (const u of n.children) {
					const n = Ac(l, u);
					if (n) return n;
				}
				return null;
			}
			function Nc(l, n) {
				if (l === n.value) return [n];
				for (const u of n.children) {
					const e = Nc(l, u);
					if (e.length) return e.unshift(n), e;
				}
				return [];
			}
			class Dc {
				constructor(l, n) {
					(this.value = l), (this.children = n);
				}
				toString() {
					return `TreeNode(${this.value})`;
				}
			}
			function Uc(l) {
				const n = {};
				return l && l.children.forEach((l) => (n[l.value.outlet] = l)), n;
			}
			class Lc extends Rc {
				constructor(l, n) {
					super(l), (this.snapshot = n), Bc(this, l);
				}
				toString() {
					return this.snapshot.toString();
				}
			}
			function Vc(l, n) {
				const u = (function(l, n) {
						const u = new Hc([], {}, {}, '', {}, Ki, n, null, l.root, -1, {});
						return new $c('', new Dc(u, []));
					})(l, n),
					e = new Ea([new fc('', {})]),
					t = new Ea({}),
					s = new Ea({}),
					r = new Ea({}),
					a = new Ea(''),
					o = new Fc(e, t, r, a, s, Ki, n, u.root);
				return (o.snapshot = u.root), new Lc(new Dc(o, []), u);
			}
			class Fc {
				constructor(l, n, u, e, t, s, r, a) {
					(this.url = l), (this.params = n), (this.queryParams = u), (this.fragment = e), (this.data = t), (this.outlet = s), (this.component = r), (this._futureSnapshot = a);
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
					return this._paramMap || (this._paramMap = this.params.pipe(V((l) => Ji(l)))), this._paramMap;
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(V((l) => Ji(l)))), this._queryParamMap;
				}
				toString() {
					return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
				}
			}
			function zc(l, n = 'emptyOnly') {
				const u = l.pathFromRoot;
				let e = 0;
				if ('always' !== n)
					for (e = u.length - 1; e >= 1; ) {
						const l = u[e],
							n = u[e - 1];
						if (l.routeConfig && '' === l.routeConfig.path) e--;
						else {
							if (n.component) break;
							e--;
						}
					}
				return (function(l) {
					return l.reduce((l, n) => ({ params: Object.assign({}, l.params, n.params), data: Object.assign({}, l.data, n.data), resolve: Object.assign({}, l.resolve, n._resolvedData) }), {
						params: {},
						data: {},
						resolve: {}
					});
				})(u.slice(e));
			}
			class Hc {
				constructor(l, n, u, e, t, s, r, a, o, i, c) {
					(this.url = l),
						(this.params = n),
						(this.queryParams = u),
						(this.fragment = e),
						(this.data = t),
						(this.outlet = s),
						(this.component = r),
						(this.routeConfig = a),
						(this._urlSegment = o),
						(this._lastPathIndex = i),
						(this._resolve = c);
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
					return this._paramMap || (this._paramMap = Ji(this.params)), this._paramMap;
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = Ji(this.queryParams)), this._queryParamMap;
				}
				toString() {
					return `Route(url:'${this.url.map((l) => l.toString()).join('/')}', path:'${this.routeConfig ? this.routeConfig.path : ''}')`;
				}
			}
			class $c extends Rc {
				constructor(l, n) {
					super(n), (this.url = l), Bc(this, n);
				}
				toString() {
					return qc(this._root);
				}
			}
			function Bc(l, n) {
				(n.value._routerState = l), n.children.forEach((n) => Bc(l, n));
			}
			function qc(l) {
				const n = l.children.length > 0 ? ` { ${l.children.map(qc).join(', ')} } ` : '';
				return `${l.value}${n}`;
			}
			function Gc(l) {
				if (l.snapshot) {
					const n = l.snapshot,
						u = l._futureSnapshot;
					(l.snapshot = u),
						ac(n.queryParams, u.queryParams) || l.queryParams.next(u.queryParams),
						n.fragment !== u.fragment && l.fragment.next(u.fragment),
						ac(n.params, u.params) || l.params.next(u.params),
						(function(l, n) {
							if (l.length !== n.length) return !1;
							for (let u = 0; u < l.length; ++u) if (!ac(l[u], n[u])) return !1;
							return !0;
						})(n.url, u.url) || l.url.next(u.url),
						ac(n.data, u.data) || l.data.next(u.data);
				} else (l.snapshot = l._futureSnapshot), l.data.next(l._futureSnapshot.data);
			}
			function Zc(l, n) {
				var u, e;
				return (
					ac(l.params, n.params) && mc((u = l.url), (e = n.url)) && u.every((l, n) => ac(l.parameters, e[n].parameters)) && !(!l.parent != !n.parent) && (!l.parent || Zc(l.parent, n.parent))
				);
			}
			function Qc(l) {
				return 'object' == typeof l && null != l && !l.outlets && !l.segmentPath;
			}
			function Wc(l, n, u, e, t) {
				let s = {};
				return (
					e &&
						cc(e, (l, n) => {
							s[n] = Array.isArray(l) ? l.map((l) => `${l}`) : `${l}`;
						}),
					new pc(
						u.root === l
							? n
							: (function l(n, u, e) {
									const t = {};
									return (
										cc(n.children, (n, s) => {
											t[s] = n === u ? e : l(n, u, e);
										}),
										new gc(n.segments, t)
									);
							  })(u.root, l, n),
						s,
						t
					)
				);
			}
			class Kc {
				constructor(l, n, u) {
					if (((this.isAbsolute = l), (this.numberOfDoubleDots = n), (this.commands = u), l && u.length > 0 && Qc(u[0]))) throw new Error('Root segment cannot have matrix parameters');
					const e = u.find((l) => 'object' == typeof l && null != l && l.outlets);
					if (e && e !== ic(u)) throw new Error('{outlets:{}} has to be the last command');
				}
				toRoot() {
					return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
				}
			}
			class Yc {
				constructor(l, n, u) {
					(this.segmentGroup = l), (this.processChildren = n), (this.index = u);
				}
			}
			function Jc(l) {
				return 'object' == typeof l && null != l && l.outlets ? l.outlets[Ki] : `${l}`;
			}
			function Xc(l, n, u) {
				if ((l || (l = new gc([], {})), 0 === l.segments.length && l.hasChildren())) return lh(l, n, u);
				const e = (function(l, n, u) {
						let e = 0,
							t = n;
						const s = { match: !1, pathIndex: 0, commandIndex: 0 };
						for (; t < l.segments.length; ) {
							if (e >= u.length) return s;
							const n = l.segments[t],
								r = Jc(u[e]),
								a = e < u.length - 1 ? u[e + 1] : null;
							if (t > 0 && void 0 === r) break;
							if (r && a && 'object' == typeof a && void 0 === a.outlets) {
								if (!th(r, a, n)) return s;
								e += 2;
							} else {
								if (!th(r, {}, n)) return s;
								e++;
							}
							t++;
						}
						return { match: !0, pathIndex: t, commandIndex: e };
					})(l, n, u),
					t = u.slice(e.commandIndex);
				if (e.match && e.pathIndex < l.segments.length) {
					const n = new gc(l.segments.slice(0, e.pathIndex), {});
					return (n.children[Ki] = new gc(l.segments.slice(e.pathIndex), l.children)), lh(n, 0, t);
				}
				return e.match && 0 === t.length ? new gc(l.segments, {}) : e.match && !l.hasChildren() ? nh(l, n, u) : e.match ? lh(l, 0, t) : nh(l, n, u);
			}
			function lh(l, n, u) {
				if (0 === u.length) return new gc(l.segments, {});
				{
					const e = (function(l) {
							return 'object' != typeof l[0] ? { [Ki]: l } : void 0 === l[0].outlets ? { [Ki]: l } : l[0].outlets;
						})(u),
						t = {};
					return (
						cc(e, (u, e) => {
							null !== u && (t[e] = Xc(l.children[e], n, u));
						}),
						cc(l.children, (l, n) => {
							void 0 === e[n] && (t[n] = l);
						}),
						new gc(l.segments, t)
					);
				}
			}
			function nh(l, n, u) {
				const e = l.segments.slice(0, n);
				let t = 0;
				for (; t < u.length; ) {
					if ('object' == typeof u[t] && void 0 !== u[t].outlets) {
						const l = uh(u[t].outlets);
						return new gc(e, l);
					}
					if (0 === t && Qc(u[0])) {
						e.push(new fc(l.segments[n].path, u[0])), t++;
						continue;
					}
					const s = Jc(u[t]),
						r = t < u.length - 1 ? u[t + 1] : null;
					s && r && Qc(r) ? (e.push(new fc(s, eh(r))), (t += 2)) : (e.push(new fc(s, {})), t++);
				}
				return new gc(e, {});
			}
			function uh(l) {
				const n = {};
				return (
					cc(l, (l, u) => {
						null !== l && (n[u] = nh(new gc([], {}), 0, l));
					}),
					n
				);
			}
			function eh(l) {
				const n = {};
				return cc(l, (l, u) => (n[u] = `${l}`)), n;
			}
			function th(l, n, u) {
				return l == u.path && ac(n, u.parameters);
			}
			const sh = (l, n, u) => V((e) => (new rh(n, e.targetRouterState, e.currentRouterState, u).activate(l), e));
			class rh {
				constructor(l, n, u, e) {
					(this.routeReuseStrategy = l), (this.futureState = n), (this.currState = u), (this.forwardEvent = e);
				}
				activate(l) {
					const n = this.futureState._root,
						u = this.currState ? this.currState._root : null;
					this.deactivateChildRoutes(n, u, l), Gc(this.futureState.root), this.activateChildRoutes(n, u, l);
				}
				deactivateChildRoutes(l, n, u) {
					const e = Uc(n);
					l.children.forEach((l) => {
						const n = l.value.outlet;
						this.deactivateRoutes(l, e[n], u), delete e[n];
					}),
						cc(e, (l, n) => {
							this.deactivateRouteAndItsChildren(l, u);
						});
				}
				deactivateRoutes(l, n, u) {
					const e = l.value,
						t = n ? n.value : null;
					if (e === t)
						if (e.component) {
							const t = u.getContext(e.outlet);
							t && this.deactivateChildRoutes(l, n, t.children);
						} else this.deactivateChildRoutes(l, n, u);
					else t && this.deactivateRouteAndItsChildren(n, u);
				}
				deactivateRouteAndItsChildren(l, n) {
					this.routeReuseStrategy.shouldDetach(l.value.snapshot) ? this.detachAndStoreRouteSubtree(l, n) : this.deactivateRouteAndOutlet(l, n);
				}
				detachAndStoreRouteSubtree(l, n) {
					const u = n.getContext(l.value.outlet);
					if (u && u.outlet) {
						const n = u.outlet.detach(),
							e = u.children.onOutletDeactivated();
						this.routeReuseStrategy.store(l.value.snapshot, { componentRef: n, route: l, contexts: e });
					}
				}
				deactivateRouteAndOutlet(l, n) {
					const u = n.getContext(l.value.outlet);
					if (u) {
						const e = Uc(l),
							t = l.value.component ? u.children : n;
						cc(e, (l, n) => this.deactivateRouteAndItsChildren(l, t)), u.outlet && (u.outlet.deactivate(), u.children.onOutletDeactivated());
					}
				}
				activateChildRoutes(l, n, u) {
					const e = Uc(n);
					l.children.forEach((l) => {
						this.activateRoutes(l, e[l.value.outlet], u), this.forwardEvent(new Zi(l.value.snapshot));
					}),
						l.children.length && this.forwardEvent(new qi(l.value.snapshot));
				}
				activateRoutes(l, n, u) {
					const e = l.value,
						t = n ? n.value : null;
					if ((Gc(e), e === t))
						if (e.component) {
							const t = u.getOrCreateContext(e.outlet);
							this.activateChildRoutes(l, n, t.children);
						} else this.activateChildRoutes(l, n, u);
					else if (e.component) {
						const n = u.getOrCreateContext(e.outlet);
						if (this.routeReuseStrategy.shouldAttach(e.snapshot)) {
							const l = this.routeReuseStrategy.retrieve(e.snapshot);
							this.routeReuseStrategy.store(e.snapshot, null),
								n.children.onOutletReAttached(l.contexts),
								(n.attachRef = l.componentRef),
								(n.route = l.route.value),
								n.outlet && n.outlet.attach(l.componentRef, l.route.value),
								ah(l.route);
						} else {
							const u = (function(l) {
									for (let n = e.snapshot.parent; n; n = n.parent) {
										const l = n.routeConfig;
										if (l && l._loadedConfig) return l._loadedConfig;
										if (l && l.component) return null;
									}
									return null;
								})(),
								t = u ? u.module.componentFactoryResolver : null;
							(n.attachRef = null), (n.route = e), (n.resolver = t), n.outlet && n.outlet.activateWith(e, t), this.activateChildRoutes(l, null, n.children);
						}
					} else this.activateChildRoutes(l, null, u);
				}
			}
			function ah(l) {
				Gc(l.value), l.children.forEach(ah);
			}
			function oh(l) {
				return 'function' == typeof l;
			}
			function ih(l) {
				return l instanceof pc;
			}
			class ch {
				constructor(l) {
					this.segmentGroup = l || null;
				}
			}
			class hh {
				constructor(l) {
					this.urlTree = l;
				}
			}
			function dh(l) {
				return new v((n) => n.error(new ch(l)));
			}
			function ph(l) {
				return new v((n) => n.error(new hh(l)));
			}
			function gh(l) {
				return new v((n) => n.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${l}'`)));
			}
			class fh {
				constructor(l, n, u, e, t) {
					(this.configLoader = n), (this.urlSerializer = u), (this.urlTree = e), (this.config = t), (this.allowRedirects = !0), (this.ngModule = l.get(Wn));
				}
				apply() {
					return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, Ki)
						.pipe(V((l) => this.createUrlTree(l, this.urlTree.queryParams, this.urlTree.fragment)))
						.pipe(
							Ja((l) => {
								if (l instanceof hh) return (this.allowRedirects = !1), this.match(l.urlTree);
								if (l instanceof ch) throw this.noMatchError(l);
								throw l;
							})
						);
				}
				match(l) {
					return this.expandSegmentGroup(this.ngModule, this.config, l.root, Ki)
						.pipe(V((n) => this.createUrlTree(n, l.queryParams, l.fragment)))
						.pipe(
							Ja((l) => {
								if (l instanceof ch) throw this.noMatchError(l);
								throw l;
							})
						);
				}
				noMatchError(l) {
					return new Error(`Cannot match any routes. URL Segment: '${l.segmentGroup}'`);
				}
				createUrlTree(l, n, u) {
					const e = l.segments.length > 0 ? new gc([], { [Ki]: l }) : l;
					return new pc(e, n, u);
				}
				expandSegmentGroup(l, n, u, e) {
					return 0 === u.segments.length && u.hasChildren() ? this.expandChildren(l, n, u).pipe(V((l) => new gc([], l))) : this.expandSegment(l, u, n, u.segments, e, !0);
				}
				expandChildren(l, n, u) {
					return (function(l, n) {
						if (0 === Object.keys(l).length) return Sa({});
						const u = [],
							e = [],
							t = {};
						return (
							cc(l, (l, s) => {
								const r = n(s, l).pipe(V((l) => (t[s] = l)));
								s === Ki ? u.push(r) : e.push(r);
							}),
							Sa.apply(null, u.concat(e)).pipe(
								Da(),
								Ya(),
								V(() => t)
							)
						);
					})(u.children, (u, e) => this.expandSegmentGroup(l, n, e, u));
				}
				expandSegment(l, n, u, e, t, s) {
					return Sa(...u).pipe(
						V((r) =>
							this.expandSegmentAgainstRoute(l, n, u, r, e, t, s).pipe(
								Ja((l) => {
									if (l instanceof ch) return Sa(null);
									throw l;
								})
							)
						),
						Da(),
						to((l) => !!l),
						Ja((l, u) => {
							if (l instanceof Pa || 'EmptyError' === l.name) {
								if (this.noLeftoversInUrl(n, e, t)) return Sa(new gc([], {}));
								throw new ch(n);
							}
							throw l;
						})
					);
				}
				noLeftoversInUrl(l, n, u) {
					return 0 === n.length && !l.children[u];
				}
				expandSegmentAgainstRoute(l, n, u, e, t, s, r) {
					return wh(e) !== s
						? dh(n)
						: void 0 === e.redirectTo
						? this.matchSegmentAgainstRoute(l, n, e, t)
						: r && this.allowRedirects
						? this.expandSegmentAgainstRouteUsingRedirect(l, n, u, e, t, s)
						: dh(n);
				}
				expandSegmentAgainstRouteUsingRedirect(l, n, u, e, t, s) {
					return '**' === e.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(l, u, e, s) : this.expandRegularSegmentAgainstRouteUsingRedirect(l, n, u, e, t, s);
				}
				expandWildCardWithParamsAgainstRouteUsingRedirect(l, n, u, e) {
					const t = this.applyRedirectCommands([], u.redirectTo, {});
					return u.redirectTo.startsWith('/')
						? ph(t)
						: this.lineralizeSegments(u, t).pipe(
								B((u) => {
									const t = new gc(u, {});
									return this.expandSegment(l, t, n, u, e, !1);
								})
						  );
				}
				expandRegularSegmentAgainstRouteUsingRedirect(l, n, u, e, t, s) {
					const { matched: r, consumedSegments: a, lastChild: o, positionalParamSegments: i } = mh(n, e, t);
					if (!r) return dh(n);
					const c = this.applyRedirectCommands(a, e.redirectTo, i);
					return e.redirectTo.startsWith('/') ? ph(c) : this.lineralizeSegments(e, c).pipe(B((e) => this.expandSegment(l, n, u, e.concat(t.slice(o)), s, !1)));
				}
				matchSegmentAgainstRoute(l, n, u, e) {
					if ('**' === u.path) return u.loadChildren ? this.configLoader.load(l.injector, u).pipe(V((l) => ((u._loadedConfig = l), new gc(e, {})))) : Sa(new gc(e, {}));
					const { matched: t, consumedSegments: s, lastChild: r } = mh(n, u, e);
					if (!t) return dh(n);
					const a = e.slice(r);
					return this.getChildConfig(l, u, e).pipe(
						B((l) => {
							const u = l.module,
								e = l.routes,
								{ segmentGroup: t, slicedSegments: r } = (function(l, n, u, e) {
									return u.length > 0 &&
										(function(l, n, u) {
											return e.some((u) => yh(l, n, u) && wh(u) !== Ki);
										})(l, u)
										? {
												segmentGroup: bh(
													new gc(
														n,
														(function(l, n) {
															const u = {};
															u[Ki] = n;
															for (const e of l) '' === e.path && wh(e) !== Ki && (u[wh(e)] = new gc([], {}));
															return u;
														})(e, new gc(u, l.children))
													)
												),
												slicedSegments: []
										  }
										: 0 === u.length &&
										  (function(l, n, u) {
												return e.some((u) => yh(l, n, u));
										  })(l, u)
										? {
												segmentGroup: bh(
													new gc(
														l.segments,
														(function(l, n, u, e) {
															const t = {};
															for (const s of u) yh(l, n, s) && !e[wh(s)] && (t[wh(s)] = new gc([], {}));
															return Object.assign({}, e, t);
														})(l, u, e, l.children)
													)
												),
												slicedSegments: u
										  }
										: { segmentGroup: l, slicedSegments: u };
								})(n, s, a, e);
							return 0 === r.length && t.hasChildren()
								? this.expandChildren(u, e, t).pipe(V((l) => new gc(s, l)))
								: 0 === e.length && 0 === r.length
								? Sa(new gc(s, {}))
								: this.expandSegment(u, t, e, r, Ki, !0).pipe(V((l) => new gc(s.concat(l.segments), l.children)));
						})
					);
				}
				getChildConfig(l, n, u) {
					return n.children
						? Sa(new uc(n.children, l))
						: n.loadChildren
						? void 0 !== n._loadedConfig
							? Sa(n._loadedConfig)
							: (function(l, n, u) {
									const e = n.canLoad;
									return e && 0 !== e.length
										? $(e)
												.pipe(
													V((e) => {
														const t = l.get(e);
														let s;
														if (
															(function(l) {
																return l && oh(l.canLoad);
															})(t)
														)
															s = t.canLoad(n, u);
														else {
															if (!oh(t)) throw new Error('Invalid CanLoad guard');
															s = t(n, u);
														}
														return hc(s);
													})
												)
												.pipe(
													Da(),
													((t = (l) => !0 === l), (l) => l.lift(new so(t, void 0, l)))
												)
										: Sa(!0);
									var t;
							  })(l.injector, n, u).pipe(
									B((u) =>
										u
											? this.configLoader.load(l.injector, n).pipe(V((l) => ((n._loadedConfig = l), l)))
											: (function(l) {
													return new v((n) => n.error(lc(`Cannot load children because the guard of the route "path: '${l.path}'" returned false`)));
											  })(n)
									)
							  )
						: Sa(new uc([], l));
				}
				lineralizeSegments(l, n) {
					let u = [],
						e = n.root;
					for (;;) {
						if (((u = u.concat(e.segments)), 0 === e.numberOfChildren)) return Sa(u);
						if (e.numberOfChildren > 1 || !e.children[Ki]) return gh(l.redirectTo);
						e = e.children[Ki];
					}
				}
				applyRedirectCommands(l, n, u) {
					return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), l, u);
				}
				applyRedirectCreatreUrlTree(l, n, u, e) {
					const t = this.createSegmentGroup(l, n.root, u, e);
					return new pc(t, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment);
				}
				createQueryParams(l, n) {
					const u = {};
					return (
						cc(l, (l, e) => {
							if ('string' == typeof l && l.startsWith(':')) {
								const t = l.substring(1);
								u[e] = n[t];
							} else u[e] = l;
						}),
						u
					);
				}
				createSegmentGroup(l, n, u, e) {
					const t = this.createSegments(l, n.segments, u, e);
					let s = {};
					return (
						cc(n.children, (n, t) => {
							s[t] = this.createSegmentGroup(l, n, u, e);
						}),
						new gc(t, s)
					);
				}
				createSegments(l, n, u, e) {
					return n.map((n) => (n.path.startsWith(':') ? this.findPosParam(l, n, e) : this.findOrReturn(n, u)));
				}
				findPosParam(l, n, u) {
					const e = u[n.path.substring(1)];
					if (!e) throw new Error(`Cannot redirect to '${l}'. Cannot find '${n.path}'.`);
					return e;
				}
				findOrReturn(l, n) {
					let u = 0;
					for (const e of n) {
						if (e.path === l.path) return n.splice(u), e;
						u++;
					}
					return l;
				}
			}
			function mh(l, n, u) {
				if ('' === n.path)
					return 'full' === n.pathMatch && (l.hasChildren() || u.length > 0)
						? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
						: { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
				const e = (n.matcher || nc)(u, l, n);
				return e
					? { matched: !0, consumedSegments: e.consumed, lastChild: e.consumed.length, positionalParamSegments: e.posParams }
					: { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
			}
			function bh(l) {
				if (1 === l.numberOfChildren && l.children[Ki]) {
					const n = l.children[Ki];
					return new gc(l.segments.concat(n.segments), n.children);
				}
				return l;
			}
			function yh(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 !== u.redirectTo;
			}
			function wh(l) {
				return l.outlet || Ki;
			}
			class jh {
				constructor(l) {
					(this.path = l), (this.route = this.path[this.path.length - 1]);
				}
			}
			class vh {
				constructor(l, n) {
					(this.component = l), (this.route = n);
				}
			}
			function xh(l, n, u) {
				const e = l._root;
				return (function l(n, u, e, t, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
					const r = Uc(u);
					return (
						n.children.forEach((n) => {
							!(function(n, u, e, t, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
								const r = n.value,
									a = u ? u.value : null,
									o = e ? e.getContext(n.value.outlet) : null;
								if (a && r.routeConfig === a.routeConfig) {
									const i = (function(l, n, u) {
										if ('function' == typeof u) return u(l, n);
										switch (u) {
											case 'pathParamsChange':
												return !mc(l.url, n.url);
											case 'pathParamsOrQueryParamsChange':
												return !mc(l.url, n.url) || !ac(l.queryParams, n.queryParams);
											case 'always':
												return !0;
											case 'paramsOrQueryParamsChange':
												return !Zc(l, n) || !ac(l.queryParams, n.queryParams);
											case 'paramsChange':
											default:
												return !Zc(l, n);
										}
									})(a, r, r.routeConfig.runGuardsAndResolvers);
									if (
										(i ? s.canActivateChecks.push(new jh(t)) : ((r.data = a.data), (r._resolvedData = a._resolvedData)),
										l(n, u, r.component ? (o ? o.children : null) : e, t, s),
										i)
									) {
										s.canDeactivateChecks.push(new vh((o && o.outlet && o.outlet.component) || null, a));
									}
								} else a && kh(u, o, s), s.canActivateChecks.push(new jh(t)), l(n, null, r.component ? (o ? o.children : null) : e, t, s);
							})(n, r[n.value.outlet], e, t.concat([n.value]), s),
								delete r[n.value.outlet];
						}),
						cc(r, (l, n) => kh(l, e.getContext(n), s)),
						s
					);
				})(e, n ? n._root : null, u, [e.value]);
			}
			function _h(l, n, u) {
				const e = (function(l) {
					if (!l) return null;
					for (let n = l.parent; n; n = n.parent) {
						const l = n.routeConfig;
						if (l && l._loadedConfig) return l._loadedConfig;
					}
					return null;
				})(n);
				return (e ? e.module.injector : u).get(l);
			}
			function kh(l, n, u) {
				const e = Uc(l),
					t = l.value;
				cc(e, (l, e) => {
					kh(l, t.component ? (n ? n.children.getContext(e) : null) : n, u);
				}),
					u.canDeactivateChecks.push(new vh(t.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null, t));
			}
			const Ch = Symbol('INITIAL_VALUE');
			function Sh() {
				return ao((l) =>
					(function(...l) {
						let n = null,
							u = null;
						return P(l[l.length - 1]) && (u = l.pop()), 'function' == typeof l[l.length - 1] && (n = l.pop()), 1 === l.length && o(l[0]) && (l = l[0]), W(l, u).lift(new Ta(n));
					})(
						...l.map((l) =>
							l.pipe(
								no(1),
								(function(...l) {
									const n = l[l.length - 1];
									return P(n) ? (l.pop(), (u) => co(l, u, n)) : (n) => co(l, n);
								})(Ch)
							)
						)
					).pipe(
						ho((l, n) => {
							let u = !1;
							return n.reduce((l, e, t) => {
								if (l !== Ch) return l;
								if ((e === Ch && (u = !0), !u)) {
									if (!1 === e) return e;
									if (t === n.length - 1 || ih(e)) return e;
								}
								return l;
							}, l);
						}, Ch),
						Ua((l) => l !== Ch),
						V((l) => (ih(l) ? l : !0 === l)),
						no(1)
					)
				);
			}
			function Eh(l, n) {
				return null !== l && n && n(new Gi(l)), Sa(!0);
			}
			function Ih(l, n) {
				return null !== l && n && n(new Bi(l)), Sa(!0);
			}
			function Ph(l, n, u) {
				const e = n.routeConfig ? n.routeConfig.canActivate : null;
				return e && 0 !== e.length
					? Sa(
							e.map((e) =>
								Na(() => {
									const t = _h(e, n, u);
									let s;
									if (
										(function(l) {
											return l && oh(l.canActivate);
										})(t)
									)
										s = hc(t.canActivate(n, l));
									else {
										if (!oh(t)) throw new Error('Invalid CanActivate guard');
										s = hc(t(n, l));
									}
									return s.pipe(to());
								})
							)
					  ).pipe(Sh())
					: Sa(!0);
			}
			function Oh(l, n, u) {
				const e = n[n.length - 1],
					t = n
						.slice(0, n.length - 1)
						.reverse()
						.map((l) =>
							(function(l) {
								const n = l.routeConfig ? l.routeConfig.canActivateChild : null;
								return n && 0 !== n.length ? { node: l, guards: n } : null;
							})(l)
						)
						.filter((l) => null !== l)
						.map((n) =>
							Na(() =>
								Sa(
									n.guards.map((t) => {
										const s = _h(t, n.node, u);
										let r;
										if (
											(function(l) {
												return l && oh(l.canActivateChild);
											})(s)
										)
											r = hc(s.canActivateChild(e, l));
										else {
											if (!oh(s)) throw new Error('Invalid CanActivateChild guard');
											r = hc(s(e, l));
										}
										return r.pipe(to());
									})
								).pipe(Sh())
							)
						);
				return Sa(t).pipe(Sh());
			}
			class Th {}
			class Mh {
				constructor(l, n, u, e, t, s) {
					(this.rootComponentType = l), (this.config = n), (this.urlTree = u), (this.url = e), (this.paramsInheritanceStrategy = t), (this.relativeLinkResolution = s);
				}
				recognize() {
					try {
						const n = Nh(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
							u = this.processSegmentGroup(this.config, n, Ki),
							e = new Hc(
								[],
								Object.freeze({}),
								Object.freeze(Object.assign({}, this.urlTree.queryParams)),
								this.urlTree.fragment,
								{},
								Ki,
								this.rootComponentType,
								null,
								this.urlTree.root,
								-1,
								{}
							),
							t = new Dc(e, u),
							s = new $c(this.url, t);
						return this.inheritParamsAndData(s._root), Sa(s);
					} catch (l) {
						return new v((n) => n.error(l));
					}
				}
				inheritParamsAndData(l) {
					const n = l.value,
						u = zc(n, this.paramsInheritanceStrategy);
					(n.params = Object.freeze(u.params)), (n.data = Object.freeze(u.data)), l.children.forEach((l) => this.inheritParamsAndData(l));
				}
				processSegmentGroup(l, n, u) {
					return 0 === n.segments.length && n.hasChildren() ? this.processChildren(l, n) : this.processSegment(l, n, n.segments, u);
				}
				processChildren(l, n) {
					const u = bc(n, (n, u) => this.processSegmentGroup(l, n, u));
					return (
						(function(l) {
							const n = {};
							u.forEach((l) => {
								const u = n[l.value.outlet];
								if (u) {
									const n = u.url.map((l) => l.toString()).join('/'),
										e = l.value.url.map((l) => l.toString()).join('/');
									throw new Error(`Two segments cannot have the same outlet name: '${n}' and '${e}'.`);
								}
								n[l.value.outlet] = l.value;
							});
						})(),
						u.sort((l, n) => (l.value.outlet === Ki ? -1 : n.value.outlet === Ki ? 1 : l.value.outlet.localeCompare(n.value.outlet))),
						u
					);
				}
				processSegment(l, n, u, e) {
					for (const s of l)
						try {
							return this.processSegmentAgainstRoute(s, n, u, e);
						} catch (t) {
							if (!(t instanceof Th)) throw t;
						}
					if (this.noLeftoversInUrl(n, u, e)) return [];
					throw new Th();
				}
				noLeftoversInUrl(l, n, u) {
					return 0 === n.length && !l.children[u];
				}
				processSegmentAgainstRoute(l, n, u, e) {
					if (l.redirectTo) throw new Th();
					if ((l.outlet || Ki) !== e) throw new Th();
					let t,
						s = [],
						r = [];
					if ('**' === l.path) {
						const s = u.length > 0 ? ic(u).parameters : {};
						t = new Hc(u, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Lh(l), e, l.component, l, Rh(n), Ah(n) + u.length, Vh(l));
					} else {
						const a = (function(l, n, u) {
							if ('' === n.path) {
								if ('full' === n.pathMatch && (l.hasChildren() || u.length > 0)) throw new Th();
								return { consumedSegments: [], lastChild: 0, parameters: {} };
							}
							const e = (n.matcher || nc)(u, l, n);
							if (!e) throw new Th();
							const t = {};
							cc(e.posParams, (l, n) => {
								t[n] = l.path;
							});
							const s = e.consumed.length > 0 ? Object.assign({}, t, e.consumed[e.consumed.length - 1].parameters) : t;
							return { consumedSegments: e.consumed, lastChild: e.consumed.length, parameters: s };
						})(n, l, u);
						(s = a.consumedSegments),
							(r = u.slice(a.lastChild)),
							(t = new Hc(s, a.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Lh(l), e, l.component, l, Rh(n), Ah(n) + s.length, Vh(l)));
					}
					const a = (function(l) {
							return l.children ? l.children : l.loadChildren ? l._loadedConfig.routes : [];
						})(l),
						{ segmentGroup: o, slicedSegments: i } = Nh(n, s, r, a, this.relativeLinkResolution);
					if (0 === i.length && o.hasChildren()) {
						const l = this.processChildren(a, o);
						return [new Dc(t, l)];
					}
					if (0 === a.length && 0 === i.length) return [new Dc(t, [])];
					const c = this.processSegment(a, o, i, Ki);
					return [new Dc(t, c)];
				}
			}
			function Rh(l) {
				let n = l;
				for (; n._sourceSegment; ) n = n._sourceSegment;
				return n;
			}
			function Ah(l) {
				let n = l,
					u = n._segmentIndexShift ? n._segmentIndexShift : 0;
				for (; n._sourceSegment; ) u += (n = n._sourceSegment)._segmentIndexShift ? n._segmentIndexShift : 0;
				return u - 1;
			}
			function Nh(l, n, u, e, t) {
				if (
					u.length > 0 &&
					(function(l, n, u) {
						return e.some((u) => Dh(l, n, u) && Uh(u) !== Ki);
					})(l, u)
				) {
					const t = new gc(
						n,
						(function(l, n, u, e) {
							const t = {};
							(t[Ki] = e), (e._sourceSegment = l), (e._segmentIndexShift = n.length);
							for (const s of u)
								if ('' === s.path && Uh(s) !== Ki) {
									const u = new gc([], {});
									(u._sourceSegment = l), (u._segmentIndexShift = n.length), (t[Uh(s)] = u);
								}
							return t;
						})(l, n, e, new gc(u, l.children))
					);
					return (t._sourceSegment = l), (t._segmentIndexShift = n.length), { segmentGroup: t, slicedSegments: [] };
				}
				if (
					0 === u.length &&
					(function(l, n, u) {
						return e.some((u) => Dh(l, n, u));
					})(l, u)
				) {
					const s = new gc(
						l.segments,
						(function(l, n, u, e, t, s) {
							const r = {};
							for (const a of e)
								if (Dh(l, u, a) && !t[Uh(a)]) {
									const u = new gc([], {});
									(u._sourceSegment = l), (u._segmentIndexShift = 'legacy' === s ? l.segments.length : n.length), (r[Uh(a)] = u);
								}
							return Object.assign({}, t, r);
						})(l, n, u, e, l.children, t)
					);
					return (s._sourceSegment = l), (s._segmentIndexShift = n.length), { segmentGroup: s, slicedSegments: u };
				}
				const s = new gc(l.segments, l.children);
				return (s._sourceSegment = l), (s._segmentIndexShift = n.length), { segmentGroup: s, slicedSegments: u };
			}
			function Dh(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 === u.redirectTo;
			}
			function Uh(l) {
				return l.outlet || Ki;
			}
			function Lh(l) {
				return l.data || {};
			}
			function Vh(l) {
				return l.resolve || {};
			}
			function Fh(l, n, u, e) {
				const t = _h(l, n, e);
				return hc(t.resolve ? t.resolve(n, u) : t(n, u));
			}
			function zh(l) {
				return function(n) {
					return n.pipe(
						ao((n) => {
							const u = l(n);
							return u ? $(u).pipe(V(() => n)) : $([n]);
						})
					);
				};
			}
			class Hh {}
			class $h {
				shouldDetach(l) {
					return !1;
				}
				store(l, n) {}
				shouldAttach(l) {
					return !1;
				}
				retrieve(l) {
					return null;
				}
				shouldReuseRoute(l, n) {
					return l.routeConfig === n.routeConfig;
				}
			}
			const Bh = new kl('ROUTES');
			class qh {
				constructor(l, n, u, e) {
					(this.loader = l), (this.compiler = n), (this.onLoadStartListener = u), (this.onLoadEndListener = e);
				}
				load(l, n) {
					return (
						this.onLoadStartListener && this.onLoadStartListener(n),
						this.loadModuleFactory(n.loadChildren).pipe(
							V((u) => {
								this.onLoadEndListener && this.onLoadEndListener(n);
								const e = u.create(l);
								return new uc(oc(e.injector.get(Bh)).map(rc), e);
							})
						)
					);
				}
				loadModuleFactory(l) {
					return 'string' == typeof l ? $(this.loader.load(l)) : hc(l()).pipe(B((l) => (l instanceof Kn ? Sa(l) : $(this.compiler.compileModuleAsync(l)))));
				}
			}
			class Gh {}
			class Zh {
				shouldProcessUrl(l) {
					return !0;
				}
				extract(l) {
					return l;
				}
				merge(l, n) {
					return l;
				}
			}
			function Qh(l) {
				throw l;
			}
			function Wh(l, n, u) {
				return n.parse('/');
			}
			function Kh(l, n) {
				return Sa(null);
			}
			class Yh {
				constructor(l, n, u, e, t, s, r, a) {
					(this.rootComponentType = l),
						(this.urlSerializer = n),
						(this.rootContexts = u),
						(this.location = e),
						(this.config = a),
						(this.lastSuccessfulNavigation = null),
						(this.currentNavigation = null),
						(this.navigationId = 0),
						(this.isNgZoneEnabled = !1),
						(this.events = new E()),
						(this.errorHandler = Qh),
						(this.malformedUriErrorHandler = Wh),
						(this.navigated = !1),
						(this.lastSuccessfulId = -1),
						(this.hooks = { beforePreactivation: Kh, afterPreactivation: Kh }),
						(this.urlHandlingStrategy = new Zh()),
						(this.routeReuseStrategy = new $h()),
						(this.onSameUrlNavigation = 'ignore'),
						(this.paramsInheritanceStrategy = 'emptyOnly'),
						(this.urlUpdateStrategy = 'deferred'),
						(this.relativeLinkResolution = 'legacy'),
						(this.ngModule = t.get(Wn)),
						(this.console = t.get(It));
					const o = t.get(Bt);
					(this.isNgZoneEnabled = o instanceof Bt),
						this.resetConfig(a),
						(this.currentUrlTree = new pc(new gc([], {}), {}, null)),
						(this.rawUrlTree = this.currentUrlTree),
						(this.browserUrlTree = this.currentUrlTree),
						(this.configLoader = new qh(s, r, (l) => this.triggerEvent(new Hi(l)), (l) => this.triggerEvent(new $i(l)))),
						(this.routerState = Vc(this.currentUrlTree, this.rootComponentType)),
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
				setupNavigations(l) {
					const n = this.events;
					return l.pipe(
						Ua((l) => 0 !== l.id),
						V((l) => Object.assign({}, l, { extractedUrl: this.urlHandlingStrategy.extract(l.rawUrl) })),
						ao((l) => {
							let u = !1,
								e = !1;
							return Sa(l).pipe(
								mo((l) => {
									this.currentNavigation = {
										id: l.id,
										initialUrl: l.currentRawUrl,
										extractedUrl: l.extractedUrl,
										trigger: l.source,
										extras: l.extras,
										previousNavigation: this.lastSuccessfulNavigation ? Object.assign({}, this.lastSuccessfulNavigation, { previousNavigation: null }) : null
									};
								}),
								ao((l) => {
									const u = !this.navigated || l.extractedUrl.toString() !== this.browserUrlTree.toString();
									if (('reload' === this.onSameUrlNavigation || u) && this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
										return Sa(l).pipe(
											ao((l) => {
												const u = this.transitions.getValue();
												return n.next(new Ri(l.id, this.serializeUrl(l.extractedUrl), l.source, l.restoredState)), u !== this.transitions.getValue() ? Ra : [l];
											}),
											ao((l) => Promise.resolve(l)),
											(function(l, n, u, e) {
												return function(t) {
													return t.pipe(
														ao((t) =>
															(function(l, n, u, e, s) {
																return new fh(l, n, u, t.extractedUrl, s).apply();
															})(l, n, u, 0, e).pipe(V((l) => Object.assign({}, t, { urlAfterRedirects: l })))
														)
													);
												};
											})(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config),
											mo((l) => {
												this.currentNavigation = Object.assign({}, this.currentNavigation, { finalUrl: l.urlAfterRedirects });
											}),
											(function(l, n, u, e, t) {
												return function(s) {
													return s.pipe(
														B((s) =>
															(function(l, n, u, e, t = 'emptyOnly', s = 'legacy') {
																return new Mh(l, n, u, e, t, s).recognize();
															})(l, n, s.urlAfterRedirects, u(s.urlAfterRedirects), e, t).pipe(V((l) => Object.assign({}, s, { targetSnapshot: l })))
														)
													);
												};
											})(this.rootComponentType, this.config, (l) => this.serializeUrl(l), this.paramsInheritanceStrategy, this.relativeLinkResolution),
											mo((l) => {
												'eager' === this.urlUpdateStrategy &&
													(l.extras.skipLocationChange || this.setBrowserUrl(l.urlAfterRedirects, !!l.extras.replaceUrl, l.id, l.extras.state),
													(this.browserUrlTree = l.urlAfterRedirects));
											}),
											mo((l) => {
												const u = new Ui(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
												n.next(u);
											})
										);
									if (u && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
										const { id: u, extractedUrl: e, source: t, restoredState: s, extras: r } = l,
											a = new Ri(u, this.serializeUrl(e), t, s);
										n.next(a);
										const o = Vc(e, this.rootComponentType).snapshot;
										return Sa(Object.assign({}, l, { targetSnapshot: o, urlAfterRedirects: e, extras: Object.assign({}, r, { skipLocationChange: !1, replaceUrl: !1 }) }));
									}
									return (this.rawUrlTree = l.rawUrl), (this.browserUrlTree = l.urlAfterRedirects), l.resolve(null), Ra;
								}),
								zh((l) => {
									const {
										targetSnapshot: n,
										id: u,
										extractedUrl: e,
										rawUrl: t,
										extras: { skipLocationChange: s, replaceUrl: r }
									} = l;
									return this.hooks.beforePreactivation(n, { navigationId: u, appliedUrlTree: e, rawUrlTree: t, skipLocationChange: !!s, replaceUrl: !!r });
								}),
								mo((l) => {
									const n = new Li(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
									this.triggerEvent(n);
								}),
								V((l) => Object.assign({}, l, { guards: xh(l.targetSnapshot, l.currentSnapshot, this.rootContexts) })),
								(function(l, n) {
									return function(u) {
										return u.pipe(
											B((u) => {
												const {
													targetSnapshot: e,
													currentSnapshot: t,
													guards: { canActivateChecks: s, canDeactivateChecks: r }
												} = u;
												return 0 === r.length && 0 === s.length
													? Sa(Object.assign({}, u, { guardsResult: !0 }))
													: (function(l, n, u, e) {
															return $(r).pipe(
																B((l) =>
																	(function(l, n, u, e, t) {
																		const s = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
																		return s && 0 !== s.length
																			? Sa(
																					s.map((s) => {
																						const r = _h(s, n, t);
																						let a;
																						if (
																							(function(l) {
																								return l && oh(l.canDeactivate);
																							})(r)
																						)
																							a = hc(r.canDeactivate(l, n, u, e));
																						else {
																							if (!oh(r)) throw new Error('Invalid CanDeactivate guard');
																							a = hc(r(l, n, u, e));
																						}
																						return a.pipe(to());
																					})
																			  ).pipe(Sh())
																			: Sa(!0);
																	})(l.component, l.route, u, n, e)
																),
																to((l) => !0 !== l, !0)
															);
													  })(0, e, t, l).pipe(
															B((u) =>
																u &&
																(function(l) {
																	return 'boolean' == typeof u;
																})()
																	? (function(l, n, u, e) {
																			return $(s).pipe(
																				fo((n) =>
																					$([Ih(n.route.parent, e), Eh(n.route, e), Oh(l, n.path, u), Ph(l, n.route, u)]).pipe(
																						Da(),
																						to((l) => !0 !== l, !0)
																					)
																				),
																				to((l) => !0 !== l, !0)
																			);
																	  })(e, 0, l, n)
																	: Sa(u)
															),
															V((l) => Object.assign({}, u, { guardsResult: l }))
													  );
											})
										);
									};
								})(this.ngModule.injector, (l) => this.triggerEvent(l)),
								mo((l) => {
									if (ih(l.guardsResult)) {
										const n = lc(`Redirecting to "${this.serializeUrl(l.guardsResult)}"`);
										throw ((n.url = l.guardsResult), n);
									}
								}),
								mo((l) => {
									const n = new Vi(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(l.urlAfterRedirects), l.targetSnapshot, !!l.guardsResult);
									this.triggerEvent(n);
								}),
								Ua((l) => {
									if (!l.guardsResult) {
										this.resetUrlToCurrentUrlTree();
										const u = new Ni(l.id, this.serializeUrl(l.extractedUrl), '');
										return n.next(u), l.resolve(!1), !1;
									}
									return !0;
								}),
								zh((l) => {
									if (l.guards.canActivateChecks.length)
										return Sa(l).pipe(
											mo((l) => {
												const n = new Fi(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
												this.triggerEvent(n);
											}),
											(function(l, n) {
												return function(u) {
													return u.pipe(
														B((u) => {
															const {
																targetSnapshot: e,
																guards: { canActivateChecks: t }
															} = u;
															return t.length
																? $(t).pipe(
																		fo((u) =>
																			(function(l, n, u, t) {
																				return (function(l, n, u, e) {
																					const t = Object.keys(l);
																					if (0 === t.length) return Sa({});
																					if (1 === t.length) {
																						const s = t[0];
																						return Fh(l[s], n, u, e).pipe(V((l) => ({ [s]: l })));
																					}
																					const s = {};
																					return $(t)
																						.pipe(B((t) => Fh(l[t], n, u, e).pipe(V((l) => ((s[t] = l), l)))))
																						.pipe(
																							Ya(),
																							V(() => s)
																						);
																				})(l._resolve, l, e, t).pipe(
																					V((n) => ((l._resolvedData = n), (l.data = Object.assign({}, l.data, zc(l, u).resolve)), null))
																				);
																			})(u.route, 0, l, n)
																		),
																		(function(l, n) {
																			return arguments.length >= 2
																				? function(n) {
																						return w(ho(l, void 0), Ha(1), Qa(void 0))(n);
																				  }
																				: function(n) {
																						return w(ho((n, u, e) => l(n)), Ha(1))(n);
																				  };
																		})((l, n) => l),
																		V((l) => u)
																  )
																: Sa(u);
														})
													);
												};
											})(this.paramsInheritanceStrategy, this.ngModule.injector),
											mo((l) => {
												const n = new zi(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
												this.triggerEvent(n);
											})
										);
								}),
								zh((l) => {
									const {
										targetSnapshot: n,
										id: u,
										extractedUrl: e,
										rawUrl: t,
										extras: { skipLocationChange: s, replaceUrl: r }
									} = l;
									return this.hooks.afterPreactivation(n, { navigationId: u, appliedUrlTree: e, rawUrlTree: t, skipLocationChange: !!s, replaceUrl: !!r });
								}),
								V((l) => {
									const n = (function(l, n, u) {
										const e = (function l(n, u, e) {
											if (e && n.shouldReuseRoute(u.value, e.value.snapshot)) {
												const t = e.value;
												t._futureSnapshot = u.value;
												const s = (function(n, u, e) {
													return u.children.map((u) => {
														for (const t of e.children) if (n.shouldReuseRoute(t.value.snapshot, u.value)) return l(n, u, t);
														return l(n, u);
													});
												})(n, u, e);
												return new Dc(t, s);
											}
											{
												const e = n.retrieve(u.value);
												if (e) {
													const l = e.route;
													return (
														(function l(n, u) {
															if (n.value.routeConfig !== u.value.routeConfig) throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
															if (n.children.length !== u.children.length) throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
															u.value._futureSnapshot = n.value;
															for (let e = 0; e < n.children.length; ++e) l(n.children[e], u.children[e]);
														})(u, l),
														l
													);
												}
												{
													const e = new Fc(new Ea((t = u.value).url), new Ea(t.params), new Ea(t.queryParams), new Ea(t.fragment), new Ea(t.data), t.outlet, t.component, t),
														s = u.children.map((u) => l(n, u));
													return new Dc(e, s);
												}
											}
											var t;
										})(l, n._root, u ? u._root : void 0);
										return new Lc(e, n);
									})(this.routeReuseStrategy, l.targetSnapshot, l.currentRouterState);
									return Object.assign({}, l, { targetRouterState: n });
								}),
								mo((l) => {
									(this.currentUrlTree = l.urlAfterRedirects),
										(this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, l.rawUrl)),
										(this.routerState = l.targetRouterState),
										'deferred' === this.urlUpdateStrategy &&
											(l.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!l.extras.replaceUrl, l.id, l.extras.state),
											(this.browserUrlTree = l.urlAfterRedirects));
								}),
								sh(this.rootContexts, this.routeReuseStrategy, (l) => this.triggerEvent(l)),
								mo({
									next() {
										u = !0;
									},
									complete() {
										u = !0;
									}
								}),
								(function(l) {
									return (n) => n.lift(new wo(l));
								})(() => {
									if (!u && !e) {
										this.resetUrlToCurrentUrlTree();
										const u = new Ni(l.id, this.serializeUrl(l.extractedUrl), `Navigation ID ${l.id} is not equal to the current navigation id ${this.navigationId}`);
										n.next(u), l.resolve(!1);
									}
									this.currentNavigation = null;
								}),
								Ja((u) => {
									if (
										((e = !0),
										(function(l) {
											return u && u[Xi];
										})())
									) {
										const e = ih(u.url);
										e || ((this.navigated = !0), this.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl));
										const t = new Ni(l.id, this.serializeUrl(l.extractedUrl), u.message);
										n.next(t), l.resolve(!1), e && this.navigateByUrl(u.url);
									} else {
										this.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl);
										const e = new Di(l.id, this.serializeUrl(l.extractedUrl), u);
										n.next(e);
										try {
											l.resolve(this.errorHandler(u));
										} catch (t) {
											l.reject(t);
										}
									}
									return Ra;
								})
							);
						})
					);
				}
				resetRootComponentType(l) {
					(this.rootComponentType = l), (this.routerState.root.component = this.rootComponentType);
				}
				getTransition() {
					const l = this.transitions.value;
					return (l.urlAfterRedirects = this.browserUrlTree), l;
				}
				setTransition(l) {
					this.transitions.next(Object.assign({}, this.getTransition(), l));
				}
				initialNavigation() {
					this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
				}
				setUpLocationChangeListener() {
					this.locationSubscription ||
						(this.locationSubscription = this.location.subscribe((l) => {
							let n = this.parseUrl(l.url);
							const u = 'popstate' === l.type ? 'popstate' : 'hashchange',
								e = l.state && l.state.navigationId ? l.state : null;
							setTimeout(() => {
								this.scheduleNavigation(n, u, e, { replaceUrl: !0 });
							}, 0);
						}));
				}
				get url() {
					return this.serializeUrl(this.currentUrlTree);
				}
				getCurrentNavigation() {
					return this.currentNavigation;
				}
				triggerEvent(l) {
					this.events.next(l);
				}
				resetConfig(l) {
					ec(l), (this.config = l.map(rc)), (this.navigated = !1), (this.lastSuccessfulId = -1);
				}
				ngOnDestroy() {
					this.dispose();
				}
				dispose() {
					this.locationSubscription && (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
				}
				createUrlTree(l, n = {}) {
					const { relativeTo: u, queryParams: e, fragment: t, preserveQueryParams: s, queryParamsHandling: r, preserveFragment: a } = n;
					nn() && s && console && console.warn && console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
					const o = u || this.routerState.root,
						i = a ? this.currentUrlTree.fragment : t;
					let c = null;
					if (r)
						switch (r) {
							case 'merge':
								c = Object.assign({}, this.currentUrlTree.queryParams, e);
								break;
							case 'preserve':
								c = this.currentUrlTree.queryParams;
								break;
							default:
								c = e || null;
						}
					else c = s ? this.currentUrlTree.queryParams : e || null;
					return (
						null !== c && (c = this.removeEmptyProps(c)),
						(function(l, n, u, e, t) {
							if (0 === u.length) return Wc(n.root, n.root, n, e, t);
							const s = (function(l) {
								if ('string' == typeof l[0] && 1 === l.length && '/' === l[0]) return new Kc(!0, 0, l);
								let n = 0,
									u = !1;
								const e = l.reduce((l, e, t) => {
									if ('object' == typeof e && null != e) {
										if (e.outlets) {
											const n = {};
											return (
												cc(e.outlets, (l, u) => {
													n[u] = 'string' == typeof l ? l.split('/') : l;
												}),
												[...l, { outlets: n }]
											);
										}
										if (e.segmentPath) return [...l, e.segmentPath];
									}
									return 'string' != typeof e
										? [...l, e]
										: 0 === t
										? (e.split('/').forEach((e, t) => {
												(0 == t && '.' === e) || (0 == t && '' === e ? (u = !0) : '..' === e ? n++ : '' != e && l.push(e));
										  }),
										  l)
										: [...l, e];
								}, []);
								return new Kc(u, n, e);
							})(u);
							if (s.toRoot()) return Wc(n.root, new gc([], {}), n, e, t);
							const r = (function(l, u, e) {
									if (l.isAbsolute) return new Yc(n.root, !0, 0);
									if (-1 === e.snapshot._lastPathIndex) return new Yc(e.snapshot._urlSegment, !0, 0);
									const t = Qc(l.commands[0]) ? 0 : 1;
									return (function(n, u, s) {
										let r = e.snapshot._urlSegment,
											a = e.snapshot._lastPathIndex + t,
											o = l.numberOfDoubleDots;
										for (; o > a; ) {
											if (((o -= a), !(r = r.parent))) throw new Error("Invalid number of '../'");
											a = r.segments.length;
										}
										return new Yc(r, !1, a - o);
									})();
								})(s, 0, l),
								a = r.processChildren ? lh(r.segmentGroup, r.index, s.commands) : Xc(r.segmentGroup, r.index, s.commands);
							return Wc(r.segmentGroup, a, n, e, t);
						})(o, this.currentUrlTree, l, c, i)
					);
				}
				navigateByUrl(l, n = { skipLocationChange: !1 }) {
					nn() && this.isNgZoneEnabled && !Bt.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
					const u = ih(l) ? l : this.parseUrl(l),
						e = this.urlHandlingStrategy.merge(u, this.rawUrlTree);
					return this.scheduleNavigation(e, 'imperative', null, n);
				}
				navigate(l, n = { skipLocationChange: !1 }) {
					return (
						(function(l) {
							for (let n = 0; n < l.length; n++) {
								const u = l[n];
								if (null == u) throw new Error(`The requested path contains ${u} segment at index ${n}`);
							}
						})(l),
						this.navigateByUrl(this.createUrlTree(l, n), n)
					);
				}
				serializeUrl(l) {
					return this.urlSerializer.serialize(l);
				}
				parseUrl(l) {
					let n;
					try {
						n = this.urlSerializer.parse(l);
					} catch (u) {
						n = this.malformedUriErrorHandler(u, this.urlSerializer, l);
					}
					return n;
				}
				isActive(l, n) {
					if (ih(l)) return dc(this.currentUrlTree, l, n);
					const u = this.parseUrl(l);
					return dc(this.currentUrlTree, u, n);
				}
				removeEmptyProps(l) {
					return Object.keys(l).reduce((n, u) => {
						const e = l[u];
						return null != e && (n[u] = e), n;
					}, {});
				}
				processNavigations() {
					this.navigations.subscribe(
						(l) => {
							(this.navigated = !0),
								(this.lastSuccessfulId = l.id),
								this.events.next(new Ai(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(this.currentUrlTree))),
								(this.lastSuccessfulNavigation = this.currentNavigation),
								(this.currentNavigation = null),
								l.resolve(!0);
						},
						(l) => {
							this.console.warn('Unhandled Navigation Error: ');
						}
					);
				}
				scheduleNavigation(l, n, u, e) {
					const t = this.getTransition();
					if (t && 'imperative' !== n && 'imperative' === t.source && t.rawUrl.toString() === l.toString()) return Promise.resolve(!0);
					if (t && 'hashchange' == n && 'popstate' === t.source && t.rawUrl.toString() === l.toString()) return Promise.resolve(!0);
					if (t && 'popstate' == n && 'hashchange' === t.source && t.rawUrl.toString() === l.toString()) return Promise.resolve(!0);
					let s = null,
						r = null;
					const a = new Promise((l, n) => {
							(s = l), (r = n);
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
							resolve: s,
							reject: r,
							promise: a,
							currentSnapshot: this.routerState.snapshot,
							currentRouterState: this.routerState
						}),
						a.catch((l) => Promise.reject(l))
					);
				}
				setBrowserUrl(l, n, u, e) {
					const t = this.urlSerializer.serialize(l);
					(e = e || {}),
						this.location.isCurrentPathEqualTo(t) || n
							? this.location.replaceState(t, '', Object.assign({}, e, { navigationId: u }))
							: this.location.go(t, '', Object.assign({}, e, { navigationId: u }));
				}
				resetStateAndUrl(l, n, u) {
					(this.routerState = l), (this.currentUrlTree = n), (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, u)), this.resetUrlToCurrentUrlTree();
				}
				resetUrlToCurrentUrlTree() {
					this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', { navigationId: this.lastSuccessfulId });
				}
			}
			class Jh {
				constructor() {
					(this.outlet = null), (this.route = null), (this.resolver = null), (this.children = new Xh()), (this.attachRef = null);
				}
			}
			class Xh {
				constructor() {
					this.contexts = new Map();
				}
				onChildOutletCreated(l, n) {
					const u = this.getOrCreateContext(l);
					(u.outlet = n), this.contexts.set(l, u);
				}
				onChildOutletDestroyed(l) {
					const n = this.getContext(l);
					n && (n.outlet = null);
				}
				onOutletDeactivated() {
					const l = this.contexts;
					return (this.contexts = new Map()), l;
				}
				onOutletReAttached(l) {
					this.contexts = l;
				}
				getOrCreateContext(l) {
					let n = this.getContext(l);
					return n || ((n = new Jh()), this.contexts.set(l, n)), n;
				}
				getContext(l) {
					return this.contexts.get(l) || null;
				}
			}
			const ld = (() =>
				class {
					constructor(l, n, u, e, t) {
						(this.parentContexts = l),
							(this.location = n),
							(this.resolver = u),
							(this.changeDetector = t),
							(this.activated = null),
							(this._activatedRoute = null),
							(this.activateEvents = new bt()),
							(this.deactivateEvents = new bt()),
							(this.name = e || Ki),
							l.onChildOutletCreated(this.name, this);
					}
					ngOnDestroy() {
						this.parentContexts.onChildOutletDestroyed(this.name);
					}
					ngOnInit() {
						if (!this.activated) {
							const l = this.parentContexts.getContext(this.name);
							l && l.route && (l.attachRef ? this.attach(l.attachRef, l.route) : this.activateWith(l.route, l.resolver || null));
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
						const l = this.activated;
						return (this.activated = null), (this._activatedRoute = null), l;
					}
					attach(l, n) {
						(this.activated = l), (this._activatedRoute = n), this.location.insert(l.hostView);
					}
					deactivate() {
						if (this.activated) {
							const l = this.component;
							this.activated.destroy(), (this.activated = null), (this._activatedRoute = null), this.deactivateEvents.emit(l);
						}
					}
					activateWith(l, n) {
						if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
						this._activatedRoute = l;
						const u = (n = n || this.resolver).resolveComponentFactory(l._futureSnapshot.routeConfig.component),
							e = this.parentContexts.getOrCreateContext(this.name).children,
							t = new nd(l, e, this.location.injector);
						(this.activated = this.location.createComponent(u, this.location.length, t)), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
					}
				})();
			class nd {
				constructor(l, n, u) {
					(this.route = l), (this.childContexts = n), (this.parent = u);
				}
				get(l, n) {
					return l === Fc ? this.route : l === Xh ? this.childContexts : this.parent.get(l, n);
				}
			}
			class ud {}
			class ed {
				preload(l, n) {
					return n().pipe(Ja(() => Sa(null)));
				}
			}
			class td {
				preload(l, n) {
					return Sa(null);
				}
			}
			const sd = (() =>
				class {
					constructor(l, n, u, e, t) {
						(this.router = l), (this.injector = e), (this.preloadingStrategy = t), (this.loader = new qh(n, u, (n) => l.triggerEvent(new Hi(n)), (n) => l.triggerEvent(new $i(n))));
					}
					setUpPreloading() {
						this.subscription = this.router.events
							.pipe(
								Ua((l) => l instanceof Ai),
								fo(() => this.preload())
							)
							.subscribe(() => {});
					}
					preload() {
						const l = this.injector.get(Wn);
						return this.processRoutes(l, this.router.config);
					}
					ngOnDestroy() {
						this.subscription.unsubscribe();
					}
					processRoutes(l, n) {
						const u = [];
						for (const e of n)
							if (e.loadChildren && !e.canLoad && e._loadedConfig) {
								const l = e._loadedConfig;
								u.push(this.processRoutes(l.module, l.routes));
							} else e.loadChildren && !e.canLoad ? u.push(this.preloadConfig(l, e)) : e.children && u.push(this.processRoutes(l, e.children));
						return $(u).pipe(
							Q(),
							V((l) => void 0)
						);
					}
					preloadConfig(l, n) {
						return this.preloadingStrategy.preload(n, () => this.loader.load(l.injector, n).pipe(B((l) => ((n._loadedConfig = l), this.processRoutes(l.module, l.routes)))));
					}
				})();
			class rd {
				constructor(l, n, u = {}) {
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
				init() {
					'disabled' !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration('manual'),
						(this.routerEventsSubscription = this.createScrollEvents()),
						(this.scrollEventsSubscription = this.consumeScrollEvents());
				}
				createScrollEvents() {
					return this.router.events.subscribe((l) => {
						l instanceof Ri
							? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
							  (this.lastSource = l.navigationTrigger),
							  (this.restoredId = l.restoredState ? l.restoredState.navigationId : 0))
							: l instanceof Ai && ((this.lastId = l.id), this.scheduleScrollEvent(l, this.router.parseUrl(l.urlAfterRedirects).fragment));
					});
				}
				consumeScrollEvents() {
					return this.router.events.subscribe((l) => {
						l instanceof Qi &&
							(l.position
								? 'top' === this.options.scrollPositionRestoration
									? this.viewportScroller.scrollToPosition([0, 0])
									: 'enabled' === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(l.position)
								: l.anchor && 'enabled' === this.options.anchorScrolling
								? this.viewportScroller.scrollToAnchor(l.anchor)
								: 'disabled' !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]));
					});
				}
				scheduleScrollEvent(l, n) {
					this.router.triggerEvent(new Qi(l, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, n));
				}
				ngOnDestroy() {
					this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
				}
			}
			const ad = new kl('ROUTER_CONFIGURATION'),
				od = new kl('ROUTER_FORROOT_GUARD'),
				id = [
					ta,
					{ provide: yc, useClass: wc },
					{ provide: Yh, useFactory: md, deps: [is, yc, Xh, ta, Pl, wt, At, Bh, ad, [Gh, new rl()], [Hh, new rl()]] },
					Xh,
					{ provide: Fc, useFactory: bd, deps: [Yh] },
					{ provide: wt, useClass: ps },
					sd,
					td,
					ed,
					{ provide: ad, useValue: { enableTracing: !1 } }
				];
			function cd() {
				return new ts('Router', Yh);
			}
			const hd = (() => {
				class l {
					constructor(l, n) {}
					static forRoot(n, u) {
						return {
							ngModule: l,
							providers: [
								id,
								fd(n),
								{ provide: od, useFactory: gd, deps: [[Yh, new rl(), new ol()]] },
								{ provide: ad, useValue: u || {} },
								{ provide: ua, useFactory: pd, deps: [la, [new sl(ea), new rl()], ad] },
								{ provide: rd, useFactory: dd, deps: [Yh, ka, ad] },
								{ provide: ud, useExisting: u && u.preloadingStrategy ? u.preloadingStrategy : td },
								{ provide: ts, multi: !0, useFactory: cd },
								[yd, { provide: jt, multi: !0, useFactory: wd, deps: [yd] }, { provide: vd, useFactory: jd, deps: [yd] }, { provide: Et, multi: !0, useExisting: vd }]
							]
						};
					}
					static forChild(n) {
						return { ngModule: l, providers: [fd(n)] };
					}
				}
				return l;
			})();
			function dd(l, n, u) {
				return u.scrollOffset && n.setOffset(u.scrollOffset), new rd(l, n, u);
			}
			function pd(l, n, u = {}) {
				return u.useHash ? new ra(l, n) : new aa(l, n);
			}
			function gd(l) {
				if (l) throw new Error('RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.');
				return 'guarded';
			}
			function fd(l) {
				return [{ provide: Gl, multi: !0, useValue: l }, { provide: Bh, multi: !0, useValue: l }];
			}
			function md(l, n, u, e, t, s, r, a, o = {}, i, c) {
				const h = new Yh(null, n, u, e, t, s, r, oc(a));
				if (
					(i && (h.urlHandlingStrategy = i),
					c && (h.routeReuseStrategy = c),
					o.errorHandler && (h.errorHandler = o.errorHandler),
					o.malformedUriErrorHandler && (h.malformedUriErrorHandler = o.malformedUriErrorHandler),
					o.enableTracing)
				) {
					const l = xo();
					h.events.subscribe((n) => {
						l.logGroup(`Router Event: ${n.constructor.name}`), l.log(n.toString()), l.log(n), l.logGroupEnd();
					});
				}
				return (
					o.onSameUrlNavigation && (h.onSameUrlNavigation = o.onSameUrlNavigation),
					o.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = o.paramsInheritanceStrategy),
					o.urlUpdateStrategy && (h.urlUpdateStrategy = o.urlUpdateStrategy),
					o.relativeLinkResolution && (h.relativeLinkResolution = o.relativeLinkResolution),
					h
				);
			}
			function bd(l) {
				return l.routerState.root;
			}
			const yd = (() =>
				class {
					constructor(l) {
						(this.injector = l), (this.initNavigation = !1), (this.resultOfPreactivationDone = new E());
					}
					appInitializer() {
						return this.injector.get(na, Promise.resolve(null)).then(() => {
							let l = null;
							const n = new Promise((n) => (l = n)),
								u = this.injector.get(Yh),
								e = this.injector.get(ad);
							if (this.isLegacyDisabled(e) || this.isLegacyEnabled(e)) l(!0);
							else if ('disabled' === e.initialNavigation) u.setUpLocationChangeListener(), l(!0);
							else {
								if ('enabled' !== e.initialNavigation) throw new Error(`Invalid initialNavigation options: '${e.initialNavigation}'`);
								(u.hooks.afterPreactivation = () => (this.initNavigation ? Sa(null) : ((this.initNavigation = !0), l(!0), this.resultOfPreactivationDone))), u.initialNavigation();
							}
							return n;
						});
					}
					bootstrapListener(l) {
						const n = this.injector.get(ad),
							u = this.injector.get(sd),
							e = this.injector.get(rd),
							t = this.injector.get(Yh),
							s = this.injector.get(is);
						l === s.components[0] &&
							(this.isLegacyEnabled(n) ? t.initialNavigation() : this.isLegacyDisabled(n) && t.setUpLocationChangeListener(),
							u.setUpPreloading(),
							e.init(),
							t.resetRootComponentType(s.componentTypes[0]),
							this.resultOfPreactivationDone.next(null),
							this.resultOfPreactivationDone.complete());
					}
					isLegacyEnabled(l) {
						return 'legacy_enabled' === l.initialNavigation || !0 === l.initialNavigation || void 0 === l.initialNavigation;
					}
					isLegacyDisabled(l) {
						return 'legacy_disabled' === l.initialNavigation || !1 === l.initialNavigation;
					}
				})();
			function wd(l) {
				return l.appInitializer.bind(l);
			}
			function jd(l) {
				return l.bootstrapListener.bind(l);
			}
			const vd = new kl('Router Initializer');
			var xd = Bu({ encapsulation: 2, styles: [], data: {} });
			function _d(l) {
				return qs(
					0,
					[(l()(), Ps(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)), lt(1, 212992, null, 0, ld, [Xh, Su, Gn, [8, null], wu], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			function kd(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 1, 'ng-component', [], null, null, null, _d, xd)), lt(1, 49152, null, 0, Wi, [], null, null)], null, null);
			}
			var Cd = Oe('ng-component', Wi, kd, {}, {}, []);
			const Sd = (() =>
					class {
						constructor(l) {
							this.elementRef = l;
						}
						set class(l) {
							l.includes('close')
								? ((this.classList = l.replace(/ close|close /g, '')), (this.close = !0), (this.role = 'alertdialog'))
								: ((this.classList = l), (this.close = !1), (this.role = 'alert')),
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
					})(),
				Ed = (() => class {})(),
				Id = (() => class {})(),
				Pd = (() =>
					class {
						constructor() {}
						ngOnInit() {}
					})(),
				Od = (() => class {})(),
				Td = (() =>
					class {
						constructor() {}
						ngOnInit() {}
					})(),
				Md = (() => class {})(),
				Rd = (() => class {})(),
				Ad = (() => class {})(),
				Nd = (() =>
					class {
						constructor() {}
						ngOnInit() {}
					})(),
				Dd = (() => class {})(),
				Ud = (() => class {})(),
				Ld = (() => class {})(),
				Vd = (() => class {})(),
				Fd = (() => class {})(),
				zd = (() => class {})(),
				Hd = (() =>
					class {
						constructor() {}
						ngOnInit() {}
					})(),
				$d = (() => class {})(),
				Bd = (() => class {})(),
				qd = (() => class {})(),
				Gd = (() => class {})(),
				Zd = (() => class {})(),
				Qd = (() =>
					class {
						constructor(l) {
							this.elementRef = l;
						}
						ngOnInit() {}
						skip() {
							this.content.nativeElement.focus();
						}
					})(),
				Wd = (() => class {})(),
				Kd = (() => class {})();
			var Yd = Bu({
				encapsulation: 2,
				styles: [
					'@charset "UTF-8";a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{line-height:1.15;-webkit-text-size-adjust:100%}code,kbd,pre,samp{font-family:monospace,monospace}a{background-color:transparent}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline;bottom:0;position:static;top:0}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-ms-overflow-style:scrollbar;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;box-sizing:border-box;font-size:12px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}@media screen and (min-width:30em){html{font-size:13px}}@media screen and (min-width:48em){html{font-size:14px}}@media screen and (min-width:64em){html{font-size:16px}}*,::after,::before{box-sizing:inherit}body{margin:0;background-color:#fafafa;color:#191919;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.618;overflow-x:hidden;text-rendering:optimizeLegibility}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}.h1,h1{font-size:2rem}.h1{margin-bottom:.67rem}.h2,h2{font-size:1.5rem}.h2{margin-bottom:.75rem}.h3,h3{font-size:1.17rem}.h3{margin-bottom:.83rem}.h4,h4{font-size:1rem}.h4{margin-bottom:1.12rem}.h5,h5{font-size:.83rem}.h5{margin-bottom:1.5rem}.h6,h6{font-size:.75rem}.h6{margin-bottom:1.67rem}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:.0625rem dotted #191919;cursor:help}address{line-height:inherit}blockquote{padding:1rem}blockquote+footer{color:#8d8d8d;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}blockquote+footer::before{content:"\u2012";color:#8d8d8d;padding-right:.5rem}blockquote,blockquote+footer{border-left:.125rem solid #efefef}caption{caption-side:bottom}dd{margin-bottom:.5rem}hr{box-sizing:content-box;height:0;overflow:visible;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}address,cite,em,i{font-style:italic}address,dl,figure,h1,ol,pre{margin:0}caption,img,input[type=checkbox],input[type=radio],label,td,th{vertical-align:middle}sub{-webkit-transform:translateY(.25rem);transform:translateY(.25rem)}sup{-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem)}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.5rem;white-space:pre-wrap;word-spacing:normal}fieldset{min-width:0;padding:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;font-size:1.125rem}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=number]{-moz-appearance:textfield}input[type=range]{width:100%}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-.875rem}input[type=range]::-moz-range-track{-moz-appearance:none}input[type=range]::-ms-track{background:0 0;border-color:transparent;color:transparent}select{overflow-y:auto}optgroup{font-weight:bolder}option{color:#8d8d8d}a[role=button],abbr[title],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{text-decoration:none;font-family:inherit;border:0}a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#bdbdbd;border:none;color:#0069c0}progress::-webkit-progress-bar{background-color:#bdbdbd;color:#0069c0}progress::-moz-progress-bar{background-color:#0069c0}progress::-ms-fill{border:none}[tabindex="-1"]:focus,input[type=range]:focus{outline:0}.bg-hover-red:hover,.bg-red{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.bg-hover-lt-purple:hover,.bg-lt-purple{background-color:#d05ce3}.text-hover-lt-purple:hover,.text-lt-purple{color:#d05ce3}.border-t-lt-purple{border-top:.0625rem solid #d05ce3}.border-r-lt-purple{border-right:.0625rem solid #d05ce3}.border-b-lt-purple{border-bottom:.0625rem solid #d05ce3}.border-l-lt-purple{border-left:.0625rem solid #d05ce3}.border-a-lt-purple{border:.0625rem solid #d05ce3}.border-lr-lt-purple{border-left:.0625rem solid #d05ce3;border-right:.0625rem solid #d05ce3}.border-tb-lt-purple{border-top:.0625rem solid #d05ce3;border-bottom:.0625rem solid #d05ce3}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.bg-dk-purple,.bg-hover-dk-purple:hover{background-color:#6a0080}.text-dk-purple,.text-hover-dk-purple:hover{color:#6a0080}.border-t-dk-purple{border-top:.0625rem solid #6a0080}.border-r-dk-purple{border-right:.0625rem solid #6a0080}.border-b-dk-purple{border-bottom:.0625rem solid #6a0080}.border-l-dk-purple{border-left:.0625rem solid #6a0080}.border-a-dk-purple{border:.0625rem solid #6a0080}.border-lr-dk-purple{border-left:.0625rem solid #6a0080;border-right:.0625rem solid #6a0080}.border-tb-dk-purple{border-top:.0625rem solid #6a0080;border-bottom:.0625rem solid #6a0080}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.bg-hover-lt-green:hover,.bg-lt-green{background-color:#80e27e}.text-hover-lt-green:hover,.text-lt-green{color:#80e27e}.border-t-lt-green{border-top:.0625rem solid #80e27e}.border-r-lt-green{border-right:.0625rem solid #80e27e}.border-b-lt-green{border-bottom:.0625rem solid #80e27e}.border-l-lt-green{border-left:.0625rem solid #80e27e}.border-a-lt-green{border:.0625rem solid #80e27e}.border-lr-lt-green{border-left:.0625rem solid #80e27e;border-right:.0625rem solid #80e27e}.border-tb-lt-green{border-top:.0625rem solid #80e27e;border-bottom:.0625rem solid #80e27e}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.bg-dk-green,.bg-hover-dk-green:hover{background-color:#087f23}.text-dk-green,.text-hover-dk-green:hover{color:#087f23}.border-t-dk-green{border-top:.0625rem solid #087f23}.border-r-dk-green{border-right:.0625rem solid #087f23}.border-b-dk-green{border-bottom:.0625rem solid #087f23}.border-l-dk-green{border-left:.0625rem solid #087f23}.border-a-dk-green{border:.0625rem solid #087f23}.border-lr-dk-green{border-left:.0625rem solid #087f23;border-right:.0625rem solid #087f23}.border-tb-dk-green{border-top:.0625rem solid #087f23;border-bottom:.0625rem solid #087f23}.bg-hover-lt-blue:hover,.bg-lt-blue{background-color:#6ec6ff}.text-hover-lt-blue:hover,.text-lt-blue{color:#6ec6ff}.border-t-lt-blue{border-top:.0625rem solid #6ec6ff}.border-r-lt-blue{border-right:.0625rem solid #6ec6ff}.border-b-lt-blue{border-bottom:.0625rem solid #6ec6ff}.border-l-lt-blue{border-left:.0625rem solid #6ec6ff}.border-a-lt-blue{border:.0625rem solid #6ec6ff}.border-lr-lt-blue{border-left:.0625rem solid #6ec6ff;border-right:.0625rem solid #6ec6ff}.border-tb-lt-blue{border-top:.0625rem solid #6ec6ff;border-bottom:.0625rem solid #6ec6ff}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-white:hover,.bg-white{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.bg-black,.bg-hover-black:hover{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.row,.row-full{align-items:flex-start;display:flex;justify-content:flex-start}.col,.col-full{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.row-full{width:100%}.col-full{height:100%}.align-c,.col.align-m{justify-content:center}.align-l,.col.align-t{justify-content:flex-start}.align-r,.col.align-b{justify-content:flex-end}.align-m,.col.align-c{align-items:center}.align-b,.col.align-r{align-items:flex-end}.align-t,.col.align-l{align-items:flex-start}.align-sa{justify-content:space-around}.align-sb{justify-content:space-between}.align-st{align-items:stretch}.align-cm{align-items:center;justify-content:center}.col.wrap-l,.wrap-t{align-content:flex-start;flex-wrap:wrap}.col.wrap-r,.wrap-b{align-content:flex-end;flex-wrap:wrap}.col.wrap-c,.wrap-m{align-content:center;flex-wrap:wrap}.wrap-sa{align-content:space-around;flex-wrap:wrap}.wrap-sb{align-content:space-between;flex-wrap:wrap}.wrap-st{align-content:stretch;flex-wrap:wrap}.wrap-n{flex-wrap:nowrap;max-width:100%}.col .item-l,.item-t{align-self:flex-start}.col .item-r,.item-b{align-self:flex-end}.col .item-c,.item-m{-ms-grid-row-align:center;align-self:center}.item-l{margin-right:auto}.col .item-t{margin-bottom:auto}.item-r{margin-left:auto}.col .item-b{margin-top:auto}.item-c{margin-left:auto;margin-right:auto}.col .item-m{margin-bottom:auto;margin-top:auto}.item-cm{-ms-grid-row-align:center;align-self:center;margin-left:auto;margin-right:auto}.col .item-cm{-ms-grid-row-align:center;align-self:center;margin-bottom:auto;margin-top:auto}.item-st{-ms-grid-row-align:stretch;align-self:stretch}.item-gs-0{flex-grow:0;flex-shrink:0}.item-g-0{flex-grow:0}.item-s-0{flex-shrink:0}.item-gs-1{flex-grow:1;flex-shrink:1}.item-g-1{flex-grow:1}.item-s-1{flex-shrink:1}.item-gs-2{flex-grow:2;flex-shrink:2}.item-g-2{flex-grow:2}.item-s-2{flex-shrink:2}.item-gs-3{flex-grow:3;flex-shrink:3}.item-g-3{flex-grow:3}.item-s-3{flex-shrink:3}.item-gs-4{flex-grow:4;flex-shrink:4}.item-g-4{flex-grow:4}.item-s-4{flex-shrink:4}.item-gs-5{flex-grow:5;flex-shrink:5}.item-g-5{flex-grow:5}.item-s-5{flex-shrink:5}.item-gs-6{flex-grow:6;flex-shrink:6}.item-g-6{flex-grow:6}.item-s-6{flex-shrink:6}.item-gs-7{flex-grow:7;flex-shrink:7}.item-g-7{flex-grow:7}.item-s-7{flex-shrink:7}.item-gs-8{flex-grow:8;flex-shrink:8}.item-g-8{flex-grow:8}.item-s-8{flex-shrink:8}.item-gs-9{flex-grow:9;flex-shrink:9}.item-g-9{flex-grow:9}.item-s-9{flex-shrink:9}.item-gs-10{flex-grow:10;flex-shrink:10}.item-g-10{flex-grow:10}.item-s-10{flex-shrink:10}.item-gs-11{flex-grow:11;flex-shrink:11}.item-g-11{flex-grow:11}.item-s-11{flex-shrink:11}.item-gs-12{flex-grow:12;flex-shrink:12}.item-g-12{flex-grow:12}.item-s-12{flex-shrink:12}[class*=flex-g]{flex-basis:auto}.item-order-1{order:1}.item-order-2{order:2}.item-order-3{order:3}.item-order-4{order:4}.item-order-5{order:5}.item-order-6{order:6}.item-order-7{order:7}.item-order-8{order:8}.item-order-9{order:9}.item-order-10{order:10}.item-order-11{order:11}.item-order-12{order:12}@media screen and (min-width:48em){.container{width:80%}}@media screen and (min-width:30em){.container-fluid{width:28rem}}@media screen and (min-width:48em){.container-fluid{width:46rem}}@media screen and (min-width:64em){.container-fluid{width:73rem}}.container,.container-fluid,.container-full{margin-left:auto;margin-right:auto;width:100%}.sticky-footer{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column;align-items:stretch;flex-wrap:nowrap;height:100%}.sticky-footer :last-child{margin-top:auto}.fixed-b,.fixed-l,.fixed-r,.fixed-t{position:fixed;z-index:10}.fixed-b,.fixed-t{width:100%}.fixed-b{bottom:0}.fixed-l{left:0}.fixed-r{right:0}.fixed-t{top:0}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-small-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}:disabled,[disabled]{background-color:#efefef;color:#191919}:disabled:hover,[disabled]:hover{cursor:not-allowed}.center{display:block;margin-left:auto;margin-right:auto}.circle{border-radius:50%}.close{color:inherit}.hover:hover{cursor:pointer}.list{margin-bottom:1rem;margin-left:2.5rem}ol.list{list-style:decimal}ol.list ol.lst{list-style:lower-alpha}.rounded{border-radius:.375rem}ul.list{list-style:disc}ul.list ul.list{list-style:circle}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.hide,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}@media screen and (min-width:30em){.hide-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media screen and (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media screen and (min-width:64em) and (max-width:74em){.hide-lg{display:none}}@media screen and (min-width:64em){.hide-xl{display:none}}@media print{.hide-print{display:none}}.show{display:block}@media screen and (min-width:30em){.show-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.show-sm{display:block}}@media screen and (min-width:48em) and (max-width:63em){.show-md{display:block}}@media screen and (min-width:64em) and (max-width:74em){.show-lg{display:block}}@media screen and (min-width:64em){.show-xl{display:block}}@media print{.show-print{display:block}}.show-focus,.sr-only{clip:rect(0,0,0,0);height:.0625rem;position:absolute;overflow:hidden;white-space:nowrap;width:.0625rem}.show-focus:active,.show-focus:focus,.show-focus:hover{clip:auto;color:#191919;display:block;height:auto;left:.3125rem;padding:1rem;text-decoration:none;top:.3125rem;width:auto;z-index:100}'
				],
				data: {}
			});
			function Jd(l) {
				return qs(
					0,
					[
						As(671088640, 1, { content: 0 }),
						(l()(),
						Ps(
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
						(l()(), Hs(-1, null, ['Skip to content'])),
						Vs(null, 0)
					],
					null,
					null
				);
			}
			var Xd = Bu({
				encapsulation: 0,
				styles: [
					'.alert-bad[_nghost-%COMP%], .alert-good[_nghost-%COMP%], .alert-info[_nghost-%COMP%], .alert-warn[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;color:#fff;justify-content:space-between;padding:.5rem 1rem}.alert-bad[_nghost-%COMP%]{background-color:#ba000d}.alert-good[_nghost-%COMP%]{background-color:#087f23}.alert-info[_nghost-%COMP%]{background-color:#0069c0}.alert-warn[_nghost-%COMP%]{background-color:#ffeb3b;color:#191919}'
				],
				data: {}
			});
			function lp(l) {
				return qs(
					0,
					[
						(l()(),
						Ps(
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
						(l()(), Hs(-1, null, [' X\n']))
					],
					null,
					null
				);
			}
			function np(l) {
				return qs(
					0,
					[
						As(402653184, 1, { message: 0 }),
						(l()(), Ps(1, 0, [[1, 0], ['message', 1]], null, 1, 'p', [['tabindex', '-1']], [[1, 'id', 0]], null, null, null, null)),
						Vs(null, 0),
						(l()(), Is(16777216, null, null, 1, null, lp)),
						lt(4, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null)
					],
					function(l, n) {
						l(n, 4, 0, n.component.close);
					},
					function(l, n) {
						l(n, 1, 0, n.component.id);
					}
				);
			}
			var up = Bu({
				encapsulation: 0,
				styles: [
					'.badge-lg[_nghost-%COMP%], .badge-md[_nghost-%COMP%], .badge-sm[_nghost-%COMP%]{border-radius:1rem;display:inline-block}.badge-lg[_nghost-%COMP%]:empty, .badge-md[_nghost-%COMP%]:empty, .badge-sm[_nghost-%COMP%]:empty{display:none}.badge-sm[_nghost-%COMP%]{line-height:.5rem;padding:.5rem}.badge-md[_nghost-%COMP%]{line-height:.625rem;padding:.625rem}.badge-lg[_nghost-%COMP%]{line-height:.75rem;padding:.75rem}'
				],
				data: {}
			});
			function ep(l) {
				return qs(0, [Vs(null, 0)], null, null);
			}
			var tp = Bu({
				encapsulation: 0,
				styles: [
					'.btn-full[_nghost-%COMP%], .btn-lg[_nghost-%COMP%], .btn-md[_nghost-%COMP%], .btn-sm[_nghost-%COMP%], .btn-xl[_nghost-%COMP%], .btn-xs[_nghost-%COMP%]{margin-bottom:1rem;margin-right:1rem}.btn-full.rounded[_nghost-%COMP%], .btn-lg.rounded[_nghost-%COMP%], .btn-md.rounded[_nghost-%COMP%], .btn-sm.rounded[_nghost-%COMP%], .btn-xl.rounded[_nghost-%COMP%], .btn-xs.rounded[_nghost-%COMP%]{border-radius:1.5rem}.btn-xs[_nghost-%COMP%]{padding:.5rem .625rem}.btn-sm[_nghost-%COMP%]{padding:.625rem 1.25rem}.btn-full[_nghost-%COMP%], .btn-md[_nghost-%COMP%]{padding:.75rem 1.875rem}.btn-lg[_nghost-%COMP%]{padding:.875rem 2.5rem}.btn-xl[_nghost-%COMP%]{padding:1rem 3.125rem}.btn-full[_nghost-%COMP%]{width:100%}.btn-group-col[_nghost-%COMP%], .btn-group-full[_nghost-%COMP%], .btn-group-row[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}.btn-group-col[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.btn-group-full[_nghost-%COMP%]{width:100%}.btn-group-col.btn-lg[_nghost-%COMP%], .btn-group-col   .btn-lg[_nghost-%COMP%], .btn-group-col.btn-md[_nghost-%COMP%], .btn-group-col   .btn-md[_nghost-%COMP%], .btn-group-col.btn-sm[_nghost-%COMP%], .btn-group-col   .btn-sm[_nghost-%COMP%], .btn-group-col.btn-xl[_nghost-%COMP%], .btn-group-col   .btn-xl[_nghost-%COMP%], .btn-group-col.btn-xs[_nghost-%COMP%], .btn-group-col   .btn-xs[_nghost-%COMP%], .btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%], .btn-group-row.btn-lg[_nghost-%COMP%], .btn-group-row   .btn-lg[_nghost-%COMP%], .btn-group-row.btn-md[_nghost-%COMP%], .btn-group-row   .btn-md[_nghost-%COMP%], .btn-group-row.btn-sm[_nghost-%COMP%], .btn-group-row   .btn-sm[_nghost-%COMP%], .btn-group-row.btn-xl[_nghost-%COMP%], .btn-group-row   .btn-xl[_nghost-%COMP%], .btn-group-row.btn-xs[_nghost-%COMP%], .btn-group-row   .btn-xs[_nghost-%COMP%]{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}.btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%]{flex-basis:auto;flex-grow:1;flex-shrink:0}'
				],
				data: {}
			});
			function sp(l) {
				return qs(0, [Vs(null, 0)], null, null);
			}
			var rp = Bu({
				encapsulation: 0,
				styles: [
					'@charset "UTF-8";.checkbox-group[_nghost-%COMP%], .radio-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex:1 1 13.75rem;flex-wrap:wrap}.field-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;padding:.5rem}.fieldset[_nghost-%COMP%]{border:.0625rem solid #2196f3;padding:0 .625rem .75rem}.form-field[_nghost-%COMP%]{transition-duration:.3s;transition-property:border,box-shadow;transition-timing-function:linear;border:.0625rem solid #bdbdbd}.form-field[_nghost-%COMP%]:not(:disabled), .form-field[_nghost-%COMP%]:not([disabled]){background-color:#fff}.form-field[_nghost-%COMP%]:-moz-read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[_nghost-%COMP%]:read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[type=checkbox][_nghost-%COMP%], .form-field[type=radio][_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:1rem;position:relative;width:1rem}.form-field[type=checkbox][_nghost-%COMP%]::after, .form-field[type=radio][_nghost-%COMP%]::after{display:block;font-size:1.175rem;height:.95rem;left:0;line-height:.8rem;position:absolute;text-align:center;top:0;width:.95rem}.form-field[type=checkbox][_nghost-%COMP%]:checked::after{content:"\u2713"}.form-field[type=radio][_nghost-%COMP%]{border-radius:50%}.form-field[type=radio][_nghost-%COMP%]:checked::after{content:"\u25cf"}.form-field[_nghost-%COMP%]:hover{transition-duration:.3s;transition-property:border;transition-timing-function:linear;border:.0625rem solid #000}.form-field[_nghost-%COMP%]:focus{transition-duration:.3s;transition-property:border,box-shadow;transition-timing-function:linear;box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);border:.0625rem solid #2196f3;outline:#2196f3 dotted 1px}.form-field[_nghost-%COMP%]:not([type=checkbox]):not([type=radio]){flex:1 0 13.75rem;padding:.5rem}.form-field[_nghost-%COMP%]::-webkit-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-moz-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::placeholder{color:#8d8d8d;opacity:1}.form-group-inline[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-wrap:wrap}.form-label[_nghost-%COMP%]{flex:1 0 7.5rem;font-size:1.125rem;max-width:13.75rem}select.form-field[_nghost-%COMP%]{background-color:inherit;color:#8d8d8d;height:2.25rem;padding-left:.25rem}select.form-field[_nghost-%COMP%]::-ms-value{background-color:inherit;color:#8d8d8d}select.form-field[multiple][_nghost-%COMP%]{height:6.25rem}select.form-field[_nghost-%COMP%]:not([multiple]){padding-bottom:0;padding-top:0;padding-right:0}textarea.form-field[_nghost-%COMP%]{height:6.25rem}.checkbox-group.field-group[_nghost-%COMP%], .checkbox-group   .field-group[_nghost-%COMP%], .radio-group.field-group[_nghost-%COMP%], .radio-group   .field-group[_nghost-%COMP%]{flex:0 0 7.5rem;flex-wrap:nowrap;padding:0}.checkbox-group.form-label[_nghost-%COMP%], .checkbox-group   .form-label[_nghost-%COMP%], .radio-group.form-label[_nghost-%COMP%], .radio-group   .form-label[_nghost-%COMP%]{flex:none;font-size:1rem;padding-left:.5rem}.checkbox-group.form-label[_nghost-%COMP%]:hover, .checkbox-group   .form-label[_nghost-%COMP%]:hover, .radio-group.form-label[_nghost-%COMP%]:hover, .radio-group   .form-label[_nghost-%COMP%]:hover{cursor:pointer}.form-group-inline.field-group[_nghost-%COMP%], .form-group-inline   .field-group[_nghost-%COMP%]{flex:1 0 auto}'
				],
				data: {}
			});
			function ap(l) {
				return qs(0, [Vs(null, 0)], null, null);
			}
			var op = Bu({
				encapsulation: 0,
				styles: [
					'.spinner[_nghost-%COMP%], .spinner-dotted[_nghost-%COMP%]{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner;border-radius:50%;height:7.5rem;width:7.5rem}.spinner[_nghost-%COMP%]{border-color:#efefef #efefef #efefef #2196f3;border-style:solid;border-width:1rem}.spinner-dotted[_nghost-%COMP%]{border-style:dotted;border-color:#0069c0 #2196f3 #6ec6ff #39f;border-width:1.125rem .875rem .75rem .5rem}@-webkit-keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
				],
				data: {}
			});
			function ip(l) {
				return qs(0, [Vs(null, 0)], null, null);
			}
			class cp {
				get section() {
					return this.selectedSection;
				}
				set section(l) {
					this.selectedSection = l;
				}
				constructor() {}
				ngOnInit() {
					this.section = 'Alert';
				}
				checkSection(l) {
					return this.section === l;
				}
				selectSection(l) {
					this.section = l;
				}
			}
			var hp = Bu({
				encapsulation: 0,
				styles: [
					[
						'.styleguide[_ngcontent-%COMP%]{margin-left:16rem}.styleguide[_ngcontent-%COMP%]   .hljs-attr[_ngcontent-%COMP%]{color:#954121}.styleguide-menu[_ngcontent-%COMP%]{left:2rem;top:5.5rem;width:14rem}.styleguide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#6a0080}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .styleguide[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-size:.875rem}.styleguide[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{min-width:15rem}#styleguide[_ngcontent-%COMP%]   .hljs[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:.5em;color:#000;background:#f8f8ff;-webkit-text-size-adjust:none}.diff[_ngcontent-%COMP%]   .hljs-header[_ngcontent-%COMP%], .hljs-comment[_ngcontent-%COMP%]{color:#408080;font-style:italic}.assignment[_ngcontent-%COMP%], .css[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-subst[_ngcontent-%COMP%], .hljs-winutils[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#954121}.hljs-hexcolor[_ngcontent-%COMP%], .hljs-number[_ngcontent-%COMP%]{color:#40a070}.hljs-doctag[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-value[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{color:#219161}.hljs-id[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%]{color:#19469d}.hljs-params[_ngcontent-%COMP%]{color:#00f}.hljs-subst[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{font-weight:400}.haskell[_ngcontent-%COMP%]   .hljs-label[_ngcontent-%COMP%], .hljs-class[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-command[_ngcontent-%COMP%]{color:#458;font-weight:700}.django[_ngcontent-%COMP%]   .hljs-tag[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-rule[_ngcontent-%COMP%]   .hljs-property[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:navy;font-weight:400}.hljs-attr[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%], .instancevar[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-body[_ngcontent-%COMP%]{color:teal}.hljs-regexp[_ngcontent-%COMP%]{color:#b68}.hljs-class[_ngcontent-%COMP%]{color:#458;font-weight:700}.hljs-symbol[_ngcontent-%COMP%], .input_number[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-string[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .keymethods[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-special[_ngcontent-%COMP%]{color:#990073}.builtin[_ngcontent-%COMP%], .constructor[_ngcontent-%COMP%], .hljs-built_in[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#0086b3}.hljs-cdata[_ngcontent-%COMP%], .hljs-doctype[_ngcontent-%COMP%], .hljs-pi[_ngcontent-%COMP%], .hljs-pragma[_ngcontent-%COMP%], .hljs-preprocessor[_ngcontent-%COMP%], .hljs-shebang[_ngcontent-%COMP%]{color:#999;font-weight:700}.hljs-deletion[_ngcontent-%COMP%]{background:#fdd}.hljs-addition[_ngcontent-%COMP%]{background:#dfd}.diff[_ngcontent-%COMP%]   .hljs-change[_ngcontent-%COMP%]{background:#0086b3}.hljs-chunk[_ngcontent-%COMP%]{color:#aaa}.tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{opacity:.5}.flexbox[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-wrap:wrap}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][_ngcontent-%COMP%]{height:15.625rem;width:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][class*=wrap][_ngcontent-%COMP%]{width:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.col-full[_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][_ngcontent-%COMP%]{height:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][class*=wrap][_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.row[_ngcontent-%COMP%]{width:15.625rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;background-color:#2196f3;color:#fff;justify-content:center;min-height:6.25rem;min-width:7.5rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50;min-height:4.6875rem;min-width:6.25rem}.box[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:1rem;padding:0}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff;text-align:center}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50}.box[_ngcontent-%COMP%]   p[class*=pad][_ngcontent-%COMP%]{display:inline-block;margin:0 1rem}'
					]
				],
				data: {}
			});
			function dp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Close']))
					],
					null,
					null
				);
			}
			function pp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Empty']))
					],
					null,
					null
				);
			}
			function gp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Group'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Rounded'])),
						(l()(), Ps(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['State']))
					],
					null,
					null
				);
			}
			function fp(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function mp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Accordion'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Expand']))
					],
					null,
					null
				);
			}
			function bp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 12, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Background'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Border'])),
						(l()(), Ps(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Hover'])),
						(l()(), Ps(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function yp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 24, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Container Column'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Container Row'])),
						(l()(), Ps(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Item Column'])),
						(l()(), Ps(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Item Order'])),
						(l()(), Ps(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Item Row'])),
						(l()(), Ps(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Item Size'])),
						(l()(), Ps(19, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(20, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Wrap Column'])),
						(l()(), Ps(22, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(23, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Wrap Row']))
					],
					null,
					null
				);
			}
			function wp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 21, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Checkbox'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Field'])),
						(l()(), Ps(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Field Group'])),
						(l()(), Ps(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Fieldset'])),
						(l()(), Ps(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Form Group'])),
						(l()(), Ps(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Label'])),
						(l()(), Ps(19, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(20, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['State']))
					],
					null,
					null
				);
			}
			function jp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Area'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Container'])),
						(l()(), Ps(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Item']))
					],
					null,
					null
				);
			}
			function vp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Container'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Sticky Footer']))
					],
					null,
					null
				);
			}
			function xp(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function _p(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Items'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Links'])),
						(l()(), Ps(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Placement']))
					],
					null,
					null
				);
			}
			function kp(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Cp(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Sp(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Ep(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Margin'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Padding']))
					],
					null,
					null
				);
			}
			function Ip(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Pp(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Op(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Tp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 15, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Border'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Hover'])),
						(l()(), Ps(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Striped'])),
						(l()(), Ps(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Table Cell'])),
						(l()(), Ps(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Table Row']))
					],
					null,
					null
				);
			}
			function Mp(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Rp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Font'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function Ap(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Np(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Hide'])),
						(l()(), Ps(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Ps(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Show']))
					],
					null,
					null
				);
			}
			function Dp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 116, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Alerts are styled with an '])),
						(l()(), Ps(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.alert-[bad || good || info || warn]'])),
						(l()(), Hs(-1, null, [' class.'])),
						(l()(), Ps(7, 0, null, null, 18, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(9, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(10, { flexbox: 0, box: 1 }),
						(l()(), Ps(11, 0, null, null, 2, 'aside', [['class', 'alert-bad']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, np, Xd)),
						lt(12, 114688, null, 0, Sd, [Jn], { class: [0, 'class'] }, null),
						(l()(), Hs(-1, 0, ['bad'])),
						(l()(), Ps(14, 0, null, null, 2, 'aside', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, np, Xd)),
						lt(15, 114688, null, 0, Sd, [Jn], { class: [0, 'class'] }, null),
						(l()(), Hs(-1, 0, ['good'])),
						(l()(), Ps(17, 0, null, null, 2, 'aside', [['class', 'alert-info']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, np, Xd)),
						lt(18, 114688, null, 0, Sd, [Jn], { class: [0, 'class'] }, null),
						(l()(), Hs(-1, 0, ['info'])),
						(l()(), Ps(20, 0, null, null, 2, 'aside', [['class', 'alert-warn']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, np, Xd)),
						lt(21, 114688, null, 0, Sd, [Jn], { class: [0, 'class'] }, null),
						(l()(), Hs(-1, 0, ['warn'])),
						(l()(), Ps(23, 0, null, null, 2, 'ez-alert', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, np, Xd)),
						lt(24, 114688, null, 0, Sd, [Jn], { class: [0, 'class'] }, null),
						(l()(), Hs(-1, 0, ['good'])),
						(l()(), Ps(26, 0, null, null, 90, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(27, 0, null, null, 89, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(28, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(30, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['aside'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(33, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(36, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"alert-bad"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['bad'])),
						(l()(), Ps(40, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(42, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['aside'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(46, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(48, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['aside'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(51, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(54, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"alert-good"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['good'])),
						(l()(), Ps(58, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['aside'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(64, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(66, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['aside'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(69, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(72, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"alert-info"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['info'])),
						(l()(), Ps(76, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['aside'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(82, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['aside'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(90, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"alert-warn"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['warn'])),
						(l()(), Ps(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(96, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['aside'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(100, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(102, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ez-alert'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(105, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(108, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"alert-good"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['good'])),
						(l()(), Ps(112, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(114, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ez-alert'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0, 'alert-bad'), l(n, 15, 0, 'alert-good'), l(n, 18, 0, 'alert-info'), l(n, 21, 0, 'alert-warn'), l(n, 24, 0, 'alert-good');
					},
					function(l, n) {
						l(n, 11, 0, ze(n, 12).ariaLabelledby, ze(n, 12).hostClass, ze(n, 12).role, ze(n, 12).tabindex),
							l(n, 14, 0, ze(n, 15).ariaLabelledby, ze(n, 15).hostClass, ze(n, 15).role, ze(n, 15).tabindex),
							l(n, 17, 0, ze(n, 18).ariaLabelledby, ze(n, 18).hostClass, ze(n, 18).role, ze(n, 18).tabindex),
							l(n, 20, 0, ze(n, 21).ariaLabelledby, ze(n, 21).hostClass, ze(n, 21).role, ze(n, 21).tabindex),
							l(n, 23, 0, ze(n, 24).ariaLabelledby, ze(n, 24).hostClass, ze(n, 24).role, ze(n, 24).tabindex);
					}
				);
			}
			function Up(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 55, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Close'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Alerts are closed by adding a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.close'])),
						(l()(), Hs(-1, null, [' class.'])),
						(l()(), Ps(9, 0, null, null, 9, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(),
						Ps(13, 0, null, null, 2, 'aside', [['class', 'alert-good close']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, np, Xd)),
						lt(14, 114688, null, 0, Sd, [Jn], { class: [0, 'class'] }, null),
						(l()(), Hs(-1, 0, ['close'])),
						(l()(),
						Ps(16, 0, null, null, 2, 'ez-alert', [['class', 'close alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, np, Xd)),
						lt(17, 114688, null, 0, Sd, [Jn], { class: [0, 'class'] }, null),
						(l()(), Hs(-1, 0, ['close'])),
						(l()(), Ps(19, 0, null, null, 36, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(20, 0, null, null, 35, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(21, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(23, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['aside'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(26, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(29, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"alert-good close"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['close'])),
						(l()(), Ps(33, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(35, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['aside'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(39, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(41, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ez-alert'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(44, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(47, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"close alert-good"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['close'])),
						(l()(), Ps(51, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(53, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ez-alert'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0, 'alert-good close'), l(n, 17, 0, 'close alert-good');
					},
					function(l, n) {
						l(n, 13, 0, ze(n, 14).ariaLabelledby, ze(n, 14).hostClass, ze(n, 14).role, ze(n, 14).tabindex),
							l(n, 16, 0, ze(n, 17).ariaLabelledby, ze(n, 17).hostClass, ze(n, 17).role, ze(n, 17).tabindex);
					}
				);
			}
			function Lp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 95, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Badges are styled with a '])),
						(l()(), Ps(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.badge-[sm || md || lg]'])),
						(l()(), Hs(-1, null, [' class.'])),
						(l()(), Ps(7, 0, null, null, 15, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(9, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(10, { flexbox: 0, box: 1 }),
						(l()(), Ps(11, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, ep, up)),
						lt(12, 114688, null, 0, Pd, [], null, null),
						(l()(), Hs(-1, 0, ['1'])),
						(l()(), Ps(14, 0, null, null, 2, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, ep, up)),
						lt(15, 114688, null, 0, Pd, [], null, null),
						(l()(), Hs(-1, 0, ['20'])),
						(l()(), Ps(17, 0, null, null, 2, 'p', [['class', 'badge-lg bg-dk-blue text-white']], null, null, null, ep, up)),
						lt(18, 114688, null, 0, Pd, [], null, null),
						(l()(), Hs(-1, 0, ['300'])),
						(l()(), Ps(20, 0, null, null, 2, 'ez-badge', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, ep, up)),
						lt(21, 114688, null, 0, Pd, [], null, null),
						(l()(), Hs(-1, 0, ['10'])),
						(l()(), Ps(23, 0, null, null, 72, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(24, 0, null, null, 71, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(25, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(27, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(30, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(33, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['1'])),
						(l()(), Ps(37, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(39, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(43, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(45, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(48, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(51, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['20'])),
						(l()(), Ps(55, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(57, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(61, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(63, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(66, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(69, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"badge-lg bg-dk-blue text-white"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['300'])),
						(l()(), Ps(73, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(75, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(79, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(81, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ez-badge'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(87, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['10'])),
						(l()(), Ps(91, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(93, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ez-badge'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0), l(n, 15, 0), l(n, 18, 0), l(n, 21, 0);
					},
					null
				);
			}
			function Vp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 50, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Empty'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['If a badge does not contain text, it is not rendered.'])),
						(l()(), Ps(6, 0, null, null, 8, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(8, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(9, { flexbox: 0, box: 1 }),
						(l()(), Ps(10, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, ep, up)),
						lt(11, 114688, null, 0, Pd, [], null, null),
						(l()(), Hs(-1, 0, ['1'])),
						(l()(), Ps(13, 0, null, null, 1, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, ep, up)),
						lt(14, 114688, null, 0, Pd, [], null, null),
						(l()(), Ps(15, 0, null, null, 35, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(16, 0, null, null, 34, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(19, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(22, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(25, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['1'])),
						(l()(), Ps(29, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(31, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(35, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(37, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(40, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(43, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(46, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(48, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 9, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 8, 0, 'pad-a-sm', e), l(n, 11, 0), l(n, 14, 0);
					},
					null
				);
			}
			function Fp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 115, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Buttons are styled with a '])),
						(l()(), Ps(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.btn-[xs || sm || md || lg || xl || full]'])),
						(l()(), Hs(-1, null, [' class.'])),
						(l()(), Ps(7, 0, null, null, 21, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(9, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(10, { flexbox: 0, box: 1 }),
						(l()(), Ps(11, 0, null, null, 2, 'button', [['class', 'btn-xs bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(12, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['xs'])),
						(l()(), Ps(14, 0, null, null, 2, 'button', [['class', 'btn-sm bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(15, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['sm'])),
						(l()(), Ps(17, 0, null, null, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(18, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(20, 0, null, null, 2, 'button', [['class', 'btn-lg bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(21, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['lg'])),
						(l()(), Ps(23, 0, null, null, 2, 'button', [['class', 'btn-xl bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(24, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['xl'])),
						(l()(), Ps(26, 0, null, null, 2, 'button', [['class', 'btn-full bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(27, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['full'])),
						(l()(), Ps(29, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(30, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<button '])),
						(l()(), Ps(32, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(33, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(36, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-xs bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(39, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(40, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(43, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>xs</button>\n<button '])),
						(l()(), Ps(46, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-sm bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(53, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(54, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(57, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>sm</button>\n<button '])),
						(l()(), Ps(60, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(64, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(67, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(68, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(71, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n<button '])),
						(l()(), Ps(74, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(75, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(78, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-lg bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(81, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(82, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(85, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>lg</button>\n<button '])),
						(l()(), Ps(88, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(89, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-xl bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(95, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(96, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(99, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>xl</button>\n<button '])),
						(l()(), Ps(102, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(103, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(106, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-full bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(109, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(110, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(113, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>full</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0), l(n, 15, 0), l(n, 18, 0), l(n, 21, 0), l(n, 24, 0), l(n, 27, 0);
					},
					null
				);
			}
			function zp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 315, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Group'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Buttons are grouped with a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.btn-group-[row || col || full]'])),
						(l()(), Hs(-1, null, [' class on a parent container.'])),
						(l()(), Ps(9, 0, null, null, 54, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 16, 'section', [['aria-label', 'button row group'], ['class', 'btn-group-row'], ['role', 'group']], null, null, null, sp, tp)),
						lt(14, 114688, null, 0, Td, [], null, null),
						(l()(), Ps(15, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(16, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(18, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(19, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(21, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(22, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(24, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(25, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(27, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(28, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(30, 0, null, null, 16, 'section', [['aria-label', 'button column group'], ['class', 'btn-group-col'], ['role', 'group']], null, null, null, sp, tp)),
						lt(31, 114688, null, 0, Td, [], null, null),
						(l()(), Ps(32, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(33, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(35, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(36, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(38, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(39, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(41, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(42, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(44, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(45, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(47, 0, null, null, 16, 'section', [['aria-label', 'button full row group'], ['class', 'btn-group-full'], ['role', 'group']], null, null, null, sp, tp)),
						lt(48, 114688, null, 0, Td, [], null, null),
						(l()(), Ps(49, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(50, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(52, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(53, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(55, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(56, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(58, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(59, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(61, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(62, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(64, 0, null, null, 251, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(65, 0, null, null, 250, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<section '])),
						(l()(), Ps(67, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(68, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(71, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-group-row"'])),
						(l()(), Hs(-1, null, [' role='])),
						(l()(), Ps(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"group"'])),
						(l()(), Hs(-1, null, [' aria-label='])),
						(l()(), Ps(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button row group"'])),
						(l()(), Hs(-1, null, ['>\n    <button '])),
						(l()(), Ps(80, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(87, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(91, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(94, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(95, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(98, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(101, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(108, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(109, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(112, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(115, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(116, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(119, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(122, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(123, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(126, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(129, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(130, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(133, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(136, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(137, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(140, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(143, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(144, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(147, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), Ps(150, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(151, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(154, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-group-col"'])),
						(l()(), Hs(-1, null, [' role='])),
						(l()(), Ps(157, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"group"'])),
						(l()(), Hs(-1, null, [' aria-label='])),
						(l()(), Ps(160, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button column group"'])),
						(l()(), Hs(-1, null, ['>\n    <button '])),
						(l()(), Ps(163, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(164, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(167, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(170, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(171, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(174, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(177, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(181, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(184, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(185, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(188, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(191, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(192, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(195, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(198, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(199, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(202, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(205, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(206, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(209, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(212, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(213, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(216, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(219, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(220, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(223, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(226, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(227, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(230, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), Ps(233, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(234, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(237, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-group-full"'])),
						(l()(), Hs(-1, null, [' role='])),
						(l()(), Ps(240, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"group"'])),
						(l()(), Hs(-1, null, [' aria-label='])),
						(l()(), Ps(243, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button full row group"'])),
						(l()(), Hs(-1, null, ['>\n    <button '])),
						(l()(), Ps(246, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(247, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(250, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(253, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(254, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(257, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(260, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(261, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(264, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(267, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(268, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(271, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(274, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(275, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(278, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(281, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(282, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(285, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(288, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(289, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(292, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(295, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(296, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(299, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Ps(302, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(303, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(306, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(309, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(310, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(313, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n</section>']))
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
			function Hp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 117, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Rounded'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Buttons are rounded by adding a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.rounded'])),
						(l()(), Hs(-1, null, [' class.'])),
						(l()(), Ps(9, 0, null, null, 21, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 2, 'button', [['class', 'btn-xs rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(14, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['xs'])),
						(l()(), Ps(16, 0, null, null, 2, 'button', [['class', 'btn-sm rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(17, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['sm'])),
						(l()(), Ps(19, 0, null, null, 2, 'button', [['class', 'btn-md rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(20, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['md'])),
						(l()(), Ps(22, 0, null, null, 2, 'button', [['class', 'btn-lg rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(23, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['lg'])),
						(l()(), Ps(25, 0, null, null, 2, 'button', [['class', 'btn-xl rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(26, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['xl'])),
						(l()(), Ps(28, 0, null, null, 2, 'button', [['class', 'btn-full rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, sp, tp)),
						lt(29, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['full'])),
						(l()(), Ps(31, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(32, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<button '])),
						(l()(), Ps(34, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-xs rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(41, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(42, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(45, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>xs</button>\n<button '])),
						(l()(), Ps(48, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(49, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(52, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-sm rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(55, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>sm</button>\n<button '])),
						(l()(), Ps(62, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(63, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(66, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(69, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>md</button>\n<button '])),
						(l()(), Ps(76, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-lg rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(83, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>lg</button>\n<button '])),
						(l()(), Ps(90, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(94, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-xl rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(97, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(98, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(101, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>xl</button>\n<button '])),
						(l()(), Ps(104, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(105, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(108, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-full rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(111, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(112, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(115, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, ['>full</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0), l(n, 17, 0), l(n, 20, 0), l(n, 23, 0), l(n, 26, 0), l(n, 29, 0);
					},
					null
				);
			}
			function $p(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 32, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['State'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Buttons are disabled by adding a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['disabled'])),
						(l()(), Hs(-1, null, [' attribute.'])),
						(l()(), Ps(9, 0, null, null, 6, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 2, 'button', [['class', 'btn-md'], ['disabled', ''], ['type', 'button']], null, null, null, sp, tp)),
						lt(14, 114688, null, 0, Td, [], null, null),
						(l()(), Hs(-1, 0, ['disabled'])),
						(l()(), Ps(16, 0, null, null, 16, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 15, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<button '])),
						(l()(), Ps(19, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(20, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(23, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"btn-md"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(26, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Ps(27, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(30, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"button"'])),
						(l()(), Hs(-1, null, [' disabled>disabled</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0);
					},
					null
				);
			}
			function Bp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function qp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Gp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Accordion'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Zp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Expand'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Qp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Wp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Background'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Kp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Border'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Yp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Hover'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Jp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Text'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Xp(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 202, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 8, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['In order for flexbox to work, a parent container must have a '])),
						(l()(), Ps(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.row[-full]'])),
						(l()(), Hs(-1, null, [' or '])),
						(l()(), Ps(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.col[-full]'])),
						(l()(), Hs(-1, null, [' class.'])),
						(l()(), Ps(10, 0, null, null, 23, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(12, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(13, { flexbox: 0, box: 1 }),
						(l()(), Ps(14, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(15, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['row'])),
						(l()(), Ps(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['row'])),
						(l()(), Ps(19, 0, null, null, 4, 'ul', [['class', 'row-full']], null, null, null, null, null)),
						(l()(), Ps(20, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['full row'])),
						(l()(), Ps(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['full row'])),
						(l()(), Ps(24, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(25, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['column'])),
						(l()(), Ps(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['column'])),
						(l()(), Ps(29, 0, null, null, 4, 'ul', [['class', 'col-full']], null, null, null, null, null)),
						(l()(), Ps(30, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['full column'])),
						(l()(), Ps(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['full column'])),
						(l()(), Ps(34, 0, null, null, 168, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(35, 0, null, null, 167, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(36, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(38, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(41, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(44, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(48, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(50, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['row'])),
						(l()(), Ps(54, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(56, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(60, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(62, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['row'])),
						(l()(), Ps(66, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(68, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(74, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(78, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(80, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(83, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(86, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row-full"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(92, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['full row'])),
						(l()(), Ps(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(98, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(104, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['full row'])),
						(l()(), Ps(108, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(110, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(114, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(116, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(120, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(122, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(125, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(128, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(132, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(134, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['column'])),
						(l()(), Ps(138, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(140, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(146, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['column'])),
						(l()(), Ps(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(152, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(156, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(158, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(162, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(164, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(167, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(170, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col-full"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(174, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(176, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['full column'])),
						(l()(), Ps(180, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(182, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(186, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(188, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['full column'])),
						(l()(), Ps(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(194, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(200, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 13, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 12, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function lg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 486, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Container Column'])),
						(l()(), Ps(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Use an '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), Hs(-1, null, [' class to align ALL items in a '])),
						(l()(), Ps(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.col'])),
						(l()(), Hs(-1, null, [' flex container.'])),
						(l()(), Ps(12, 0, null, null, 53, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(14, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(15, { flexbox: 0, box: 1 }),
						(l()(), Ps(16, 0, null, null, 4, 'ul', [['class', 'col align-l']], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(21, 0, null, null, 4, 'ul', [['class', 'col align-c']], null, null, null, null, null)),
						(l()(), Ps(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(26, 0, null, null, 4, 'ul', [['class', 'col align-r']], null, null, null, null, null)),
						(l()(), Ps(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(31, 0, null, null, 4, 'ul', [['class', 'col align-t']], null, null, null, null, null)),
						(l()(), Ps(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(36, 0, null, null, 4, 'ul', [['class', 'col align-m']], null, null, null, null, null)),
						(l()(), Ps(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(41, 0, null, null, 4, 'ul', [['class', 'col align-b']], null, null, null, null, null)),
						(l()(), Ps(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(46, 0, null, null, 4, 'ul', [['class', 'col align-cm']], null, null, null, null, null)),
						(l()(), Ps(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(51, 0, null, null, 4, 'ul', [['class', 'col align-sa']], null, null, null, null, null)),
						(l()(), Ps(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(56, 0, null, null, 4, 'ul', [['class', 'col align-sb']], null, null, null, null, null)),
						(l()(), Ps(57, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(59, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(61, 0, null, null, 4, 'ul', [['class', 'col align-st']], null, null, null, null, null)),
						(l()(), Ps(62, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(64, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(66, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(67, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(68, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(70, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(73, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(76, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col align-l"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(80, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(82, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(86, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(88, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(92, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(94, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(98, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(100, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(106, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(110, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(112, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(115, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(118, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col align-c"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(122, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(124, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(128, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(130, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(136, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(140, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(142, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(146, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(148, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(152, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(154, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(157, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(160, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col align-r"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(164, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(166, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(170, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(172, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(176, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(178, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(184, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(188, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(190, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(194, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(196, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(199, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(202, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col align-t"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(206, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(208, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(212, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(214, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(218, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(220, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(224, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(226, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(230, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(232, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(236, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(238, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(241, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(244, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col align-m"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(248, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(250, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(254, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(256, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(260, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(262, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(266, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(268, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(272, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(274, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(278, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(280, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(283, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(286, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col align-b"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(290, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(292, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(296, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(298, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(302, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(304, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(308, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(310, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(314, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(316, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(320, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(322, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(325, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(328, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col align-cm"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(332, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(334, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(338, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(340, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(344, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(346, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(350, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(352, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(356, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(358, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(362, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(364, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(367, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(370, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col align-sa"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(374, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(376, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(380, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(382, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(386, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(388, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(392, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(394, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(398, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(400, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(404, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(406, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(409, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(412, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col align-sb"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(416, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(418, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(422, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(424, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(428, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(430, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(434, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(436, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(440, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(442, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(446, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(448, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(451, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(454, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col align-st"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(458, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(460, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(464, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(466, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(470, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(472, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(476, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(478, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(482, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(484, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function ng(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 486, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Container Row'])),
						(l()(), Ps(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Use an '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), Hs(-1, null, [' class to align ALL items in a '])),
						(l()(), Ps(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.row'])),
						(l()(), Hs(-1, null, [' flex container.'])),
						(l()(), Ps(12, 0, null, null, 53, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(14, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(15, { flexbox: 0, box: 1 }),
						(l()(), Ps(16, 0, null, null, 4, 'ul', [['class', 'row align-l']], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(21, 0, null, null, 4, 'ul', [['class', 'row align-c']], null, null, null, null, null)),
						(l()(), Ps(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(26, 0, null, null, 4, 'ul', [['class', 'row align-r']], null, null, null, null, null)),
						(l()(), Ps(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(31, 0, null, null, 4, 'ul', [['class', 'row align-t']], null, null, null, null, null)),
						(l()(), Ps(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(36, 0, null, null, 4, 'ul', [['class', 'row align-m']], null, null, null, null, null)),
						(l()(), Ps(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(41, 0, null, null, 4, 'ul', [['class', 'row align-b']], null, null, null, null, null)),
						(l()(), Ps(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(46, 0, null, null, 4, 'ul', [['class', 'row align-cm']], null, null, null, null, null)),
						(l()(), Ps(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(51, 0, null, null, 4, 'ul', [['class', 'row align-sa']], null, null, null, null, null)),
						(l()(), Ps(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(56, 0, null, null, 4, 'ul', [['class', 'row align-sb']], null, null, null, null, null)),
						(l()(), Ps(57, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(59, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(61, 0, null, null, 4, 'ul', [['class', 'row align-st']], null, null, null, null, null)),
						(l()(), Ps(62, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(64, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(66, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(67, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(68, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(70, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(73, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(76, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row align-l"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(80, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(82, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(86, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(88, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(92, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(94, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(98, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(100, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(106, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(110, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(112, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(115, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(118, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row align-c"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(122, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(124, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(128, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(130, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(136, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(140, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(142, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(146, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(148, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(152, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(154, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(157, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(160, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row align-r"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(164, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(166, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(170, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(172, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(176, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(178, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(184, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(188, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(190, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(194, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(196, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(199, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(202, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row align-t"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(206, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(208, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(212, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(214, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(218, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(220, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(224, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(226, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(230, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(232, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(236, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(238, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(241, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(244, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row align-m"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(248, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(250, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(254, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(256, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(260, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(262, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(266, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(268, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(272, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(274, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(278, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(280, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(283, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(286, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row align-b"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(290, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(292, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(296, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(298, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(302, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(304, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(308, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(310, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(314, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(316, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(320, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(322, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(325, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(328, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row align-cm"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(332, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(334, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(338, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(340, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(344, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(346, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(350, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(352, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(356, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(358, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(362, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(364, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(367, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(370, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row align-sa"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(374, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(376, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(380, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(382, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(386, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(388, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(392, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(394, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(398, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(400, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(404, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(406, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(409, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(412, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row align-sb"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(416, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(418, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(422, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(424, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(428, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(430, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(434, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(436, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(440, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(442, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(446, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(448, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(451, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(454, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row align-st"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(458, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(460, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(464, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(466, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(470, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(472, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(476, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(478, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(482, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(484, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function ug(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 440, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Item Column'])),
						(l()(), Ps(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Use '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), Hs(-1, null, [' classes to align ONE child in a '])),
						(l()(), Ps(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.col'])),
						(l()(), Hs(-1, null, [' flex container.'])),
						(l()(), Ps(12, 0, null, null, 43, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(14, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(15, { flexbox: 0, box: 1 }),
						(l()(), Ps(16, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(19, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(21, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(24, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(26, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(29, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(31, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(34, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(36, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(39, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(41, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(44, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(46, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(49, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(51, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(54, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(56, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(57, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(58, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(66, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(70, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(72, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(76, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(82, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(90, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-l"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(96, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(100, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(102, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(106, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(108, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(111, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(114, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(118, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(120, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(124, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(126, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(130, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(132, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(135, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(138, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-c"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(142, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(144, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(150, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(156, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(159, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(162, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(166, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(168, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(172, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(174, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(178, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(180, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(183, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(186, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-r"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(190, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(192, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(196, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(198, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(202, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(204, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(207, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(210, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(214, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(216, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(220, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(222, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(226, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(228, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(231, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(234, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-t"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(238, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(240, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(244, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(246, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(250, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(252, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(255, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(258, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(264, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(270, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(274, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(276, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(279, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(282, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-m"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(286, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(288, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(292, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(294, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(298, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(300, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(303, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(306, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(312, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(316, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(318, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(322, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(324, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(327, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(330, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-b"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(334, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(336, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(340, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(342, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(346, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(348, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(351, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(354, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(358, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(360, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(364, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(366, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(370, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(372, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(375, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(378, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-cm"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(382, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(384, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(388, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(390, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(394, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(396, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(399, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(402, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(406, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(408, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(412, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(414, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(418, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(420, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(423, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(426, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-st"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(430, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(432, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(436, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(438, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function eg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 85, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Item Order'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Use '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.item-order-[1 - 12]'])),
						(l()(), Hs(-1, null, [' classes to align children in a flex container.'])),
						(l()(), Ps(9, 0, null, null, 13, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(14, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['1'])),
						(l()(), Ps(16, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['2'])),
						(l()(), Ps(18, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(19, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['1'])),
						(l()(), Ps(21, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['2'])),
						(l()(), Ps(23, 0, null, null, 62, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(24, 0, null, null, 61, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<ul '])),
						(l()(), Ps(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(29, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>\n    <'])),
						(l()(), Ps(32, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-order-2"'])),
						(l()(), Hs(-1, null, ['>1</'])),
						(l()(), Ps(41, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n    <'])),
						(l()(), Ps(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-order-1"'])),
						(l()(), Hs(-1, null, ['>2</'])),
						(l()(), Ps(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n</ul>\n<ul '])),
						(l()(), Ps(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>\n    <'])),
						(l()(), Ps(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-order-2"'])),
						(l()(), Hs(-1, null, ['>1</'])),
						(l()(), Ps(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n    <'])),
						(l()(), Ps(74, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-order-1"'])),
						(l()(), Hs(-1, null, ['>2</'])),
						(l()(), Ps(83, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n</ul>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function tg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 440, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Item Row'])),
						(l()(), Ps(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Use an '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), Hs(-1, null, [' class to align ONE child in a '])),
						(l()(), Ps(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.row'])),
						(l()(), Hs(-1, null, [' flex container.'])),
						(l()(), Ps(12, 0, null, null, 43, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(14, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(15, { flexbox: 0, box: 1 }),
						(l()(), Ps(16, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(19, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(21, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(24, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(26, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(29, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(31, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(34, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(36, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(39, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(41, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(44, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(46, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(49, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(51, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(54, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(56, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(57, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(58, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(66, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(70, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(72, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(76, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(82, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(90, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-l"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(96, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(100, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(102, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(106, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(108, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(111, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(114, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(118, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(120, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(124, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(126, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(130, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(132, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(135, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(138, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-c"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(142, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(144, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(150, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(156, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(159, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(162, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(166, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(168, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(172, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(174, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(178, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(180, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(183, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(186, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-r"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(190, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(192, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(196, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(198, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(202, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(204, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(207, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(210, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(214, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(216, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(220, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(222, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(226, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(228, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(231, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(234, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-t"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(238, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(240, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(244, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(246, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(250, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(252, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(255, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(258, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(264, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(270, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(274, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(276, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(279, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(282, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-m"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(286, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(288, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(292, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(294, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(298, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(300, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(303, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(306, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(312, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(316, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(318, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(322, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(324, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(327, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(330, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-b"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(334, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(336, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(340, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(342, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(346, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(348, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(351, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(354, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(358, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(360, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(364, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(366, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(370, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(372, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(375, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(378, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-cm"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center middle'])),
						(l()(), Ps(382, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(384, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(388, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(390, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(394, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(396, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(399, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(402, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(406, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(408, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(412, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(414, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(418, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(420, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(423, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(426, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-st"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(430, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(432, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(436, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(438, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function sg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 331, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Item Size'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Use '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.item-[g || s || gs]-[1 - 12]'])),
						(l()(), Hs(-1, null, [' classes to grow and/or shrink children in a flex container.'])),
						(l()(), Ps(9, 0, null, null, 33, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(14, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(16, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['grow'])),
						(l()(), Ps(18, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(21, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['shrink'])),
						(l()(), Ps(23, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Ps(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(26, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['grow & shrink'])),
						(l()(), Ps(28, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(31, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['grow'])),
						(l()(), Ps(33, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(36, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['shrink'])),
						(l()(), Ps(38, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Ps(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(41, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['grow & shrink'])),
						(l()(), Ps(43, 0, null, null, 288, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(44, 0, null, null, 287, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(45, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(47, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(50, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(53, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(57, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(59, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(63, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(65, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(69, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(71, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(74, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(77, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-g-1"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['grow'])),
						(l()(), Ps(81, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(83, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(87, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(89, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(93, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(95, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(98, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(101, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(105, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(107, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(111, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(113, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(117, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(119, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(122, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(125, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-s-1"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['shrink'])),
						(l()(), Ps(129, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(131, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(135, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(137, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(141, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(143, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(146, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(149, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(153, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(155, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(159, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(161, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(165, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(167, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(170, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(173, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-gs-1"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['grow &amp; shrink'])),
						(l()(), Ps(177, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(179, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(183, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(185, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(189, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(191, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(194, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(197, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(201, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(203, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(207, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(209, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(213, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(215, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(218, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(221, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-g-1"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['grow'])),
						(l()(), Ps(225, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(227, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(231, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(233, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(237, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(239, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(242, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(245, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(249, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(251, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(255, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(257, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(261, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(263, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(266, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(269, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-s-1"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['shrink'])),
						(l()(), Ps(273, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(275, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(279, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(281, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(285, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(287, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(290, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(293, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(297, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(299, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['default'])),
						(l()(), Ps(303, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(305, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(309, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(311, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(314, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(317, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"item-gs-1"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['grow &amp; shrink'])),
						(l()(), Ps(321, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(323, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(327, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(329, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function rg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 382, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Wrap Column'])),
						(l()(), Ps(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Use a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.wrap-[c || l || r || sa || sb || st]'])),
						(l()(), Hs(-1, null, [' class to align multi-column items in a '])),
						(l()(), Ps(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.col'])),
						(l()(), Hs(-1, null, [' flex container.'])),
						(l()(), Ps(12, 0, null, null, 45, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(14, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(15, { flexbox: 0, box: 1 }),
						(l()(), Ps(16, 0, null, null, 6, 'ul', [['class', 'col wrap-c']], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(23, 0, null, null, 6, 'ul', [['class', 'col wrap-l']], null, null, null, null, null)),
						(l()(), Ps(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(30, 0, null, null, 6, 'ul', [['class', 'col wrap-r']], null, null, null, null, null)),
						(l()(), Ps(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(35, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(37, 0, null, null, 6, 'ul', [['class', 'col wrap-sa']], null, null, null, null, null)),
						(l()(), Ps(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(40, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(44, 0, null, null, 6, 'ul', [['class', 'col wrap-sb']], null, null, null, null, null)),
						(l()(), Ps(45, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(51, 0, null, null, 6, 'ul', [['class', 'col wrap-st']], null, null, null, null, null)),
						(l()(), Ps(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(58, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(59, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(60, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(62, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(65, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(68, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col wrap-c"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(74, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(78, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(80, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(84, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(86, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(92, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(98, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['center'])),
						(l()(), Ps(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(104, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(108, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(110, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(114, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(116, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(119, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(122, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col wrap-l"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(126, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(128, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(132, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(134, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(138, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(140, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(146, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(152, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['left (default)'])),
						(l()(), Ps(156, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(158, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(162, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(164, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(168, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(170, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(173, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(176, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col wrap-r"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(180, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(182, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(186, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(188, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(194, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(200, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(204, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(206, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Ps(210, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(212, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(216, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(218, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(222, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(224, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(227, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(230, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col wrap-sa"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(234, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(236, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(240, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(242, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(246, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(248, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(252, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(254, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(258, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(260, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(264, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(266, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(270, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(272, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(276, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(278, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(281, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(284, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col wrap-sb"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(288, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(290, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(294, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(296, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(300, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(302, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(306, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(308, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(312, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(314, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(318, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(320, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(324, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(326, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(330, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(332, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(335, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(338, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"col wrap-st"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(342, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(344, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(348, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(350, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(354, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(356, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(360, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(362, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(366, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(368, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(372, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(374, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(378, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(380, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function ag(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 382, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Wrap Row'])),
						(l()(), Ps(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Use a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.wrap-[m || t || b || sa || sb || st]'])),
						(l()(), Hs(-1, null, [' class to align multi-row items in a '])),
						(l()(), Ps(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.row'])),
						(l()(), Hs(-1, null, [' flex container.'])),
						(l()(), Ps(12, 0, null, null, 45, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(14, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(15, { flexbox: 0, box: 1 }),
						(l()(), Ps(16, 0, null, null, 6, 'ul', [['class', 'row wrap-m']], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(23, 0, null, null, 6, 'ul', [['class', 'row wrap-t']], null, null, null, null, null)),
						(l()(), Ps(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(30, 0, null, null, 6, 'ul', [['class', 'row wrap-b']], null, null, null, null, null)),
						(l()(), Ps(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(35, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(37, 0, null, null, 6, 'ul', [['class', 'row wrap-sa']], null, null, null, null, null)),
						(l()(), Ps(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(40, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(44, 0, null, null, 6, 'ul', [['class', 'row wrap-sb']], null, null, null, null, null)),
						(l()(), Ps(45, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(51, 0, null, null, 6, 'ul', [['class', 'row wrap-st']], null, null, null, null, null)),
						(l()(), Ps(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(58, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(59, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(60, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(62, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(65, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(68, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row wrap-m"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(74, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(78, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(80, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(84, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(86, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(92, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(98, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['middle'])),
						(l()(), Ps(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(104, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(108, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(110, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(114, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(116, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(119, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(122, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row wrap-t"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(126, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(128, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(132, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(134, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(138, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(140, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(146, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(152, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['top (default)'])),
						(l()(), Ps(156, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(158, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(162, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(164, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(168, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(170, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(173, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(176, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row wrap-b"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(180, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(182, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(186, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(188, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(194, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(200, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(204, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(206, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Ps(210, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(212, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(216, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(218, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(222, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(224, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(227, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(230, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row wrap-sa"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(234, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(236, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(240, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(242, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(246, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(248, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(252, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(254, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(258, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(260, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space around'])),
						(l()(), Ps(264, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(266, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(270, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(272, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(276, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(278, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(281, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(284, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row wrap-sb"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(288, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(290, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(294, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(296, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(300, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(302, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(306, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(308, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(312, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(314, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['space between'])),
						(l()(), Ps(318, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(320, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(324, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(326, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(330, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(332, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(335, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(338, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"row wrap-st"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(342, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(344, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(348, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(350, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(354, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(356, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(360, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(362, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(366, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(368, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['stretch'])),
						(l()(), Ps(372, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(374, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(378, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(380, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function og(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 15, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 14, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 13, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Forms are styled with '])),
						(l()(), Ps(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.form-group'])),
						(l()(), Hs(-1, null, [', '])),
						(l()(), Ps(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.field-group'])),
						(l()(), Hs(-1, null, [', '])),
						(l()(), Ps(10, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.form-label'])),
						(l()(), Hs(-1, null, [', and '])),
						(l()(), Ps(13, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.form-field'])),
						(l()(), Hs(-1, null, [' classes.']))
					],
					null,
					null
				);
			}
			function ig(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 504, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Checkbox'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Checkboxes and radio buttons are grouped with a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.*-group'])),
						(l()(), Hs(-1, null, [' class on a parent container.'])),
						(l()(), Ps(9, 0, null, null, 69, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 65, 'form', [], null, null, null, null, null)),
						(l()(), Ps(14, 0, null, null, 64, 'ul', [['class', 'form-group']], null, null, null, ap, rp)),
						lt(15, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(17, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, ap, rp)),
						lt(19, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Name'])),
						(l()(), Ps(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, ap, rp)),
						lt(22, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(23, 0, null, 0, 20, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(24, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(25, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, ap, rp)),
						lt(26, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Agree'])),
						(l()(), Ps(28, 0, null, 0, 15, 'ul', [['class', 'radio-group']], null, null, null, ap, rp)),
						lt(29, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(30, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(31, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(32, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yes'], ['name', 'agree'], ['type', 'radio']], null, null, null, ap, rp)),
						lt(33, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(34, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yes']], null, null, null, ap, rp)),
						lt(35, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Yes'])),
						(l()(), Ps(37, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(38, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(39, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'no'], ['name', 'agree'], ['type', 'radio']], null, null, null, ap, rp)),
						lt(40, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(41, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'no']], null, null, null, ap, rp)),
						lt(42, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['No'])),
						(l()(), Ps(44, 0, null, 0, 34, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(45, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(46, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, ap, rp)),
						lt(47, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Color'])),
						(l()(), Ps(49, 0, null, 0, 29, 'ul', [['class', 'checkbox-group']], null, null, null, ap, rp)),
						lt(50, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(51, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(52, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(53, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'blue'], ['name', 'color'], ['type', 'checkbox']], null, null, null, ap, rp)),
						lt(54, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(55, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'blue']], null, null, null, ap, rp)),
						lt(56, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Blue'])),
						(l()(), Ps(58, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(59, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(60, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'green'], ['name', 'color'], ['type', 'checkbox']], null, null, null, ap, rp)),
						lt(61, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(62, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'green']], null, null, null, ap, rp)),
						lt(63, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Green'])),
						(l()(), Ps(65, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(66, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(67, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'red'], ['name', 'color'], ['type', 'checkbox']], null, null, null, ap, rp)),
						lt(68, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(69, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'red']], null, null, null, ap, rp)),
						lt(70, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Red'])),
						(l()(), Ps(72, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(73, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(74, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yellow'], ['name', 'color'], ['type', 'checkbox']], null, null, null, ap, rp)),
						lt(75, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(76, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yellow']], null, null, null, ap, rp)),
						lt(77, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Yellow'])),
						(l()(), Ps(79, 0, null, null, 425, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(80, 0, null, null, 424, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(82, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>\n    <ul '])),
						(l()(), Ps(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(88, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-group"'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(94, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(97, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(100, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(103, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(106, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(109, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(112, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, ['>Name</'])),
						(l()(), Ps(115, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(118, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(121, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(124, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(127, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(130, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(133, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(136, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' placeholder='])),
						(l()(), Ps(139, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter name"'])),
						(l()(), Hs(-1, null, ['>\n        </'])),
						(l()(), Ps(142, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(145, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(148, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(151, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <p '])),
						(l()(), Ps(154, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(157, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, ['>Agree</p>\n            <ul '])),
						(l()(), Ps(160, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(163, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"radio-group"'])),
						(l()(), Hs(-1, null, ['>\n                <'])),
						(l()(), Ps(166, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(169, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(172, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(175, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(181, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(184, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(187, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"radio"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(190, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"agree"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(193, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"yes"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(196, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(199, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(202, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(205, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(208, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"yes"'])),
						(l()(), Hs(-1, null, ['>Yes</'])),
						(l()(), Ps(211, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n                </'])),
						(l()(), Ps(214, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n                <'])),
						(l()(), Ps(217, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(220, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(223, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(226, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(229, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(232, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(235, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(238, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"radio"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(241, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"agree"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(244, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"no"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(247, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(250, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(253, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(256, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(259, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"no"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(262, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['No'])),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(265, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n                </'])),
						(l()(), Ps(268, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), Ps(271, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(274, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(277, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(280, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <p '])),
						(l()(), Ps(283, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(286, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, ['>Color</p>\n            <ul '])),
						(l()(), Ps(289, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(292, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"checkbox-group"'])),
						(l()(), Hs(-1, null, ['>\n                <'])),
						(l()(), Ps(295, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(298, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(301, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(304, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(307, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(310, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(313, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(316, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"checkbox"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(319, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"color"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(322, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"blue"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(325, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(328, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(331, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(334, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(337, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"blue"'])),
						(l()(), Hs(-1, null, ['>Blue</'])),
						(l()(), Ps(340, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n                </'])),
						(l()(), Ps(343, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n                <'])),
						(l()(), Ps(346, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(349, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(352, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(355, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(358, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(361, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(364, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(367, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"checkbox"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(370, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"color"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(373, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"green"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(376, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(379, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(382, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(385, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(388, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"green"'])),
						(l()(), Hs(-1, null, ['>Green</'])),
						(l()(), Ps(391, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n                </'])),
						(l()(), Ps(394, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n                <'])),
						(l()(), Ps(397, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(400, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(403, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(406, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(409, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(412, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(415, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(418, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"checkbox"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(421, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"color"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(424, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"red"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(427, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(430, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(433, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(436, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(439, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"red"'])),
						(l()(), Hs(-1, null, ['>Red</'])),
						(l()(), Ps(442, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n                </'])),
						(l()(), Ps(445, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n                <'])),
						(l()(), Ps(448, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(451, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(454, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(457, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(460, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(463, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(466, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(469, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"checkbox"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(472, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"color"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(475, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"yellow"'])),
						(l()(), Hs(-1, null, ['>\n                    <'])),
						(l()(), Ps(478, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(481, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(484, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(487, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(490, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"yellow"'])),
						(l()(), Hs(-1, null, ['>Yellow</'])),
						(l()(), Ps(493, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n                </'])),
						(l()(), Ps(496, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), Ps(499, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Ps(502, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>']))
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
			function cg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 478, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Field'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Form fields are styled with a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.form-field'])),
						(l()(), Hs(-1, null, [' class. Different styles are applied based on the form field.'])),
						(l()(), Ps(9, 0, null, null, 46, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 42, 'form', [], null, null, null, null, null)),
						(l()(), Ps(14, 0, null, null, 41, 'ul', [['class', 'form-group']], null, null, null, ap, rp)),
						lt(15, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(17, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, ap, rp)),
						lt(19, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Name'])),
						(l()(), Ps(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, ap, rp)),
						lt(22, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(23, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(24, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(25, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'gender']], null, null, null, ap, rp)),
						lt(26, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Gender'])),
						(l()(), Ps(28, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'gender'], ['name', 'gender']], null, null, null, ap, rp)),
						lt(29, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(30, 0, null, 0, 1, 'option', [['value', '1']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Select'])),
						(l()(), Ps(32, 0, null, 0, 1, 'option', [['value', '2']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Female'])),
						(l()(), Ps(34, 0, null, 0, 1, 'option', [['value', '3']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Male'])),
						(l()(), Ps(36, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(37, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(38, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'language']], null, null, null, ap, rp)),
						lt(39, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Language'])),
						(l()(), Ps(41, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'language'], ['multiple', ''], ['name', 'language']], null, null, null, ap, rp)),
						lt(42, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(43, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['English'])),
						(l()(), Ps(45, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['French'])),
						(l()(), Ps(47, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Spanish'])),
						(l()(), Ps(49, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(50, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(51, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'notes']], null, null, null, ap, rp)),
						lt(52, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Notes'])),
						(l()(), Ps(54, 0, null, 0, 1, 'textarea', [['class', 'form-field'], ['id', 'notes'], ['name', 'notes'], ['placeholder', 'Enter notes']], null, null, null, ap, rp)),
						lt(55, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(56, 0, null, null, 422, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(57, 0, null, null, 421, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(58, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(64, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(66, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(69, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(72, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-group"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n        '])),
						(l()(), Ps(76, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(81, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n            '])),
						(l()(), Ps(88, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(90, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(93, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(96, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(99, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(102, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['Name'])),
						(l()(), Ps(106, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(108, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n            '])),
						(l()(), Ps(112, 0, null, null, 34, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(114, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(117, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(120, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(123, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(126, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(129, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['id'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(132, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(135, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['name'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(138, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(141, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['placeholder'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(144, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter name"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n        '])),
						(l()(), Ps(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(150, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n        '])),
						(l()(), Ps(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(156, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(159, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(162, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n            '])),
						(l()(), Ps(166, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(168, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(171, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(174, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(177, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(180, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"gender"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['Gender'])),
						(l()(), Ps(184, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(186, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n            '])),
						(l()(), Ps(190, 0, null, null, 22, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(192, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['select'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(195, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(198, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(201, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['name'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(204, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"gender"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(207, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['id'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(210, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"gender"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n                '])),
						(l()(), Ps(214, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(216, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(219, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['value'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(222, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"1"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['Select'])),
						(l()(), Ps(226, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(228, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n                '])),
						(l()(), Ps(232, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(234, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(237, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['value'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(240, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"2"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['Female'])),
						(l()(), Ps(244, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(246, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n                '])),
						(l()(), Ps(250, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(252, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(255, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['value'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(258, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"3"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['Male'])),
						(l()(), Ps(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(264, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n            '])),
						(l()(), Ps(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(270, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['select'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n        '])),
						(l()(), Ps(274, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(276, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n        '])),
						(l()(), Ps(280, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(282, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(285, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(288, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n            '])),
						(l()(), Ps(292, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(294, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(297, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(300, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(303, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(306, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"language"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['Language'])),
						(l()(), Ps(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(312, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n            '])),
						(l()(), Ps(316, 0, null, null, 25, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(318, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['select'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(321, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(324, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(327, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['name'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(330, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"language"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(333, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['id'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(336, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"language"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(339, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['multiple'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n                '])),
						(l()(), Ps(343, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(345, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['English'])),
						(l()(), Ps(349, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(351, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n                '])),
						(l()(), Ps(355, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(357, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['French'])),
						(l()(), Ps(361, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(363, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n                '])),
						(l()(), Ps(367, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(369, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['Spanish'])),
						(l()(), Ps(373, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(375, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['option'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n            '])),
						(l()(), Ps(379, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(381, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['select'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n        '])),
						(l()(), Ps(385, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(387, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n        '])),
						(l()(), Ps(391, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(393, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(396, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(399, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n            '])),
						(l()(), Ps(403, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(405, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(408, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(411, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(414, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(417, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"notes"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['Notes'])),
						(l()(), Ps(421, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(423, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n            '])),
						(l()(), Ps(427, 0, null, null, 28, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(429, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['textarea'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(432, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(435, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(438, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['name'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(441, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"notes"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(444, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['id'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(447, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"notes"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(450, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['placeholder'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(453, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter notes"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(456, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(458, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['textarea'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n        '])),
						(l()(), Ps(462, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(464, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n    '])),
						(l()(), Ps(468, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(470, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['ul'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['    \n'])),
						(l()(), Ps(474, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(476, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>']))
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
			function hg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 91, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Field Group'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Field groups are styled with a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.field-group'])),
						(l()(), Hs(-1, null, [' class.'])),
						(l()(), Ps(9, 0, null, null, 13, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), Ps(14, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, ap, rp)),
						lt(15, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(17, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, ap, rp)),
						lt(19, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Name'])),
						(l()(), Ps(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, ap, rp)),
						lt(22, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(23, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(24, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>\n    <ul '])),
						(l()(), Ps(29, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-group"'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(38, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, ['>Name</'])),
						(l()(), Ps(59, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' placeholder='])),
						(l()(), Ps(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter name"'])),
						(l()(), Hs(-1, null, ['>\n        </'])),
						(l()(), Ps(86, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Ps(89, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 15, 0), l(n, 17, 0), l(n, 19, 0), l(n, 22, 0);
					},
					null
				);
			}
			function dg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 104, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Fieldset'])),
						(l()(), Ps(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Fieldsets are styled with a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.fieldset'])),
						(l()(), Hs(-1, null, [' class and have a '])),
						(l()(), Ps(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<legend>'])),
						(l()(), Hs(-1, null, [' tag as the first child.'])),
						(l()(), Ps(12, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(14, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(15, { flexbox: 0, box: 1 }),
						(l()(), Ps(16, 0, null, null, 13, 'form', [], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 12, 'fieldset', [['class', 'fieldset']], null, null, null, ap, rp)),
						lt(18, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(19, 0, null, 0, 1, 'legend', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Contact'])),
						(l()(), Ps(21, 0, null, 0, 8, 'ul', [['class', 'form-group']], null, null, null, ap, rp)),
						lt(22, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(23, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(24, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(25, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, ap, rp)),
						lt(26, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Name'])),
						(l()(), Ps(28, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, ap, rp)),
						lt(29, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(30, 0, null, null, 74, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(31, 0, null, null, 73, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(33, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>\n    <fieldset '])),
						(l()(), Ps(36, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(39, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"fieldset"'])),
						(l()(), Hs(-1, null, ['>\n        <legend>Contact</legend>\n        <ul '])),
						(l()(), Ps(42, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(45, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-group"'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(48, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(51, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(54, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n                <'])),
						(l()(), Ps(57, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(60, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(63, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(66, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(69, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, ['>Name</'])),
						(l()(), Ps(72, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n                <'])),
						(l()(), Ps(75, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(78, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(90, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' placeholder='])),
						(l()(), Ps(96, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter name"'])),
						(l()(), Hs(-1, null, ['>\n            </'])),
						(l()(), Ps(99, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n        </ul>\n    </fieldset>    \n</'])),
						(l()(), Ps(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e), l(n, 18, 0), l(n, 22, 0), l(n, 24, 0), l(n, 26, 0), l(n, 29, 0);
					},
					null
				);
			}
			function pg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 285, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Form Group'])),
						(l()(), Ps(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Form groups are styled with a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.form-group'])),
						(l()(), Hs(-1, null, [' class for vertical fields and '])),
						(l()(), Ps(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.form-group-inline'])),
						(l()(), Hs(-1, null, [' for horizontal fields.'])),
						(l()(), Ps(12, 0, null, null, 36, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(14, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(15, { flexbox: 0, box: 1 }),
						(l()(), Ps(16, 0, null, null, 32, 'form', [], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 15, 'ul', [['class', 'form-group-inline']], null, null, null, ap, rp)),
						lt(18, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(19, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(20, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(21, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, ap, rp)),
						lt(22, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Name'])),
						(l()(), Ps(24, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, ap, rp)),
						lt(25, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(26, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(27, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(28, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, ap, rp)),
						lt(29, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Email'])),
						(l()(),
						Ps(31, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, ap, rp)),
						lt(32, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(33, 0, null, null, 15, 'ul', [['class', 'form-group']], null, null, null, ap, rp)),
						lt(34, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(35, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(36, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(37, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, ap, rp)),
						lt(38, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Name'])),
						(l()(), Ps(40, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, ap, rp)),
						lt(41, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(42, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(43, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(44, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, ap, rp)),
						lt(45, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Email'])),
						(l()(),
						Ps(47, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, ap, rp)),
						lt(48, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(49, 0, null, null, 236, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(50, 0, null, null, 235, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(52, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>\n    <ul '])),
						(l()(), Ps(55, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(58, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-group-inline"'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(73, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(79, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, ['>Name</'])),
						(l()(), Ps(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(94, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(97, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(100, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(103, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(106, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' placeholder='])),
						(l()(), Ps(109, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter name"'])),
						(l()(), Hs(-1, null, ['>\n        </'])),
						(l()(), Ps(112, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(115, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(118, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(121, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(124, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(127, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(130, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(133, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(136, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"email"'])),
						(l()(), Hs(-1, null, ['>Email</'])),
						(l()(), Ps(139, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(142, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(145, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(148, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(151, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(154, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(157, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"email"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(160, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"email"'])),
						(l()(), Hs(-1, null, [' placeholder='])),
						(l()(), Ps(163, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter email"'])),
						(l()(), Hs(-1, null, ['>\n        </'])),
						(l()(), Ps(166, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n    </ul>    \n    <ul '])),
						(l()(), Ps(169, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(172, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-group"'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(175, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(181, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(184, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(187, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(190, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(193, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(196, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, ['>Name</'])),
						(l()(), Ps(199, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(202, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(205, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(208, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(211, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(214, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(217, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(220, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' placeholder='])),
						(l()(), Ps(223, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter name"'])),
						(l()(), Hs(-1, null, ['>\n        </'])),
						(l()(), Ps(226, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(229, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(232, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(235, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(238, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(241, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(244, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(247, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(250, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"email"'])),
						(l()(), Hs(-1, null, ['>Email</'])),
						(l()(), Ps(253, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(256, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(259, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(262, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(265, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(268, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(271, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"email"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(274, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"email"'])),
						(l()(), Hs(-1, null, [' placeholder='])),
						(l()(), Ps(277, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter email"'])),
						(l()(), Hs(-1, null, ['>\n        </'])),
						(l()(), Ps(280, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Ps(283, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>']))
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
			function gg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 91, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Label'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Form labels are styled with a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.form-label'])),
						(l()(), Hs(-1, null, [' class.'])),
						(l()(), Ps(9, 0, null, null, 13, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), Ps(14, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, ap, rp)),
						lt(15, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(17, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, ap, rp)),
						lt(19, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Name'])),
						(l()(), Ps(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, ap, rp)),
						lt(22, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(23, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(24, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>\n    <ul '])),
						(l()(), Ps(29, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-group"'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(38, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, ['>Name</'])),
						(l()(), Ps(59, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' placeholder='])),
						(l()(), Ps(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter name"'])),
						(l()(), Hs(-1, null, ['>\n        </'])),
						(l()(), Ps(86, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Ps(89, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 15, 0), l(n, 17, 0), l(n, 19, 0), l(n, 22, 0);
					},
					null
				);
			}
			function fg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 155, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['State'])),
						(l()(), Ps(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Form fields can be disabled by adding a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['disabled'])),
						(l()(), Hs(-1, null, [' attribute or readonly by adding a '])),
						(l()(), Ps(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['readonly'])),
						(l()(), Hs(-1, null, [' attribute. '])),
						(l()(), Ps(12, 0, null, null, 20, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(14, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(15, { flexbox: 0, box: 1 }),
						(l()(), Ps(16, 0, null, null, 16, 'form', [], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 15, 'ul', [['class', 'form-group']], null, null, null, ap, rp)),
						lt(18, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(19, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(20, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(21, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, ap, rp)),
						lt(22, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Disabled'])),
						(l()(),
						Ps(
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
							ap,
							rp
						)),
						lt(25, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(26, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, ap, rp)),
						lt(27, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(28, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, ap, rp)),
						lt(29, 114688, null, 0, Nd, [], null, null),
						(l()(), Hs(-1, 0, ['Readonly'])),
						(l()(),
						Ps(
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
							ap,
							rp
						)),
						lt(32, 114688, null, 0, Nd, [], null, null),
						(l()(), Ps(33, 0, null, null, 122, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(34, 0, null, null, 121, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(36, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>\n    <ul '])),
						(l()(), Ps(39, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-group"'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(45, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(48, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(54, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(57, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(60, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(63, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(66, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, ['>Disabled</'])),
						(l()(), Ps(69, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(72, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(75, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(78, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(90, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' placeholder='])),
						(l()(), Ps(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter name"'])),
						(l()(), Hs(-1, null, [' disabled>\n        </'])),
						(l()(), Ps(96, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n        <'])),
						(l()(), Ps(99, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"field-group"'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(108, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(111, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(114, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-label"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(117, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['for'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(120, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, ['>Readonly</'])),
						(l()(), Ps(123, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['label'])),
						(l()(), Hs(-1, null, ['>\n            <'])),
						(l()(), Ps(126, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['input'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(129, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(132, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"form-field"'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(135, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['type'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(138, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"text"'])),
						(l()(), Hs(-1, null, [' id='])),
						(l()(), Ps(141, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' name='])),
						(l()(), Ps(144, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"name"'])),
						(l()(), Hs(-1, null, [' placeholder='])),
						(l()(), Ps(147, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"Enter name"'])),
						(l()(), Hs(-1, null, [' readonly>\n        </'])),
						(l()(), Ps(150, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['li'])),
						(l()(), Hs(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Ps(153, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['form'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e), l(n, 18, 0), l(n, 20, 0), l(n, 22, 0), l(n, 25, 0), l(n, 27, 0), l(n, 29, 0), l(n, 32, 0);
					},
					null
				);
			}
			function mg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function bg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Area'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function yg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Container'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function wg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Item'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function jg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function vg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Container'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function xg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Sticky Footer'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function _g(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function kg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Cg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Items'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Sg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Links'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Eg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Placement'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ig(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Pg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Og(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Tg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Resets are used to remove padding and margin from all elements. Use space classes to add spacing to elements.']))
					],
					null,
					null
				);
			}
			function Mg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 95, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Margin'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Use a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.mar-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), Hs(-1, null, [' class to add margin to an element.'])),
						(l()(), Ps(9, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 1, 'p', [['class', 'mar-t-xs']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top extra small'])),
						(l()(), Ps(15, 0, null, null, 1, 'p', [['class', 'mar-r-sm']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right small'])),
						(l()(), Ps(17, 0, null, null, 1, 'p', [['class', 'mar-b-md']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom medium'])),
						(l()(), Ps(19, 0, null, null, 1, 'p', [['class', 'mar-l-lg']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left large'])),
						(l()(), Ps(21, 0, null, null, 1, 'p', [['class', 'mar-tb-xl']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top bottom extra large'])),
						(l()(), Ps(23, 0, null, null, 1, 'p', [['class', 'mar-lr-md']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left right medium'])),
						(l()(), Ps(25, 0, null, null, 1, 'p', [['class', 'mar-a-md']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['all medium'])),
						(l()(), Ps(27, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(28, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(30, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(33, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"mar-t-xs"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(36, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top'])),
						(l()(), Hs(-1, null, [' extra small</p>\n<'])),
						(l()(), Ps(39, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"mar-r-sm"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(45, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Hs(-1, null, [' small</p>\n<'])),
						(l()(), Ps(48, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"mar-b-md"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(54, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Hs(-1, null, [' medium</p>\n<'])),
						(l()(), Ps(57, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(60, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"mar-l-lg"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left'])),
						(l()(), Hs(-1, null, [' large</p>\n<'])),
						(l()(), Ps(66, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(69, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"mar-tb-xl"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(72, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(75, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Hs(-1, null, [' extra large</p>\n<'])),
						(l()(), Ps(78, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"mar-lr-md"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Hs(-1, null, [' medium</p>\n<'])),
						(l()(), Ps(90, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"mar-a-md"'])),
						(l()(), Hs(-1, null, ['>all medium</p>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Rg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 95, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Padding'])),
						(l()(), Ps(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Use a '])),
						(l()(), Ps(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.pad-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), Hs(-1, null, [' class to add padding to an element.'])),
						(l()(), Ps(9, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(11, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(12, { flexbox: 0, box: 1 }),
						(l()(), Ps(13, 0, null, null, 1, 'p', [['class', 'pad-t-xs']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top extra small'])),
						(l()(), Ps(15, 0, null, null, 1, 'p', [['class', 'pad-r-sm']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right small'])),
						(l()(), Ps(17, 0, null, null, 1, 'p', [['class', 'pad-b-md']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom medium'])),
						(l()(), Ps(19, 0, null, null, 1, 'p', [['class', 'pad-l-lg']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left large'])),
						(l()(), Ps(21, 0, null, null, 1, 'p', [['class', 'pad-tb-xl']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top bottom extra large'])),
						(l()(), Ps(23, 0, null, null, 1, 'p', [['class', 'pad-lr-md']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left right medium'])),
						(l()(), Ps(25, 0, null, null, 1, 'p', [['class', 'pad-a-md']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['all medium'])),
						(l()(), Ps(27, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(28, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(30, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(33, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"pad-t-xs"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(36, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top'])),
						(l()(), Hs(-1, null, [' extra small</p>\n<'])),
						(l()(), Ps(39, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"pad-r-sm"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(45, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Hs(-1, null, [' small</p>\n<'])),
						(l()(), Ps(48, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"pad-b-md"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(54, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Hs(-1, null, [' medium</p>\n<'])),
						(l()(), Ps(57, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(60, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"pad-l-lg"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left'])),
						(l()(), Hs(-1, null, [' large</p>\n<'])),
						(l()(), Ps(66, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(69, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"pad-tb-xl"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(72, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['top'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(75, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['bottom'])),
						(l()(), Hs(-1, null, [' extra large</p>\n<'])),
						(l()(), Ps(78, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"pad-lr-md"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(84, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['left'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['right'])),
						(l()(), Hs(-1, null, [' medium</p>\n<'])),
						(l()(), Ps(90, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' class='])),
						(l()(), Ps(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"pad-a-md"'])),
						(l()(), Hs(-1, null, ['>all medium</p>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Ag(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 49, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Spinners are styled with a '])),
						(l()(), Ps(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['.spinner[-dotted]'])),
						(l()(), Hs(-1, null, [' class.'])),
						(l()(), Ps(7, 0, null, null, 7, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(9, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(10, { flexbox: 0, box: 1 }),
						(l()(), Ps(11, 0, null, null, 1, 'p', [['class', 'spinner']], null, null, null, ip, op)),
						lt(12, 114688, null, 0, Hd, [], null, null),
						(l()(), Ps(13, 0, null, null, 1, 'p', [['class', 'spinner-dotted']], null, null, null, ip, op)),
						lt(14, 114688, null, 0, Hd, [], null, null),
						(l()(), Ps(15, 0, null, null, 34, 'figure', [], null, null, null, null, null)),
						(l()(), Ps(16, 0, null, null, 33, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(17, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(19, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(22, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(25, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"spinner"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(28, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(30, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Hs(-1, null, ['\n'])),
						(l()(), Ps(34, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['<'])),
						(l()(), Ps(36, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, [' '])),
						(l()(), Ps(39, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['class'])),
						(l()(), Hs(-1, null, ['='])),
						(l()(), Ps(42, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['"spinner-dotted"'])),
						(l()(), Hs(-1, null, ['>'])),
						(l()(), Ps(45, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['</'])),
						(l()(), Ps(47, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['p'])),
						(l()(), Hs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0), l(n, 14, 0);
					},
					null
				);
			}
			function Ng(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Dg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ug(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Lg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Border'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Vg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Hover'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Fg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Striped'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function zg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Table Cell'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Hg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Table Row'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function $g(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Bg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function qg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Font'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Gg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Text'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Zg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Qg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Wg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Hide'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Kg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Show'])),
						(l()(), Ps(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Hs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Yg(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 193, 'nav', [['class', 'pad-a-sm border-a-gray box-shadow-1 fixed-l styleguide-menu']], null, null, null, null, null)),
						(l()(), Ps(1, 0, null, null, 192, 'ul', [], null, null, null, null, null)),
						(l()(), Ps(2, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(5, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(6, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Alert'])),
						(l()(), Is(16777216, null, null, 1, null, dp)),
						lt(9, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(10, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(13, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(14, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Badge'])),
						(l()(), Is(16777216, null, null, 1, null, pp)),
						lt(17, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(18, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(21, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(22, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Button'])),
						(l()(), Is(16777216, null, null, 1, null, gp)),
						lt(25, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(26, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(29, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(30, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Card'])),
						(l()(), Is(16777216, null, null, 1, null, fp)),
						lt(33, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(34, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(37, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(38, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Collapse'])),
						(l()(), Is(16777216, null, null, 1, null, mp)),
						lt(41, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(42, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(45, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(46, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Color'])),
						(l()(), Is(16777216, null, null, 1, null, bp)),
						lt(49, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(50, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(53, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(54, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Flexbox'])),
						(l()(), Is(16777216, null, null, 1, null, yp)),
						lt(57, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(58, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(61, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(62, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Form'])),
						(l()(), Is(16777216, null, null, 1, null, wp)),
						lt(65, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(66, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(69, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(70, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Grid'])),
						(l()(), Is(16777216, null, null, 1, null, jp)),
						lt(73, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(74, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(77, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(78, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Layout'])),
						(l()(), Is(16777216, null, null, 1, null, vp)),
						lt(81, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(82, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(85, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(86, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Modal'])),
						(l()(), Is(16777216, null, null, 1, null, xp)),
						lt(89, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(90, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(93, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(94, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Nav'])),
						(l()(), Is(16777216, null, null, 1, null, _p)),
						lt(97, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(98, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(101, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(102, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Position'])),
						(l()(), Is(16777216, null, null, 1, null, kp)),
						lt(105, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(106, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(109, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(110, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Slider'])),
						(l()(), Is(16777216, null, null, 1, null, Cp)),
						lt(113, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(114, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(117, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(118, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Slideshow'])),
						(l()(), Is(16777216, null, null, 1, null, Sp)),
						lt(121, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(122, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(125, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(126, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Space'])),
						(l()(), Is(16777216, null, null, 1, null, Ep)),
						lt(129, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(130, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(133, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(134, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Spinner'])),
						(l()(), Is(16777216, null, null, 1, null, Ip)),
						lt(137, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(138, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(141, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(142, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Switch'])),
						(l()(), Is(16777216, null, null, 1, null, Pp)),
						lt(145, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(146, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(149, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(150, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Tab'])),
						(l()(), Is(16777216, null, null, 1, null, Op)),
						lt(153, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(154, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(157, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(158, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Table'])),
						(l()(), Is(16777216, null, null, 1, null, Tp)),
						lt(161, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(162, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(165, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(166, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Tooltip'])),
						(l()(), Is(16777216, null, null, 1, null, Mp)),
						lt(169, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(170, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(173, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(174, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Typography'])),
						(l()(), Is(16777216, null, null, 1, null, Rp)),
						lt(177, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(178, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(181, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(182, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Utilities'])),
						(l()(), Is(16777216, null, null, 1, null, Ap)),
						lt(185, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(186, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Ps(
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
						nt(512, null, fa, ma, [bu, yu, Jn, eu]),
						lt(189, 278528, null, 0, ya, [fa], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						zs(190, { 'bg-lt-gray': 0 }),
						(l()(), Hs(-1, null, ['Visibility'])),
						(l()(), Is(16777216, null, null, 1, null, Np)),
						lt(193, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ps(194, 0, [['content', 1]], null, 139, 'main', [['class', 'pad-a-xl styleguide'], ['tabindex', '-1']], null, null, null, null, null)),
						(l()(), Ps(195, 0, null, null, 0, 'h1', [['class', 'pad-t-xl']], [[8, 'innerHTML', 1]], null, null, null, null)),
						(l()(), Is(16777216, null, null, 1, null, Dp)),
						lt(197, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Up)),
						lt(199, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Lp)),
						lt(201, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Vp)),
						lt(203, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Fp)),
						lt(205, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, zp)),
						lt(207, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Hp)),
						lt(209, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, $p)),
						lt(211, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Bp)),
						lt(213, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, qp)),
						lt(215, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Gp)),
						lt(217, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Zp)),
						lt(219, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Qp)),
						lt(221, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Wp)),
						lt(223, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Kp)),
						lt(225, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Yp)),
						lt(227, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Jp)),
						lt(229, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Xp)),
						lt(231, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, lg)),
						lt(233, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, ng)),
						lt(235, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, ug)),
						lt(237, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, eg)),
						lt(239, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, tg)),
						lt(241, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, sg)),
						lt(243, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, rg)),
						lt(245, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, ag)),
						lt(247, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, og)),
						lt(249, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, ig)),
						lt(251, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, cg)),
						lt(253, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, hg)),
						lt(255, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, dg)),
						lt(257, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, pg)),
						lt(259, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, gg)),
						lt(261, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, fg)),
						lt(263, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, mg)),
						lt(265, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, bg)),
						lt(267, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, yg)),
						lt(269, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, wg)),
						lt(271, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, jg)),
						lt(273, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, vg)),
						lt(275, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, xg)),
						lt(277, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, _g)),
						lt(279, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, kg)),
						lt(281, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Cg)),
						lt(283, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Sg)),
						lt(285, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Eg)),
						lt(287, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Ig)),
						lt(289, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Pg)),
						lt(291, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Og)),
						lt(293, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Tg)),
						lt(295, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Mg)),
						lt(297, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Rg)),
						lt(299, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Ag)),
						lt(301, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Ng)),
						lt(303, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Dg)),
						lt(305, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Ug)),
						lt(307, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Lg)),
						lt(309, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Vg)),
						lt(311, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Fg)),
						lt(313, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, zg)),
						lt(315, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Hg)),
						lt(317, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, $g)),
						lt(319, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Bg)),
						lt(321, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, qg)),
						lt(323, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Gg)),
						lt(325, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Zg)),
						lt(327, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Qg)),
						lt(329, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Wg)),
						lt(331, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Is(16777216, null, null, 1, null, Kg)),
						lt(333, 16384, null, 0, wa, [Su, ku], { ngIf: [0, 'ngIf'] }, null)
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 6, 0, u.checkSection('Alert'));
						l(n, 5, 0, 'hover bg-hover-lt-gray pad-a-xs', e), l(n, 9, 0, u.checkSection('Alert'));
						var t = l(n, 14, 0, u.checkSection('Badge'));
						l(n, 13, 0, 'hover bg-hover-lt-gray pad-a-xs', t), l(n, 17, 0, u.checkSection('Badge'));
						var s = l(n, 22, 0, u.checkSection('Button'));
						l(n, 21, 0, 'hover bg-hover-lt-gray pad-a-xs', s), l(n, 25, 0, u.checkSection('Button'));
						var r = l(n, 30, 0, u.checkSection('Card'));
						l(n, 29, 0, 'hover bg-hover-lt-gray pad-a-xs', r), l(n, 33, 0, u.checkSection('Card'));
						var a = l(n, 38, 0, u.checkSection('Collapse'));
						l(n, 37, 0, 'hover bg-hover-lt-gray pad-a-xs', a), l(n, 41, 0, u.checkSection('Collapse'));
						var o = l(n, 46, 0, u.checkSection('Color'));
						l(n, 45, 0, 'hover bg-hover-lt-gray pad-a-xs', o), l(n, 49, 0, u.checkSection('Color'));
						var i = l(n, 54, 0, u.checkSection('Flexbox'));
						l(n, 53, 0, 'hover bg-hover-lt-gray pad-a-xs', i), l(n, 57, 0, u.checkSection('Flexbox'));
						var c = l(n, 62, 0, u.checkSection('Form'));
						l(n, 61, 0, 'hover bg-hover-lt-gray pad-a-xs', c), l(n, 65, 0, u.checkSection('Form'));
						var h = l(n, 70, 0, u.checkSection('Grid'));
						l(n, 69, 0, 'hover bg-hover-lt-gray pad-a-xs', h), l(n, 73, 0, u.checkSection('Grid'));
						var d = l(n, 78, 0, u.checkSection('Layout'));
						l(n, 77, 0, 'hover bg-hover-lt-gray pad-a-xs', d), l(n, 81, 0, u.checkSection('Layout'));
						var p = l(n, 86, 0, u.checkSection('Modal'));
						l(n, 85, 0, 'hover bg-hover-lt-gray pad-a-xs', p), l(n, 89, 0, u.checkSection('Modal'));
						var g = l(n, 94, 0, u.checkSection('Nav'));
						l(n, 93, 0, 'hover bg-hover-lt-gray pad-a-xs', g), l(n, 97, 0, u.checkSection('Nav'));
						var f = l(n, 102, 0, u.checkSection('Position'));
						l(n, 101, 0, 'hover bg-hover-lt-gray pad-a-xs', f), l(n, 105, 0, u.checkSection('Position'));
						var m = l(n, 110, 0, u.checkSection('Slider'));
						l(n, 109, 0, 'hover bg-hover-lt-gray pad-a-xs', m), l(n, 113, 0, u.checkSection('Slider'));
						var b = l(n, 118, 0, u.checkSection('Slideshow'));
						l(n, 117, 0, 'hover bg-hover-lt-gray pad-a-xs', b), l(n, 121, 0, u.checkSection('Slideshow'));
						var y = l(n, 126, 0, u.checkSection('Space'));
						l(n, 125, 0, 'hover bg-hover-lt-gray pad-a-xs', y), l(n, 129, 0, u.checkSection('Space'));
						var w = l(n, 134, 0, u.checkSection('Spinner'));
						l(n, 133, 0, 'hover bg-hover-lt-gray pad-a-xs', w), l(n, 137, 0, u.checkSection('Spinner'));
						var j = l(n, 142, 0, u.checkSection('Switch'));
						l(n, 141, 0, 'hover bg-hover-lt-gray pad-a-xs', j), l(n, 145, 0, u.checkSection('Switch'));
						var v = l(n, 150, 0, u.checkSection('Tab'));
						l(n, 149, 0, 'hover bg-hover-lt-gray pad-a-xs', v), l(n, 153, 0, u.checkSection('Tab'));
						var x = l(n, 158, 0, u.checkSection('Table'));
						l(n, 157, 0, 'hover bg-hover-lt-gray pad-a-xs', x), l(n, 161, 0, u.checkSection('Table'));
						var _ = l(n, 166, 0, u.checkSection('Tooltip'));
						l(n, 165, 0, 'hover bg-hover-lt-gray pad-a-xs', _), l(n, 169, 0, u.checkSection('Tooltip'));
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
			function Jg(l) {
				return qs(
					0,
					[(l()(), Ps(0, 0, null, null, 1, 'ng-component', [], null, null, null, Yg, hp)), lt(1, 114688, null, 0, cp, [], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			var Xg = Oe('ng-component', cp, Jg, {}, {}, []),
				lf = Bu({ encapsulation: 0, styles: [['']], data: {} });
			function nf(l) {
				return qs(
					0,
					[
						(l()(), Ps(0, 0, null, null, 3, 'ez-root', [], null, null, null, Jd, Yd)),
						lt(1, 114688, null, 0, Qd, [Jn], null, null),
						(l()(), Ps(2, 16777216, null, 0, 1, 'router-outlet', [], null, null, null, null, null)),
						lt(3, 212992, null, 0, ld, [Xh, Su, Gn, [8, null], wu], null, null)
					],
					function(l, n) {
						l(n, 1, 0), l(n, 3, 0);
					},
					null
				);
			}
			function uf(l) {
				return qs(0, [(l()(), Ps(0, 0, null, null, 1, 'docs-root', [], null, null, null, nf, lf)), lt(1, 49152, null, 0, Xr, [], null, null)], null, null);
			}
			var ef = Oe('docs-root', Xr, uf, {}, {}, []);
			class tf {}
			class sf {}
			var rf = Kr(Jr, [Xr], function(l) {
				return (function(l) {
					const n = {},
						u = [];
					let e = !1;
					for (let t = 0; t < l.length; t++) {
						const s = l[t];
						s.token === Fn && !0 === s.value && (e = !0), 1073741824 & s.flags && u.push(s.token), (s.index = t), (n[zu(s.token)] = s);
					}
					return { factory: null, providersByKey: n, providers: l, modules: u, isRoot: e };
				})([
					ve(512, Gn, Zn, [[8, [Cd, Xg, ef]], [3, Gn], Wn]),
					ve(5120, xs, Cs, [[3, xs]]),
					ve(4608, pa, ga, [xs, [2, da]]),
					ve(5120, mt, Ss, [Bt]),
					ve(5120, xt, _t, []),
					ve(5120, bu, _s, []),
					ve(5120, yu, ks, []),
					ve(4608, vi, xi, [_a]),
					ve(6144, Cn, null, [vi]),
					ve(4608, gi, mi, []),
					ve(
						5120,
						zo,
						function(l, n, u, e, t, s, r, a) {
							return [new di(l, n, u), new ji(e), new bi(t, s, r, a)];
						},
						[_a, Bt, St, _a, _a, gi, It, [2, fi]]
					),
					ve(4608, Ho, Ho, [zo, Bt]),
					ve(135680, qo, qo, [_a]),
					ve(4608, Jo, Jo, [Ho, qo, xt]),
					ve(6144, nu, null, [Jo]),
					ve(6144, Bo, null, [qo]),
					ve(4608, Yt, Yt, [Bt]),
					ve(5120, Fc, bd, [Yh]),
					ve(4608, td, td, []),
					ve(6144, ud, null, [td]),
					ve(135680, sd, sd, [Yh, wt, At, Pl, ud]),
					ve(4608, ed, ed, []),
					ve(5120, rd, dd, [Yh, ka, ad]),
					ve(5120, vd, jd, [yd]),
					ve(
						5120,
						Et,
						function(l) {
							return [l];
						},
						[vd]
					),
					ve(1073742336, xa, xa, []),
					ve(1024, Jl, Oi, []),
					ve(
						1024,
						ts,
						function() {
							return [cd()];
						},
						[]
					),
					ve(512, yd, yd, [Pl]),
					ve(
						1024,
						jt,
						function(l, n) {
							return [((u = l), Lo('probe', Fo), Lo('coreTokens', Object.assign({}, Vo, (u || []).reduce((l, n) => ((l[n.name] = n.token), l), {}))), () => Fo), wd(n)];
							var u;
						},
						[[2, ts], yd]
					),
					ve(512, vt, vt, [[2, jt]]),
					ve(131584, is, is, [Bt, It, Pl, Jl, Gn, vt]),
					ve(1073742336, Es, Es, [is]),
					ve(1073742336, Ti, Ti, [[3, Ti]]),
					ve(1073742336, Wd, Wd, []),
					ve(1024, od, gd, [[3, Yh]]),
					ve(512, yc, wc, []),
					ve(512, Xh, Xh, []),
					ve(256, ad, { useHash: !0, anchorScrolling: 'enabled' }, []),
					ve(1024, ua, pd, [la, [2, ea], ad]),
					ve(512, ta, ta, [ua, la]),
					ve(512, At, At, []),
					ve(512, wt, ps, [At, [2, hs]]),
					ve(
						1024,
						Bh,
						function() {
							return [[{ path: 'components', component: cp }, { path: '', redirectTo: '/components', pathMatch: 'full' }, { path: '**', redirectTo: '/components', pathMatch: 'full' }]];
						},
						[]
					),
					ve(1024, Yh, md, [is, yc, Xh, ta, Pl, wt, At, Bh, ad, [2, Gh], [2, Hh]]),
					ve(1073742336, hd, hd, [[2, od], [2, Yh]]),
					ve(1073742336, tf, tf, []),
					ve(1073742336, Ed, Ed, []),
					ve(1073742336, Id, Id, []),
					ve(1073742336, Od, Od, []),
					ve(1073742336, Md, Md, []),
					ve(1073742336, Rd, Rd, []),
					ve(1073742336, Ad, Ad, []),
					ve(1073742336, Dd, Dd, []),
					ve(1073742336, Ud, Ud, []),
					ve(1073742336, Ld, Ld, []),
					ve(1073742336, Vd, Vd, []),
					ve(1073742336, Fd, Fd, []),
					ve(1073742336, zd, zd, []),
					ve(1073742336, $d, $d, []),
					ve(1073742336, Bd, Bd, []),
					ve(1073742336, qd, qd, []),
					ve(1073742336, Gd, Gd, []),
					ve(1073742336, Zd, Zd, []),
					ve(1073742336, Kd, Kd, []),
					ve(1073742336, sf, sf, []),
					ve(1073742336, Jr, Jr, []),
					ve(256, Fn, !0, [])
				]);
			});
			(function() {
				if (ln) throw new Error('Cannot enable prod mode after platform setup.');
				Xl = !1;
			})(),
				Pi()
					.bootstrapModuleFactory(rf)
					.catch((l) => console.log(l));
		}
	},
	[[0, 0]]
]);
//# sourceMappingURL=main-es2015.72d36bd11376dd4fb18b.js.map
