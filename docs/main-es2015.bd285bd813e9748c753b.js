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
			class F extends f {
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
			function L(l, n) {
				return function(u) {
					if ('function' != typeof l) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
					return u.lift(new V(l, n));
				};
			}
			class V {
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
				return 'function' == typeof n ? (e) => e.pipe(B((u, e) => $(l(u, e)).pipe(L((l, t) => n(u, l, e, t))), u)) : ('number' == typeof n && (u = n), (n) => n.lift(new q(l, u)));
			}
			class q {
				constructor(l, n = Number.POSITIVE_INFINITY) {
					(this.project = l), (this.concurrent = n);
				}
				call(l, n) {
					return n.subscribe(new G(l, this.project, this.concurrent));
				}
			}
			class G extends F {
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
				return { token: l.token, providedIn: l.providedIn || null, factory: l.factory, value: void 0 };
			}
			function dl(l) {
				const n = l[pl];
				return n && n.token === l ? n : null;
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
			const yl = 'undefined' != typeof globalThis && globalThis,
				wl = 'undefined' != typeof window && window,
				jl = 'undefined' != typeof self && 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
				vl = 'undefined' != typeof global && global,
				xl = yl || vl || wl || jl;
			class _l {
				constructor(l, n) {
					(this._desc = l),
						(this.ngMetadataName = 'InjectionToken'),
						(this.ngInjectableDef = void 0),
						'number' == typeof n ? (this.__NG_ELEMENT_ID__ = n) : void 0 !== n && (this.ngInjectableDef = hl({ token: this, providedIn: n.providedIn || 'root', factory: n.factory }));
				}
				toString() {
					return `InjectionToken ${this._desc}`;
				}
			}
			const kl = new _l('INJECTOR', -1),
				Cl = new Object(),
				Sl = 'ngTempTokenPath',
				El = 'ngTokenPath',
				Il = /\n/gm,
				Pl = '\u0275',
				Ol = '__source',
				Tl = cl({ provide: String, useValue: cl });
			let Ml,
				Rl = void 0;
			function Al(l) {
				const n = Rl;
				return (Rl = l), n;
			}
			function Nl(l, n = il.Default) {
				return (Ml ||
					function(l, n = il.Default) {
						if (void 0 === Rl) throw new Error('inject() must be called from an injection context');
						return null === Rl
							? (function(l, n, u) {
									const e = dl(l);
									if (e && 'root' == e.providedIn) return void 0 === e.value ? (e.value = e.factory()) : e.value;
									if (u & il.Optional) return null;
									throw new Error(`Injector: NOT_FOUND [${gl(l)}]`);
							  })(l, 0, n)
							: Rl.get(l, n & il.Optional ? null : void 0, n);
					})(l, n);
			}
			class Dl {
				get(l, n = Cl) {
					if (n === Cl) {
						const n = new Error(`NullInjectorError: No provider for ${gl(l)}!`);
						throw ((n.name = 'NullInjectorError'), n);
					}
					return n;
				}
			}
			function Ul(l, n, u, e = null) {
				l = l && '\n' === l.charAt(0) && l.charAt(1) == Pl ? l.substr(2) : l;
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
				return `${u}${e ? '(' + e + ')' : ''}[${t}]: ${l.replace(Il, '\n  ')}`;
			}
			const Fl = new _l('The presence of this token marks an injector as being the root injector.'),
				Ll = function(l, n, u) {
					return new Gl(l, n, u);
				},
				Vl = (() => {
					class l {
						static create(l, n) {
							return Array.isArray(l) ? Ll(l, n, '') : Ll(l.providers, l.parent, l.name || '');
						}
					}
					return (l.THROW_IF_NOT_FOUND = Cl), (l.NULL = new Dl()), (l.ngInjectableDef = hl({ token: l, providedIn: 'any', factory: () => Nl(kl) })), (l.__NG_ELEMENT_ID__ = -1), l;
				})(),
				zl = function(l) {
					return l;
				},
				Hl = [],
				$l = zl,
				Bl = function() {
					return Array.prototype.slice.call(arguments);
				},
				ql = '\u0275';
			class Gl {
				constructor(l, n = Vl.NULL, u = null) {
					(this.parent = n), (this.source = u);
					const e = (this._records = new Map());
					e.set(Vl, { token: Vl, fn: zl, deps: Hl, value: this, useNew: !1 }),
						e.set(kl, { token: kl, fn: zl, deps: Hl, value: this, useNew: !1 }),
						(function l(n, u) {
							if (u)
								if ((u = bl(u)) instanceof Array) for (let e = 0; e < u.length; e++) l(n, u[e]);
								else {
									if ('function' == typeof u) throw Ql('Function/Class not supported', u);
									if (!u || 'object' != typeof u || !u.provide) throw Ql('Unexpected provider', u);
									{
										let l = bl(u.provide);
										const e = (function(l) {
											const n = (function(l) {
												let n = Hl;
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
												else if (!(u || Tl in l)) throw Ql("'deps' required", l);
												return n;
											})(l);
											let u = zl,
												e = Hl,
												t = !1,
												s = bl(l.provide);
											if (Tl in l) e = l.useValue;
											else if (l.useFactory) u = l.useFactory;
											else if (l.useExisting);
											else if (l.useClass) (t = !0), (u = bl(l.useClass));
											else {
												if ('function' != typeof s) throw Ql('StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable', l);
												(t = !0), (u = s);
											}
											return { deps: n, fn: u, useNew: t, value: e };
										})(u);
										if (!0 === u.multi) {
											let e = n.get(l);
											if (e) {
												if (e.fn !== Bl) throw Zl(l);
											} else n.set(l, (e = { token: u.provide, deps: [], useNew: !1, fn: Bl, value: Hl }));
											e.deps.push({ token: (l = u), options: 6 });
										}
										const t = n.get(l);
										if (t && t.fn == Bl) throw Zl(l);
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
										if ((a = u.value) == $l) throw Error(ql + 'Circular dependency');
										if (a === Hl) {
											u.value = $l;
											let n = void 0,
												s = u.useNew,
												r = u.fn,
												o = u.deps,
												i = Hl;
											if (o.length) {
												i = [];
												for (let n = 0; n < o.length; n++) {
													const u = o[n],
														s = u.options,
														r = 2 & s ? e.get(u.token) : void 0;
													i.push(l(u.token, r, e, r || 4 & s ? t : Vl.NULL, 1 & s ? null : Vl.THROW_IF_NOT_FOUND, il.Default));
												}
											}
											u.value = a = s ? new r(...i) : r.apply(n, i);
										}
									}
									return a;
								})(n, u, e, t, s, r);
							} catch (a) {
								throw (a instanceof Error || (a = new Error(a)), (a[Sl] = a[Sl] || []).unshift(n), u && u.value == $l && (u.value = Hl), a);
							}
						})(l, e, this._records, this.parent, n, u);
					} catch (t) {
						return (function(l, n, u, e) {
							const t = l[Sl];
							throw (n[Ol] && t.unshift(n[Ol]), (l.message = Ul('\n' + l.message, t, 'StaticInjectorError', e)), (l[El] = t), (l[Sl] = null), l);
						})(t, l, 0, this.source);
					}
				}
				toString() {
					const l = [];
					return this._records.forEach((n, u) => l.push(gl(u))), `StaticInjector[${l.join(', ')}]`;
				}
			}
			function Zl(l) {
				return Ql('Cannot mix multi providers and regular providers', l);
			}
			function Ql(l, n) {
				return new Error(Ul(l, n, 'StaticInjectorError'));
			}
			const Wl = 'ngDebugContext',
				Kl = 'ngOriginalError',
				Yl = 'ngErrorLogger',
				Jl = new _l('AnalyzeForEntryComponents'),
				Xl = (function() {
					var l = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
					return (l[l.Emulated] = 'Emulated'), (l[l.Native] = 'Native'), (l[l.None] = 'None'), (l[l.ShadowDom] = 'ShadowDom'), l;
				})(),
				ln = (() => (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(xl))();
			let nn = !0,
				un = !1;
			function en() {
				return (un = !0), nn;
			}
			class tn {
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
			const sn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
				rn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
			function an(l) {
				return (l = String(l)).match(sn) || l.match(rn) ? l : (en() && console.warn(`WARNING: sanitizing unsafe URL value ${l} (see http://g.co/ng/security#xss)`), 'unsafe:' + l);
			}
			function on(l) {
				const n = {};
				for (const u of l.split(',')) n[u] = !0;
				return n;
			}
			function cn(...l) {
				const n = {};
				for (const u of l) for (const l in u) u.hasOwnProperty(l) && (n[l] = !0);
				return n;
			}
			const hn = on('area,br,col,hr,img,wbr'),
				dn = on('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
				pn = on('rp,rt'),
				gn = cn(pn, dn),
				fn = cn(
					hn,
					cn(
						dn,
						on(
							'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
						)
					),
					cn(
						pn,
						on(
							'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
						)
					),
					gn
				),
				mn = on('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
				bn = on('srcset'),
				yn = cn(
					mn,
					bn,
					on(
						'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
					),
					on(
						'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
					)
				),
				wn = on('script,style,template');
			class jn {
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
					if (!fn.hasOwnProperty(n)) return (this.sanitizedSomething = !0), !wn.hasOwnProperty(n);
					this.buf.push('<'), this.buf.push(n);
					const u = l.attributes;
					for (let t = 0; t < u.length; t++) {
						const l = u.item(t),
							n = l.name,
							s = n.toLowerCase();
						if (!yn.hasOwnProperty(s)) {
							this.sanitizedSomething = !0;
							continue;
						}
						let r = l.value;
						mn[s] && (r = an(r)),
							bn[s] &&
								((e = r),
								(r = (e = String(e))
									.split(',')
									.map((l) => an(l.trim()))
									.join(', '))),
							this.buf.push(' ', n, '="', _n(r), '"');
					}
					var e;
					return this.buf.push('>'), !0;
				}
				endElement(l) {
					const n = l.nodeName.toLowerCase();
					fn.hasOwnProperty(n) && !hn.hasOwnProperty(n) && (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
				}
				chars(l) {
					this.buf.push(_n(l));
				}
				checkClobberedElement(l, n) {
					if (n && (l.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
						throw new Error(`Failed to sanitize html because the element is clobbered: ${l.outerHTML}`);
					return n;
				}
			}
			const vn = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				xn = /([^\#-~ |!])/g;
			function _n(l) {
				return l
					.replace(/&/g, '&amp;')
					.replace(vn, function(l) {
						return '&#' + (1024 * (l.charCodeAt(0) - 55296) + (l.charCodeAt(1) - 56320) + 65536) + ';';
					})
					.replace(xn, function(l) {
						return '&#' + l.charCodeAt(0) + ';';
					})
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			}
			let kn;
			function Cn(l) {
				return 'content' in l &&
					(function(l) {
						return l.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === l.nodeName;
					})(l)
					? l.content
					: null;
			}
			const Sn = (function() {
				var l = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
				return (l[l.NONE] = 'NONE'), (l[l.HTML] = 'HTML'), (l[l.STYLE] = 'STYLE'), (l[l.SCRIPT] = 'SCRIPT'), (l[l.URL] = 'URL'), (l[l.RESOURCE_URL] = 'RESOURCE_URL'), l;
			})();
			class En {}
			const In = new RegExp(
					'^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
					'g'
				),
				Pn = /^url\(([^)]+)\)$/;
			function On(l) {
				return l[Wl];
			}
			function Tn(l) {
				return l[Kl];
			}
			function Mn(l, ...n) {
				l.error(...n);
			}
			class Rn {
				constructor() {
					this._console = console;
				}
				handleError(l) {
					const n = this._findOriginalError(l),
						u = this._findContext(l),
						e = (function(l) {
							return l[Yl] || Mn;
						})(l);
					e(this._console, 'ERROR', l), n && e(this._console, 'ORIGINAL ERROR', n), u && e(this._console, 'ERROR CONTEXT', u);
				}
				_findContext(l) {
					return l ? (On(l) ? On(l) : this._findContext(Tn(l))) : null;
				}
				_findOriginalError(l) {
					let n = Tn(l);
					for (; n && Tn(n); ) n = Tn(n);
					return n;
				}
			}
			const An = /([A-Z])/g;
			function Nn(l) {
				try {
					return null != l ? l.toString().slice(0, 30) : l;
				} catch (n) {
					return '[ERROR] Exception while trying to serialize the value';
				}
			}
			let Dn = null;
			function Un() {
				if (!Dn) {
					const l = xl.Symbol;
					if (l && l.iterator) Dn = l.iterator;
					else {
						const l = Object.getOwnPropertyNames(Map.prototype);
						for (let n = 0; n < l.length; ++n) {
							const u = l[n];
							'entries' !== u && 'size' !== u && Map.prototype[u] === Map.prototype.entries && (Dn = u);
						}
					}
				}
				return Dn;
			}
			function Fn(l, n) {
				return l === n || ('number' == typeof l && 'number' == typeof n && isNaN(l) && isNaN(n));
			}
			function Ln(l, n) {
				const u = zn(l),
					e = zn(n);
				if (u && e)
					return (function(l, n, u) {
						const e = l[Un()](),
							t = n[Un()]();
						for (;;) {
							const l = e.next(),
								n = t.next();
							if (l.done && n.done) return !0;
							if (l.done || n.done) return !1;
							if (!u(l.value, n.value)) return !1;
						}
					})(l, n, Ln);
				{
					const t = l && ('object' == typeof l || 'function' == typeof l),
						s = n && ('object' == typeof n || 'function' == typeof n);
					return !(u || !t || e || !s) || Fn(l, n);
				}
			}
			class Vn {
				constructor(l) {
					this.wrapped = l;
				}
				static wrap(l) {
					return new Vn(l);
				}
				static unwrap(l) {
					return Vn.isWrapped(l) ? l.wrapped : l;
				}
				static isWrapped(l) {
					return l instanceof Vn;
				}
			}
			function zn(l) {
				return !!Hn(l) && (Array.isArray(l) || (!(l instanceof Map) && Un() in l));
			}
			function Hn(l) {
				return null !== l && ('function' == typeof l || 'object' == typeof l);
			}
			function $n(l) {
				return !!l && 'function' == typeof l.then;
			}
			function Bn(l) {
				return !!l && 'function' == typeof l.subscribe;
			}
			class qn {
				constructor(l, n, u) {
					(this.previousValue = l), (this.currentValue = n), (this.firstChange = u);
				}
				isFirstChange() {
					return this.firstChange;
				}
			}
			class Gn {}
			class Zn {}
			function Qn(l) {
				const n = Error(`No component factory found for ${gl(l)}. Did you add it to @NgModule.entryComponents?`);
				return (n[Wn] = l), n;
			}
			const Wn = 'ngComponent';
			class Kn {
				resolveComponentFactory(l) {
					throw Qn(l);
				}
			}
			const Yn = (() => {
				class l {}
				return (l.NULL = new Kn()), l;
			})();
			class Jn {
				constructor(l, n, u) {
					(this._parent = n), (this._ngModule = u), (this._factories = new Map());
					for (let e = 0; e < l.length; e++) {
						const n = l[e];
						this._factories.set(n.componentType, n);
					}
				}
				resolveComponentFactory(l) {
					let n = this._factories.get(l);
					if ((!n && this._parent && (n = this._parent.resolveComponentFactory(l)), !n)) throw Qn(l);
					return new Xn(n, this._ngModule);
				}
			}
			class Xn extends Zn {
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
			class lu {}
			class nu {}
			function uu(...l) {}
			const eu = (() => {
					class l {
						constructor(l) {
							this.nativeElement = l;
						}
					}
					return (l.__NG_ELEMENT_ID__ = () => tu(l)), l;
				})(),
				tu = uu;
			class su {}
			class ru {}
			const au = (function() {
					var l = { Important: 1, DashCase: 2 };
					return (l[l.Important] = 'Important'), (l[l.DashCase] = 'DashCase'), l;
				})(),
				ou = (() => {
					class l {}
					return (l.__NG_ELEMENT_ID__ = () => iu()), l;
				})(),
				iu = uu;
			class cu {
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
			const hu = new cu('8.1.0-next.3');
			class du {
				constructor() {}
				supports(l) {
					return zn(l);
				}
				create(l) {
					return new gu(l);
				}
			}
			const pu = (l, n) => n;
			class gu {
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
						(this._trackByFn = l || pu);
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
						const s = !u || (n && n.currentIndex < yu(u, e, t)) ? n : u,
							r = yu(s, e, t),
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
					if ((null == l && (l = []), !zn(l))) throw new Error(`Error trying to diff '${gl(l)}'. Only arrays and iterables are allowed`);
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
								null !== t && Fn(t.trackById, e)
									? (s && (t = this._verifyReinsertion(t, u, e, n)), Fn(t.item, u) || this._addIdentityChange(t, u))
									: ((t = this._mismatch(t, u, e, n)), (s = !0)),
								(t = t._next);
					} else
						(n = 0),
							(function(l, n) {
								if (Array.isArray(l)) for (let u = 0; u < l.length; u++) n(l[u]);
								else {
									const u = l[Un()]();
									let e;
									for (; !(e = u.next()).done; ) n(e.value);
								}
							})(l, (l) => {
								(e = this._trackByFn(n, l)),
									null !== t && Fn(t.trackById, e)
										? (s && (t = this._verifyReinsertion(t, l, e, n)), Fn(t.item, l) || this._addIdentityChange(t, l))
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
							? (Fn(l.item, n) || this._addIdentityChange(l, n), this._moveAfter(l, t, e))
							: null !== (l = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(u, null))
							? (Fn(l.item, n) || this._addIdentityChange(l, n), this._reinsertAfter(l, t, e))
							: (l = this._addAfter(new fu(n, u), t, e)),
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
						null === this._linkedRecords && (this._linkedRecords = new bu()),
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
						null === this._unlinkedRecords && (this._unlinkedRecords = new bu()),
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
			class fu {
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
			class mu {
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
					for (u = this._head; null !== u; u = u._nextDup) if ((null === n || n <= u.currentIndex) && Fn(u.trackById, l)) return u;
					return null;
				}
				remove(l) {
					const n = l._prevDup,
						u = l._nextDup;
					return null === n ? (this._head = u) : (n._nextDup = u), null === u ? (this._tail = n) : (u._prevDup = n), null === this._head;
				}
			}
			class bu {
				constructor() {
					this.map = new Map();
				}
				put(l) {
					const n = l.trackById;
					let u = this.map.get(n);
					u || ((u = new mu()), this.map.set(n, u)), u.add(l);
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
			function yu(l, n, u) {
				const e = l.previousIndex;
				if (null === e) return e;
				let t = 0;
				return u && e < u.length && (t = u[e]), e + n + t;
			}
			class wu {
				constructor() {}
				supports(l) {
					return l instanceof Map || Hn(l);
				}
				create() {
					return new ju();
				}
			}
			class ju {
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
						if (!(l instanceof Map || Hn(l))) throw new Error(`Error trying to diff '${gl(l)}'. Only maps and objects are allowed`);
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
					const u = new vu(l);
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
					Fn(n, l.currentValue) || ((l.previousValue = l.currentValue), (l.currentValue = n), this._addToChanges(l));
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
			class vu {
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
			const xu = (() => {
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
					return (l.ngInjectableDef = hl({ token: l, providedIn: 'root', factory: () => new l([new du()]) })), l;
				})(),
				_u = (() => {
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
					return (l.ngInjectableDef = hl({ token: l, providedIn: 'root', factory: () => new l([new wu()]) })), l;
				})(),
				ku = (() => {
					class l {}
					return (l.__NG_ELEMENT_ID__ = () => Cu()), l;
				})(),
				Cu = (...l) => {},
				Su = [new wu()],
				Eu = new xu([new du()]),
				Iu = new _u(Su),
				Pu = (() => {
					class l {}
					return (l.__NG_ELEMENT_ID__ = () => Ou(l, eu)), l;
				})(),
				Ou = uu,
				Tu = (() => {
					class l {}
					return (l.__NG_ELEMENT_ID__ = () => Mu(l, eu)), l;
				})(),
				Mu = uu;
			function Ru(l, n, u, e) {
				let t = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${n}'. Current value: '${u}'.`;
				return (
					e && (t += ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
					(function(l, n) {
						const u = new Error(l);
						return Au(u, n), u;
					})(t, l)
				);
			}
			function Au(l, n) {
				(l[Wl] = n), (l[Yl] = n.logError.bind(n));
			}
			function Nu(l) {
				return new Error(`ViewDestroyedError: Attempt to use a destroyed view: ${l}`);
			}
			function Du(l, n, u) {
				const e = l.state,
					t = 1792 & e;
				return t === n ? ((l.state = (-1793 & e) | u), (l.initIndex = -1), !0) : t === u;
			}
			function Uu(l, n, u) {
				return (1792 & l.state) === n && l.initIndex <= u && ((l.initIndex = u + 1), !0);
			}
			function Fu(l, n) {
				return l.nodes[n];
			}
			function Lu(l, n) {
				return l.nodes[n];
			}
			function Vu(l, n) {
				return l.nodes[n];
			}
			function zu(l, n) {
				return l.nodes[n];
			}
			function Hu(l, n) {
				return l.nodes[n];
			}
			const $u = {
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
				Bu = () => {},
				qu = new Map();
			function Gu(l) {
				let n = qu.get(l);
				return n || ((n = gl(l) + '_' + qu.size), qu.set(l, n)), n;
			}
			const Zu = '$$undefined',
				Qu = '$$empty';
			function Wu(l) {
				return { id: Zu, styles: l.styles, encapsulation: l.encapsulation, data: l.data };
			}
			let Ku = 0;
			function Yu(l, n, u, e) {
				return !(!(2 & l.state) && Fn(l.oldValues[n.bindingIndex + u], e));
			}
			function Ju(l, n, u, e) {
				return !!Yu(l, n, u, e) && ((l.oldValues[n.bindingIndex + u] = e), !0);
			}
			function Xu(l, n, u, e) {
				const t = l.oldValues[n.bindingIndex + u];
				if (1 & l.state || !Ln(t, e)) {
					const s = n.bindings[u].name;
					throw Ru($u.createDebugContext(l, n.nodeIndex), `${s}: ${t}`, `${s}: ${e}`, 0 != (1 & l.state));
				}
			}
			function le(l) {
				let n = l;
				for (; n; ) 2 & n.def.flags && (n.state |= 8), (n = n.viewContainerParent || n.parent);
			}
			function ne(l, n) {
				let u = l;
				for (; u && u !== n; ) (u.state |= 64), (u = u.viewContainerParent || u.parent);
			}
			function ue(l, n, u, e) {
				try {
					return le(33554432 & l.def.nodes[n].flags ? Lu(l, n).componentView : l), $u.handleEvent(l, n, u, e);
				} catch (t) {
					l.root.errorHandler.handleError(t);
				}
			}
			function ee(l) {
				return l.parent ? Lu(l.parent, l.parentNodeDef.nodeIndex) : null;
			}
			function te(l) {
				return l.parent ? l.parentNodeDef.parent : null;
			}
			function se(l, n) {
				switch (201347067 & n.flags) {
					case 1:
						return Lu(l, n.nodeIndex).renderElement;
					case 2:
						return Fu(l, n.nodeIndex).renderText;
				}
			}
			function re(l) {
				return !!l.parent && !!(32768 & l.parentNodeDef.flags);
			}
			function ae(l) {
				return !(!l.parent || 32768 & l.parentNodeDef.flags);
			}
			function oe(l) {
				return 1 << l % 32;
			}
			function ie(l) {
				const n = {};
				let u = 0;
				const e = {};
				return (
					l &&
						l.forEach(([l, t]) => {
							'number' == typeof l ? ((n[l] = t), (u |= oe(l))) : (e[l] = t);
						}),
					{ matchedQueries: n, references: e, matchedQueryIds: u }
				);
			}
			function ce(l, n) {
				return l.map((l) => {
					let u, e;
					return (
						Array.isArray(l) ? ([e, u] = l) : ((e = 0), (u = l)),
						u && ('function' == typeof u || 'object' == typeof u) && n && Object.defineProperty(u, Ol, { value: n, configurable: !0 }),
						{ flags: e, token: u, tokenKey: Gu(u) }
					);
				});
			}
			function he(l, n, u) {
				let e = u.renderParent;
				return e
					? 0 == (1 & e.flags) || 0 == (33554432 & e.flags) || (e.element.componentRendererType && e.element.componentRendererType.encapsulation === Xl.Native)
						? Lu(l, u.renderParent.nodeIndex).renderElement
						: void 0
					: n;
			}
			const de = new WeakMap();
			function pe(l) {
				let n = de.get(l);
				return n || (((n = l(() => Bu)).factory = l), de.set(l, n)), n;
			}
			function ge(l, n, u, e, t) {
				3 === n && (u = l.renderer.parentNode(se(l, l.def.lastRenderRootNode))), fe(l, n, 0, l.def.nodes.length - 1, u, e, t);
			}
			function fe(l, n, u, e, t, s, r) {
				for (let a = u; a <= e; a++) {
					const u = l.def.nodes[a];
					11 & u.flags && be(l, u, n, t, s, r), (a += u.childCount);
				}
			}
			function me(l, n, u, e, t, s) {
				let r = l;
				for (; r && !re(r); ) r = r.parent;
				const a = r.parent,
					o = te(r),
					i = o.nodeIndex + o.childCount;
				for (let c = o.nodeIndex + 1; c <= i; c++) {
					const l = a.def.nodes[c];
					l.ngContentIndex === n && be(a, l, u, e, t, s), (c += l.childCount);
				}
				if (!a.parent) {
					const r = l.root.projectableNodes[n];
					if (r) for (let n = 0; n < r.length; n++) ye(l, r[n], u, e, t, s);
				}
			}
			function be(l, n, u, e, t, s) {
				if (8 & n.flags) me(l, n.ngContent.index, u, e, t, s);
				else {
					const r = se(l, n);
					if (
						(3 === u && 33554432 & n.flags && 48 & n.bindingFlags
							? (16 & n.bindingFlags && ye(l, r, u, e, t, s), 32 & n.bindingFlags && ye(Lu(l, n.nodeIndex).componentView, r, u, e, t, s))
							: ye(l, r, u, e, t, s),
						16777216 & n.flags)
					) {
						const r = Lu(l, n.nodeIndex).viewContainer._embeddedViews;
						for (let l = 0; l < r.length; l++) ge(r[l], u, e, t, s);
					}
					1 & n.flags && !n.element.name && fe(l, u, n.nodeIndex + 1, n.nodeIndex + n.childCount, e, t, s);
				}
			}
			function ye(l, n, u, e, t, s) {
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
			const we = /^:([^:]+):(.+)$/;
			function je(l) {
				if (':' === l[0]) {
					const n = l.match(we);
					return [n[1], n[2]];
				}
				return ['', l];
			}
			function ve(l) {
				let n = 0;
				for (let u = 0; u < l.length; u++) n |= l[u].flags;
				return n;
			}
			const xe = new Object(),
				_e = Gu(Vl),
				ke = Gu(kl),
				Ce = Gu(lu);
			function Se(l, n, u, e) {
				return (u = bl(u)), { index: -1, deps: ce(e, gl(n)), flags: l, token: n, value: u };
			}
			function Ee(l, n, u = Vl.THROW_IF_NOT_FOUND) {
				const e = Al(l);
				try {
					if (8 & n.flags) return n.token;
					if ((2 & n.flags && (u = null), 1 & n.flags)) return l._parent.get(n.token, u);
					const r = n.tokenKey;
					switch (r) {
						case _e:
						case ke:
						case Ce:
							return l;
					}
					const a = l._def.providersByKey[r];
					let o;
					if (a) {
						let n = l._providers[a.index];
						return void 0 === n && (n = l._providers[a.index] = Ie(l, a)), n === xe ? void 0 : n;
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
							(l._providers[u] = xe),
							(l._providers[u] = Ie(l, l._def.providersByKey[n.tokenKey]))
						);
					}
					return 4 & n.flags ? u : l._parent.get(n.token, u);
				} finally {
					Al(e);
				}
				var t, s;
			}
			function Ie(l, n) {
				let u;
				switch (201347067 & n.flags) {
					case 512:
						u = (function(l, n, u) {
							const e = u.length;
							switch (e) {
								case 0:
									return new n();
								case 1:
									return new n(Ee(l, u[0]));
								case 2:
									return new n(Ee(l, u[0]), Ee(l, u[1]));
								case 3:
									return new n(Ee(l, u[0]), Ee(l, u[1]), Ee(l, u[2]));
								default:
									const t = new Array(e);
									for (let n = 0; n < e; n++) t[n] = Ee(l, u[n]);
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
									return n(Ee(l, u[0]));
								case 2:
									return n(Ee(l, u[0]), Ee(l, u[1]));
								case 3:
									return n(Ee(l, u[0]), Ee(l, u[1]), Ee(l, u[2]));
								default:
									const t = Array(e);
									for (let n = 0; n < e; n++) t[n] = Ee(l, u[n]);
									return n(...t);
							}
						})(l, n.value, n.deps);
						break;
					case 2048:
						u = Ee(l, n.deps[0]);
						break;
					case 256:
						u = n.value;
				}
				return u === xe || null === u || 'object' != typeof u || 131072 & n.flags || 'function' != typeof u.ngOnDestroy || (n.flags |= 131072), void 0 === u ? xe : u;
			}
			function Pe(l, n) {
				const u = l.viewContainer._embeddedViews;
				if (((null == n || n >= u.length) && (n = u.length - 1), n < 0)) return null;
				const e = u[n];
				return (e.viewContainerParent = null), Re(u, n), $u.dirtyParentQueries(e), Te(e), e;
			}
			function Oe(l, n, u) {
				const e = n ? se(n, n.def.lastRenderRootNode) : l.renderElement,
					t = u.renderer.parentNode(e),
					s = u.renderer.nextSibling(e);
				ge(u, 2, t, s, void 0);
			}
			function Te(l) {
				ge(l, 3, null, null, void 0);
			}
			function Me(l, n, u) {
				n >= l.length ? l.push(u) : l.splice(n, 0, u);
			}
			function Re(l, n) {
				n >= l.length - 1 ? l.pop() : l.splice(n, 1);
			}
			const Ae = new Object();
			function Ne(l, n, u, e, t, s) {
				return new De(l, n, u, e, t, s);
			}
			class De extends Zn {
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
					const t = pe(this.viewDefFactory),
						s = t.nodes[0].element.componentProvider.nodeIndex,
						r = $u.createRootView(l, n || [], u, t, e, Ae),
						a = Vu(r, s).instance;
					return u && r.renderer.setAttribute(Lu(r, 0).renderElement, 'ng-version', hu.full), new Ue(r, new ze(r), a);
				}
			}
			class Ue extends Gn {
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
					return new eu(Lu(this._view, this._elDef.nodeIndex).renderElement);
				}
				get injector() {
					return new qe(this._view, this._elDef);
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
			function Fe(l, n, u) {
				return new Le(l, n, u);
			}
			class Le {
				constructor(l, n, u) {
					(this._view = l), (this._elDef = n), (this._data = u), (this._embeddedViews = []);
				}
				get element() {
					return new eu(this._data.renderElement);
				}
				get injector() {
					return new qe(this._view, this._elDef);
				}
				get parentInjector() {
					let l = this._view,
						n = this._elDef.parent;
					for (; !n && l; ) (n = te(l)), (l = l.parent);
					return l ? new qe(l, n) : new qe(this._view, null);
				}
				clear() {
					for (let l = this._embeddedViews.length - 1; l >= 0; l--) {
						const n = Pe(this._data, l);
						$u.destroyView(n);
					}
				}
				get(l) {
					const n = this._embeddedViews[l];
					if (n) {
						const l = new ze(n);
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
					t || l instanceof Xn || (t = s.get(lu));
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
								Me(t, u, e),
								(function(l, n) {
									const u = ee(n);
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
								$u.dirtyParentQueries(e),
								Oe(n, u > 0 ? t[u - 1] : null, e);
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
							Re(t, u), null == e && (e = t.length), Me(t, e, s), $u.dirtyParentQueries(s), Te(s), Oe(l, e > 0 ? t[e - 1] : null, s);
						})(this._data, 0, n),
						l
					);
				}
				indexOf(l) {
					return this._embeddedViews.indexOf(l._view);
				}
				remove(l) {
					const n = Pe(this._data, l);
					n && $u.destroyView(n);
				}
				detach(l) {
					const n = Pe(this._data, l);
					return n ? new ze(n) : null;
				}
			}
			function Ve(l) {
				return new ze(l);
			}
			class ze {
				constructor(l) {
					(this._view = l), (this._viewContainerRef = null), (this._appRef = null);
				}
				get rootNodes() {
					return (function(l) {
						const n = [];
						return ge(l, 0, void 0, void 0, n), n;
					})(this._view);
				}
				get context() {
					return this._view.context;
				}
				get destroyed() {
					return 0 != (128 & this._view.state);
				}
				markForCheck() {
					le(this._view);
				}
				detach() {
					this._view.state &= -5;
				}
				detectChanges() {
					const l = this._view.root.rendererFactory;
					l.begin && l.begin();
					try {
						$u.checkAndUpdateView(this._view);
					} finally {
						l.end && l.end();
					}
				}
				checkNoChanges() {
					$u.checkNoChangesView(this._view);
				}
				reattach() {
					this._view.state |= 4;
				}
				onDestroy(l) {
					this._view.disposables || (this._view.disposables = []), this._view.disposables.push(l);
				}
				destroy() {
					this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), $u.destroyView(this._view);
				}
				detachFromAppRef() {
					(this._appRef = null), Te(this._view), $u.dirtyParentQueries(this._view);
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
			function He(l, n) {
				return new $e(l, n);
			}
			class $e extends Pu {
				constructor(l, n) {
					super(), (this._parentView = l), (this._def = n);
				}
				createEmbeddedView(l) {
					return new ze($u.createEmbeddedView(this._parentView, this._def, this._def.element.template, l));
				}
				get elementRef() {
					return new eu(Lu(this._parentView, this._def.nodeIndex).renderElement);
				}
			}
			function Be(l, n) {
				return new qe(l, n);
			}
			class qe {
				constructor(l, n) {
					(this.view = l), (this.elDef = n);
				}
				get(l, n = Vl.THROW_IF_NOT_FOUND) {
					return $u.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), { flags: 0, token: l, tokenKey: Gu(l) }, n);
				}
			}
			function Ge(l, n) {
				const u = l.def.nodes[n];
				if (1 & u.flags) {
					const n = Lu(l, u.nodeIndex);
					return u.element.template ? n.template : n.renderElement;
				}
				if (2 & u.flags) return Fu(l, u.nodeIndex).renderText;
				if (20240 & u.flags) return Vu(l, u.nodeIndex).instance;
				throw new Error(`Illegal state: read nodeValue for node index ${n}`);
			}
			function Ze(l) {
				return new Qe(l.renderer);
			}
			class Qe {
				constructor(l) {
					this.delegate = l;
				}
				selectRootElement(l) {
					return this.delegate.selectRootElement(l);
				}
				createElement(l, n) {
					const [u, e] = je(n),
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
					const [e, t] = je(n);
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
			function We(l, n, u, e) {
				return new Ke(l, n, u, e);
			}
			class Ke {
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
								4096 & t.flags || (void 0 === u[e] && (u[e] = Ie(l, t)));
							}
						})(this);
				}
				get(l, n = Vl.THROW_IF_NOT_FOUND, u = il.Default) {
					let e = 0;
					return u & il.SkipSelf ? (e |= 1) : u & il.Self && (e |= 4), Ee(this, { token: l, tokenKey: Gu(l), flags: e }, n);
				}
				get instance() {
					return this.get(this._moduleType);
				}
				get componentFactoryResolver() {
					return this.get(Yn);
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
									if (n && n !== xe) {
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
			const Ye = Gu(su),
				Je = Gu(ou),
				Xe = Gu(eu),
				lt = Gu(Tu),
				nt = Gu(Pu),
				ut = Gu(ku),
				et = Gu(Vl),
				tt = Gu(kl);
			function st(l, n, u, e, t, s, r, a) {
				const o = [];
				if (r)
					for (let c in r) {
						const [l, n] = r[c];
						o[l] = { flags: 8, name: c, nonMinifiedName: n, ns: null, securityContext: null, suffix: null };
					}
				const i = [];
				if (a) for (let c in a) i.push({ type: 1, propName: c, target: null, eventName: a[c] });
				return at(l, (n |= 16384), u, e, t, t, s, o, i);
			}
			function rt(l, n, u, e, t) {
				return at(-1, l, n, 0, u, e, t);
			}
			function at(l, n, u, e, t, s, r, a, o) {
				const { matchedQueries: i, references: c, matchedQueryIds: h } = ie(u);
				o || (o = []), a || (a = []), (s = bl(s));
				const d = ce(r, gl(t));
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
					bindingFlags: ve(a),
					outputs: o,
					element: null,
					provider: { token: t, value: s, deps: d },
					text: null,
					query: null,
					ngContent: null
				};
			}
			function ot(l, n) {
				return dt(l, n);
			}
			function it(l, n) {
				let u = l;
				for (; u.parent && !re(u); ) u = u.parent;
				return pt(u.parent, te(u), !0, n.provider.value, n.provider.deps);
			}
			function ct(l, n) {
				const u = pt(l, n.parent, (32768 & n.flags) > 0, n.provider.value, n.provider.deps);
				if (n.outputs.length)
					for (let e = 0; e < n.outputs.length; e++) {
						const t = n.outputs[e],
							s = u[t.propName];
						if (!Bn(s)) throw new Error(`@Output ${t.propName} not initialized in '${u.constructor.name}'.`);
						{
							const u = s.subscribe(ht(l, n.parent.nodeIndex, t.eventName));
							l.disposables[n.outputIndex + e] = u.unsubscribe.bind(u);
						}
					}
				return u;
			}
			function ht(l, n, u) {
				return (e) => ue(l, n, u, e);
			}
			function dt(l, n) {
				const u = (8192 & n.flags) > 0,
					e = n.provider;
				switch (201347067 & n.flags) {
					case 512:
						return pt(l, n.parent, u, e.value, e.deps);
					case 1024:
						return (function(l, n, u, e, t) {
							const s = t.length;
							switch (s) {
								case 0:
									return e();
								case 1:
									return e(ft(l, n, u, t[0]));
								case 2:
									return e(ft(l, n, u, t[0]), ft(l, n, u, t[1]));
								case 3:
									return e(ft(l, n, u, t[0]), ft(l, n, u, t[1]), ft(l, n, u, t[2]));
								default:
									const r = Array(s);
									for (let e = 0; e < s; e++) r[e] = ft(l, n, u, t[e]);
									return e(...r);
							}
						})(l, n.parent, u, e.value, e.deps);
					case 2048:
						return ft(l, n.parent, u, e.deps[0]);
					case 256:
						return e.value;
				}
			}
			function pt(l, n, u, e, t) {
				const s = t.length;
				switch (s) {
					case 0:
						return new e();
					case 1:
						return new e(ft(l, n, u, t[0]));
					case 2:
						return new e(ft(l, n, u, t[0]), ft(l, n, u, t[1]));
					case 3:
						return new e(ft(l, n, u, t[0]), ft(l, n, u, t[1]), ft(l, n, u, t[2]));
					default:
						const r = new Array(s);
						for (let e = 0; e < s; e++) r[e] = ft(l, n, u, t[e]);
						return new e(...r);
				}
			}
			const gt = {};
			function ft(l, n, u, e, t = Vl.THROW_IF_NOT_FOUND) {
				if (8 & e.flags) return e.token;
				const s = l;
				2 & e.flags && (t = null);
				const r = e.tokenKey;
				r === ut && (u = !(!n || !n.element.componentView)), n && 1 & e.flags && ((u = !1), (n = n.parent));
				let a = l;
				for (; a; ) {
					if (n)
						switch (r) {
							case Ye:
								return Ze(mt(a, n, u));
							case Je:
								return mt(a, n, u).renderer;
							case Xe:
								return new eu(Lu(a, n.nodeIndex).renderElement);
							case lt:
								return Lu(a, n.nodeIndex).viewContainer;
							case nt:
								if (n.element.template) return Lu(a, n.nodeIndex).template;
								break;
							case ut:
								return Ve(mt(a, n, u));
							case et:
							case tt:
								return Be(a, n);
							default:
								const l = (u ? n.element.allProviders : n.element.publicProviders)[r];
								if (l) {
									let n = Vu(a, l.nodeIndex);
									return n || ((n = { instance: dt(a, l) }), (a.nodes[l.nodeIndex] = n)), n.instance;
								}
						}
					(u = re(a)), (n = te(a)), (a = a.parent), 4 & e.flags && (a = null);
				}
				const o = s.root.injector.get(e.token, gt);
				return o !== gt || t === gt ? o : s.root.ngModule.injector.get(e.token, t);
			}
			function mt(l, n, u) {
				let e;
				if (u) e = Lu(l, n.nodeIndex).componentView;
				else for (e = l; e.parent && !re(e); ) e = e.parent;
				return e;
			}
			function bt(l, n, u, e, t, s) {
				if (32768 & u.flags) {
					const n = Lu(l, u.parent.nodeIndex).componentView;
					2 & n.def.flags && (n.state |= 8);
				}
				if (((n.instance[u.bindings[e].name] = t), 524288 & u.flags)) {
					s = s || {};
					const n = Vn.unwrap(l.oldValues[u.bindingIndex + e]);
					s[u.bindings[e].nonMinifiedName] = new qn(n, t, 0 != (2 & l.state));
				}
				return (l.oldValues[u.bindingIndex + e] = t), s;
			}
			function yt(l, n) {
				if (!(l.def.nodeFlags & n)) return;
				const u = l.def.nodes;
				let e = 0;
				for (let t = 0; t < u.length; t++) {
					const s = u[t];
					let r = s.parent;
					for (!r && s.flags & n && jt(l, t, s.flags & n, e++), 0 == (s.childFlags & n) && (t += s.childCount); r && 1 & r.flags && t === r.nodeIndex + r.childCount; )
						r.directChildFlags & n && (e = wt(l, r, n, e)), (r = r.parent);
				}
			}
			function wt(l, n, u, e) {
				for (let t = n.nodeIndex + 1; t <= n.nodeIndex + n.childCount; t++) {
					const n = l.def.nodes[t];
					n.flags & u && jt(l, t, n.flags & u, e++), (t += n.childCount);
				}
				return e;
			}
			function jt(l, n, u, e) {
				const t = Vu(l, n);
				if (!t) return;
				const s = t.instance;
				s &&
					($u.setCurrentNode(l, n),
					1048576 & u && Uu(l, 512, e) && s.ngAfterContentInit(),
					2097152 & u && s.ngAfterContentChecked(),
					4194304 & u && Uu(l, 768, e) && s.ngAfterViewInit(),
					8388608 & u && s.ngAfterViewChecked(),
					131072 & u && s.ngOnDestroy());
			}
			const vt = new _l('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => ln }),
				xt = {},
				_t = (function() {
					var l = {
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
						(l[l.LocaleId] = 'LocaleId'),
						(l[l.DayPeriodsFormat] = 'DayPeriodsFormat'),
						(l[l.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
						(l[l.DaysFormat] = 'DaysFormat'),
						(l[l.DaysStandalone] = 'DaysStandalone'),
						(l[l.MonthsFormat] = 'MonthsFormat'),
						(l[l.MonthsStandalone] = 'MonthsStandalone'),
						(l[l.Eras] = 'Eras'),
						(l[l.FirstDayOfWeek] = 'FirstDayOfWeek'),
						(l[l.WeekendRange] = 'WeekendRange'),
						(l[l.DateFormat] = 'DateFormat'),
						(l[l.TimeFormat] = 'TimeFormat'),
						(l[l.DateTimeFormat] = 'DateTimeFormat'),
						(l[l.NumberSymbols] = 'NumberSymbols'),
						(l[l.NumberFormats] = 'NumberFormats'),
						(l[l.CurrencySymbol] = 'CurrencySymbol'),
						(l[l.CurrencyName] = 'CurrencyName'),
						(l[l.Currencies] = 'Currencies'),
						(l[l.PluralCase] = 'PluralCase'),
						(l[l.ExtraData] = 'ExtraData'),
						l
					);
				})(),
				kt = void 0;
			var Ct = [
				'en',
				[['a', 'p'], ['AM', 'PM'], kt],
				[['AM', 'PM'], kt, kt],
				[
					['S', 'M', 'T', 'W', 'T', 'F', 'S'],
					['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
					['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
				],
				kt,
				[
					['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
					['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
				],
				kt,
				[['B', 'A'], ['BC', 'AD'], ['Before Christ', 'Anno Domini']],
				0,
				[6, 0],
				['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
				['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
				['{1}, {0}', kt, "{1} 'at' {0}", kt],
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
			let St = 'en-US';
			class Et extends E {
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
			function It() {
				return this._results[Un()]();
			}
			class Pt {
				constructor() {
					(this.dirty = !0), (this._results = []), (this.changes = new Et()), (this.length = 0);
					const l = Un(),
						n = Pt.prototype;
					n[l] || (n[l] = It);
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
			const Ot = new _l('Application Initializer'),
				Tt = (() =>
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
									$n(n) && l.push(n);
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
				Mt = new _l('AppId');
			function Rt() {
				return `${At()}${At()}${At()}`;
			}
			function At() {
				return String.fromCharCode(97 + Math.floor(25 * Math.random()));
			}
			const Nt = new _l('Platform Initializer'),
				Dt = new _l('Platform ID'),
				Ut = new _l('appBootstrapListener'),
				Ft = (() =>
					class {
						log(l) {
							console.log(l);
						}
						warn(l) {
							console.warn(l);
						}
					})(),
				Lt = new _l('LocaleId');
			function Vt() {
				throw new Error('Runtime compiler is not loaded');
			}
			const zt = Vt,
				Ht = Vt,
				$t = Vt,
				Bt = Vt,
				qt = (() =>
					class {
						constructor() {
							(this.compileModuleSync = zt), (this.compileModuleAsync = Ht), (this.compileModuleAndAllComponentsSync = $t), (this.compileModuleAndAllComponentsAsync = Bt);
						}
						clearCache() {}
						clearCacheFor(l) {}
						getModuleId(l) {}
					})();
			class Gt {}
			let Zt, Qt;
			function Wt() {
				const l = xl.wtf;
				return !(!l || !(Zt = l.trace) || ((Qt = Zt.events), 0));
			}
			const Kt = Wt(),
				Yt = Kt
					? function(l, n = null) {
							return Qt.createScope(l, n);
					  }
					: (l, n) =>
							function(l, n) {
								return null;
							},
				Jt = Kt
					? function(l, n) {
							return Zt.leaveScope(l, n), n;
					  }
					: (l, n) => n,
				Xt = (() => Promise.resolve(0))();
			function ls(l) {
				'undefined' == typeof Zone
					? Xt.then(() => {
							l && l.apply(null, null);
					  })
					: Zone.current.scheduleMicroTask('scheduleMicrotask', l);
			}
			class ns {
				constructor({ enableLongStackTrace: l = !1 }) {
					if (
						((this.hasPendingMicrotasks = !1),
						(this.hasPendingMacrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new Et(!1)),
						(this.onMicrotaskEmpty = new Et(!1)),
						(this.onStable = new Et(!1)),
						(this.onError = new Et(!1)),
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
									return ss(n), l.invokeTask(e, t, s, r);
								} finally {
									rs(n);
								}
							},
							onInvoke: (l, u, e, t, s, r, a) => {
								try {
									return ss(n), l.invoke(e, t, s, r, a);
								} finally {
									rs(n);
								}
							},
							onHasTask: (l, u, e, t) => {
								l.hasTask(e, t),
									u === e && ('microTask' == t.change ? ((n.hasPendingMicrotasks = t.microTask), ts(n)) : 'macroTask' == t.change && (n.hasPendingMacrotasks = t.macroTask));
							},
							onHandleError: (l, u, e, t) => (l.handleError(e, t), n.runOutsideAngular(() => n.onError.emit(t)), !1)
						}));
				}
				static isInAngularZone() {
					return !0 === Zone.current.get('isAngularZone');
				}
				static assertInAngularZone() {
					if (!ns.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
				}
				static assertNotInAngularZone() {
					if (ns.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
				}
				run(l, n, u) {
					return this._inner.run(l, n, u);
				}
				runTask(l, n, u, e) {
					const t = this._inner,
						s = t.scheduleEventTask('NgZoneEvent: ' + e, l, es, us, us);
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
			function us() {}
			const es = {};
			function ts(l) {
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
			function ss(l) {
				l._nesting++, l.isStable && ((l.isStable = !1), l.onUnstable.emit(null));
			}
			function rs(l) {
				l._nesting--, ts(l);
			}
			class as {
				constructor() {
					(this.hasPendingMicrotasks = !1),
						(this.hasPendingMacrotasks = !1),
						(this.isStable = !0),
						(this.onUnstable = new Et()),
						(this.onMicrotaskEmpty = new Et()),
						(this.onStable = new Et()),
						(this.onError = new Et());
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
			const os = (() =>
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
											ns.assertNotInAngularZone(),
												ls(() => {
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
								ls(() => {
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
				is = (() => {
					class l {
						constructor() {
							(this._applications = new Map()), ds.addToWindow(this);
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
							return ds.findTestabilityInTree(this, l, n);
						}
					}
					return (l.ctorParameters = () => []), l;
				})();
			class cs {
				addToWindow(l) {}
				findTestabilityInTree(l, n, u) {
					return null;
				}
			}
			let hs,
				ds = new cs(),
				ps = function(l) {
					return l instanceof Xn;
				};
			const gs = new _l('AllowMultipleToken');
			class fs {
				constructor(l, n) {
					(this.name = l), (this.token = n);
				}
			}
			function ms(l, n, u = []) {
				const e = `Platform: ${n}`,
					t = new _l(e);
				return (n = []) => {
					let s = bs();
					if (!s || s.injector.get(gs, !1))
						if (l) l(u.concat(n).concat({ provide: t, useValue: !0 }));
						else {
							const l = u.concat(n).concat({ provide: t, useValue: !0 });
							!(function(l) {
								if (hs && !hs.destroyed && !hs.injector.get(gs, !1)) throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
								hs = l.get(ys);
								const n = l.get(Nt, null);
								n && n.forEach((l) => l());
							})(Vl.create({ providers: l, name: e }));
						}
					return (function(l) {
						const n = bs();
						if (!n) throw new Error('No platform exists!');
						if (!n.injector.get(l, null)) throw new Error('A platform with a different configuration has been created. Please destroy it first.');
						return n;
					})(t);
				};
			}
			function bs() {
				return hs && !hs.destroyed ? hs : null;
			}
			const ys = (() =>
				class {
					constructor(l) {
						(this._injector = l), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
					}
					bootstrapModuleFactory(l, n) {
						const u = 'noop' === (t = n ? n.ngZone : void 0) ? new as() : ('zone.js' === t ? void 0 : t) || new ns({ enableLongStackTrace: en() }),
							e = [{ provide: ns, useValue: u }];
						var t;
						return u.run(() => {
							const n = Vl.create({ providers: e, parent: this.injector, name: l.moduleType.name }),
								t = l.create(n),
								s = t.injector.get(Rn, null);
							if (!s) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
							return (
								(function(l) {
									St = l.toLowerCase().replace(/_/g, '-');
								})(t.injector.get(Lt, 'en-US')),
								t.onDestroy(() => vs(this._modules, t)),
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
										return $n(t)
											? t.catch((u) => {
													throw (n.runOutsideAngular(() => l.handleError(u)), u);
											  })
											: t;
									} catch (e) {
										throw (n.runOutsideAngular(() => l.handleError(e)), e);
									}
								})(s, u, () => {
									const l = t.injector.get(Tt);
									return l.runInitializers(), l.donePromise.then(() => (this._moduleDoBootstrap(t), t));
								})
							);
						});
					}
					bootstrapModule(l, n = []) {
						const u = ws({}, n);
						return (function(l, n, u) {
							return l
								.get(Gt)
								.createCompiler([n])
								.compileModuleAsync(u);
						})(this.injector, u, l).then((l) => this.bootstrapModuleFactory(l, u));
					}
					_moduleDoBootstrap(l) {
						const n = l.injector.get(js);
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
			function ws(l, n) {
				return Array.isArray(n) ? n.reduce(ws, l) : Object.assign({}, l, n);
			}
			const js = (() => {
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
							(this._enforceNoNewChanges = en()),
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
										ns.assertNotInAngularZone(),
											ls(() => {
												this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || ((this._stable = !0), l.next(!0));
											});
									});
								});
								const u = this._zone.onUnstable.subscribe(() => {
									ns.assertInAngularZone(),
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
						(u = l instanceof Zn ? l : this._componentFactoryResolver.resolveComponentFactory(l)), this.componentTypes.push(u.componentType);
						const e = ps(u) ? null : this._injector.get(lu),
							t = u.create(Vl.NULL, [], n || u.selector, e);
						t.onDestroy(() => {
							this._unloadComponent(t);
						});
						const s = t.injector.get(os, null);
						return (
							s && t.injector.get(is).registerApplication(t.location.nativeElement, s),
							this._loadComponent(t),
							en() && this._console.log('Angular is running in the development mode. Call enableProdMode() to enable the production mode.'),
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
							(this._runningTick = !1), Jt(n);
						}
					}
					attachView(l) {
						const n = l;
						this._views.push(n), n.attachToAppRef(this);
					}
					detachView(l) {
						const n = l;
						vs(this._views, n), n.detachFromAppRef();
					}
					_loadComponent(l) {
						this.attachView(l.hostView),
							this.tick(),
							this.components.push(l),
							this._injector
								.get(Ut, [])
								.concat(this._bootstrapListeners)
								.forEach((n) => n(l));
					}
					_unloadComponent(l) {
						this.detachView(l.hostView), vs(this.components, l);
					}
					ngOnDestroy() {
						this._views.slice().forEach((l) => l.destroy());
					}
					get viewCount() {
						return this._views.length;
					}
				}
				return (l._tickScope = Yt('ApplicationRef#tick()')), l;
			})();
			function vs(l, n) {
				const u = l.indexOf(n);
				u > -1 && l.splice(u, 1);
			}
			class xs {}
			class _s {}
			const ks = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
				Cs = (() =>
					class {
						constructor(l, n) {
							(this._compiler = l), (this._config = n || ks);
						}
						load(l) {
							return this._compiler instanceof qt ? this.loadFactory(l) : this.loadAndCompile(l);
						}
						loadAndCompile(l) {
							let [n, e] = l.split('#');
							return (
								void 0 === e && (e = 'default'),
								u('crnd')(n)
									.then((l) => l[e])
									.then((l) => Ss(l, n, e))
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
									.then((l) => Ss(l, n, e))
							);
						}
					})();
			function Ss(l, n, u) {
				if (!l) throw new Error(`Cannot find '${u}' in '${n}'`);
				return l;
			}
			class Es {
				constructor(l, n) {
					(this.name = l), (this.callback = n);
				}
			}
			class Is {
				constructor(l, n, u) {
					(this.listeners = []), (this.parent = null), (this._debugContext = u), (this.nativeNode = l), n && n instanceof Ps && n.addChild(this);
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
			class Ps extends Is {
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
								n instanceof Ps && (u(n) && e.push(n), l(n, u, e));
							});
						})(this, l, n),
						n
					);
				}
				queryAllNodes(l) {
					const n = [];
					return (
						(function l(n, u, e) {
							n instanceof Ps &&
								n.childNodes.forEach((n) => {
									u(n) && e.push(n), n instanceof Ps && l(n, u, e);
								});
						})(this, l, n),
						n
					);
				}
				get children() {
					return this.childNodes.filter((l) => l instanceof Ps);
				}
				triggerEventHandler(l, n) {
					this.listeners.forEach((u) => {
						u.name == l && u.callback(n);
					});
				}
			}
			const Os = new Map(),
				Ts = function(l) {
					return Os.get(l) || null;
				};
			function Ms(l) {
				Os.set(l.nativeNode, l);
			}
			const Rs = ms(null, 'core', [{ provide: Dt, useValue: 'unknown' }, { provide: ys, deps: [Vl] }, { provide: is, deps: [] }, { provide: Ft, deps: [] }]);
			function As() {
				return Eu;
			}
			function Ns() {
				return Iu;
			}
			function Ds(l) {
				return l || 'en-US';
			}
			function Us(l) {
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
			const Fs = (() =>
				class {
					constructor(l) {}
				})();
			function Ls(l, n, u, e, t, s) {
				l |= 1;
				const { matchedQueries: r, references: a, matchedQueryIds: o } = ie(n);
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
						template: s ? pe(s) : null,
						componentProvider: null,
						componentView: null,
						componentRendererType: null,
						publicProviders: null,
						allProviders: null,
						handleEvent: t || Bu
					},
					provider: null,
					text: null,
					query: null,
					ngContent: null
				};
			}
			function Vs(l, n, u, e, t, s, r = [], a, o, i, c, h) {
				i || (i = Bu);
				const { matchedQueries: d, references: p, matchedQueryIds: g } = ie(u);
				let f = null,
					m = null;
				s && ([f, m] = je(s)), (a = a || []);
				const b = new Array(a.length);
				for (let j = 0; j < a.length; j++) {
					const [l, n, u] = a[j],
						[e, t] = je(n);
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
					const [u, e] = je(l);
					return [u, e, n];
				});
				return (
					(h = (function(l) {
						if (l && l.id === Zu) {
							const n = (null != l.encapsulation && l.encapsulation !== Xl.None) || l.styles.length || Object.keys(l.data).length;
							l.id = n ? `c${Ku++}` : Qu;
						}
						return l && l.id === Qu && (l = null), l || null;
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
						bindingFlags: ve(b),
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
							handleEvent: i || Bu
						},
						provider: null,
						text: null,
						query: null,
						ngContent: null
					}
				);
			}
			function zs(l, n, u) {
				const e = u.element,
					t = l.root.selectorOrNode,
					s = l.renderer;
				let r;
				if (l.parent || !t) {
					r = e.name ? s.createElement(e.name, e.ns) : s.createComment('');
					const t = he(l, n, u);
					t && s.appendChild(t, r);
				} else r = s.selectRootElement(t, !!e.componentRendererType && e.componentRendererType.encapsulation === Xl.ShadowDom);
				if (e.attrs)
					for (let a = 0; a < e.attrs.length; a++) {
						const [l, n, u] = e.attrs[a];
						s.setAttribute(r, n, u, l);
					}
				return r;
			}
			function Hs(l, n, u, e) {
				for (let r = 0; r < u.outputs.length; r++) {
					const a = u.outputs[r],
						o = $s(l, u.nodeIndex, ((s = a.eventName), (t = a.target) ? `${t}:${s}` : s));
					let i = a.target,
						c = l;
					'component' === a.target && ((i = null), (c = n));
					const h = c.renderer.listen(i || e, a.eventName, o);
					l.disposables[u.outputIndex + r] = h;
				}
				var t, s;
			}
			function $s(l, n, u) {
				return (e) => ue(l, n, u, e);
			}
			function Bs(l, n, u, e) {
				if (!Ju(l, n, u, e)) return !1;
				const t = n.bindings[u],
					s = Lu(l, n.nodeIndex),
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
							let s = l.root.sanitizer.sanitize(Sn.STYLE, t);
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
			function qs(l, n, u) {
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
					query: { id: n, filterId: oe(n), bindings: e },
					ngContent: null
				};
			}
			function Gs(l) {
				const n = l.def.nodeMatchedQueries;
				for (; l.parent && ae(l); ) {
					let u = l.parentNodeDef;
					l = l.parent;
					const e = u.nodeIndex + u.childCount;
					for (let t = 0; t <= e; t++) {
						const e = l.def.nodes[t];
						67108864 & e.flags && 536870912 & e.flags && (e.query.filterId & n) === e.query.filterId && Hu(l, t).setDirty(),
							(!(1 & e.flags && t + e.childCount < u.nodeIndex) && 67108864 & e.childFlags && 536870912 & e.childFlags) || (t += e.childCount);
					}
				}
				if (134217728 & l.def.nodeFlags)
					for (let u = 0; u < l.def.nodes.length; u++) {
						const n = l.def.nodes[u];
						134217728 & n.flags && 536870912 & n.flags && Hu(l, u).setDirty(), (u += n.childCount);
					}
			}
			function Zs(l, n) {
				const u = Hu(l, n.nodeIndex);
				if (!u.dirty) return;
				let e,
					t = void 0;
				if (67108864 & n.flags) {
					const u = n.parent.parent;
					(t = Qs(l, u.nodeIndex, u.nodeIndex + u.childCount, n.query, [])), (e = Vu(l, n.parent.nodeIndex).instance);
				} else 134217728 & n.flags && ((t = Qs(l, 0, l.def.nodes.length - 1, n.query, [])), (e = l.component));
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
			function Qs(l, n, u, e, t) {
				for (let s = n; s <= u; s++) {
					const n = l.def.nodes[s],
						u = n.matchedQueries[e.id];
					if ((null != u && t.push(Ws(l, n, u)), 1 & n.flags && n.element.template && (n.element.template.nodeMatchedQueries & e.filterId) === e.filterId)) {
						const u = Lu(l, s);
						if (((n.childMatchedQueries & e.filterId) === e.filterId && (Qs(l, s + 1, s + n.childCount, e, t), (s += n.childCount)), 16777216 & n.flags)) {
							const l = u.viewContainer._embeddedViews;
							for (let n = 0; n < l.length; n++) {
								const s = l[n],
									r = ee(s);
								r && r === u && Qs(s, 0, s.def.nodes.length - 1, e, t);
							}
						}
						const r = u.template._projectedViews;
						if (r)
							for (let l = 0; l < r.length; l++) {
								const n = r[l];
								Qs(n, 0, n.def.nodes.length - 1, e, t);
							}
					}
					(n.childMatchedQueries & e.filterId) !== e.filterId && (s += n.childCount);
				}
				return t;
			}
			function Ws(l, n, u) {
				if (null != u)
					switch (u) {
						case 1:
							return Lu(l, n.nodeIndex).renderElement;
						case 0:
							return new eu(Lu(l, n.nodeIndex).renderElement);
						case 2:
							return Lu(l, n.nodeIndex).template;
						case 3:
							return Lu(l, n.nodeIndex).viewContainer;
						case 4:
							return Vu(l, n.nodeIndex).instance;
					}
			}
			function Ks(l, n) {
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
			function Ys(l, n, u) {
				const e = he(l, n, u);
				e && me(l, u.ngContent.index, 1, e, null, void 0);
			}
			function Js(l, n) {
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
						bindingFlags: ve(e),
						outputs: [],
						element: null,
						provider: null,
						text: null,
						query: null,
						ngContent: null
					};
				})(0, l, t);
			}
			function Xs(l, n, u) {
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
			function lr(l, n, u) {
				let e;
				const t = l.renderer;
				e = t.createText(u.text.prefix);
				const s = he(l, n, u);
				return s && t.appendChild(s, e), { renderText: e };
			}
			function nr(l, n) {
				return (null != l ? l.toString() : '') + n.suffix;
			}
			function ur(l, n, u, e) {
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
					if ((tr(i, l, n.length), (t += l.bindings.length), (s += l.outputs.length), !c && 3 & l.flags && (p = l), 20224 & l.flags)) {
						h || ((h = !0), (i.element.publicProviders = Object.create(i.element.publicProviders)), (i.element.allProviders = i.element.publicProviders));
						const n = 0 != (32768 & l.flags);
						0 == (8192 & l.flags) || n
							? (i.element.publicProviders[Gu(l.provider.token)] = l)
							: (d || ((d = !0), (i.element.allProviders = Object.create(i.element.publicProviders))), (i.element.allProviders[Gu(l.provider.token)] = l)),
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
						(i = l), er(l) || (c = l);
					else
						for (; i && g === i.nodeIndex + i.childCount; ) {
							const l = i.parent;
							l && ((l.childFlags |= i.childFlags), (l.childMatchedQueries |= i.childMatchedQueries)), (c = (i = l) && er(i) ? i.renderParent : i);
						}
				}
				return {
					factory: null,
					nodeFlags: r,
					rootNodeFlags: a,
					nodeMatchedQueries: o,
					flags: l,
					nodes: n,
					updateDirectives: u || Bu,
					updateRenderer: e || Bu,
					handleEvent: (l, u, e, t) => n[u].element.handleEvent(l, e, t),
					bindingCount: t,
					outputCount: s,
					lastRenderRootNode: p
				};
			}
			function er(l) {
				return 0 != (1 & l.flags) && null === l.element.name;
			}
			function tr(l, n, u) {
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
			function sr(l, n, u, e) {
				const t = or(l.root, l.renderer, l, n, u);
				return ir(t, l.component, e), cr(t), t;
			}
			function rr(l, n, u) {
				const e = or(l, l.renderer, null, null, n);
				return ir(e, u, u), cr(e), e;
			}
			function ar(l, n, u, e) {
				const t = n.element.componentRendererType;
				let s;
				return (s = t ? l.root.rendererFactory.createRenderer(e, t) : l.root.renderer), or(l.root, s, l, n.element.componentProvider, u);
			}
			function or(l, n, u, e, t) {
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
			function ir(l, n, u) {
				(l.component = n), (l.context = u);
			}
			function cr(l) {
				let n;
				re(l) && (n = Lu(l.parent, l.parentNodeDef.parent.nodeIndex).renderElement);
				const u = l.def,
					e = l.nodes;
				for (let t = 0; t < u.nodes.length; t++) {
					const s = u.nodes[t];
					let r;
					switch (($u.setCurrentNode(l, t), 201347067 & s.flags)) {
						case 1:
							const u = zs(l, n, s);
							let a = void 0;
							if (33554432 & s.flags) {
								const n = pe(s.element.componentView);
								a = $u.createComponentView(l, s, n, u);
							}
							Hs(l, a, s, u),
								(r = { renderElement: u, componentView: a, viewContainer: null, template: s.element.template ? He(l, s) : void 0 }),
								16777216 & s.flags && (r.viewContainer = Fe(l, s, r));
							break;
						case 2:
							r = lr(l, n, s);
							break;
						case 512:
						case 1024:
						case 2048:
						case 256:
							(r = e[t]) || 4096 & s.flags || (r = { instance: ot(l, s) });
							break;
						case 16:
							r = { instance: it(l, s) };
							break;
						case 16384:
							(r = e[t]) || (r = { instance: ct(l, s) }), 32768 & s.flags && ir(Lu(l, s.parent.nodeIndex).componentView, r.instance, r.instance);
							break;
						case 32:
						case 64:
						case 128:
							r = { value: void 0 };
							break;
						case 67108864:
						case 134217728:
							r = new Pt();
							break;
						case 8:
							Ys(l, n, s), (r = void 0);
					}
					e[t] = r;
				}
				wr(l, yr.CreateViewNodes), _r(l, 201326592, 268435456, 0);
			}
			function hr(l) {
				gr(l), $u.updateDirectives(l, 1), jr(l, yr.CheckNoChanges), $u.updateRenderer(l, 1), wr(l, yr.CheckNoChanges), (l.state &= -97);
			}
			function dr(l) {
				1 & l.state ? ((l.state &= -2), (l.state |= 2)) : (l.state &= -3), Du(l, 0, 256), gr(l), $u.updateDirectives(l, 0), jr(l, yr.CheckAndUpdate), _r(l, 67108864, 536870912, 0);
				let n = Du(l, 256, 512);
				yt(l, 2097152 | (n ? 1048576 : 0)),
					$u.updateRenderer(l, 0),
					wr(l, yr.CheckAndUpdate),
					_r(l, 134217728, 536870912, 0),
					yt(l, 8388608 | ((n = Du(l, 512, 768)) ? 4194304 : 0)),
					2 & l.def.flags && (l.state &= -9),
					(l.state &= -97),
					Du(l, 768, 1024);
			}
			function pr(l, n, u, e, t, s, r, a, o, i, c, h, d) {
				return 0 === u
					? (function(l, n, u, e, t, s, r, a, o, i, c, h) {
							switch (201347067 & n.flags) {
								case 1:
									return (function(l, n, u, e, t, s, r, a, o, i, c, h) {
										const d = n.bindings.length;
										let p = !1;
										return (
											d > 0 && Bs(l, n, 0, u) && (p = !0),
											d > 1 && Bs(l, n, 1, e) && (p = !0),
											d > 2 && Bs(l, n, 2, t) && (p = !0),
											d > 3 && Bs(l, n, 3, s) && (p = !0),
											d > 4 && Bs(l, n, 4, r) && (p = !0),
											d > 5 && Bs(l, n, 5, a) && (p = !0),
											d > 6 && Bs(l, n, 6, o) && (p = !0),
											d > 7 && Bs(l, n, 7, i) && (p = !0),
											d > 8 && Bs(l, n, 8, c) && (p = !0),
											d > 9 && Bs(l, n, 9, h) && (p = !0),
											p
										);
									})(l, n, u, e, t, s, r, a, o, i, c, h);
								case 2:
									return (function(l, n, u, e, t, s, r, a, o, i, c, h) {
										let d = !1;
										const p = n.bindings,
											g = p.length;
										if (
											(g > 0 && Ju(l, n, 0, u) && (d = !0),
											g > 1 && Ju(l, n, 1, e) && (d = !0),
											g > 2 && Ju(l, n, 2, t) && (d = !0),
											g > 3 && Ju(l, n, 3, s) && (d = !0),
											g > 4 && Ju(l, n, 4, r) && (d = !0),
											g > 5 && Ju(l, n, 5, a) && (d = !0),
											g > 6 && Ju(l, n, 6, o) && (d = !0),
											g > 7 && Ju(l, n, 7, i) && (d = !0),
											g > 8 && Ju(l, n, 8, c) && (d = !0),
											g > 9 && Ju(l, n, 9, h) && (d = !0),
											d)
										) {
											let d = n.text.prefix;
											g > 0 && (d += nr(u, p[0])),
												g > 1 && (d += nr(e, p[1])),
												g > 2 && (d += nr(t, p[2])),
												g > 3 && (d += nr(s, p[3])),
												g > 4 && (d += nr(r, p[4])),
												g > 5 && (d += nr(a, p[5])),
												g > 6 && (d += nr(o, p[6])),
												g > 7 && (d += nr(i, p[7])),
												g > 8 && (d += nr(c, p[8])),
												g > 9 && (d += nr(h, p[9]));
											const f = Fu(l, n.nodeIndex).renderText;
											l.renderer.setValue(f, d);
										}
										return d;
									})(l, n, u, e, t, s, r, a, o, i, c, h);
								case 16384:
									return (function(l, n, u, e, t, s, r, a, o, i, c, h) {
										const d = Vu(l, n.nodeIndex),
											p = d.instance;
										let g = !1,
											f = void 0;
										const m = n.bindings.length;
										return (
											m > 0 && Yu(l, n, 0, u) && ((g = !0), (f = bt(l, d, n, 0, u, f))),
											m > 1 && Yu(l, n, 1, e) && ((g = !0), (f = bt(l, d, n, 1, e, f))),
											m > 2 && Yu(l, n, 2, t) && ((g = !0), (f = bt(l, d, n, 2, t, f))),
											m > 3 && Yu(l, n, 3, s) && ((g = !0), (f = bt(l, d, n, 3, s, f))),
											m > 4 && Yu(l, n, 4, r) && ((g = !0), (f = bt(l, d, n, 4, r, f))),
											m > 5 && Yu(l, n, 5, a) && ((g = !0), (f = bt(l, d, n, 5, a, f))),
											m > 6 && Yu(l, n, 6, o) && ((g = !0), (f = bt(l, d, n, 6, o, f))),
											m > 7 && Yu(l, n, 7, i) && ((g = !0), (f = bt(l, d, n, 7, i, f))),
											m > 8 && Yu(l, n, 8, c) && ((g = !0), (f = bt(l, d, n, 8, c, f))),
											m > 9 && Yu(l, n, 9, h) && ((g = !0), (f = bt(l, d, n, 9, h, f))),
											f && p.ngOnChanges(f),
											65536 & n.flags && Uu(l, 256, n.nodeIndex) && p.ngOnInit(),
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
											(g > 0 && Ju(l, n, 0, u) && (p = !0),
											g > 1 && Ju(l, n, 1, e) && (p = !0),
											g > 2 && Ju(l, n, 2, t) && (p = !0),
											g > 3 && Ju(l, n, 3, s) && (p = !0),
											g > 4 && Ju(l, n, 4, r) && (p = !0),
											g > 5 && Ju(l, n, 5, a) && (p = !0),
											g > 6 && Ju(l, n, 6, o) && (p = !0),
											g > 7 && Ju(l, n, 7, i) && (p = !0),
											g > 8 && Ju(l, n, 8, c) && (p = !0),
											g > 9 && Ju(l, n, 9, h) && (p = !0),
											p)
										) {
											const p = zu(l, n.nodeIndex);
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
										for (let t = 0; t < u.length; t++) Bs(l, n, t, u[t]) && (e = !0);
										return e;
									})(l, n, u);
								case 2:
									return (function(l, n, u) {
										const e = n.bindings;
										let t = !1;
										for (let s = 0; s < u.length; s++) Ju(l, n, s, u[s]) && (t = !0);
										if (t) {
											let t = '';
											for (let l = 0; l < u.length; l++) t += nr(u[l], e[l]);
											t = n.text.prefix + t;
											const s = Fu(l, n.nodeIndex).renderText;
											l.renderer.setValue(s, t);
										}
										return t;
									})(l, n, u);
								case 16384:
									return (function(l, n, u) {
										const e = Vu(l, n.nodeIndex),
											t = e.instance;
										let s = !1,
											r = void 0;
										for (let a = 0; a < u.length; a++) Yu(l, n, a, u[a]) && ((s = !0), (r = bt(l, e, n, a, u[a], r)));
										return r && t.ngOnChanges(r), 65536 & n.flags && Uu(l, 256, n.nodeIndex) && t.ngOnInit(), 262144 & n.flags && t.ngDoCheck(), s;
									})(l, n, u);
								case 32:
								case 64:
								case 128:
									return (function(l, n, u) {
										const e = n.bindings;
										let t = !1;
										for (let s = 0; s < u.length; s++) Ju(l, n, s, u[s]) && (t = !0);
										if (t) {
											const t = zu(l, n.nodeIndex);
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
			function gr(l) {
				const n = l.def;
				if (4 & n.nodeFlags)
					for (let u = 0; u < n.nodes.length; u++) {
						const e = n.nodes[u];
						if (4 & e.flags) {
							const n = Lu(l, u).template._projectedViews;
							if (n)
								for (let u = 0; u < n.length; u++) {
									const e = n[u];
									(e.state |= 32), ne(e, l);
								}
						} else 0 == (4 & e.childFlags) && (u += e.childCount);
					}
			}
			function fr(l, n, u, e, t, s, r, a, o, i, c, h, d) {
				return (
					0 === u
						? (function(l, n, u, e, t, s, r, a, o, i, c, h) {
								const d = n.bindings.length;
								d > 0 && Xu(l, n, 0, u),
									d > 1 && Xu(l, n, 1, e),
									d > 2 && Xu(l, n, 2, t),
									d > 3 && Xu(l, n, 3, s),
									d > 4 && Xu(l, n, 4, r),
									d > 5 && Xu(l, n, 5, a),
									d > 6 && Xu(l, n, 6, o),
									d > 7 && Xu(l, n, 7, i),
									d > 8 && Xu(l, n, 8, c),
									d > 9 && Xu(l, n, 9, h);
						  })(l, n, e, t, s, r, a, o, i, c, h, d)
						: (function(l, n, u) {
								for (let e = 0; e < u.length; e++) Xu(l, n, e, u[e]);
						  })(l, n, e),
					!1
				);
			}
			function mr(l, n) {
				if (Hu(l, n.nodeIndex).dirty) throw Ru($u.createDebugContext(l, n.nodeIndex), `Query ${n.query.id} not dirty`, `Query ${n.query.id} dirty`, 0 != (1 & l.state));
			}
			function br(l) {
				if (!(128 & l.state)) {
					if ((jr(l, yr.Destroy), wr(l, yr.Destroy), yt(l, 131072), l.disposables)) for (let n = 0; n < l.disposables.length; n++) l.disposables[n]();
					!(function(l) {
						if (!(16 & l.state)) return;
						const n = ee(l);
						if (n) {
							const u = n.template._projectedViews;
							u && (Re(u, u.indexOf(l)), $u.dirtyParentQueries(l));
						}
					})(l),
						l.renderer.destroyNode &&
							(function(l) {
								const n = l.def.nodes.length;
								for (let u = 0; u < n; u++) {
									const n = l.def.nodes[u];
									1 & n.flags
										? l.renderer.destroyNode(Lu(l, u).renderElement)
										: 2 & n.flags
										? l.renderer.destroyNode(Fu(l, u).renderText)
										: (67108864 & n.flags || 134217728 & n.flags) && Hu(l, u).destroy();
								}
							})(l),
						re(l) && l.renderer.destroy(),
						(l.state |= 128);
				}
			}
			const yr = (function() {
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
			function wr(l, n) {
				const u = l.def;
				if (33554432 & u.nodeFlags)
					for (let e = 0; e < u.nodes.length; e++) {
						const t = u.nodes[e];
						33554432 & t.flags ? vr(Lu(l, e).componentView, n) : 0 == (33554432 & t.childFlags) && (e += t.childCount);
					}
			}
			function jr(l, n) {
				const u = l.def;
				if (16777216 & u.nodeFlags)
					for (let e = 0; e < u.nodes.length; e++) {
						const t = u.nodes[e];
						if (16777216 & t.flags) {
							const u = Lu(l, e).viewContainer._embeddedViews;
							for (let l = 0; l < u.length; l++) vr(u[l], n);
						} else 0 == (16777216 & t.childFlags) && (e += t.childCount);
					}
			}
			function vr(l, n) {
				const u = l.state;
				switch (n) {
					case yr.CheckNoChanges:
						0 == (128 & u) && (12 == (12 & u) ? hr(l) : 64 & u && xr(l, yr.CheckNoChangesProjectedViews));
						break;
					case yr.CheckNoChangesProjectedViews:
						0 == (128 & u) && (32 & u ? hr(l) : 64 & u && xr(l, n));
						break;
					case yr.CheckAndUpdate:
						0 == (128 & u) && (12 == (12 & u) ? dr(l) : 64 & u && xr(l, yr.CheckAndUpdateProjectedViews));
						break;
					case yr.CheckAndUpdateProjectedViews:
						0 == (128 & u) && (32 & u ? dr(l) : 64 & u && xr(l, n));
						break;
					case yr.Destroy:
						br(l);
						break;
					case yr.CreateViewNodes:
						cr(l);
				}
			}
			function xr(l, n) {
				jr(l, n), wr(l, n);
			}
			function _r(l, n, u, e) {
				if (!(l.def.nodeFlags & n && l.def.nodeFlags & u)) return;
				const t = l.def.nodes.length;
				for (let s = 0; s < t; s++) {
					const t = l.def.nodes[s];
					if (t.flags & n && t.flags & u)
						switch (($u.setCurrentNode(l, t.nodeIndex), e)) {
							case 0:
								Zs(l, t);
								break;
							case 1:
								mr(l, t);
						}
					(t.childFlags & n && t.childFlags & u) || (s += t.childCount);
				}
			}
			let kr = !1;
			function Cr(l, n, u, e, t, s) {
				const r = t.injector.get(ru);
				return rr(Er(l, t, r, n, u), e, s);
			}
			function Sr(l, n, u, e, t, s) {
				const r = t.injector.get(ru),
					a = Er(l, t, new sa(r), n, u),
					o = Ur(e);
				return ea($r.create, rr, null, [a, o, s]);
			}
			function Er(l, n, u, e, t) {
				const s = n.injector.get(En),
					r = n.injector.get(Rn),
					a = u.createRenderer(null, null);
				return { ngModule: n, injector: l, projectableNodes: e, selectorOrNode: t, sanitizer: s, rendererFactory: u, renderer: a, errorHandler: r };
			}
			function Ir(l, n, u, e) {
				const t = Ur(u);
				return ea($r.create, sr, null, [l, n, t, e]);
			}
			function Pr(l, n, u, e) {
				return (u = Rr.get(n.element.componentProvider.provider.token) || Ur(u)), ea($r.create, ar, null, [l, n, u, e]);
			}
			function Or(l, n, u, e) {
				return We(
					l,
					n,
					u,
					(function(l) {
						const { hasOverrides: n, hasDeprecatedOverrides: u } = (function(l) {
							let n = !1,
								u = !1;
							return 0 === Tr.size
								? { hasOverrides: n, hasDeprecatedOverrides: u }
								: (l.providers.forEach((l) => {
										const e = Tr.get(l.token);
										3840 & l.flags && e && ((n = !0), (u = u || e.deprecatedBehavior));
								  }),
								  l.modules.forEach((l) => {
										Mr.forEach((e, t) => {
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
										const t = Tr.get(e.token);
										t && ((e.flags = (-3841 & e.flags) | t.flags), (e.deps = ce(t.deps)), (e.value = t.value));
									}
									if (Mr.size > 0) {
										let n = new Set(l.modules);
										Mr.forEach((e, t) => {
											if (n.has(dl(t).providedIn)) {
												let n = { token: t, flags: e.flags | (u ? 4096 : 0), deps: ce(e.deps), value: e.value, index: l.providers.length };
												l.providers.push(n), (l.providersByKey[Gu(t)] = n);
											}
										});
									}
							  })((l = l.factory(() => Bu))),
							  l)
							: l;
					})(e)
				);
			}
			const Tr = new Map(),
				Mr = new Map(),
				Rr = new Map();
			function Ar(l) {
				let n;
				Tr.set(l.token, l), 'function' == typeof l.token && (n = dl(l.token)) && 'function' == typeof n.providedIn && Mr.set(l.token, l);
			}
			function Nr(l, n) {
				const u = pe(n.viewDefFactory),
					e = pe(u.nodes[0].element.componentView);
				Rr.set(l, e);
			}
			function Dr() {
				Tr.clear(), Mr.clear(), Rr.clear();
			}
			function Ur(l) {
				if (0 === Tr.size) return l;
				const n = (function(l) {
					const n = [];
					let u = null;
					for (let e = 0; e < l.nodes.length; e++) {
						const t = l.nodes[e];
						1 & t.flags && (u = t), u && 3840 & t.flags && Tr.has(t.provider.token) && (n.push(u.nodeIndex), (u = null));
					}
					return n;
				})(l);
				if (0 === n.length) return l;
				l = l.factory(() => Bu);
				for (let e = 0; e < n.length; e++) u(l, n[e]);
				return l;
				function u(l, n) {
					for (let u = n + 1; u < l.nodes.length; u++) {
						const n = l.nodes[u];
						if (1 & n.flags) return;
						if (3840 & n.flags) {
							const l = n.provider,
								u = Tr.get(l.token);
							u && ((n.flags = (-3841 & n.flags) | u.flags), (l.deps = ce(u.deps)), (l.value = u.value));
						}
					}
				}
			}
			function Fr(l, n, u, e, t, s, r, a, o, i, c, h, d) {
				const p = l.def.nodes[n];
				return pr(l, p, u, e, t, s, r, a, o, i, c, h, d), 224 & p.flags ? zu(l, n).value : void 0;
			}
			function Lr(l, n, u, e, t, s, r, a, o, i, c, h, d) {
				const p = l.def.nodes[n];
				return fr(l, p, u, e, t, s, r, a, o, i, c, h, d), 224 & p.flags ? zu(l, n).value : void 0;
			}
			function Vr(l) {
				return ea($r.detectChanges, dr, null, [l]);
			}
			function zr(l) {
				return ea($r.checkNoChanges, hr, null, [l]);
			}
			function Hr(l) {
				return ea($r.destroy, br, null, [l]);
			}
			const $r = (function() {
				var l = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 };
				return (l[l.create] = 'create'), (l[l.detectChanges] = 'detectChanges'), (l[l.checkNoChanges] = 'checkNoChanges'), (l[l.destroy] = 'destroy'), (l[l.handleEvent] = 'handleEvent'), l;
			})();
			let Br, qr, Gr;
			function Zr(l, n) {
				(qr = l), (Gr = n);
			}
			function Qr(l, n, u, e) {
				return Zr(l, n), ea($r.handleEvent, l.def.handleEvent, null, [l, n, u, e]);
			}
			function Wr(l, n) {
				if (128 & l.state) throw Nu($r[Br]);
				return (
					Zr(l, Xr(l, 0)),
					l.def.updateDirectives(function(l, u, e, ...t) {
						const s = l.def.nodes[u];
						return 0 === n ? Yr(l, s, e, t) : Jr(l, s, e, t), 16384 & s.flags && Zr(l, Xr(l, u)), 224 & s.flags ? zu(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function Kr(l, n) {
				if (128 & l.state) throw Nu($r[Br]);
				return (
					Zr(l, la(l, 0)),
					l.def.updateRenderer(function(l, u, e, ...t) {
						const s = l.def.nodes[u];
						return 0 === n ? Yr(l, s, e, t) : Jr(l, s, e, t), 3 & s.flags && Zr(l, la(l, u)), 224 & s.flags ? zu(l, s.nodeIndex).value : void 0;
					}, l)
				);
			}
			function Yr(l, n, u, e) {
				if (pr(l, n, u, ...e)) {
					const r = 1 === u ? e[0] : e;
					if (16384 & n.flags) {
						const u = {};
						for (let l = 0; l < n.bindings.length; l++) {
							const e = n.bindings[l],
								a = r[l];
							8 & e.flags && (u[((t = e.nonMinifiedName), (s = void 0), (s = t.replace(/[$@]/g, '_')), `ng-reflect-${(t = s.replace(An, (...l) => '-' + l[1].toLowerCase()))}`)] = Nn(a));
						}
						const e = n.parent,
							a = Lu(l, e.nodeIndex).renderElement;
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
			function Jr(l, n, u, e) {
				fr(l, n, u, ...e);
			}
			function Xr(l, n) {
				for (let u = n; u < l.def.nodes.length; u++) {
					const n = l.def.nodes[u];
					if (16384 & n.flags && n.bindings && n.bindings.length) return u;
				}
				return null;
			}
			function la(l, n) {
				for (let u = n; u < l.def.nodes.length; u++) {
					const n = l.def.nodes[u];
					if (3 & n.flags && n.bindings && n.bindings.length) return u;
				}
				return null;
			}
			class na {
				constructor(l, n) {
					(this.view = l), (this.nodeIndex = n), null == n && (this.nodeIndex = n = 0), (this.nodeDef = l.def.nodes[n]);
					let u = this.nodeDef,
						e = l;
					for (; u && 0 == (1 & u.flags); ) u = u.parent;
					if (!u) for (; !u && e; ) (u = te(e)), (e = e.parent);
					(this.elDef = u), (this.elView = e);
				}
				get elOrCompView() {
					return Lu(this.elView, this.elDef.nodeIndex).componentView || this.view;
				}
				get injector() {
					return Be(this.elView, this.elDef);
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
						ua(this.elView, this.elDef, l);
						for (let n = this.elDef.nodeIndex + 1; n <= this.elDef.nodeIndex + this.elDef.childCount; n++) {
							const u = this.elView.def.nodes[n];
							20224 & u.flags && ua(this.elView, u, l), (n += u.childCount);
						}
					}
					return l;
				}
				get componentRenderElement() {
					const l = (function(l) {
						for (; l && !re(l); ) l = l.parent;
						return l.parent ? Lu(l.parent, te(l).nodeIndex) : null;
					})(this.elOrCompView);
					return l ? l.renderElement : void 0;
				}
				get renderNode() {
					return 2 & this.nodeDef.flags ? se(this.view, this.nodeDef) : se(this.elView, this.elDef);
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
					u.factory(() => (++s === t ? l.error.bind(l, ...n) : Bu)), s < t && (l.error('Illegal state: the ViewDefinitionFactory did not call the logger!'), l.error(...n));
				}
			}
			function ua(l, n, u) {
				for (let e in n.references) u[e] = Ws(l, n, n.references[e]);
			}
			function ea(l, n, u, e) {
				const t = Br,
					s = qr,
					r = Gr;
				try {
					Br = l;
					const o = n.apply(u, e);
					return (qr = s), (Gr = r), (Br = t), o;
				} catch (a) {
					if (On(a) || !qr) throw a;
					throw (function(l, n) {
						return l instanceof Error || (l = new Error(l.toString())), Au(l, n), l;
					})(a, ta());
				}
			}
			function ta() {
				return qr ? new na(qr, Gr) : null;
			}
			class sa {
				constructor(l) {
					this.delegate = l;
				}
				createRenderer(l, n) {
					return new ra(this.delegate.createRenderer(l, n));
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
			class ra {
				constructor(l) {
					(this.delegate = l), (this.debugContextFactory = ta), (this.data = this.delegate.data);
				}
				createDebugContext(l) {
					return this.debugContextFactory(l);
				}
				destroyNode(l) {
					!(function(l) {
						Os.delete(l.nativeNode);
					})(Ts(l)),
						this.delegate.destroyNode && this.delegate.destroyNode(l);
				}
				destroy() {
					this.delegate.destroy();
				}
				createElement(l, n) {
					const u = this.delegate.createElement(l, n),
						e = this.createDebugContext(u);
					if (e) {
						const n = new Ps(u, null, e);
						(n.name = l), Ms(n);
					}
					return u;
				}
				createComment(l) {
					const n = this.delegate.createComment(l),
						u = this.createDebugContext(n);
					return u && Ms(new Is(n, null, u)), n;
				}
				createText(l) {
					const n = this.delegate.createText(l),
						u = this.createDebugContext(n);
					return u && Ms(new Is(n, null, u)), n;
				}
				appendChild(l, n) {
					const u = Ts(l),
						e = Ts(n);
					u && e && u instanceof Ps && u.addChild(e), this.delegate.appendChild(l, n);
				}
				insertBefore(l, n, u) {
					const e = Ts(l),
						t = Ts(n),
						s = Ts(u);
					e && t && e instanceof Ps && e.insertBefore(s, t), this.delegate.insertBefore(l, n, u);
				}
				removeChild(l, n) {
					const u = Ts(l),
						e = Ts(n);
					u && e && u instanceof Ps && u.removeChild(e), this.delegate.removeChild(l, n);
				}
				selectRootElement(l, n) {
					const u = this.delegate.selectRootElement(l, n),
						e = ta();
					return e && Ms(new Ps(u, null, e)), u;
				}
				setAttribute(l, n, u, e) {
					const t = Ts(l);
					t && t instanceof Ps && (t.attributes[e ? e + ':' + n : n] = u), this.delegate.setAttribute(l, n, u, e);
				}
				removeAttribute(l, n, u) {
					const e = Ts(l);
					e && e instanceof Ps && (e.attributes[u ? u + ':' + n : n] = null), this.delegate.removeAttribute(l, n, u);
				}
				addClass(l, n) {
					const u = Ts(l);
					u && u instanceof Ps && (u.classes[n] = !0), this.delegate.addClass(l, n);
				}
				removeClass(l, n) {
					const u = Ts(l);
					u && u instanceof Ps && (u.classes[n] = !1), this.delegate.removeClass(l, n);
				}
				setStyle(l, n, u, e) {
					const t = Ts(l);
					t && t instanceof Ps && (t.styles[n] = u), this.delegate.setStyle(l, n, u, e);
				}
				removeStyle(l, n, u) {
					const e = Ts(l);
					e && e instanceof Ps && (e.styles[n] = null), this.delegate.removeStyle(l, n, u);
				}
				setProperty(l, n, u) {
					const e = Ts(l);
					e && e instanceof Ps && (e.properties[n] = u), this.delegate.setProperty(l, n, u);
				}
				listen(l, n, u) {
					if ('string' != typeof l) {
						const e = Ts(l);
						e && e.listeners.push(new Es(n, u));
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
			function aa(l, n, u) {
				return new oa(l, n, u);
			}
			class oa extends nu {
				constructor(l, n, u) {
					super(), (this.moduleType = l), (this._bootstrapComponents = n), (this._ngModuleDefFactory = u);
				}
				create(l) {
					!(function() {
						if (kr) return;
						kr = !0;
						const l = en()
							? {
									setCurrentNode: Zr,
									createRootView: Sr,
									createEmbeddedView: Ir,
									createComponentView: Pr,
									createNgModuleRef: Or,
									overrideProvider: Ar,
									overrideComponentView: Nr,
									clearOverrides: Dr,
									checkAndUpdateView: Vr,
									checkNoChangesView: zr,
									destroyView: Hr,
									createDebugContext: (l, n) => new na(l, n),
									handleEvent: Qr,
									updateDirectives: Wr,
									updateRenderer: Kr
							  }
							: {
									setCurrentNode: () => {},
									createRootView: Cr,
									createEmbeddedView: sr,
									createComponentView: ar,
									createNgModuleRef: We,
									overrideProvider: Bu,
									overrideComponentView: Bu,
									clearOverrides: Bu,
									checkAndUpdateView: dr,
									checkNoChangesView: hr,
									destroyView: br,
									createDebugContext: (l, n) => new na(l, n),
									handleEvent: (l, n, u, e) => l.def.handleEvent(l, n, u, e),
									updateDirectives: (l, n) => l.def.updateDirectives(0 === n ? Fr : Lr, l),
									updateRenderer: (l, n) => l.def.updateRenderer(0 === n ? Fr : Lr, l)
							  };
						($u.setCurrentNode = l.setCurrentNode),
							($u.createRootView = l.createRootView),
							($u.createEmbeddedView = l.createEmbeddedView),
							($u.createComponentView = l.createComponentView),
							($u.createNgModuleRef = l.createNgModuleRef),
							($u.overrideProvider = l.overrideProvider),
							($u.overrideComponentView = l.overrideComponentView),
							($u.clearOverrides = l.clearOverrides),
							($u.checkAndUpdateView = l.checkAndUpdateView),
							($u.checkNoChangesView = l.checkNoChangesView),
							($u.destroyView = l.destroyView),
							($u.resolveDep = ft),
							($u.createDebugContext = l.createDebugContext),
							($u.handleEvent = l.handleEvent),
							($u.updateDirectives = l.updateDirectives),
							($u.updateRenderer = l.updateRenderer),
							($u.dirtyParentQueries = Gs);
					})();
					const n = (function(l) {
						const n = Array.from(l.providers),
							u = Array.from(l.modules),
							e = {};
						for (const t in l.providersByKey) e[t] = l.providersByKey[t];
						return { factory: l.factory, isRoot: l.isRoot, providers: n, modules: u, providersByKey: e };
					})(pe(this._ngModuleDefFactory));
					return $u.createNgModuleRef(this.moduleType, l || Vl.NULL, this._bootstrapComponents, n);
				}
			}
			class ia {}
			class ca {
				constructor() {}
			}
			class ha {}
			const da = new _l('Location Initialized');
			class pa {}
			const ga = new _l('appBaseHref'),
				fa = (() => {
					class l {
						constructor(n, u) {
							(this._subject = new Et()), (this._urlChangeListeners = []), (this._platformStrategy = n);
							const e = this._platformStrategy.getBaseHref();
							(this._platformLocation = u),
								(this._baseHref = l.stripTrailingSlash(ma(e))),
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
								})(this._baseHref, ma(n))
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
			function ma(l) {
				return l.replace(/\/index.html$/, '');
			}
			const ba = (() =>
					class extends pa {
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
							const n = fa.joinWithSlash(this._baseHref, l);
							return n.length > 0 ? '#' + n : n;
						}
						pushState(l, n, u, e) {
							let t = this.prepareExternalUrl(u + fa.normalizeQueryParams(e));
							0 == t.length && (t = this._platformLocation.pathname), this._platformLocation.pushState(l, n, t);
						}
						replaceState(l, n, u, e) {
							let t = this.prepareExternalUrl(u + fa.normalizeQueryParams(e));
							0 == t.length && (t = this._platformLocation.pathname), this._platformLocation.replaceState(l, n, t);
						}
						forward() {
							this._platformLocation.forward();
						}
						back() {
							this._platformLocation.back();
						}
					})(),
				ya = (() =>
					class extends pa {
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
							return fa.joinWithSlash(this._baseHref, l);
						}
						path(l = !1) {
							const n = this._platformLocation.pathname + fa.normalizeQueryParams(this._platformLocation.search),
								u = this._platformLocation.hash;
							return u && l ? `${n}${u}` : n;
						}
						pushState(l, n, u, e) {
							const t = this.prepareExternalUrl(u + fa.normalizeQueryParams(e));
							this._platformLocation.pushState(l, n, t);
						}
						replaceState(l, n, u, e) {
							const t = this.prepareExternalUrl(u + fa.normalizeQueryParams(e));
							this._platformLocation.replaceState(l, n, t);
						}
						forward() {
							this._platformLocation.forward();
						}
						back() {
							this._platformLocation.back();
						}
					})(),
				wa = (function() {
					var l = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
					return (l[l.Zero] = 'Zero'), (l[l.One] = 'One'), (l[l.Two] = 'Two'), (l[l.Few] = 'Few'), (l[l.Many] = 'Many'), (l[l.Other] = 'Other'), l;
				})(),
				ja = new _l('UseV4Plurals');
			class va {}
			const xa = (() =>
				class extends va {
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
											let u = xt[n];
											if (u) return u;
											const e = n.split('-')[0];
											if ((u = xt[e])) return u;
											if ('en' === e) return Ct;
											throw new Error(`Missing locale data for the locale "${l}".`);
										})(l)[_t.PluralCase];
								  })(n || this.locale)(l)
						) {
							case wa.Zero:
								return 'zero';
							case wa.One:
								return 'one';
							case wa.Two:
								return 'two';
							case wa.Few:
								return 'few';
							case wa.Many:
								return 'many';
							default:
								return 'other';
						}
					}
				})();
			class _a {}
			const ka = (() =>
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
									(zn(this._rawClass)
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
				Ca = (() => {
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
				Sa = (() =>
					class extends Ca {
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
				Ea = (() =>
					class {
						constructor(l, n) {
							(this._viewContainer = l),
								(this._context = new Ia()),
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
							Pa('ngIfThen', l), (this._thenTemplateRef = l), (this._thenViewRef = null), this._updateView();
						}
						set ngIfElse(l) {
							Pa('ngIfElse', l), (this._elseTemplateRef = l), (this._elseViewRef = null), this._updateView();
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
					})();
			class Ia {
				constructor() {
					(this.$implicit = null), (this.ngIf = null);
				}
			}
			function Pa(l, n) {
				if (n && !n.createEmbeddedView) throw new Error(`${l} must be a TemplateRef, but received '${gl(n)}'.`);
			}
			const Oa = (() => class {})(),
				Ta = new _l('DocumentToken'),
				Ma = (() => {
					class l {}
					return (l.ngInjectableDef = hl({ token: l, providedIn: 'root', factory: () => new Ra(Nl(Ta), window, Nl(Rn)) })), l;
				})();
			class Ra {
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
			function Aa(...l) {
				let n = l[l.length - 1];
				return P(n) ? (l.pop(), H(l, n)) : W(l);
			}
			class Na extends E {
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
			function Da() {
				return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
			}
			Da.prototype = Object.create(Error.prototype);
			const Ua = Da,
				Fa = {};
			class La {
				constructor(l) {
					this.resultSelector = l;
				}
				call(l, n) {
					return n.subscribe(new Va(l, this.resultSelector));
				}
			}
			class Va extends F {
				constructor(l, n) {
					super(l), (this.resultSelector = n), (this.active = 0), (this.values = []), (this.observables = []);
				}
				_next(l) {
					this.values.push(Fa), this.observables.push(l);
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
						r = this.toRespond ? (s[u] === Fa ? --this.toRespond : this.toRespond) : 0;
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
			const za = new v((l) => l.complete());
			function Ha(l) {
				return l
					? (function(l) {
							return new v((n) => l.schedule(() => n.complete()));
					  })(l)
					: za;
			}
			function $a(l) {
				return new v((n) => {
					let u;
					try {
						u = l();
					} catch (e) {
						return void n.error(e);
					}
					return (u ? $(u) : Ha()).subscribe(n);
				});
			}
			function Ba() {
				return Q(1);
			}
			function qa(l, n) {
				return function(u) {
					return u.lift(new Ga(l, n));
				};
			}
			class Ga {
				constructor(l, n) {
					(this.predicate = l), (this.thisArg = n);
				}
				call(l, n) {
					return n.subscribe(new Za(l, this.predicate, this.thisArg));
				}
			}
			class Za extends f {
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
			function Qa() {
				return Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this;
			}
			Qa.prototype = Object.create(Error.prototype);
			const Wa = Qa;
			function Ka(l) {
				return function(n) {
					return 0 === l ? Ha() : n.lift(new Ya(l));
				};
			}
			class Ya {
				constructor(l) {
					if (((this.total = l), this.total < 0)) throw new Wa();
				}
				call(l, n) {
					return n.subscribe(new Ja(l, this.total));
				}
			}
			class Ja extends f {
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
			function Xa(
				l = function() {
					return new Ua();
				}
			) {
				return (n) => n.lift(new lo(l));
			}
			class lo {
				constructor(l) {
					this.errorFactory = l;
				}
				call(l, n) {
					return n.subscribe(new no(l, this.errorFactory));
				}
			}
			class no extends f {
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
			function uo(l = null) {
				return (n) => n.lift(new eo(l));
			}
			class eo {
				constructor(l) {
					this.defaultValue = l;
				}
				call(l, n) {
					return n.subscribe(new to(l, this.defaultValue));
				}
			}
			class to extends f {
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
			function so(l, n) {
				const u = arguments.length >= 2;
				return (e) =>
					e.pipe(
						l ? qa((n, u) => l(n, u, e)) : Z,
						Ka(1),
						u ? uo(n) : Xa(() => new Ua())
					);
			}
			function ro(l) {
				return function(n) {
					const u = new ao(l),
						e = n.lift(u);
					return (u.caught = e);
				};
			}
			class ao {
				constructor(l) {
					this.selector = l;
				}
				call(l, n) {
					return n.subscribe(new oo(l, this.selector, this.caught));
				}
			}
			class oo extends F {
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
			function io(l) {
				return (n) => (0 === l ? Ha() : n.lift(new co(l)));
			}
			class co {
				constructor(l) {
					if (((this.total = l), this.total < 0)) throw new Wa();
				}
				call(l, n) {
					return n.subscribe(new ho(l, this.total));
				}
			}
			class ho extends f {
				constructor(l, n) {
					super(l), (this.total = n), (this.count = 0);
				}
				_next(l) {
					const n = this.total,
						u = ++this.count;
					u <= n && (this.destination.next(l), u === n && (this.destination.complete(), this.unsubscribe()));
				}
			}
			function po(l, n) {
				const u = arguments.length >= 2;
				return (e) =>
					e.pipe(
						l ? qa((n, u) => l(n, u, e)) : Z,
						io(1),
						u ? uo(n) : Xa(() => new Ua())
					);
			}
			class go {
				constructor(l, n, u) {
					(this.predicate = l), (this.thisArg = n), (this.source = u);
				}
				call(l, n) {
					return n.subscribe(new fo(l, this.predicate, this.thisArg, this.source));
				}
			}
			class fo extends f {
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
			function mo(l, n) {
				return 'function' == typeof n ? (u) => u.pipe(mo((u, e) => $(l(u, e)).pipe(L((l, t) => n(u, l, e, t))))) : (n) => n.lift(new bo(l));
			}
			class bo {
				constructor(l) {
					this.project = l;
				}
				call(l, n) {
					return n.subscribe(new yo(l, this.project));
				}
			}
			class yo extends F {
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
			function wo(...l) {
				return Ba()(Aa(...l));
			}
			function jo(l, n) {
				let u = !1;
				return (
					arguments.length >= 2 && (u = !0),
					function(e) {
						return e.lift(new vo(l, n, u));
					}
				);
			}
			class vo {
				constructor(l, n, u = !1) {
					(this.accumulator = l), (this.seed = n), (this.hasSeed = u);
				}
				call(l, n) {
					return n.subscribe(new xo(l, this.accumulator, this.seed, this.hasSeed));
				}
			}
			class xo extends f {
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
			function _o(l, n) {
				return B(l, n, 1);
			}
			function ko(l, n, u) {
				return function(e) {
					return e.lift(new Co(l, n, u));
				};
			}
			class Co {
				constructor(l, n, u) {
					(this.nextOrObserver = l), (this.error = n), (this.complete = u);
				}
				call(l, n) {
					return n.subscribe(new So(l, this.nextOrObserver, this.error, this.complete));
				}
			}
			class So extends f {
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
			class Eo {
				constructor(l) {
					this.callback = l;
				}
				call(l, n) {
					return n.subscribe(new Io(l, this.callback));
				}
			}
			class Io extends f {
				constructor(l, n) {
					super(l), this.add(new d(n));
				}
			}
			let Po = null;
			function Oo() {
				return Po;
			}
			class To {
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
			class Mo extends To {
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
			const Ro = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
				Ao = 3,
				No = {
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
				Do = { A: '1', B: '2', C: '3', D: '4', E: '5', F: '6', G: '7', H: '8', I: '9', J: '*', K: '+', M: '-', N: '.', O: '/', '`': '0', '\x90': 'NumLock' },
				Uo = (() => {
					if (xl.Node)
						return (
							xl.Node.prototype.contains ||
							function(l) {
								return !!(16 & this.compareDocumentPosition(l));
							}
						);
				})();
			class Fo extends Mo {
				parse(l) {
					throw new Error('parse not implemented');
				}
				static makeCurrent() {
					var l;
					(l = new Fo()), Po || (Po = l);
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
					return Ro;
				}
				contains(l, n) {
					return Uo.call(l, n);
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
						n.startsWith('U+') && ((n = String.fromCharCode(parseInt(n.substring(2), 16))), l.location === Ao && Do.hasOwnProperty(n) && (n = Do[n]));
					}
					return No[n] || n;
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
					const n = Vo || (Vo = document.querySelector('base')) ? Vo.getAttribute('href') : null;
					return null == n ? null : ((u = n), Lo || (Lo = document.createElement('a')), Lo.setAttribute('href', u), '/' === Lo.pathname.charAt(0) ? Lo.pathname : '/' + Lo.pathname);
					var u;
				}
				resetBaseElement() {
					Vo = null;
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
			let Lo,
				Vo = null;
			function zo() {
				return !!window.history.pushState;
			}
			const Ho = (() => {
					class l extends ha {
						constructor(l) {
							super(), (this._doc = l), this._init();
						}
						_init() {
							(this.location = Oo().getLocation()), (this._history = Oo().getHistory());
						}
						getBaseHrefFromDOM() {
							return Oo().getBaseHref(this._doc);
						}
						onPopState(l) {
							Oo()
								.getGlobalEventTarget(this._doc, 'window')
								.addEventListener('popstate', l, !1);
						}
						onHashChange(l) {
							Oo()
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
							zo() ? this._history.pushState(l, n, u) : (this.location.hash = u);
						}
						replaceState(l, n, u) {
							zo() ? this._history.replaceState(l, n, u) : (this.location.hash = u);
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
					return (l.ctorParameters = () => [{ type: void 0, decorators: [{ type: sl, args: [Ta] }] }]), l;
				})(),
				$o = new _l('TRANSITION_ID'),
				Bo = [
					{
						provide: Ot,
						useFactory: function(l, n, u) {
							return () => {
								u.get(Tt).donePromise.then(() => {
									const u = Oo();
									Array.prototype.slice
										.apply(u.querySelectorAll(n, 'style[ng-transition]'))
										.filter((n) => u.getAttribute(n, 'ng-transition') === l)
										.forEach((l) => u.remove(l));
								});
							};
						},
						deps: [$o, Ta, Vl],
						multi: !0
					}
				];
			class qo {
				static init() {
					var l;
					(l = new qo()), (ds = l);
				}
				addToWindow(l) {
					(xl.getAngularTestability = (n, u = !0) => {
						const e = l.findTestabilityInTree(n, u);
						if (null == e) throw new Error('Could not find testability for element.');
						return e;
					}),
						(xl.getAllAngularTestabilities = () => l.getAllTestabilities()),
						(xl.getAllAngularRootElements = () => l.getAllRootElements()),
						xl.frameworkStabilizers || (xl.frameworkStabilizers = []),
						xl.frameworkStabilizers.push((l) => {
							const n = xl.getAllAngularTestabilities();
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
					return null != e ? e : u ? (Oo().isShadowRoot(n) ? this.findTestabilityInTree(l, Oo().getHost(n), !0) : this.findTestabilityInTree(l, Oo().parentElement(n), !0)) : null;
				}
			}
			function Go(l, n) {
				('undefined' != typeof COMPILED && COMPILED) || ((xl.ng = xl.ng || {})[l] = n);
			}
			const Zo = (() => ({ ApplicationRef: js, NgZone: ns }))();
			function Qo(l) {
				return Ts(l);
			}
			const Wo = new _l('EventManagerPlugins'),
				Ko = (() =>
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
			class Yo {
				constructor(l) {
					this._doc = l;
				}
				addGlobalEventListener(l, n, u) {
					const e = Oo().getGlobalEventTarget(this._doc, l);
					if (!e) throw new Error(`Unsupported event target ${e} for event ${n}`);
					return this.addEventListener(e, n, u);
				}
			}
			const Jo = (() =>
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
				Xo = (() =>
					class extends Jo {
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
							this._styleNodes.forEach((l) => Oo().remove(l));
						}
					})(),
				li = {
					svg: 'http://www.w3.org/2000/svg',
					xhtml: 'http://www.w3.org/1999/xhtml',
					xlink: 'http://www.w3.org/1999/xlink',
					xml: 'http://www.w3.org/XML/1998/namespace',
					xmlns: 'http://www.w3.org/2000/xmlns/'
				},
				ni = /%COMP%/g,
				ui = '_nghost-%COMP%',
				ei = '_ngcontent-%COMP%';
			function ti(l, n, u) {
				for (let e = 0; e < n.length; e++) {
					let t = n[e];
					Array.isArray(t) ? ti(l, t, u) : ((t = t.replace(ni, l)), u.push(t));
				}
				return u;
			}
			function si(l) {
				return (n) => {
					!1 === l(n) && (n.preventDefault(), (n.returnValue = !1));
				};
			}
			const ri = (() =>
				class {
					constructor(l, n, u) {
						(this.eventManager = l), (this.sharedStylesHost = n), (this.appId = u), (this.rendererByCompId = new Map()), (this.defaultRenderer = new ai(l));
					}
					createRenderer(l, n) {
						if (!l || !n) return this.defaultRenderer;
						switch (n.encapsulation) {
							case Xl.Emulated: {
								let u = this.rendererByCompId.get(n.id);
								return u || ((u = new ci(this.eventManager, this.sharedStylesHost, n, this.appId)), this.rendererByCompId.set(n.id, u)), u.applyToHost(l), u;
							}
							case Xl.Native:
							case Xl.ShadowDom:
								return new hi(this.eventManager, this.sharedStylesHost, l, n);
							default:
								if (!this.rendererByCompId.has(n.id)) {
									const l = ti(n.id, n.styles, []);
									this.sharedStylesHost.addStyles(l), this.rendererByCompId.set(n.id, this.defaultRenderer);
								}
								return this.defaultRenderer;
						}
					}
					begin() {}
					end() {}
				})();
			class ai {
				constructor(l) {
					(this.eventManager = l), (this.data = Object.create(null));
				}
				destroy() {}
				createElement(l, n) {
					return n ? document.createElementNS(li[n] || n, l) : document.createElement(l);
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
						n = e + ':' + n;
						const t = li[e];
						t ? l.setAttributeNS(t, n, u) : l.setAttribute(n, u);
					} else l.setAttribute(n, u);
				}
				removeAttribute(l, n, u) {
					if (u) {
						const e = li[u];
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
					e & au.DashCase ? l.style.setProperty(n, u, e & au.Important ? 'important' : '') : (l.style[n] = u);
				}
				removeStyle(l, n, u) {
					u & au.DashCase ? l.style.removeProperty(n) : (l.style[n] = '');
				}
				setProperty(l, n, u) {
					ii(n, 'property'), (l[n] = u);
				}
				setValue(l, n) {
					l.nodeValue = n;
				}
				listen(l, n, u) {
					return ii(n, 'listener'), 'string' == typeof l ? this.eventManager.addGlobalEventListener(l, n, si(u)) : this.eventManager.addEventListener(l, n, si(u));
				}
			}
			const oi = (() => '@'.charCodeAt(0))();
			function ii(l, n) {
				if (l.charCodeAt(0) === oi) throw new Error(`Found the synthetic ${n} ${l}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`);
			}
			class ci extends ai {
				constructor(l, n, u, e) {
					super(l), (this.component = u);
					const t = ti(e + '-' + u.id, u.styles, []);
					n.addStyles(t), (this.contentAttr = ei.replace(ni, e + '-' + u.id)), (this.hostAttr = ui.replace(ni, e + '-' + u.id));
				}
				applyToHost(l) {
					super.setAttribute(l, this.hostAttr, '');
				}
				createElement(l, n) {
					const u = super.createElement(l, n);
					return super.setAttribute(u, this.contentAttr, ''), u;
				}
			}
			class hi extends ai {
				constructor(l, n, u, e) {
					super(l),
						(this.sharedStylesHost = n),
						(this.hostEl = u),
						(this.component = e),
						(this.shadowRoot = e.encapsulation === Xl.ShadowDom ? u.attachShadow({ mode: 'open' }) : u.createShadowRoot()),
						this.sharedStylesHost.addHost(this.shadowRoot);
					const t = ti(e.id, e.styles, []);
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
			const di = (() =>
					('undefined' != typeof Zone && Zone.__symbol__) ||
					function(l) {
						return '__zone_symbol__' + l;
					})(),
				pi = di('addEventListener'),
				gi = di('removeEventListener'),
				fi = {},
				mi = '__zone_symbol__propagationStopped',
				bi = (() => {
					const l = 'undefined' != typeof Zone && Zone[di('BLACK_LISTED_EVENTS')];
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
				yi = function(l) {
					return !!bi && bi.hasOwnProperty(l);
				},
				wi = function(l) {
					const n = fi[l.type];
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
						for (let u = 0; u < n.length && !0 !== l[mi]; u++) {
							const l = n[u];
							l.zone !== Zone.current ? l.zone.run(l.handler, this, e) : l.handler.apply(this, e);
						}
					}
				},
				ji = (() =>
					class extends Yo {
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
								this && (this[mi] = !0), l && l.apply(this, arguments);
							};
						}
						supports(l) {
							return !0;
						}
						addEventListener(l, n, u) {
							let e = u;
							if (!l[pi] || (ns.isInAngularZone() && !yi(n))) l.addEventListener(n, e, !1);
							else {
								let u = fi[n];
								u || (u = fi[n] = di('ANGULAR' + n + 'FALSE'));
								let t = l[u];
								const s = t && t.length > 0;
								t || (t = l[u] = []);
								const r = yi(n) ? Zone.root : Zone.current;
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
								s || l[pi](n, wi, !1);
							}
							return () => this.removeEventListener(l, n, e);
						}
						removeEventListener(l, n, u) {
							let e = l[gi];
							if (!e) return l.removeEventListener.apply(l, [n, u, !1]);
							let t = fi[n],
								s = t && l[t];
							if (!s) return l.removeEventListener.apply(l, [n, u, !1]);
							let r = !1;
							for (let a = 0; a < s.length; a++)
								if (s[a].handler === u) {
									(r = !0), s.splice(a, 1);
									break;
								}
							r ? 0 === s.length && e.apply(l, [n, wi, !1]) : l.removeEventListener.apply(l, [n, u, !1]);
						}
					})(),
				vi = {
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
				xi = new _l('HammerGestureConfig'),
				_i = new _l('HammerLoader'),
				ki = (() =>
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
				Ci = (() =>
					class extends Yo {
						constructor(l, n, u, e) {
							super(l), (this._config = n), (this.console = u), (this.loader = e);
						}
						supports(l) {
							return !(
								(!vi.hasOwnProperty(l.toLowerCase()) && !this.isCustomEvent(l)) ||
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
				Si = ['alt', 'control', 'meta', 'shift'],
				Ei = { alt: (l) => l.altKey, control: (l) => l.ctrlKey, meta: (l) => l.metaKey, shift: (l) => l.shiftKey },
				Ii = (() => {
					class l extends Yo {
						constructor(l) {
							super(l);
						}
						supports(n) {
							return null != l.parseEventName(n);
						}
						addEventListener(n, u, e) {
							const t = l.parseEventName(u),
								s = l.eventCallback(t.fullKey, e, this.manager.getZone());
							return this.manager.getZone().runOutsideAngular(() => Oo().onAndCancel(n, t.domEventName, s));
						}
						static parseEventName(n) {
							const u = n.toLowerCase().split('.'),
								e = u.shift();
							if (0 === u.length || ('keydown' !== e && 'keyup' !== e)) return null;
							const t = l._normalizeKey(u.pop());
							let s = '';
							if (
								(Si.forEach((l) => {
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
								u = Oo().getEventKey(l);
							return (
								' ' === (u = u.toLowerCase()) ? (u = 'space') : '.' === u && (u = 'dot'),
								Si.forEach((e) => {
									e != u && (0, Ei[e])(l) && (n += e + '.');
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
			class Pi {}
			const Oi = (() =>
				class extends Pi {
					constructor(l) {
						super(), (this._doc = l);
					}
					sanitize(l, n) {
						if (null == n) return null;
						switch (l) {
							case Sn.NONE:
								return n;
							case Sn.HTML:
								return n instanceof Mi
									? n.changingThisBreaksApplicationSecurity
									: (this.checkNotSafeValue(n, 'HTML'),
									  (function(l, n) {
											let u = null;
											try {
												kn = kn || new tn(l);
												let e = n ? String(n) : '';
												u = kn.getInertBodyElement(e);
												let t = 5,
													s = e;
												do {
													if (0 === t) throw new Error('Failed to sanitize html because the input is unstable');
													t--, (e = s), (s = u.innerHTML), (u = kn.getInertBodyElement(e));
												} while (e !== s);
												const r = new jn(),
													a = r.sanitizeChildren(Cn(u) || u);
												return en() && r.sanitizedSomething && console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'), a;
											} finally {
												if (u) {
													const l = Cn(u) || u;
													for (; l.firstChild; ) l.removeChild(l.firstChild);
												}
											}
									  })(this._doc, String(n)));
							case Sn.STYLE:
								return n instanceof Ri
									? n.changingThisBreaksApplicationSecurity
									: (this.checkNotSafeValue(n, 'Style'),
									  (function(l) {
											if (!(l = String(l).trim())) return '';
											const n = l.match(Pn);
											return (n && an(n[1]) === n[1]) ||
												(l.match(In) &&
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
												: (en() && console.warn(`WARNING: sanitizing unsafe style value ${l} (see http://g.co/ng/security#xss).`), 'unsafe');
									  })(n));
							case Sn.SCRIPT:
								if (n instanceof Ai) return n.changingThisBreaksApplicationSecurity;
								throw (this.checkNotSafeValue(n, 'Script'), new Error('unsafe value used in a script context'));
							case Sn.URL:
								return n instanceof Di || n instanceof Ni ? n.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(n, 'URL'), an(String(n)));
							case Sn.RESOURCE_URL:
								if (n instanceof Di) return n.changingThisBreaksApplicationSecurity;
								throw (this.checkNotSafeValue(n, 'ResourceURL'), new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'));
							default:
								throw new Error(`Unexpected SecurityContext ${l} (see http://g.co/ng/security#xss)`);
						}
					}
					checkNotSafeValue(l, n) {
						if (l instanceof Ti) throw new Error(`Required a safe ${n}, got a ${l.getTypeName()} ` + '(see http://g.co/ng/security#xss)');
					}
					bypassSecurityTrustHtml(l) {
						return new Mi(l);
					}
					bypassSecurityTrustStyle(l) {
						return new Ri(l);
					}
					bypassSecurityTrustScript(l) {
						return new Ai(l);
					}
					bypassSecurityTrustUrl(l) {
						return new Ni(l);
					}
					bypassSecurityTrustResourceUrl(l) {
						return new Di(l);
					}
				})();
			class Ti {
				constructor(l) {
					this.changingThisBreaksApplicationSecurity = l;
				}
				toString() {
					return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` + ' (see http://g.co/ng/security#xss)';
				}
			}
			class Mi extends Ti {
				getTypeName() {
					return 'HTML';
				}
			}
			class Ri extends Ti {
				getTypeName() {
					return 'Style';
				}
			}
			class Ai extends Ti {
				getTypeName() {
					return 'Script';
				}
			}
			class Ni extends Ti {
				getTypeName() {
					return 'URL';
				}
			}
			class Di extends Ti {
				getTypeName() {
					return 'ResourceURL';
				}
			}
			const Ui = ms(Rs, 'browser', [
				{ provide: Dt, useValue: 'browser' },
				{
					provide: Nt,
					useValue: function() {
						Fo.makeCurrent(), qo.init();
					},
					multi: !0
				},
				{ provide: ha, useClass: Ho, deps: [Ta] },
				{
					provide: Ta,
					useFactory: function() {
						return document;
					},
					deps: []
				}
			]);
			function Fi() {
				return new Rn();
			}
			const Li = (() => {
				class l {
					constructor(l) {
						if (l)
							throw new Error(
								'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
							);
					}
					static withServerTransition(n) {
						return { ngModule: l, providers: [{ provide: Mt, useValue: n.appId }, { provide: $o, useExisting: Mt }, Bo] };
					}
				}
				return l;
			})();
			'undefined' != typeof window && window;
			class Vi {
				constructor(l, n) {
					(this.id = l), (this.url = n);
				}
			}
			class zi extends Vi {
				constructor(l, n, u = 'imperative', e = null) {
					super(l, n), (this.navigationTrigger = u), (this.restoredState = e);
				}
				toString() {
					return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
				}
			}
			class Hi extends Vi {
				constructor(l, n, u) {
					super(l, n), (this.urlAfterRedirects = u);
				}
				toString() {
					return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
				}
			}
			class $i extends Vi {
				constructor(l, n, u) {
					super(l, n), (this.reason = u);
				}
				toString() {
					return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
				}
			}
			class Bi extends Vi {
				constructor(l, n, u) {
					super(l, n), (this.error = u);
				}
				toString() {
					return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
				}
			}
			class qi extends Vi {
				constructor(l, n, u, e) {
					super(l, n), (this.urlAfterRedirects = u), (this.state = e);
				}
				toString() {
					return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Gi extends Vi {
				constructor(l, n, u, e) {
					super(l, n), (this.urlAfterRedirects = u), (this.state = e);
				}
				toString() {
					return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Zi extends Vi {
				constructor(l, n, u, e, t) {
					super(l, n), (this.urlAfterRedirects = u), (this.state = e), (this.shouldActivate = t);
				}
				toString() {
					return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
				}
			}
			class Qi extends Vi {
				constructor(l, n, u, e) {
					super(l, n), (this.urlAfterRedirects = u), (this.state = e);
				}
				toString() {
					return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Wi extends Vi {
				constructor(l, n, u, e) {
					super(l, n), (this.urlAfterRedirects = u), (this.state = e);
				}
				toString() {
					return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
				}
			}
			class Ki {
				constructor(l) {
					this.route = l;
				}
				toString() {
					return `RouteConfigLoadStart(path: ${this.route.path})`;
				}
			}
			class Yi {
				constructor(l) {
					this.route = l;
				}
				toString() {
					return `RouteConfigLoadEnd(path: ${this.route.path})`;
				}
			}
			class Ji {
				constructor(l) {
					this.snapshot = l;
				}
				toString() {
					return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class Xi {
				constructor(l) {
					this.snapshot = l;
				}
				toString() {
					return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class lc {
				constructor(l) {
					this.snapshot = l;
				}
				toString() {
					return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class nc {
				constructor(l) {
					this.snapshot = l;
				}
				toString() {
					return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
				}
			}
			class uc {
				constructor(l, n, u) {
					(this.routerEvent = l), (this.position = n), (this.anchor = u);
				}
				toString() {
					return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`;
				}
			}
			const ec = (() => class {})(),
				tc = 'primary';
			class sc {
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
			function rc(l) {
				return new sc(l);
			}
			const ac = 'ngNavigationCancelingError';
			function oc(l) {
				const n = Error('NavigationCancelingError: ' + l);
				return (n[ac] = !0), n;
			}
			function ic(l, n, u) {
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
			class cc {
				constructor(l, n) {
					(this.routes = l), (this.module = n);
				}
			}
			function hc(l, n = '') {
				for (let u = 0; u < l.length; u++) {
					const e = l[u];
					dc(e, pc(n, e));
				}
			}
			function dc(l, n) {
				if (!l)
					throw new Error(
						`\n      Invalid configuration of route '${n}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
					);
				if (Array.isArray(l)) throw new Error(`Invalid configuration of route '${n}': Array cannot be specified`);
				if (!l.component && !l.children && !l.loadChildren && l.outlet && l.outlet !== tc)
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
				l.children && hc(l.children, n);
			}
			function pc(l, n) {
				return n ? (l || n.path ? (l && !n.path ? `${l}/` : !l && n.path ? n.path : `${l}/${n.path}`) : '') : l;
			}
			function gc(l) {
				const n = l.children && l.children.map(gc),
					u = n ? Object.assign({}, l, { children: n }) : Object.assign({}, l);
				return !u.component && (n || u.loadChildren) && u.outlet && u.outlet !== tc && (u.component = ec), u;
			}
			function fc(l, n) {
				const u = Object.keys(l),
					e = Object.keys(n);
				if (!u || !e || u.length != e.length) return !1;
				let t;
				for (let s = 0; s < u.length; s++) if (l[(t = u[s])] !== n[t]) return !1;
				return !0;
			}
			function mc(l) {
				return Array.prototype.concat.apply([], l);
			}
			function bc(l) {
				return l.length > 0 ? l[l.length - 1] : null;
			}
			function yc(l, n) {
				for (const u in l) l.hasOwnProperty(u) && n(l[u], u);
			}
			function wc(l) {
				return Bn(l) ? l : $n(l) ? $(Promise.resolve(l)) : Aa(l);
			}
			function jc(l, n, u) {
				return u
					? (function(l, n) {
							return fc(l, n);
					  })(l.queryParams, n.queryParams) &&
							(function l(n, u) {
								if (!kc(n.segments, u.segments)) return !1;
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
										return !!kc(u.segments.slice(0, t.length), t) && !e.hasChildren();
									}
									if (u.segments.length === t.length) {
										if (!kc(u.segments, t)) return !1;
										for (const n in e.children) {
											if (!u.children[n]) return !1;
											if (!l(u.children[n], e.children[n])) return !1;
										}
										return !0;
									}
									{
										const l = t.slice(0, u.segments.length),
											s = t.slice(u.segments.length);
										return !!kc(u.segments, l) && !!u.children[tc] && n(u.children[tc], e, s);
									}
								})(n, u, u.segments);
							})(l.root, n.root);
			}
			class vc {
				constructor(l, n, u) {
					(this.root = l), (this.queryParams = n), (this.fragment = u);
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = rc(this.queryParams)), this._queryParamMap;
				}
				toString() {
					return Ic.serialize(this);
				}
			}
			class xc {
				constructor(l, n) {
					(this.segments = l), (this.children = n), (this.parent = null), yc(n, (l, n) => (l.parent = this));
				}
				hasChildren() {
					return this.numberOfChildren > 0;
				}
				get numberOfChildren() {
					return Object.keys(this.children).length;
				}
				toString() {
					return Pc(this);
				}
			}
			class _c {
				constructor(l, n) {
					(this.path = l), (this.parameters = n);
				}
				get parameterMap() {
					return this._parameterMap || (this._parameterMap = rc(this.parameters)), this._parameterMap;
				}
				toString() {
					return Nc(this);
				}
			}
			function kc(l, n) {
				return l.length === n.length && l.every((l, u) => l.path === n[u].path);
			}
			function Cc(l, n) {
				let u = [];
				return (
					yc(l.children, (l, e) => {
						e === tc && (u = u.concat(n(l, e)));
					}),
					yc(l.children, (l, e) => {
						e !== tc && (u = u.concat(n(l, e)));
					}),
					u
				);
			}
			class Sc {}
			class Ec {
				parse(l) {
					const n = new Vc(l);
					return new vc(n.parseRootSegment(), n.parseQueryParams(), n.parseFragment());
				}
				serialize(l) {
					var n;
					return `${`/${(function l(n, u) {
						if (!n.hasChildren()) return Pc(n);
						if (u) {
							const u = n.children[tc] ? l(n.children[tc], !1) : '',
								e = [];
							return (
								yc(n.children, (n, u) => {
									u !== tc && e.push(`${u}:${l(n, !1)}`);
								}),
								e.length > 0 ? `${u}(${e.join('//')})` : u
							);
						}
						{
							const u = Cc(n, (u, e) => (e === tc ? [l(n.children[tc], !1)] : [`${e}:${l(u, !1)}`]));
							return `${Pc(n)}/(${u.join('//')})`;
						}
					})(l.root, !0)}`}${(function(l) {
						const n = Object.keys(l).map((n) => {
							const u = l[n];
							return Array.isArray(u) ? u.map((l) => `${Tc(n)}=${Tc(l)}`).join('&') : `${Tc(n)}=${Tc(u)}`;
						});
						return n.length ? `?${n.join('&')}` : '';
					})(l.queryParams)}${'string' == typeof l.fragment ? `#${((n = l.fragment), encodeURI(n))}` : ''}`;
				}
			}
			const Ic = new Ec();
			function Pc(l) {
				return l.segments.map((l) => Nc(l)).join('/');
			}
			function Oc(l) {
				return encodeURIComponent(l)
					.replace(/%40/g, '@')
					.replace(/%3A/gi, ':')
					.replace(/%24/g, '$')
					.replace(/%2C/gi, ',');
			}
			function Tc(l) {
				return Oc(l).replace(/%3B/gi, ';');
			}
			function Mc(l) {
				return Oc(l)
					.replace(/\(/g, '%28')
					.replace(/\)/g, '%29')
					.replace(/%26/gi, '&');
			}
			function Rc(l) {
				return decodeURIComponent(l);
			}
			function Ac(l) {
				return Rc(l.replace(/\+/g, '%20'));
			}
			function Nc(l) {
				return `${Mc(l.path)}${((n = l.parameters),
				Object.keys(n)
					.map((l) => `;${Mc(l)}=${Mc(n[l])}`)
					.join(''))}`;
				var n;
			}
			const Dc = /^[^\/()?;=#]+/;
			function Uc(l) {
				const n = l.match(Dc);
				return n ? n[0] : '';
			}
			const Fc = /^[^=?&#]+/,
				Lc = /^[^?&#]+/;
			class Vc {
				constructor(l) {
					(this.url = l), (this.remaining = l);
				}
				parseRootSegment() {
					return this.consumeOptional('/'), '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#') ? new xc([], {}) : new xc([], this.parseChildren());
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
					return this.peekStartsWith('(') && (u = this.parseParens(!1)), (l.length > 0 || Object.keys(n).length > 0) && (u[tc] = new xc(l, n)), u;
				}
				parseSegment() {
					const l = Uc(this.remaining);
					if ('' === l && this.peekStartsWith(';')) throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
					return this.capture(l), new _c(Rc(l), this.parseMatrixParams());
				}
				parseMatrixParams() {
					const l = {};
					for (; this.consumeOptional(';'); ) this.parseParam(l);
					return l;
				}
				parseParam(l) {
					const n = Uc(this.remaining);
					if (!n) return;
					this.capture(n);
					let u = '';
					if (this.consumeOptional('=')) {
						const l = Uc(this.remaining);
						l && this.capture((u = l));
					}
					l[Rc(n)] = Rc(u);
				}
				parseQueryParam(l) {
					const n = (function(l) {
						const n = l.match(Fc);
						return n ? n[0] : '';
					})(this.remaining);
					if (!n) return;
					this.capture(n);
					let u = '';
					if (this.consumeOptional('=')) {
						const l = (function(l) {
							const n = l.match(Lc);
							return n ? n[0] : '';
						})(this.remaining);
						l && this.capture((u = l));
					}
					const e = Ac(n),
						t = Ac(u);
					if (l.hasOwnProperty(e)) {
						let n = l[e];
						Array.isArray(n) || (l[e] = n = [n]), n.push(t);
					} else l[e] = t;
				}
				parseParens(l) {
					const n = {};
					for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
						const u = Uc(this.remaining),
							e = this.remaining[u.length];
						if ('/' !== e && ')' !== e && ';' !== e) throw new Error(`Cannot parse url '${this.url}'`);
						let t = void 0;
						u.indexOf(':') > -1 ? ((t = u.substr(0, u.indexOf(':'))), this.capture(t), this.capture(':')) : l && (t = tc);
						const s = this.parseChildren();
						(n[t] = 1 === Object.keys(s).length ? s[tc] : new xc([], s)), this.consumeOptional('//');
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
			class zc {
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
					const n = Hc(l, this._root);
					return n ? n.children.map((l) => l.value) : [];
				}
				firstChild(l) {
					const n = Hc(l, this._root);
					return n && n.children.length > 0 ? n.children[0].value : null;
				}
				siblings(l) {
					const n = $c(l, this._root);
					return n.length < 2 ? [] : n[n.length - 2].children.map((l) => l.value).filter((n) => n !== l);
				}
				pathFromRoot(l) {
					return $c(l, this._root).map((l) => l.value);
				}
			}
			function Hc(l, n) {
				if (l === n.value) return n;
				for (const u of n.children) {
					const n = Hc(l, u);
					if (n) return n;
				}
				return null;
			}
			function $c(l, n) {
				if (l === n.value) return [n];
				for (const u of n.children) {
					const e = $c(l, u);
					if (e.length) return e.unshift(n), e;
				}
				return [];
			}
			class Bc {
				constructor(l, n) {
					(this.value = l), (this.children = n);
				}
				toString() {
					return `TreeNode(${this.value})`;
				}
			}
			function qc(l) {
				const n = {};
				return l && l.children.forEach((l) => (n[l.value.outlet] = l)), n;
			}
			class Gc extends zc {
				constructor(l, n) {
					super(l), (this.snapshot = n), Jc(this, l);
				}
				toString() {
					return this.snapshot.toString();
				}
			}
			function Zc(l, n) {
				const u = (function(l, n) {
						const u = new Kc([], {}, {}, '', {}, tc, n, null, l.root, -1, {});
						return new Yc('', new Bc(u, []));
					})(l, n),
					e = new Na([new _c('', {})]),
					t = new Na({}),
					s = new Na({}),
					r = new Na({}),
					a = new Na(''),
					o = new Qc(e, t, r, a, s, tc, n, u.root);
				return (o.snapshot = u.root), new Gc(new Bc(o, []), u);
			}
			class Qc {
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
					return this._paramMap || (this._paramMap = this.params.pipe(L((l) => rc(l)))), this._paramMap;
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(L((l) => rc(l)))), this._queryParamMap;
				}
				toString() {
					return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
				}
			}
			function Wc(l, n = 'emptyOnly') {
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
			class Kc {
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
					return this._paramMap || (this._paramMap = rc(this.params)), this._paramMap;
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = rc(this.queryParams)), this._queryParamMap;
				}
				toString() {
					return `Route(url:'${this.url.map((l) => l.toString()).join('/')}', path:'${this.routeConfig ? this.routeConfig.path : ''}')`;
				}
			}
			class Yc extends zc {
				constructor(l, n) {
					super(n), (this.url = l), Jc(this, n);
				}
				toString() {
					return Xc(this._root);
				}
			}
			function Jc(l, n) {
				(n.value._routerState = l), n.children.forEach((n) => Jc(l, n));
			}
			function Xc(l) {
				const n = l.children.length > 0 ? ` { ${l.children.map(Xc).join(', ')} } ` : '';
				return `${l.value}${n}`;
			}
			function lh(l) {
				if (l.snapshot) {
					const n = l.snapshot,
						u = l._futureSnapshot;
					(l.snapshot = u),
						fc(n.queryParams, u.queryParams) || l.queryParams.next(u.queryParams),
						n.fragment !== u.fragment && l.fragment.next(u.fragment),
						fc(n.params, u.params) || l.params.next(u.params),
						(function(l, n) {
							if (l.length !== n.length) return !1;
							for (let u = 0; u < l.length; ++u) if (!fc(l[u], n[u])) return !1;
							return !0;
						})(n.url, u.url) || l.url.next(u.url),
						fc(n.data, u.data) || l.data.next(u.data);
				} else (l.snapshot = l._futureSnapshot), l.data.next(l._futureSnapshot.data);
			}
			function nh(l, n) {
				var u, e;
				return (
					fc(l.params, n.params) && kc((u = l.url), (e = n.url)) && u.every((l, n) => fc(l.parameters, e[n].parameters)) && !(!l.parent != !n.parent) && (!l.parent || nh(l.parent, n.parent))
				);
			}
			function uh(l) {
				return 'object' == typeof l && null != l && !l.outlets && !l.segmentPath;
			}
			function eh(l, n, u, e, t) {
				let s = {};
				return (
					e &&
						yc(e, (l, n) => {
							s[n] = Array.isArray(l) ? l.map((l) => `${l}`) : `${l}`;
						}),
					new vc(
						u.root === l
							? n
							: (function l(n, u, e) {
									const t = {};
									return (
										yc(n.children, (n, s) => {
											t[s] = n === u ? e : l(n, u, e);
										}),
										new xc(n.segments, t)
									);
							  })(u.root, l, n),
						s,
						t
					)
				);
			}
			class th {
				constructor(l, n, u) {
					if (((this.isAbsolute = l), (this.numberOfDoubleDots = n), (this.commands = u), l && u.length > 0 && uh(u[0]))) throw new Error('Root segment cannot have matrix parameters');
					const e = u.find((l) => 'object' == typeof l && null != l && l.outlets);
					if (e && e !== bc(u)) throw new Error('{outlets:{}} has to be the last command');
				}
				toRoot() {
					return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
				}
			}
			class sh {
				constructor(l, n, u) {
					(this.segmentGroup = l), (this.processChildren = n), (this.index = u);
				}
			}
			function rh(l) {
				return 'object' == typeof l && null != l && l.outlets ? l.outlets[tc] : `${l}`;
			}
			function ah(l, n, u) {
				if ((l || (l = new xc([], {})), 0 === l.segments.length && l.hasChildren())) return oh(l, n, u);
				const e = (function(l, n, u) {
						let e = 0,
							t = n;
						const s = { match: !1, pathIndex: 0, commandIndex: 0 };
						for (; t < l.segments.length; ) {
							if (e >= u.length) return s;
							const n = l.segments[t],
								r = rh(u[e]),
								a = e < u.length - 1 ? u[e + 1] : null;
							if (t > 0 && void 0 === r) break;
							if (r && a && 'object' == typeof a && void 0 === a.outlets) {
								if (!dh(r, a, n)) return s;
								e += 2;
							} else {
								if (!dh(r, {}, n)) return s;
								e++;
							}
							t++;
						}
						return { match: !0, pathIndex: t, commandIndex: e };
					})(l, n, u),
					t = u.slice(e.commandIndex);
				if (e.match && e.pathIndex < l.segments.length) {
					const n = new xc(l.segments.slice(0, e.pathIndex), {});
					return (n.children[tc] = new xc(l.segments.slice(e.pathIndex), l.children)), oh(n, 0, t);
				}
				return e.match && 0 === t.length ? new xc(l.segments, {}) : e.match && !l.hasChildren() ? ih(l, n, u) : e.match ? oh(l, 0, t) : ih(l, n, u);
			}
			function oh(l, n, u) {
				if (0 === u.length) return new xc(l.segments, {});
				{
					const e = (function(l) {
							return 'object' != typeof l[0] ? { [tc]: l } : void 0 === l[0].outlets ? { [tc]: l } : l[0].outlets;
						})(u),
						t = {};
					return (
						yc(e, (u, e) => {
							null !== u && (t[e] = ah(l.children[e], n, u));
						}),
						yc(l.children, (l, n) => {
							void 0 === e[n] && (t[n] = l);
						}),
						new xc(l.segments, t)
					);
				}
			}
			function ih(l, n, u) {
				const e = l.segments.slice(0, n);
				let t = 0;
				for (; t < u.length; ) {
					if ('object' == typeof u[t] && void 0 !== u[t].outlets) {
						const l = ch(u[t].outlets);
						return new xc(e, l);
					}
					if (0 === t && uh(u[0])) {
						e.push(new _c(l.segments[n].path, u[0])), t++;
						continue;
					}
					const s = rh(u[t]),
						r = t < u.length - 1 ? u[t + 1] : null;
					s && r && uh(r) ? (e.push(new _c(s, hh(r))), (t += 2)) : (e.push(new _c(s, {})), t++);
				}
				return new xc(e, {});
			}
			function ch(l) {
				const n = {};
				return (
					yc(l, (l, u) => {
						null !== l && (n[u] = ih(new xc([], {}), 0, l));
					}),
					n
				);
			}
			function hh(l) {
				const n = {};
				return yc(l, (l, u) => (n[u] = `${l}`)), n;
			}
			function dh(l, n, u) {
				return l == u.path && fc(n, u.parameters);
			}
			const ph = (l, n, u) => L((e) => (new gh(n, e.targetRouterState, e.currentRouterState, u).activate(l), e));
			class gh {
				constructor(l, n, u, e) {
					(this.routeReuseStrategy = l), (this.futureState = n), (this.currState = u), (this.forwardEvent = e);
				}
				activate(l) {
					const n = this.futureState._root,
						u = this.currState ? this.currState._root : null;
					this.deactivateChildRoutes(n, u, l), lh(this.futureState.root), this.activateChildRoutes(n, u, l);
				}
				deactivateChildRoutes(l, n, u) {
					const e = qc(n);
					l.children.forEach((l) => {
						const n = l.value.outlet;
						this.deactivateRoutes(l, e[n], u), delete e[n];
					}),
						yc(e, (l, n) => {
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
						const e = qc(l),
							t = l.value.component ? u.children : n;
						yc(e, (l, n) => this.deactivateRouteAndItsChildren(l, t)), u.outlet && (u.outlet.deactivate(), u.children.onOutletDeactivated());
					}
				}
				activateChildRoutes(l, n, u) {
					const e = qc(n);
					l.children.forEach((l) => {
						this.activateRoutes(l, e[l.value.outlet], u), this.forwardEvent(new nc(l.value.snapshot));
					}),
						l.children.length && this.forwardEvent(new Xi(l.value.snapshot));
				}
				activateRoutes(l, n, u) {
					const e = l.value,
						t = n ? n.value : null;
					if ((lh(e), e === t))
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
								fh(l.route);
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
			function fh(l) {
				lh(l.value), l.children.forEach(fh);
			}
			function mh(l) {
				return 'function' == typeof l;
			}
			function bh(l) {
				return l instanceof vc;
			}
			class yh {
				constructor(l) {
					this.segmentGroup = l || null;
				}
			}
			class wh {
				constructor(l) {
					this.urlTree = l;
				}
			}
			function jh(l) {
				return new v((n) => n.error(new yh(l)));
			}
			function vh(l) {
				return new v((n) => n.error(new wh(l)));
			}
			function xh(l) {
				return new v((n) => n.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${l}'`)));
			}
			class _h {
				constructor(l, n, u, e, t) {
					(this.configLoader = n), (this.urlSerializer = u), (this.urlTree = e), (this.config = t), (this.allowRedirects = !0), (this.ngModule = l.get(lu));
				}
				apply() {
					return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, tc)
						.pipe(L((l) => this.createUrlTree(l, this.urlTree.queryParams, this.urlTree.fragment)))
						.pipe(
							ro((l) => {
								if (l instanceof wh) return (this.allowRedirects = !1), this.match(l.urlTree);
								if (l instanceof yh) throw this.noMatchError(l);
								throw l;
							})
						);
				}
				match(l) {
					return this.expandSegmentGroup(this.ngModule, this.config, l.root, tc)
						.pipe(L((n) => this.createUrlTree(n, l.queryParams, l.fragment)))
						.pipe(
							ro((l) => {
								if (l instanceof yh) throw this.noMatchError(l);
								throw l;
							})
						);
				}
				noMatchError(l) {
					return new Error(`Cannot match any routes. URL Segment: '${l.segmentGroup}'`);
				}
				createUrlTree(l, n, u) {
					const e = l.segments.length > 0 ? new xc([], { [tc]: l }) : l;
					return new vc(e, n, u);
				}
				expandSegmentGroup(l, n, u, e) {
					return 0 === u.segments.length && u.hasChildren() ? this.expandChildren(l, n, u).pipe(L((l) => new xc([], l))) : this.expandSegment(l, u, n, u.segments, e, !0);
				}
				expandChildren(l, n, u) {
					return (function(l, n) {
						if (0 === Object.keys(l).length) return Aa({});
						const u = [],
							e = [],
							t = {};
						return (
							yc(l, (l, s) => {
								const r = n(s, l).pipe(L((l) => (t[s] = l)));
								s === tc ? u.push(r) : e.push(r);
							}),
							Aa.apply(null, u.concat(e)).pipe(
								Ba(),
								so(),
								L(() => t)
							)
						);
					})(u.children, (u, e) => this.expandSegmentGroup(l, n, e, u));
				}
				expandSegment(l, n, u, e, t, s) {
					return Aa(...u).pipe(
						L((r) =>
							this.expandSegmentAgainstRoute(l, n, u, r, e, t, s).pipe(
								ro((l) => {
									if (l instanceof yh) return Aa(null);
									throw l;
								})
							)
						),
						Ba(),
						po((l) => !!l),
						ro((l, u) => {
							if (l instanceof Ua || 'EmptyError' === l.name) {
								if (this.noLeftoversInUrl(n, e, t)) return Aa(new xc([], {}));
								throw new yh(n);
							}
							throw l;
						})
					);
				}
				noLeftoversInUrl(l, n, u) {
					return 0 === n.length && !l.children[u];
				}
				expandSegmentAgainstRoute(l, n, u, e, t, s, r) {
					return Eh(e) !== s
						? jh(n)
						: void 0 === e.redirectTo
						? this.matchSegmentAgainstRoute(l, n, e, t)
						: r && this.allowRedirects
						? this.expandSegmentAgainstRouteUsingRedirect(l, n, u, e, t, s)
						: jh(n);
				}
				expandSegmentAgainstRouteUsingRedirect(l, n, u, e, t, s) {
					return '**' === e.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(l, u, e, s) : this.expandRegularSegmentAgainstRouteUsingRedirect(l, n, u, e, t, s);
				}
				expandWildCardWithParamsAgainstRouteUsingRedirect(l, n, u, e) {
					const t = this.applyRedirectCommands([], u.redirectTo, {});
					return u.redirectTo.startsWith('/')
						? vh(t)
						: this.lineralizeSegments(u, t).pipe(
								B((u) => {
									const t = new xc(u, {});
									return this.expandSegment(l, t, n, u, e, !1);
								})
						  );
				}
				expandRegularSegmentAgainstRouteUsingRedirect(l, n, u, e, t, s) {
					const { matched: r, consumedSegments: a, lastChild: o, positionalParamSegments: i } = kh(n, e, t);
					if (!r) return jh(n);
					const c = this.applyRedirectCommands(a, e.redirectTo, i);
					return e.redirectTo.startsWith('/') ? vh(c) : this.lineralizeSegments(e, c).pipe(B((e) => this.expandSegment(l, n, u, e.concat(t.slice(o)), s, !1)));
				}
				matchSegmentAgainstRoute(l, n, u, e) {
					if ('**' === u.path) return u.loadChildren ? this.configLoader.load(l.injector, u).pipe(L((l) => ((u._loadedConfig = l), new xc(e, {})))) : Aa(new xc(e, {}));
					const { matched: t, consumedSegments: s, lastChild: r } = kh(n, u, e);
					if (!t) return jh(n);
					const a = e.slice(r);
					return this.getChildConfig(l, u, e).pipe(
						B((l) => {
							const u = l.module,
								e = l.routes,
								{ segmentGroup: t, slicedSegments: r } = (function(l, n, u, e) {
									return u.length > 0 &&
										(function(l, n, u) {
											return e.some((u) => Sh(l, n, u) && Eh(u) !== tc);
										})(l, u)
										? {
												segmentGroup: Ch(
													new xc(
														n,
														(function(l, n) {
															const u = {};
															u[tc] = n;
															for (const e of l) '' === e.path && Eh(e) !== tc && (u[Eh(e)] = new xc([], {}));
															return u;
														})(e, new xc(u, l.children))
													)
												),
												slicedSegments: []
										  }
										: 0 === u.length &&
										  (function(l, n, u) {
												return e.some((u) => Sh(l, n, u));
										  })(l, u)
										? {
												segmentGroup: Ch(
													new xc(
														l.segments,
														(function(l, n, u, e) {
															const t = {};
															for (const s of u) Sh(l, n, s) && !e[Eh(s)] && (t[Eh(s)] = new xc([], {}));
															return Object.assign({}, e, t);
														})(l, u, e, l.children)
													)
												),
												slicedSegments: u
										  }
										: { segmentGroup: l, slicedSegments: u };
								})(n, s, a, e);
							return 0 === r.length && t.hasChildren()
								? this.expandChildren(u, e, t).pipe(L((l) => new xc(s, l)))
								: 0 === e.length && 0 === r.length
								? Aa(new xc(s, {}))
								: this.expandSegment(u, t, e, r, tc, !0).pipe(L((l) => new xc(s.concat(l.segments), l.children)));
						})
					);
				}
				getChildConfig(l, n, u) {
					return n.children
						? Aa(new cc(n.children, l))
						: n.loadChildren
						? void 0 !== n._loadedConfig
							? Aa(n._loadedConfig)
							: (function(l, n, u) {
									const e = n.canLoad;
									return e && 0 !== e.length
										? $(e)
												.pipe(
													L((e) => {
														const t = l.get(e);
														let s;
														if (
															(function(l) {
																return l && mh(l.canLoad);
															})(t)
														)
															s = t.canLoad(n, u);
														else {
															if (!mh(t)) throw new Error('Invalid CanLoad guard');
															s = t(n, u);
														}
														return wc(s);
													})
												)
												.pipe(
													Ba(),
													((t = (l) => !0 === l), (l) => l.lift(new go(t, void 0, l)))
												)
										: Aa(!0);
									var t;
							  })(l.injector, n, u).pipe(
									B((u) =>
										u
											? this.configLoader.load(l.injector, n).pipe(L((l) => ((n._loadedConfig = l), l)))
											: (function(l) {
													return new v((n) => n.error(oc(`Cannot load children because the guard of the route "path: '${l.path}'" returned false`)));
											  })(n)
									)
							  )
						: Aa(new cc([], l));
				}
				lineralizeSegments(l, n) {
					let u = [],
						e = n.root;
					for (;;) {
						if (((u = u.concat(e.segments)), 0 === e.numberOfChildren)) return Aa(u);
						if (e.numberOfChildren > 1 || !e.children[tc]) return xh(l.redirectTo);
						e = e.children[tc];
					}
				}
				applyRedirectCommands(l, n, u) {
					return this.applyRedirectCreatreUrlTree(n, this.urlSerializer.parse(n), l, u);
				}
				applyRedirectCreatreUrlTree(l, n, u, e) {
					const t = this.createSegmentGroup(l, n.root, u, e);
					return new vc(t, this.createQueryParams(n.queryParams, this.urlTree.queryParams), n.fragment);
				}
				createQueryParams(l, n) {
					const u = {};
					return (
						yc(l, (l, e) => {
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
						yc(n.children, (n, t) => {
							s[t] = this.createSegmentGroup(l, n, u, e);
						}),
						new xc(t, s)
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
			function kh(l, n, u) {
				if ('' === n.path)
					return 'full' === n.pathMatch && (l.hasChildren() || u.length > 0)
						? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
						: { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
				const e = (n.matcher || ic)(u, l, n);
				return e
					? { matched: !0, consumedSegments: e.consumed, lastChild: e.consumed.length, positionalParamSegments: e.posParams }
					: { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
			}
			function Ch(l) {
				if (1 === l.numberOfChildren && l.children[tc]) {
					const n = l.children[tc];
					return new xc(l.segments.concat(n.segments), n.children);
				}
				return l;
			}
			function Sh(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 !== u.redirectTo;
			}
			function Eh(l) {
				return l.outlet || tc;
			}
			class Ih {
				constructor(l) {
					(this.path = l), (this.route = this.path[this.path.length - 1]);
				}
			}
			class Ph {
				constructor(l, n) {
					(this.component = l), (this.route = n);
				}
			}
			function Oh(l, n, u) {
				const e = l._root;
				return (function l(n, u, e, t, s = { canDeactivateChecks: [], canActivateChecks: [] }) {
					const r = qc(u);
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
												return !kc(l.url, n.url);
											case 'pathParamsOrQueryParamsChange':
												return !kc(l.url, n.url) || !fc(l.queryParams, n.queryParams);
											case 'always':
												return !0;
											case 'paramsOrQueryParamsChange':
												return !nh(l, n) || !fc(l.queryParams, n.queryParams);
											case 'paramsChange':
											default:
												return !nh(l, n);
										}
									})(a, r, r.routeConfig.runGuardsAndResolvers);
									if (
										(i ? s.canActivateChecks.push(new Ih(t)) : ((r.data = a.data), (r._resolvedData = a._resolvedData)),
										l(n, u, r.component ? (o ? o.children : null) : e, t, s),
										i)
									) {
										s.canDeactivateChecks.push(new Ph((o && o.outlet && o.outlet.component) || null, a));
									}
								} else a && Mh(u, o, s), s.canActivateChecks.push(new Ih(t)), l(n, null, r.component ? (o ? o.children : null) : e, t, s);
							})(n, r[n.value.outlet], e, t.concat([n.value]), s),
								delete r[n.value.outlet];
						}),
						yc(r, (l, n) => Mh(l, e.getContext(n), s)),
						s
					);
				})(e, n ? n._root : null, u, [e.value]);
			}
			function Th(l, n, u) {
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
			function Mh(l, n, u) {
				const e = qc(l),
					t = l.value;
				yc(e, (l, e) => {
					Mh(l, t.component ? (n ? n.children.getContext(e) : null) : n, u);
				}),
					u.canDeactivateChecks.push(new Ph(t.component && n && n.outlet && n.outlet.isActivated ? n.outlet.component : null, t));
			}
			const Rh = Symbol('INITIAL_VALUE');
			function Ah() {
				return mo((l) =>
					(function(...l) {
						let n = null,
							u = null;
						return P(l[l.length - 1]) && (u = l.pop()), 'function' == typeof l[l.length - 1] && (n = l.pop()), 1 === l.length && o(l[0]) && (l = l[0]), W(l, u).lift(new La(n));
					})(
						...l.map((l) =>
							l.pipe(
								io(1),
								(function(...l) {
									const n = l[l.length - 1];
									return P(n) ? (l.pop(), (u) => wo(l, u, n)) : (n) => wo(l, n);
								})(Rh)
							)
						)
					).pipe(
						jo((l, n) => {
							let u = !1;
							return n.reduce((l, e, t) => {
								if (l !== Rh) return l;
								if ((e === Rh && (u = !0), !u)) {
									if (!1 === e) return e;
									if (t === n.length - 1 || bh(e)) return e;
								}
								return l;
							}, l);
						}, Rh),
						qa((l) => l !== Rh),
						L((l) => (bh(l) ? l : !0 === l)),
						io(1)
					)
				);
			}
			function Nh(l, n) {
				return null !== l && n && n(new lc(l)), Aa(!0);
			}
			function Dh(l, n) {
				return null !== l && n && n(new Ji(l)), Aa(!0);
			}
			function Uh(l, n, u) {
				const e = n.routeConfig ? n.routeConfig.canActivate : null;
				return e && 0 !== e.length
					? Aa(
							e.map((e) =>
								$a(() => {
									const t = Th(e, n, u);
									let s;
									if (
										(function(l) {
											return l && mh(l.canActivate);
										})(t)
									)
										s = wc(t.canActivate(n, l));
									else {
										if (!mh(t)) throw new Error('Invalid CanActivate guard');
										s = wc(t(n, l));
									}
									return s.pipe(po());
								})
							)
					  ).pipe(Ah())
					: Aa(!0);
			}
			function Fh(l, n, u) {
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
							$a(() =>
								Aa(
									n.guards.map((t) => {
										const s = Th(t, n.node, u);
										let r;
										if (
											(function(l) {
												return l && mh(l.canActivateChild);
											})(s)
										)
											r = wc(s.canActivateChild(e, l));
										else {
											if (!mh(s)) throw new Error('Invalid CanActivateChild guard');
											r = wc(s(e, l));
										}
										return r.pipe(po());
									})
								).pipe(Ah())
							)
						);
				return Aa(t).pipe(Ah());
			}
			class Lh {}
			class Vh {
				constructor(l, n, u, e, t, s) {
					(this.rootComponentType = l), (this.config = n), (this.urlTree = u), (this.url = e), (this.paramsInheritanceStrategy = t), (this.relativeLinkResolution = s);
				}
				recognize() {
					try {
						const n = $h(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
							u = this.processSegmentGroup(this.config, n, tc),
							e = new Kc(
								[],
								Object.freeze({}),
								Object.freeze(Object.assign({}, this.urlTree.queryParams)),
								this.urlTree.fragment,
								{},
								tc,
								this.rootComponentType,
								null,
								this.urlTree.root,
								-1,
								{}
							),
							t = new Bc(e, u),
							s = new Yc(this.url, t);
						return this.inheritParamsAndData(s._root), Aa(s);
					} catch (l) {
						return new v((n) => n.error(l));
					}
				}
				inheritParamsAndData(l) {
					const n = l.value,
						u = Wc(n, this.paramsInheritanceStrategy);
					(n.params = Object.freeze(u.params)), (n.data = Object.freeze(u.data)), l.children.forEach((l) => this.inheritParamsAndData(l));
				}
				processSegmentGroup(l, n, u) {
					return 0 === n.segments.length && n.hasChildren() ? this.processChildren(l, n) : this.processSegment(l, n, n.segments, u);
				}
				processChildren(l, n) {
					const u = Cc(n, (n, u) => this.processSegmentGroup(l, n, u));
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
						u.sort((l, n) => (l.value.outlet === tc ? -1 : n.value.outlet === tc ? 1 : l.value.outlet.localeCompare(n.value.outlet))),
						u
					);
				}
				processSegment(l, n, u, e) {
					for (const s of l)
						try {
							return this.processSegmentAgainstRoute(s, n, u, e);
						} catch (t) {
							if (!(t instanceof Lh)) throw t;
						}
					if (this.noLeftoversInUrl(n, u, e)) return [];
					throw new Lh();
				}
				noLeftoversInUrl(l, n, u) {
					return 0 === n.length && !l.children[u];
				}
				processSegmentAgainstRoute(l, n, u, e) {
					if (l.redirectTo) throw new Lh();
					if ((l.outlet || tc) !== e) throw new Lh();
					let t,
						s = [],
						r = [];
					if ('**' === l.path) {
						const s = u.length > 0 ? bc(u).parameters : {};
						t = new Kc(u, s, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Gh(l), e, l.component, l, zh(n), Hh(n) + u.length, Zh(l));
					} else {
						const a = (function(l, n, u) {
							if ('' === n.path) {
								if ('full' === n.pathMatch && (l.hasChildren() || u.length > 0)) throw new Lh();
								return { consumedSegments: [], lastChild: 0, parameters: {} };
							}
							const e = (n.matcher || ic)(u, l, n);
							if (!e) throw new Lh();
							const t = {};
							yc(e.posParams, (l, n) => {
								t[n] = l.path;
							});
							const s = e.consumed.length > 0 ? Object.assign({}, t, e.consumed[e.consumed.length - 1].parameters) : t;
							return { consumedSegments: e.consumed, lastChild: e.consumed.length, parameters: s };
						})(n, l, u);
						(s = a.consumedSegments),
							(r = u.slice(a.lastChild)),
							(t = new Kc(s, a.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Gh(l), e, l.component, l, zh(n), Hh(n) + s.length, Zh(l)));
					}
					const a = (function(l) {
							return l.children ? l.children : l.loadChildren ? l._loadedConfig.routes : [];
						})(l),
						{ segmentGroup: o, slicedSegments: i } = $h(n, s, r, a, this.relativeLinkResolution);
					if (0 === i.length && o.hasChildren()) {
						const l = this.processChildren(a, o);
						return [new Bc(t, l)];
					}
					if (0 === a.length && 0 === i.length) return [new Bc(t, [])];
					const c = this.processSegment(a, o, i, tc);
					return [new Bc(t, c)];
				}
			}
			function zh(l) {
				let n = l;
				for (; n._sourceSegment; ) n = n._sourceSegment;
				return n;
			}
			function Hh(l) {
				let n = l,
					u = n._segmentIndexShift ? n._segmentIndexShift : 0;
				for (; n._sourceSegment; ) u += (n = n._sourceSegment)._segmentIndexShift ? n._segmentIndexShift : 0;
				return u - 1;
			}
			function $h(l, n, u, e, t) {
				if (
					u.length > 0 &&
					(function(l, n, u) {
						return e.some((u) => Bh(l, n, u) && qh(u) !== tc);
					})(l, u)
				) {
					const t = new xc(
						n,
						(function(l, n, u, e) {
							const t = {};
							(t[tc] = e), (e._sourceSegment = l), (e._segmentIndexShift = n.length);
							for (const s of u)
								if ('' === s.path && qh(s) !== tc) {
									const u = new xc([], {});
									(u._sourceSegment = l), (u._segmentIndexShift = n.length), (t[qh(s)] = u);
								}
							return t;
						})(l, n, e, new xc(u, l.children))
					);
					return (t._sourceSegment = l), (t._segmentIndexShift = n.length), { segmentGroup: t, slicedSegments: [] };
				}
				if (
					0 === u.length &&
					(function(l, n, u) {
						return e.some((u) => Bh(l, n, u));
					})(l, u)
				) {
					const s = new xc(
						l.segments,
						(function(l, n, u, e, t, s) {
							const r = {};
							for (const a of e)
								if (Bh(l, u, a) && !t[qh(a)]) {
									const u = new xc([], {});
									(u._sourceSegment = l), (u._segmentIndexShift = 'legacy' === s ? l.segments.length : n.length), (r[qh(a)] = u);
								}
							return Object.assign({}, t, r);
						})(l, n, u, e, l.children, t)
					);
					return (s._sourceSegment = l), (s._segmentIndexShift = n.length), { segmentGroup: s, slicedSegments: u };
				}
				const s = new xc(l.segments, l.children);
				return (s._sourceSegment = l), (s._segmentIndexShift = n.length), { segmentGroup: s, slicedSegments: u };
			}
			function Bh(l, n, u) {
				return (!(l.hasChildren() || n.length > 0) || 'full' !== u.pathMatch) && '' === u.path && void 0 === u.redirectTo;
			}
			function qh(l) {
				return l.outlet || tc;
			}
			function Gh(l) {
				return l.data || {};
			}
			function Zh(l) {
				return l.resolve || {};
			}
			function Qh(l, n, u, e) {
				const t = Th(l, n, e);
				return wc(t.resolve ? t.resolve(n, u) : t(n, u));
			}
			function Wh(l) {
				return function(n) {
					return n.pipe(
						mo((n) => {
							const u = l(n);
							return u ? $(u).pipe(L(() => n)) : $([n]);
						})
					);
				};
			}
			class Kh {}
			class Yh {
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
			const Jh = new _l('ROUTES');
			class Xh {
				constructor(l, n, u, e) {
					(this.loader = l), (this.compiler = n), (this.onLoadStartListener = u), (this.onLoadEndListener = e);
				}
				load(l, n) {
					return (
						this.onLoadStartListener && this.onLoadStartListener(n),
						this.loadModuleFactory(n.loadChildren).pipe(
							L((u) => {
								this.onLoadEndListener && this.onLoadEndListener(n);
								const e = u.create(l);
								return new cc(mc(e.injector.get(Jh)).map(gc), e);
							})
						)
					);
				}
				loadModuleFactory(l) {
					return 'string' == typeof l ? $(this.loader.load(l)) : wc(l()).pipe(B((l) => (l instanceof nu ? Aa(l) : $(this.compiler.compileModuleAsync(l)))));
				}
			}
			class ld {}
			class nd {
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
			function ud(l) {
				throw l;
			}
			function ed(l, n, u) {
				return n.parse('/');
			}
			function td(l, n) {
				return Aa(null);
			}
			class sd {
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
						(this.errorHandler = ud),
						(this.malformedUriErrorHandler = ed),
						(this.navigated = !1),
						(this.lastSuccessfulId = -1),
						(this.hooks = { beforePreactivation: td, afterPreactivation: td }),
						(this.urlHandlingStrategy = new nd()),
						(this.routeReuseStrategy = new Yh()),
						(this.onSameUrlNavigation = 'ignore'),
						(this.paramsInheritanceStrategy = 'emptyOnly'),
						(this.urlUpdateStrategy = 'deferred'),
						(this.relativeLinkResolution = 'legacy'),
						(this.ngModule = t.get(lu)),
						(this.console = t.get(Ft));
					const o = t.get(ns);
					(this.isNgZoneEnabled = o instanceof ns),
						this.resetConfig(a),
						(this.currentUrlTree = new vc(new xc([], {}), {}, null)),
						(this.rawUrlTree = this.currentUrlTree),
						(this.browserUrlTree = this.currentUrlTree),
						(this.configLoader = new Xh(s, r, (l) => this.triggerEvent(new Ki(l)), (l) => this.triggerEvent(new Yi(l)))),
						(this.routerState = Zc(this.currentUrlTree, this.rootComponentType)),
						(this.transitions = new Na({
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
						qa((l) => 0 !== l.id),
						L((l) => Object.assign({}, l, { extractedUrl: this.urlHandlingStrategy.extract(l.rawUrl) })),
						mo((l) => {
							let u = !1,
								e = !1;
							return Aa(l).pipe(
								ko((l) => {
									this.currentNavigation = {
										id: l.id,
										initialUrl: l.currentRawUrl,
										extractedUrl: l.extractedUrl,
										trigger: l.source,
										extras: l.extras,
										previousNavigation: this.lastSuccessfulNavigation ? Object.assign({}, this.lastSuccessfulNavigation, { previousNavigation: null }) : null
									};
								}),
								mo((l) => {
									const u = !this.navigated || l.extractedUrl.toString() !== this.browserUrlTree.toString();
									if (('reload' === this.onSameUrlNavigation || u) && this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))
										return Aa(l).pipe(
											mo((l) => {
												const u = this.transitions.getValue();
												return n.next(new zi(l.id, this.serializeUrl(l.extractedUrl), l.source, l.restoredState)), u !== this.transitions.getValue() ? za : [l];
											}),
											mo((l) => Promise.resolve(l)),
											(function(l, n, u, e) {
												return function(t) {
													return t.pipe(
														mo((t) =>
															(function(l, n, u, e, s) {
																return new _h(l, n, u, t.extractedUrl, s).apply();
															})(l, n, u, 0, e).pipe(L((l) => Object.assign({}, t, { urlAfterRedirects: l })))
														)
													);
												};
											})(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config),
											ko((l) => {
												this.currentNavigation = Object.assign({}, this.currentNavigation, { finalUrl: l.urlAfterRedirects });
											}),
											(function(l, n, u, e, t) {
												return function(s) {
													return s.pipe(
														B((s) =>
															(function(l, n, u, e, t = 'emptyOnly', s = 'legacy') {
																return new Vh(l, n, u, e, t, s).recognize();
															})(l, n, s.urlAfterRedirects, u(s.urlAfterRedirects), e, t).pipe(L((l) => Object.assign({}, s, { targetSnapshot: l })))
														)
													);
												};
											})(this.rootComponentType, this.config, (l) => this.serializeUrl(l), this.paramsInheritanceStrategy, this.relativeLinkResolution),
											ko((l) => {
												'eager' === this.urlUpdateStrategy &&
													(l.extras.skipLocationChange || this.setBrowserUrl(l.urlAfterRedirects, !!l.extras.replaceUrl, l.id, l.extras.state),
													(this.browserUrlTree = l.urlAfterRedirects));
											}),
											ko((l) => {
												const u = new qi(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
												n.next(u);
											})
										);
									if (u && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
										const { id: u, extractedUrl: e, source: t, restoredState: s, extras: r } = l,
											a = new zi(u, this.serializeUrl(e), t, s);
										n.next(a);
										const o = Zc(e, this.rootComponentType).snapshot;
										return Aa(Object.assign({}, l, { targetSnapshot: o, urlAfterRedirects: e, extras: Object.assign({}, r, { skipLocationChange: !1, replaceUrl: !1 }) }));
									}
									return (this.rawUrlTree = l.rawUrl), (this.browserUrlTree = l.urlAfterRedirects), l.resolve(null), za;
								}),
								Wh((l) => {
									const {
										targetSnapshot: n,
										id: u,
										extractedUrl: e,
										rawUrl: t,
										extras: { skipLocationChange: s, replaceUrl: r }
									} = l;
									return this.hooks.beforePreactivation(n, { navigationId: u, appliedUrlTree: e, rawUrlTree: t, skipLocationChange: !!s, replaceUrl: !!r });
								}),
								ko((l) => {
									const n = new Gi(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
									this.triggerEvent(n);
								}),
								L((l) => Object.assign({}, l, { guards: Oh(l.targetSnapshot, l.currentSnapshot, this.rootContexts) })),
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
													? Aa(Object.assign({}, u, { guardsResult: !0 }))
													: (function(l, n, u, e) {
															return $(r).pipe(
																B((l) =>
																	(function(l, n, u, e, t) {
																		const s = n && n.routeConfig ? n.routeConfig.canDeactivate : null;
																		return s && 0 !== s.length
																			? Aa(
																					s.map((s) => {
																						const r = Th(s, n, t);
																						let a;
																						if (
																							(function(l) {
																								return l && mh(l.canDeactivate);
																							})(r)
																						)
																							a = wc(r.canDeactivate(l, n, u, e));
																						else {
																							if (!mh(r)) throw new Error('Invalid CanDeactivate guard');
																							a = wc(r(l, n, u, e));
																						}
																						return a.pipe(po());
																					})
																			  ).pipe(Ah())
																			: Aa(!0);
																	})(l.component, l.route, u, n, e)
																),
																po((l) => !0 !== l, !0)
															);
													  })(0, e, t, l).pipe(
															B((u) =>
																u &&
																(function(l) {
																	return 'boolean' == typeof u;
																})()
																	? (function(l, n, u, e) {
																			return $(s).pipe(
																				_o((n) =>
																					$([Dh(n.route.parent, e), Nh(n.route, e), Fh(l, n.path, u), Uh(l, n.route, u)]).pipe(
																						Ba(),
																						po((l) => !0 !== l, !0)
																					)
																				),
																				po((l) => !0 !== l, !0)
																			);
																	  })(e, 0, l, n)
																	: Aa(u)
															),
															L((l) => Object.assign({}, u, { guardsResult: l }))
													  );
											})
										);
									};
								})(this.ngModule.injector, (l) => this.triggerEvent(l)),
								ko((l) => {
									if (bh(l.guardsResult)) {
										const n = oc(`Redirecting to "${this.serializeUrl(l.guardsResult)}"`);
										throw ((n.url = l.guardsResult), n);
									}
								}),
								ko((l) => {
									const n = new Zi(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(l.urlAfterRedirects), l.targetSnapshot, !!l.guardsResult);
									this.triggerEvent(n);
								}),
								qa((l) => {
									if (!l.guardsResult) {
										this.resetUrlToCurrentUrlTree();
										const u = new $i(l.id, this.serializeUrl(l.extractedUrl), '');
										return n.next(u), l.resolve(!1), !1;
									}
									return !0;
								}),
								Wh((l) => {
									if (l.guards.canActivateChecks.length)
										return Aa(l).pipe(
											ko((l) => {
												const n = new Qi(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
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
																		_o((u) =>
																			(function(l, n, u, t) {
																				return (function(l, n, u, e) {
																					const t = Object.keys(l);
																					if (0 === t.length) return Aa({});
																					if (1 === t.length) {
																						const s = t[0];
																						return Qh(l[s], n, u, e).pipe(L((l) => ({ [s]: l })));
																					}
																					const s = {};
																					return $(t)
																						.pipe(B((t) => Qh(l[t], n, u, e).pipe(L((l) => ((s[t] = l), l)))))
																						.pipe(
																							so(),
																							L(() => s)
																						);
																				})(l._resolve, l, e, t).pipe(
																					L((n) => ((l._resolvedData = n), (l.data = Object.assign({}, l.data, Wc(l, u).resolve)), null))
																				);
																			})(u.route, 0, l, n)
																		),
																		(function(l, n) {
																			return arguments.length >= 2
																				? function(n) {
																						return w(jo(l, void 0), Ka(1), uo(void 0))(n);
																				  }
																				: function(n) {
																						return w(jo((n, u, e) => l(n)), Ka(1))(n);
																				  };
																		})((l, n) => l),
																		L((l) => u)
																  )
																: Aa(u);
														})
													);
												};
											})(this.paramsInheritanceStrategy, this.ngModule.injector),
											ko((l) => {
												const n = new Wi(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(l.urlAfterRedirects), l.targetSnapshot);
												this.triggerEvent(n);
											})
										);
								}),
								Wh((l) => {
									const {
										targetSnapshot: n,
										id: u,
										extractedUrl: e,
										rawUrl: t,
										extras: { skipLocationChange: s, replaceUrl: r }
									} = l;
									return this.hooks.afterPreactivation(n, { navigationId: u, appliedUrlTree: e, rawUrlTree: t, skipLocationChange: !!s, replaceUrl: !!r });
								}),
								L((l) => {
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
												return new Bc(t, s);
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
													const e = new Qc(new Na((t = u.value).url), new Na(t.params), new Na(t.queryParams), new Na(t.fragment), new Na(t.data), t.outlet, t.component, t),
														s = u.children.map((u) => l(n, u));
													return new Bc(e, s);
												}
											}
											var t;
										})(l, n._root, u ? u._root : void 0);
										return new Gc(e, n);
									})(this.routeReuseStrategy, l.targetSnapshot, l.currentRouterState);
									return Object.assign({}, l, { targetRouterState: n });
								}),
								ko((l) => {
									(this.currentUrlTree = l.urlAfterRedirects),
										(this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, l.rawUrl)),
										(this.routerState = l.targetRouterState),
										'deferred' === this.urlUpdateStrategy &&
											(l.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, !!l.extras.replaceUrl, l.id, l.extras.state),
											(this.browserUrlTree = l.urlAfterRedirects));
								}),
								ph(this.rootContexts, this.routeReuseStrategy, (l) => this.triggerEvent(l)),
								ko({
									next() {
										u = !0;
									},
									complete() {
										u = !0;
									}
								}),
								(function(l) {
									return (n) => n.lift(new Eo(l));
								})(() => {
									if (!u && !e) {
										this.resetUrlToCurrentUrlTree();
										const u = new $i(l.id, this.serializeUrl(l.extractedUrl), `Navigation ID ${l.id} is not equal to the current navigation id ${this.navigationId}`);
										n.next(u), l.resolve(!1);
									}
									this.currentNavigation = null;
								}),
								ro((u) => {
									if (
										((e = !0),
										(function(l) {
											return u && u[ac];
										})())
									) {
										const e = bh(u.url);
										e || ((this.navigated = !0), this.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl));
										const t = new $i(l.id, this.serializeUrl(l.extractedUrl), u.message);
										n.next(t), l.resolve(!1), e && this.navigateByUrl(u.url);
									} else {
										this.resetStateAndUrl(l.currentRouterState, l.currentUrlTree, l.rawUrl);
										const e = new Bi(l.id, this.serializeUrl(l.extractedUrl), u);
										n.next(e);
										try {
											l.resolve(this.errorHandler(u));
										} catch (t) {
											l.reject(t);
										}
									}
									return za;
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
					hc(l), (this.config = l.map(gc)), (this.navigated = !1), (this.lastSuccessfulId = -1);
				}
				ngOnDestroy() {
					this.dispose();
				}
				dispose() {
					this.locationSubscription && (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
				}
				createUrlTree(l, n = {}) {
					const { relativeTo: u, queryParams: e, fragment: t, preserveQueryParams: s, queryParamsHandling: r, preserveFragment: a } = n;
					en() && s && console && console.warn && console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
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
							if (0 === u.length) return eh(n.root, n.root, n, e, t);
							const s = (function(l) {
								if ('string' == typeof l[0] && 1 === l.length && '/' === l[0]) return new th(!0, 0, l);
								let n = 0,
									u = !1;
								const e = l.reduce((l, e, t) => {
									if ('object' == typeof e && null != e) {
										if (e.outlets) {
											const n = {};
											return (
												yc(e.outlets, (l, u) => {
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
								return new th(u, n, e);
							})(u);
							if (s.toRoot()) return eh(n.root, new xc([], {}), n, e, t);
							const r = (function(l, u, e) {
									if (l.isAbsolute) return new sh(n.root, !0, 0);
									if (-1 === e.snapshot._lastPathIndex) return new sh(e.snapshot._urlSegment, !0, 0);
									const t = uh(l.commands[0]) ? 0 : 1;
									return (function(n, u, s) {
										let r = e.snapshot._urlSegment,
											a = e.snapshot._lastPathIndex + t,
											o = l.numberOfDoubleDots;
										for (; o > a; ) {
											if (((o -= a), !(r = r.parent))) throw new Error("Invalid number of '../'");
											a = r.segments.length;
										}
										return new sh(r, !1, a - o);
									})();
								})(s, 0, l),
								a = r.processChildren ? oh(r.segmentGroup, r.index, s.commands) : ah(r.segmentGroup, r.index, s.commands);
							return eh(r.segmentGroup, a, n, e, t);
						})(o, this.currentUrlTree, l, c, i)
					);
				}
				navigateByUrl(l, n = { skipLocationChange: !1 }) {
					en() && this.isNgZoneEnabled && !ns.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
					const u = bh(l) ? l : this.parseUrl(l),
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
					if (bh(l)) return jc(this.currentUrlTree, l, n);
					const u = this.parseUrl(l);
					return jc(this.currentUrlTree, u, n);
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
								this.events.next(new Hi(l.id, this.serializeUrl(l.extractedUrl), this.serializeUrl(this.currentUrlTree))),
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
			class rd {
				constructor() {
					(this.outlet = null), (this.route = null), (this.resolver = null), (this.children = new ad()), (this.attachRef = null);
				}
			}
			class ad {
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
					return n || ((n = new rd()), this.contexts.set(l, n)), n;
				}
				getContext(l) {
					return this.contexts.get(l) || null;
				}
			}
			const od = (() =>
				class {
					constructor(l, n, u, e, t) {
						(this.parentContexts = l),
							(this.location = n),
							(this.resolver = u),
							(this.changeDetector = t),
							(this.activated = null),
							(this._activatedRoute = null),
							(this.activateEvents = new Et()),
							(this.deactivateEvents = new Et()),
							(this.name = e || tc),
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
							t = new id(l, e, this.location.injector);
						(this.activated = this.location.createComponent(u, this.location.length, t)), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance);
					}
				})();
			class id {
				constructor(l, n, u) {
					(this.route = l), (this.childContexts = n), (this.parent = u);
				}
				get(l, n) {
					return l === Qc ? this.route : l === ad ? this.childContexts : this.parent.get(l, n);
				}
			}
			class cd {}
			class hd {
				preload(l, n) {
					return n().pipe(ro(() => Aa(null)));
				}
			}
			class dd {
				preload(l, n) {
					return Aa(null);
				}
			}
			const pd = (() =>
				class {
					constructor(l, n, u, e, t) {
						(this.router = l), (this.injector = e), (this.preloadingStrategy = t), (this.loader = new Xh(n, u, (n) => l.triggerEvent(new Ki(n)), (n) => l.triggerEvent(new Yi(n))));
					}
					setUpPreloading() {
						this.subscription = this.router.events
							.pipe(
								qa((l) => l instanceof Hi),
								_o(() => this.preload())
							)
							.subscribe(() => {});
					}
					preload() {
						const l = this.injector.get(lu);
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
							L((l) => void 0)
						);
					}
					preloadConfig(l, n) {
						return this.preloadingStrategy.preload(n, () => this.loader.load(l.injector, n).pipe(B((l) => ((n._loadedConfig = l), this.processRoutes(l.module, l.routes)))));
					}
				})();
			class gd {
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
						l instanceof zi
							? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
							  (this.lastSource = l.navigationTrigger),
							  (this.restoredId = l.restoredState ? l.restoredState.navigationId : 0))
							: l instanceof Hi && ((this.lastId = l.id), this.scheduleScrollEvent(l, this.router.parseUrl(l.urlAfterRedirects).fragment));
					});
				}
				consumeScrollEvents() {
					return this.router.events.subscribe((l) => {
						l instanceof uc &&
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
					this.router.triggerEvent(new uc(l, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, n));
				}
				ngOnDestroy() {
					this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
				}
			}
			const fd = new _l('ROUTER_CONFIGURATION'),
				md = new _l('ROUTER_FORROOT_GUARD'),
				bd = [
					fa,
					{ provide: Sc, useClass: Ec },
					{ provide: sd, useFactory: kd, deps: [js, Sc, ad, fa, Vl, xs, qt, Jh, fd, [ld, new rl()], [Kh, new rl()]] },
					ad,
					{ provide: Qc, useFactory: Cd, deps: [sd] },
					{ provide: xs, useClass: Cs },
					pd,
					dd,
					hd,
					{ provide: fd, useValue: { enableTracing: !1 } }
				];
			function yd() {
				return new fs('Router', sd);
			}
			const wd = (() => {
				class l {
					constructor(l, n) {}
					static forRoot(n, u) {
						return {
							ngModule: l,
							providers: [
								bd,
								_d(n),
								{ provide: md, useFactory: xd, deps: [[sd, new rl(), new ol()]] },
								{ provide: fd, useValue: u || {} },
								{ provide: pa, useFactory: vd, deps: [ha, [new sl(ga), new rl()], fd] },
								{ provide: gd, useFactory: jd, deps: [sd, Ma, fd] },
								{ provide: cd, useExisting: u && u.preloadingStrategy ? u.preloadingStrategy : dd },
								{ provide: fs, multi: !0, useFactory: yd },
								[Sd, { provide: Ot, multi: !0, useFactory: Ed, deps: [Sd] }, { provide: Pd, useFactory: Id, deps: [Sd] }, { provide: Ut, multi: !0, useExisting: Pd }]
							]
						};
					}
					static forChild(n) {
						return { ngModule: l, providers: [_d(n)] };
					}
				}
				return l;
			})();
			function jd(l, n, u) {
				return u.scrollOffset && n.setOffset(u.scrollOffset), new gd(l, n, u);
			}
			function vd(l, n, u = {}) {
				return u.useHash ? new ba(l, n) : new ya(l, n);
			}
			function xd(l) {
				if (l) throw new Error('RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.');
				return 'guarded';
			}
			function _d(l) {
				return [{ provide: Jl, multi: !0, useValue: l }, { provide: Jh, multi: !0, useValue: l }];
			}
			function kd(l, n, u, e, t, s, r, a, o = {}, i, c) {
				const h = new sd(null, n, u, e, t, s, r, mc(a));
				if (
					(i && (h.urlHandlingStrategy = i),
					c && (h.routeReuseStrategy = c),
					o.errorHandler && (h.errorHandler = o.errorHandler),
					o.malformedUriErrorHandler && (h.malformedUriErrorHandler = o.malformedUriErrorHandler),
					o.enableTracing)
				) {
					const l = Oo();
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
			function Cd(l) {
				return l.routerState.root;
			}
			const Sd = (() =>
				class {
					constructor(l) {
						(this.injector = l), (this.initNavigation = !1), (this.resultOfPreactivationDone = new E());
					}
					appInitializer() {
						return this.injector.get(da, Promise.resolve(null)).then(() => {
							let l = null;
							const n = new Promise((n) => (l = n)),
								u = this.injector.get(sd),
								e = this.injector.get(fd);
							if (this.isLegacyDisabled(e) || this.isLegacyEnabled(e)) l(!0);
							else if ('disabled' === e.initialNavigation) u.setUpLocationChangeListener(), l(!0);
							else {
								if ('enabled' !== e.initialNavigation) throw new Error(`Invalid initialNavigation options: '${e.initialNavigation}'`);
								(u.hooks.afterPreactivation = () => (this.initNavigation ? Aa(null) : ((this.initNavigation = !0), l(!0), this.resultOfPreactivationDone))), u.initialNavigation();
							}
							return n;
						});
					}
					bootstrapListener(l) {
						const n = this.injector.get(fd),
							u = this.injector.get(pd),
							e = this.injector.get(gd),
							t = this.injector.get(sd),
							s = this.injector.get(js);
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
			function Ed(l) {
				return l.appInitializer.bind(l);
			}
			function Id(l) {
				return l.bootstrapListener.bind(l);
			}
			const Pd = new _l('Router Initializer');
			var Od = Wu({ encapsulation: 2, styles: [], data: {} });
			function Td(l) {
				return ur(
					0,
					[(l()(), Vs(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)), st(1, 212992, null, 0, od, [ad, Tu, Yn, [8, null], ku], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			function Md(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 1, 'ng-component', [], null, null, null, Td, Od)), st(1, 49152, null, 0, ec, [], null, null)], null, null);
			}
			var Rd = Ne('ng-component', ec, Md, {}, {}, []);
			const Ad = (() =>
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
				Nd = (() => class {})(),
				Dd = (() => class {})(),
				Ud = (() =>
					class {
						constructor() {}
						ngOnInit() {}
					})(),
				Fd = (() => class {})(),
				Ld = (() =>
					class {
						constructor() {}
						ngOnInit() {}
					})(),
				Vd = (() => class {})(),
				zd = (() => class {})(),
				Hd = (() => class {})(),
				$d = (() =>
					class {
						constructor() {}
						ngOnInit() {}
					})(),
				Bd = (() => class {})(),
				qd = (() => class {})(),
				Gd = (() => class {})(),
				Zd = (() => class {})(),
				Qd = (() => class {})(),
				Wd = (() => class {})(),
				Kd = (() =>
					class {
						constructor() {}
						ngOnInit() {}
					})(),
				Yd = (() => class {})(),
				Jd = (() => class {})(),
				Xd = (() => class {})(),
				lp = (() => class {})(),
				np = (() => class {})(),
				up = (() =>
					class {
						constructor(l) {
							this.elementRef = l;
						}
						ngOnInit() {}
						skip() {
							this.content.nativeElement.focus();
						}
					})(),
				ep = (() => class {})(),
				tp = (() => class {})();
			var sp = Wu({
				encapsulation: 2,
				styles: [
					'@charset "UTF-8";a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{line-height:1.15;-webkit-text-size-adjust:100%}code,kbd,pre,samp{font-family:monospace,monospace}a{background-color:transparent}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{font-size:75%;line-height:0;vertical-align:baseline;bottom:0;position:static;top:0}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}html{-moz-osx-font-smoothing:grayscale;-ms-overflow-style:scrollbar;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;box-sizing:border-box;font-size:12px;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}@media screen and (min-width:30em){html{font-size:13px}}@media screen and (min-width:48em){html{font-size:14px}}@media screen and (min-width:64em){html{font-size:16px}}*,::after,::before{box-sizing:inherit}body{margin:0;background-color:#fafafa;color:#191919;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:1rem;line-height:1.618;overflow-x:hidden;text-rendering:optimizeLegibility}body,html{height:100%;width:100%}a,area,button,input,label,select,summary,textarea{touch-action:manipulation}button,canvas,embed,figure,img,input,label,object,progress,select,textarea,video{max-width:100%}canvas,figure,img,video{height:auto}.h1,h1{font-size:2rem}.h1{margin-bottom:.67rem}.h2,h2{font-size:1.5rem}.h2{margin-bottom:.75rem}.h3,h3{font-size:1.17rem}.h3{margin-bottom:.83rem}.h4,h4{font-size:1rem}.h4{margin-bottom:1.12rem}.h5,h5{font-size:.83rem}.h5{margin-bottom:1.5rem}.h6,h6{font-size:.75rem}.h6{margin-bottom:1.67rem}abbr[title]{-webkit-text-decoration:underline dotted;border-bottom:.0625rem dotted #191919;cursor:help}address{line-height:inherit}blockquote{padding:1rem}blockquote+footer{color:#8d8d8d;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem}blockquote+footer::before{content:"\u2012";color:#8d8d8d;padding-right:.5rem}blockquote,blockquote+footer{border-left:.125rem solid #efefef}caption{caption-side:bottom}dd{margin-bottom:.5rem}hr{box-sizing:content-box;height:0;overflow:visible;border-bottom:.0625rem solid #8d8d8d}mark{background-color:#ffeb3b;color:#191919}address,cite,em,i{font-style:italic}address,dl,figure,h1,ol,pre{margin:0}caption,img,input[type=checkbox],input[type=radio],label,td,th{vertical-align:middle}sub{-webkit-transform:translateY(.25rem);transform:translateY(.25rem)}sup{-webkit-transform:translateY(-.5rem);transform:translateY(-.5rem)}code,kbd,samp{font-size:1rem}code,pre{-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;-moz-tab-size:4;-o-tab-size:4;tab-size:4}pre{font-size:.5rem;white-space:pre-wrap;word-spacing:normal}fieldset{min-width:0;padding:0}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;font-size:1.125rem}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}input[type=number]{-moz-appearance:textfield}input[type=range]{width:100%}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;margin-top:-.875rem}input[type=range]::-moz-range-track{-moz-appearance:none}input[type=range]::-ms-track{background:0 0;border-color:transparent;color:transparent}select{overflow-y:auto}optgroup{font-weight:bolder}option{color:#8d8d8d}a[role=button],abbr[title],button,html input[type=button],input,input[type=reset],input[type=submit],optgroup,select,textarea{text-decoration:none;font-family:inherit;border:0}a[role=button],button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent}a[role=button]:hover,button:hover,html input[type=button]:hover,input[type=checkbox]:hover,input[type=radio]:hover,input[type=range]:hover,input[type=reset]:hover,input[type=submit]:hover,select:hover{cursor:pointer}progress{vertical-align:baseline;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#bdbdbd;border:none;color:#0069c0}progress::-webkit-progress-bar{background-color:#bdbdbd;color:#0069c0}progress::-moz-progress-bar{background-color:#0069c0}progress::-ms-fill{border:none}[tabindex="-1"]:focus,input[type=range]:focus{outline:0}.bg-hover-red:hover,.bg-red{background-color:#ba000d}.text-hover-red:hover,.text-red{color:#ba000d}.border-t-red{border-top:.0625rem solid #ba000d}.border-r-red{border-right:.0625rem solid #ba000d}.border-b-red{border-bottom:.0625rem solid #ba000d}.border-l-red{border-left:.0625rem solid #ba000d}.border-a-red{border:.0625rem solid #ba000d}.border-lr-red{border-left:.0625rem solid #ba000d;border-right:.0625rem solid #ba000d}.border-tb-red{border-top:.0625rem solid #ba000d;border-bottom:.0625rem solid #ba000d}.bg-hover-lt-purple:hover,.bg-lt-purple{background-color:#d05ce3}.text-hover-lt-purple:hover,.text-lt-purple{color:#d05ce3}.border-t-lt-purple{border-top:.0625rem solid #d05ce3}.border-r-lt-purple{border-right:.0625rem solid #d05ce3}.border-b-lt-purple{border-bottom:.0625rem solid #d05ce3}.border-l-lt-purple{border-left:.0625rem solid #d05ce3}.border-a-lt-purple{border:.0625rem solid #d05ce3}.border-lr-lt-purple{border-left:.0625rem solid #d05ce3;border-right:.0625rem solid #d05ce3}.border-tb-lt-purple{border-top:.0625rem solid #d05ce3;border-bottom:.0625rem solid #d05ce3}.bg-hover-purple:hover,.bg-purple{background-color:#9c27b0}.text-hover-purple:hover,.text-purple{color:#9c27b0}.border-t-purple{border-top:.0625rem solid #9c27b0}.border-r-purple{border-right:.0625rem solid #9c27b0}.border-b-purple{border-bottom:.0625rem solid #9c27b0}.border-l-purple{border-left:.0625rem solid #9c27b0}.border-a-purple{border:.0625rem solid #9c27b0}.border-lr-purple{border-left:.0625rem solid #9c27b0;border-right:.0625rem solid #9c27b0}.border-tb-purple{border-top:.0625rem solid #9c27b0;border-bottom:.0625rem solid #9c27b0}.bg-dk-purple,.bg-hover-dk-purple:hover{background-color:#6a0080}.text-dk-purple,.text-hover-dk-purple:hover{color:#6a0080}.border-t-dk-purple{border-top:.0625rem solid #6a0080}.border-r-dk-purple{border-right:.0625rem solid #6a0080}.border-b-dk-purple{border-bottom:.0625rem solid #6a0080}.border-l-dk-purple{border-left:.0625rem solid #6a0080}.border-a-dk-purple{border:.0625rem solid #6a0080}.border-lr-dk-purple{border-left:.0625rem solid #6a0080;border-right:.0625rem solid #6a0080}.border-tb-dk-purple{border-top:.0625rem solid #6a0080;border-bottom:.0625rem solid #6a0080}.bg-hover-yellow:hover,.bg-yellow{background-color:#ffeb3b}.text-hover-yellow:hover,.text-yellow{color:#ffeb3b}.border-t-yellow{border-top:.0625rem solid #ffeb3b}.border-r-yellow{border-right:.0625rem solid #ffeb3b}.border-b-yellow{border-bottom:.0625rem solid #ffeb3b}.border-l-yellow{border-left:.0625rem solid #ffeb3b}.border-a-yellow{border:.0625rem solid #ffeb3b}.border-lr-yellow{border-left:.0625rem solid #ffeb3b;border-right:.0625rem solid #ffeb3b}.border-tb-yellow{border-top:.0625rem solid #ffeb3b;border-bottom:.0625rem solid #ffeb3b}.bg-hover-orange:hover,.bg-orange{background-color:#ff9800}.text-hover-orange:hover,.text-orange{color:#ff9800}.border-t-orange{border-top:.0625rem solid #ff9800}.border-r-orange{border-right:.0625rem solid #ff9800}.border-b-orange{border-bottom:.0625rem solid #ff9800}.border-l-orange{border-left:.0625rem solid #ff9800}.border-a-orange{border:.0625rem solid #ff9800}.border-lr-orange{border-left:.0625rem solid #ff9800;border-right:.0625rem solid #ff9800}.border-tb-orange{border-top:.0625rem solid #ff9800;border-bottom:.0625rem solid #ff9800}.bg-hover-lt-green:hover,.bg-lt-green{background-color:#80e27e}.text-hover-lt-green:hover,.text-lt-green{color:#80e27e}.border-t-lt-green{border-top:.0625rem solid #80e27e}.border-r-lt-green{border-right:.0625rem solid #80e27e}.border-b-lt-green{border-bottom:.0625rem solid #80e27e}.border-l-lt-green{border-left:.0625rem solid #80e27e}.border-a-lt-green{border:.0625rem solid #80e27e}.border-lr-lt-green{border-left:.0625rem solid #80e27e;border-right:.0625rem solid #80e27e}.border-tb-lt-green{border-top:.0625rem solid #80e27e;border-bottom:.0625rem solid #80e27e}.bg-green,.bg-hover-green:hover{background-color:#4caf50}.text-green,.text-hover-green:hover{color:#4caf50}.border-t-green{border-top:.0625rem solid #4caf50}.border-r-green{border-right:.0625rem solid #4caf50}.border-b-green{border-bottom:.0625rem solid #4caf50}.border-l-green{border-left:.0625rem solid #4caf50}.border-a-green{border:.0625rem solid #4caf50}.border-lr-green{border-left:.0625rem solid #4caf50;border-right:.0625rem solid #4caf50}.border-tb-green{border-top:.0625rem solid #4caf50;border-bottom:.0625rem solid #4caf50}.bg-dk-green,.bg-hover-dk-green:hover{background-color:#087f23}.text-dk-green,.text-hover-dk-green:hover{color:#087f23}.border-t-dk-green{border-top:.0625rem solid #087f23}.border-r-dk-green{border-right:.0625rem solid #087f23}.border-b-dk-green{border-bottom:.0625rem solid #087f23}.border-l-dk-green{border-left:.0625rem solid #087f23}.border-a-dk-green{border:.0625rem solid #087f23}.border-lr-dk-green{border-left:.0625rem solid #087f23;border-right:.0625rem solid #087f23}.border-tb-dk-green{border-top:.0625rem solid #087f23;border-bottom:.0625rem solid #087f23}.bg-hover-lt-blue:hover,.bg-lt-blue{background-color:#6ec6ff}.text-hover-lt-blue:hover,.text-lt-blue{color:#6ec6ff}.border-t-lt-blue{border-top:.0625rem solid #6ec6ff}.border-r-lt-blue{border-right:.0625rem solid #6ec6ff}.border-b-lt-blue{border-bottom:.0625rem solid #6ec6ff}.border-l-lt-blue{border-left:.0625rem solid #6ec6ff}.border-a-lt-blue{border:.0625rem solid #6ec6ff}.border-lr-lt-blue{border-left:.0625rem solid #6ec6ff;border-right:.0625rem solid #6ec6ff}.border-tb-lt-blue{border-top:.0625rem solid #6ec6ff;border-bottom:.0625rem solid #6ec6ff}.bg-blue,.bg-hover-blue:hover{background-color:#2196f3}.text-blue,.text-hover-blue:hover{color:#2196f3}.border-t-blue{border-top:.0625rem solid #2196f3}.border-r-blue{border-right:.0625rem solid #2196f3}.border-b-blue{border-bottom:.0625rem solid #2196f3}.border-l-blue{border-left:.0625rem solid #2196f3}.border-a-blue{border:.0625rem solid #2196f3}.border-lr-blue{border-left:.0625rem solid #2196f3;border-right:.0625rem solid #2196f3}.border-tb-blue{border-top:.0625rem solid #2196f3;border-bottom:.0625rem solid #2196f3}.bg-dk-blue,.bg-hover-dk-blue:hover{background-color:#0069c0}.text-dk-blue,.text-hover-dk-blue:hover{color:#0069c0}.border-t-dk-blue{border-top:.0625rem solid #0069c0}.border-r-dk-blue{border-right:.0625rem solid #0069c0}.border-b-dk-blue{border-bottom:.0625rem solid #0069c0}.border-l-dk-blue{border-left:.0625rem solid #0069c0}.border-a-dk-blue{border:.0625rem solid #0069c0}.border-lr-dk-blue{border-left:.0625rem solid #0069c0;border-right:.0625rem solid #0069c0}.border-tb-dk-blue{border-top:.0625rem solid #0069c0;border-bottom:.0625rem solid #0069c0}.bg-hover-lt-gray:hover,.bg-lt-gray{background-color:#efefef}.text-hover-lt-gray:hover,.text-lt-gray{color:#efefef}.border-t-lt-gray{border-top:.0625rem solid #efefef}.border-r-lt-gray{border-right:.0625rem solid #efefef}.border-b-lt-gray{border-bottom:.0625rem solid #efefef}.border-l-lt-gray{border-left:.0625rem solid #efefef}.border-a-lt-gray{border:.0625rem solid #efefef}.border-lr-lt-gray{border-left:.0625rem solid #efefef;border-right:.0625rem solid #efefef}.border-tb-lt-gray{border-top:.0625rem solid #efefef;border-bottom:.0625rem solid #efefef}.bg-gray,.bg-hover-gray:hover{background-color:#bdbdbd}.text-gray,.text-hover-gray:hover{color:#bdbdbd}.border-t-gray{border-top:.0625rem solid #bdbdbd}.border-r-gray{border-right:.0625rem solid #bdbdbd}.border-b-gray{border-bottom:.0625rem solid #bdbdbd}.border-l-gray{border-left:.0625rem solid #bdbdbd}.border-a-gray{border:.0625rem solid #bdbdbd}.border-lr-gray{border-left:.0625rem solid #bdbdbd;border-right:.0625rem solid #bdbdbd}.border-tb-gray{border-top:.0625rem solid #bdbdbd;border-bottom:.0625rem solid #bdbdbd}.bg-dk-gray,.bg-hover-dk-gray:hover{background-color:#8d8d8d}.text-dk-gray,.text-hover-dk-gray:hover{color:#8d8d8d}.border-t-dk-gray{border-top:.0625rem solid #8d8d8d}.border-r-dk-gray{border-right:.0625rem solid #8d8d8d}.border-b-dk-gray{border-bottom:.0625rem solid #8d8d8d}.border-l-dk-gray{border-left:.0625rem solid #8d8d8d}.border-a-dk-gray{border:.0625rem solid #8d8d8d}.border-lr-dk-gray{border-left:.0625rem solid #8d8d8d;border-right:.0625rem solid #8d8d8d}.border-tb-dk-gray{border-top:.0625rem solid #8d8d8d;border-bottom:.0625rem solid #8d8d8d}.bg-hover-lt-white:hover,.bg-lt-white{background-color:#fafafa}.bg-hover-white:hover,.bg-white{background-color:#fff}.text-hover-white:hover,.text-white{color:#fff}.border-t-white{border-top:.0625rem solid #fff}.border-r-white{border-right:.0625rem solid #fff}.border-b-white{border-bottom:.0625rem solid #fff}.border-l-white{border-left:.0625rem solid #fff}.border-a-white{border:.0625rem solid #fff}.border-lr-white{border-left:.0625rem solid #fff;border-right:.0625rem solid #fff}.border-tb-white{border-top:.0625rem solid #fff;border-bottom:.0625rem solid #fff}.text-hover-lt-black:hover,.text-lt-black{color:#191919}.bg-black,.bg-hover-black:hover{background-color:#000}.text-black,.text-hover-black:hover{color:#000}.border-t-black{border-top:.0625rem solid #000}.border-r-black{border-right:.0625rem solid #000}.border-b-black{border-bottom:.0625rem solid #000}.border-l-black{border-left:.0625rem solid #000}.border-a-black{border:.0625rem solid #000}.border-lr-black{border-left:.0625rem solid #000;border-right:.0625rem solid #000}.border-tb-black{border-top:.0625rem solid #000;border-bottom:.0625rem solid #000}.row,.row-full{align-items:flex-start;display:flex;justify-content:flex-start}.col,.col-full{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.row-full{width:100%}.col-full{height:100%}.align-c,.col.align-m{justify-content:center}.align-l,.col.align-t{justify-content:flex-start}.align-r,.col.align-b{justify-content:flex-end}.align-m,.col.align-c{align-items:center}.align-b,.col.align-r{align-items:flex-end}.align-t,.col.align-l{align-items:flex-start}.align-sa{justify-content:space-around}.align-sb{justify-content:space-between}.align-st{align-items:stretch}.align-cm{align-items:center;justify-content:center}.col.wrap-l,.wrap-t{align-content:flex-start;flex-wrap:wrap}.col.wrap-r,.wrap-b{align-content:flex-end;flex-wrap:wrap}.col.wrap-c,.wrap-m{align-content:center;flex-wrap:wrap}.wrap-sa{align-content:space-around;flex-wrap:wrap}.wrap-sb{align-content:space-between;flex-wrap:wrap}.wrap-st{align-content:stretch;flex-wrap:wrap}.wrap-n{flex-wrap:nowrap;max-width:100%}.col .item-l,.item-t{align-self:flex-start}.col .item-r,.item-b{align-self:flex-end}.col .item-c,.item-m{-ms-grid-row-align:center;align-self:center}.item-l{margin-right:auto}.col .item-t{margin-bottom:auto}.item-r{margin-left:auto}.col .item-b{margin-top:auto}.item-c{margin-left:auto;margin-right:auto}.col .item-m{margin-bottom:auto;margin-top:auto}.item-cm{-ms-grid-row-align:center;align-self:center;margin-left:auto;margin-right:auto}.col .item-cm{-ms-grid-row-align:center;align-self:center;margin-bottom:auto;margin-top:auto}.item-st{-ms-grid-row-align:stretch;align-self:stretch}.item-gs-0{flex-grow:0;flex-shrink:0}.item-g-0{flex-grow:0}.item-s-0{flex-shrink:0}.item-gs-1{flex-grow:1;flex-shrink:1}.item-g-1{flex-grow:1}.item-s-1{flex-shrink:1}.item-gs-2{flex-grow:2;flex-shrink:2}.item-g-2{flex-grow:2}.item-s-2{flex-shrink:2}.item-gs-3{flex-grow:3;flex-shrink:3}.item-g-3{flex-grow:3}.item-s-3{flex-shrink:3}.item-gs-4{flex-grow:4;flex-shrink:4}.item-g-4{flex-grow:4}.item-s-4{flex-shrink:4}.item-gs-5{flex-grow:5;flex-shrink:5}.item-g-5{flex-grow:5}.item-s-5{flex-shrink:5}.item-gs-6{flex-grow:6;flex-shrink:6}.item-g-6{flex-grow:6}.item-s-6{flex-shrink:6}.item-gs-7{flex-grow:7;flex-shrink:7}.item-g-7{flex-grow:7}.item-s-7{flex-shrink:7}.item-gs-8{flex-grow:8;flex-shrink:8}.item-g-8{flex-grow:8}.item-s-8{flex-shrink:8}.item-gs-9{flex-grow:9;flex-shrink:9}.item-g-9{flex-grow:9}.item-s-9{flex-shrink:9}.item-gs-10{flex-grow:10;flex-shrink:10}.item-g-10{flex-grow:10}.item-s-10{flex-shrink:10}.item-gs-11{flex-grow:11;flex-shrink:11}.item-g-11{flex-grow:11}.item-s-11{flex-shrink:11}.item-gs-12{flex-grow:12;flex-shrink:12}.item-g-12{flex-grow:12}.item-s-12{flex-shrink:12}[class*=flex-g]{flex-basis:auto}.item-order-1{order:1}.item-order-2{order:2}.item-order-3{order:3}.item-order-4{order:4}.item-order-5{order:5}.item-order-6{order:6}.item-order-7{order:7}.item-order-8{order:8}.item-order-9{order:9}.item-order-10{order:10}.item-order-11{order:11}.item-order-12{order:12}@media screen and (min-width:48em){.container{width:80%}}@media screen and (min-width:30em){.container-fluid{width:28rem}}@media screen and (min-width:48em){.container-fluid{width:46rem}}@media screen and (min-width:64em){.container-fluid{width:73rem}}.container,.container-fluid,.container-full{margin-left:auto;margin-right:auto;width:100%}.sticky-footer{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column;align-items:stretch;flex-wrap:nowrap;height:100%}.sticky-footer :last-child{margin-top:auto}.fixed-b,.fixed-l,.fixed-r,.fixed-t{position:fixed;z-index:10}.fixed-b,.fixed-t{width:100%}.fixed-b{bottom:0}.fixed-l{left:0}.fixed-r{right:0}.fixed-t{top:0}.mar-t-n{margin-top:0}.pad-t-n{padding-top:0}.mar-r-n{margin-right:0}.pad-r-n{padding-right:0}.mar-b-n{margin-bottom:0}.pad-b-n{padding-bottom:0}.mar-l-n{margin-left:0}.pad-l-n{padding-left:0}.mar-a-n{margin:0}.mar-lr-n{margin-left:0;margin-right:0}.mar-tb-n{margin-top:0;margin-bottom:0}.pad-a-n{padding:0}.pad-lr-n{padding-left:0;padding-right:0}.pad-tb-n{padding-top:0;padding-bottom:0}.mar-t-xs{margin-top:.5rem}.pad-t-xs{padding-top:.5rem}.mar-r-xs{margin-right:.5rem}.pad-r-xs{padding-right:.5rem}.mar-b-xs{margin-bottom:.5rem}.pad-b-xs{padding-bottom:.5rem}.mar-l-xs{margin-left:.5rem}.pad-l-xs{padding-left:.5rem}.mar-a-xs{margin:.5rem}.mar-lr-xs{margin-left:.5rem;margin-right:.5rem}.mar-tb-xs{margin-top:.5rem;margin-bottom:.5rem}.pad-a-xs{padding:.5rem}.pad-lr-xs{padding-left:.5rem;padding-right:.5rem}.pad-tb-xs{padding-top:.5rem;padding-bottom:.5rem}.mar-t-sm{margin-top:1rem}.pad-t-sm{padding-top:1rem}.mar-r-sm{margin-right:1rem}.pad-r-sm{padding-right:1rem}.mar-b-sm{margin-bottom:1rem}.pad-b-sm{padding-bottom:1rem}.mar-l-sm{margin-left:1rem}.pad-l-sm{padding-left:1rem}.mar-a-sm{margin:1rem}.mar-lr-sm{margin-left:1rem;margin-right:1rem}.mar-tb-sm{margin-top:1rem;margin-bottom:1rem}.pad-a-sm{padding:1rem}.pad-lr-sm{padding-left:1rem;padding-right:1rem}.pad-tb-sm{padding-top:1rem;padding-bottom:1rem}.mar-t-md{margin-top:1.5rem}.pad-t-md{padding-top:1.5rem}.mar-r-md{margin-right:1.5rem}.pad-r-md{padding-right:1.5rem}.mar-b-md{margin-bottom:1.5rem}.pad-b-md{padding-bottom:1.5rem}.mar-l-md{margin-left:1.5rem}.pad-l-md{padding-left:1.5rem}.mar-a-md{margin:1.5rem}.mar-lr-md{margin-left:1.5rem;margin-right:1.5rem}.mar-tb-md{margin-top:1.5rem;margin-bottom:1.5rem}.pad-a-md{padding:1.5rem}.pad-lr-md{padding-left:1.5rem;padding-right:1.5rem}.pad-tb-md{padding-top:1.5rem;padding-bottom:1.5rem}.mar-t-lg{margin-top:2rem}.pad-t-lg{padding-top:2rem}.mar-r-lg{margin-right:2rem}.pad-r-lg{padding-right:2rem}.mar-b-lg{margin-bottom:2rem}.pad-b-lg{padding-bottom:2rem}.mar-l-lg{margin-left:2rem}.pad-l-lg{padding-left:2rem}.mar-a-lg{margin:2rem}.mar-lr-lg{margin-left:2rem;margin-right:2rem}.mar-tb-lg{margin-top:2rem;margin-bottom:2rem}.pad-a-lg{padding:2rem}.pad-lr-lg{padding-left:2rem;padding-right:2rem}.pad-tb-lg{padding-top:2rem;padding-bottom:2rem}.mar-t-xl{margin-top:2.5rem}.pad-t-xl{padding-top:2.5rem}.mar-r-xl{margin-right:2.5rem}.pad-r-xl{padding-right:2.5rem}.mar-b-xl{margin-bottom:2.5rem}.pad-b-xl{padding-bottom:2.5rem}.mar-l-xl{margin-left:2.5rem}.pad-l-xl{padding-left:2.5rem}.mar-a-xl{margin:2.5rem}.mar-lr-xl{margin-left:2.5rem;margin-right:2.5rem}.mar-tb-xl{margin-top:2.5rem;margin-bottom:2.5rem}.pad-a-xl{padding:2.5rem}.pad-lr-xl{padding-left:2.5rem;padding-right:2.5rem}.pad-tb-xl{padding-top:2.5rem;padding-bottom:2.5rem}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-md{font-size:1.125rem}.text-lg{font-size:1.5rem}.text-xl{font-size:2.25rem}.text-c{text-align:center}.text-l{text-align:left}.text-r{text-align:right}.text-j{text-align:justify}.text-capitalize{text-transform:capitalize}.text-uppercase{text-transform:uppercase}.text-lowercase{text-transform:lowercase}.text-small-caps{font-variant:small-caps}.text-hyphens{-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}:disabled,[disabled]{background-color:#efefef;color:#191919}:disabled:hover,[disabled]:hover{cursor:not-allowed}.center{display:block;margin-left:auto;margin-right:auto}.circle{border-radius:50%}.close{color:inherit}.hover:hover{cursor:pointer}.list{margin-bottom:1rem;margin-left:2.5rem}ol.list{list-style:decimal}ol.list ol.lst{list-style:lower-alpha}.rounded{border-radius:.375rem}ul.list{list-style:disc}ul.list ul.list{list-style:circle}.box-shadow-1{box-shadow:0 .09375rem .25rem rgba(0,0,0,.24),0 .09375rem .375rem rgba(0,0,0,.12)}.box-shadow-2{box-shadow:0 .1875rem .75rem rgba(0,0,0,.23),0 .1875rem .75rem rgba(0,0,0,.16)}.box-shadow-3{box-shadow:0 .375rem .75rem rgba(0,0,0,.23),0 .625rem 2.5rem rgba(0,0,0,.19)}.box-shadow-4{box-shadow:0 .625rem 1.25rem rgba(0,0,0,.22),0 .875rem 3.5rem rgba(0,0,0,.25)}.box-shadow-5{box-shadow:0 .9375rem 1.5rem rgba(0,0,0,.22),0 1.1875rem 4.75rem rgba(0,0,0,.3)}.hide,.show-lg,.show-md,.show-print,.show-sm,.show-xl{display:none}@media screen and (min-width:30em){.hide-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.hide-sm{display:none}}@media screen and (min-width:48em) and (max-width:63em){.hide-md{display:none}}@media screen and (min-width:64em) and (max-width:74em){.hide-lg{display:none}}@media screen and (min-width:64em){.hide-xl{display:none}}@media print{.hide-print{display:none}}.show{display:block}@media screen and (min-width:30em){.show-xs{display:none}}@media screen and (min-width:30em) and (max-width:47em){.show-sm{display:block}}@media screen and (min-width:48em) and (max-width:63em){.show-md{display:block}}@media screen and (min-width:64em) and (max-width:74em){.show-lg{display:block}}@media screen and (min-width:64em){.show-xl{display:block}}@media print{.show-print{display:block}}.show-focus,.sr-only{clip:rect(0,0,0,0);height:.0625rem;position:absolute;overflow:hidden;white-space:nowrap;width:.0625rem}.show-focus:active,.show-focus:focus,.show-focus:hover{clip:auto;color:#191919;display:block;height:auto;left:.3125rem;padding:1rem;text-decoration:none;top:.3125rem;width:auto;z-index:100}'
				],
				data: {}
			});
			function rp(l) {
				return ur(
					0,
					[
						qs(671088640, 1, { content: 0 }),
						(l()(),
						Vs(
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
						(l()(), Xs(-1, null, ['Skip to content'])),
						Ks(null, 0)
					],
					null,
					null
				);
			}
			var ap = Wu({
				encapsulation: 0,
				styles: [
					'.alert-bad[_nghost-%COMP%], .alert-good[_nghost-%COMP%], .alert-info[_nghost-%COMP%], .alert-warn[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;color:#fff;justify-content:space-between;padding:.5rem 1rem}.alert-bad[_nghost-%COMP%]{background-color:#ba000d}.alert-good[_nghost-%COMP%]{background-color:#087f23}.alert-info[_nghost-%COMP%]{background-color:#0069c0}.alert-warn[_nghost-%COMP%]{background-color:#ffeb3b;color:#191919}'
				],
				data: {}
			});
			function op(l) {
				return ur(
					0,
					[
						(l()(),
						Vs(
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
						(l()(), Xs(-1, null, [' X\n']))
					],
					null,
					null
				);
			}
			function ip(l) {
				return ur(
					0,
					[
						qs(402653184, 1, { message: 0 }),
						(l()(), Vs(1, 0, [[1, 0], ['message', 1]], null, 1, 'p', [['tabindex', '-1']], [[1, 'id', 0]], null, null, null, null)),
						Ks(null, 0),
						(l()(), Ls(16777216, null, null, 1, null, op)),
						st(4, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null)
					],
					function(l, n) {
						l(n, 4, 0, n.component.close);
					},
					function(l, n) {
						l(n, 1, 0, n.component.id);
					}
				);
			}
			var cp = Wu({
				encapsulation: 0,
				styles: [
					'.badge-lg[_nghost-%COMP%], .badge-md[_nghost-%COMP%], .badge-sm[_nghost-%COMP%]{border-radius:1rem;display:inline-block}.badge-lg[_nghost-%COMP%]:empty, .badge-md[_nghost-%COMP%]:empty, .badge-sm[_nghost-%COMP%]:empty{display:none}.badge-sm[_nghost-%COMP%]{line-height:.5rem;padding:.5rem}.badge-md[_nghost-%COMP%]{line-height:.625rem;padding:.625rem}.badge-lg[_nghost-%COMP%]{line-height:.75rem;padding:.75rem}'
				],
				data: {}
			});
			function hp(l) {
				return ur(0, [Ks(null, 0)], null, null);
			}
			var dp = Wu({
				encapsulation: 0,
				styles: [
					'.btn-full[_nghost-%COMP%], .btn-lg[_nghost-%COMP%], .btn-md[_nghost-%COMP%], .btn-sm[_nghost-%COMP%], .btn-xl[_nghost-%COMP%], .btn-xs[_nghost-%COMP%]{margin-bottom:1rem;margin-right:1rem}.btn-full.rounded[_nghost-%COMP%], .btn-lg.rounded[_nghost-%COMP%], .btn-md.rounded[_nghost-%COMP%], .btn-sm.rounded[_nghost-%COMP%], .btn-xl.rounded[_nghost-%COMP%], .btn-xs.rounded[_nghost-%COMP%]{border-radius:1.5rem}.btn-xs[_nghost-%COMP%]{padding:.5rem .625rem}.btn-sm[_nghost-%COMP%]{padding:.625rem 1.25rem}.btn-full[_nghost-%COMP%], .btn-md[_nghost-%COMP%]{padding:.75rem 1.875rem}.btn-lg[_nghost-%COMP%]{padding:.875rem 2.5rem}.btn-xl[_nghost-%COMP%]{padding:1rem 3.125rem}.btn-full[_nghost-%COMP%]{width:100%}.btn-group-col[_nghost-%COMP%], .btn-group-full[_nghost-%COMP%], .btn-group-row[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;padding-bottom:1rem;padding-top:1rem}.btn-group-col[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-direction:column}.btn-group-full[_nghost-%COMP%]{width:100%}.btn-group-col.btn-lg[_nghost-%COMP%], .btn-group-col   .btn-lg[_nghost-%COMP%], .btn-group-col.btn-md[_nghost-%COMP%], .btn-group-col   .btn-md[_nghost-%COMP%], .btn-group-col.btn-sm[_nghost-%COMP%], .btn-group-col   .btn-sm[_nghost-%COMP%], .btn-group-col.btn-xl[_nghost-%COMP%], .btn-group-col   .btn-xl[_nghost-%COMP%], .btn-group-col.btn-xs[_nghost-%COMP%], .btn-group-col   .btn-xs[_nghost-%COMP%], .btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%], .btn-group-row.btn-lg[_nghost-%COMP%], .btn-group-row   .btn-lg[_nghost-%COMP%], .btn-group-row.btn-md[_nghost-%COMP%], .btn-group-row   .btn-md[_nghost-%COMP%], .btn-group-row.btn-sm[_nghost-%COMP%], .btn-group-row   .btn-sm[_nghost-%COMP%], .btn-group-row.btn-xl[_nghost-%COMP%], .btn-group-row   .btn-xl[_nghost-%COMP%], .btn-group-row.btn-xs[_nghost-%COMP%], .btn-group-row   .btn-xs[_nghost-%COMP%]{border-bottom:.0625rem solid #fff;border-left:.0625rem solid #fff;margin:0}.btn-group-full.btn-lg[_nghost-%COMP%], .btn-group-full   .btn-lg[_nghost-%COMP%], .btn-group-full.btn-md[_nghost-%COMP%], .btn-group-full   .btn-md[_nghost-%COMP%], .btn-group-full.btn-sm[_nghost-%COMP%], .btn-group-full   .btn-sm[_nghost-%COMP%], .btn-group-full.btn-xl[_nghost-%COMP%], .btn-group-full   .btn-xl[_nghost-%COMP%], .btn-group-full.btn-xs[_nghost-%COMP%], .btn-group-full   .btn-xs[_nghost-%COMP%]{flex-basis:auto;flex-grow:1;flex-shrink:0}'
				],
				data: {}
			});
			function pp(l) {
				return ur(0, [Ks(null, 0)], null, null);
			}
			var gp = Wu({
				encapsulation: 0,
				styles: [
					'@charset "UTF-8";.checkbox-group[_nghost-%COMP%], .radio-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex:1 1 13.75rem;flex-wrap:wrap}.field-group[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;align-items:center;flex-wrap:wrap;padding:.5rem}.fieldset[_nghost-%COMP%]{border:.0625rem solid #2196f3;padding:0 .625rem .75rem}.form-field[_nghost-%COMP%]{transition-duration:.3s;transition-property:border,box-shadow;transition-timing-function:linear;border:.0625rem solid #bdbdbd}.form-field[_nghost-%COMP%]:not(:disabled), .form-field[_nghost-%COMP%]:not([disabled]){background-color:#fff}.form-field[_nghost-%COMP%]:-moz-read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[_nghost-%COMP%]:read-only:not(select), .form-field[readonly][_nghost-%COMP%]:not(select){background-color:#efefef;color:#191919}.form-field[type=checkbox][_nghost-%COMP%], .form-field[type=radio][_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;height:1rem;position:relative;width:1rem}.form-field[type=checkbox][_nghost-%COMP%]::after, .form-field[type=radio][_nghost-%COMP%]::after{display:block;font-size:1.175rem;height:.95rem;left:0;line-height:.8rem;position:absolute;text-align:center;top:0;width:.95rem}.form-field[type=checkbox][_nghost-%COMP%]:checked::after{content:"\u2713"}.form-field[type=radio][_nghost-%COMP%]{border-radius:50%}.form-field[type=radio][_nghost-%COMP%]:checked::after{content:"\u25cf"}.form-field[_nghost-%COMP%]:hover{transition-duration:.3s;transition-property:border;transition-timing-function:linear;border:.0625rem solid #000}.form-field[_nghost-%COMP%]:focus{transition-duration:.3s;transition-property:border,box-shadow;transition-timing-function:linear;box-shadow:0 .09375rem .25rem rgba(33,150,243,.24),0 .09375rem .375rem rgba(33,150,243,.12);border:.0625rem solid #2196f3;outline:#2196f3 dotted 1px}.form-field[_nghost-%COMP%]:not([type=checkbox]):not([type=radio]){flex:1 0 13.75rem;padding:.5rem}.form-field[_nghost-%COMP%]::-webkit-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]:-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-moz-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::-ms-input-placeholder{color:#8d8d8d;opacity:1}.form-field[_nghost-%COMP%]::placeholder{color:#8d8d8d;opacity:1}.form-group-inline[_nghost-%COMP%]{align-items:flex-start;display:flex;justify-content:flex-start;flex-wrap:wrap}.form-label[_nghost-%COMP%]{flex:1 0 7.5rem;font-size:1.125rem;max-width:13.75rem}select.form-field[_nghost-%COMP%]{background-color:inherit;color:#8d8d8d;height:2.25rem;padding-left:.25rem}select.form-field[_nghost-%COMP%]::-ms-value{background-color:inherit;color:#8d8d8d}select.form-field[multiple][_nghost-%COMP%]{height:6.25rem}select.form-field[_nghost-%COMP%]:not([multiple]){padding-bottom:0;padding-top:0;padding-right:0}textarea.form-field[_nghost-%COMP%]{height:6.25rem}.checkbox-group.field-group[_nghost-%COMP%], .checkbox-group   .field-group[_nghost-%COMP%], .radio-group.field-group[_nghost-%COMP%], .radio-group   .field-group[_nghost-%COMP%]{flex:0 0 7.5rem;flex-wrap:nowrap;padding:0}.checkbox-group.form-label[_nghost-%COMP%], .checkbox-group   .form-label[_nghost-%COMP%], .radio-group.form-label[_nghost-%COMP%], .radio-group   .form-label[_nghost-%COMP%]{flex:none;font-size:1rem;padding-left:.5rem}.checkbox-group.form-label[_nghost-%COMP%]:hover, .checkbox-group   .form-label[_nghost-%COMP%]:hover, .radio-group.form-label[_nghost-%COMP%]:hover, .radio-group   .form-label[_nghost-%COMP%]:hover{cursor:pointer}.form-group-inline.field-group[_nghost-%COMP%], .form-group-inline   .field-group[_nghost-%COMP%]{flex:1 0 auto}'
				],
				data: {}
			});
			function fp(l) {
				return ur(0, [Ks(null, 0)], null, null);
			}
			var mp = Wu({
				encapsulation: 0,
				styles: [
					'.spinner[_nghost-%COMP%], .spinner-dotted[_nghost-%COMP%]{-webkit-animation:2s linear infinite spinner;animation:2s linear infinite spinner;border-radius:50%;height:7.5rem;width:7.5rem}.spinner[_nghost-%COMP%]{border-color:#efefef #efefef #efefef #2196f3;border-style:solid;border-width:1rem}.spinner-dotted[_nghost-%COMP%]{border-style:dotted;border-color:#0069c0 #2196f3 #6ec6ff #39f;border-width:1.125rem .875rem .75rem .5rem}@-webkit-keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner{from{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}'
				],
				data: {}
			});
			function bp(l) {
				return ur(0, [Ks(null, 0)], null, null);
			}
			class yp {
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
			var wp = Wu({
				encapsulation: 0,
				styles: [
					[
						'.styleguide[_ngcontent-%COMP%]{margin-left:16rem}.styleguide[_ngcontent-%COMP%]   .hljs-attr[_ngcontent-%COMP%]{color:#954121}.styleguide-menu[_ngcontent-%COMP%]{left:2rem;top:5.5rem;width:14rem}.styleguide-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#6a0080}.styleguide[_ngcontent-%COMP%]   code[_ngcontent-%COMP%], .styleguide[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{font-size:.875rem}.styleguide[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{min-width:15rem}#styleguide[_ngcontent-%COMP%]   .hljs[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%], .hljs[_ngcontent-%COMP%]{display:block;overflow-x:auto;padding:.5em;color:#000;background:#f8f8ff;-webkit-text-size-adjust:none}.diff[_ngcontent-%COMP%]   .hljs-header[_ngcontent-%COMP%], .hljs-comment[_ngcontent-%COMP%]{color:#408080;font-style:italic}.assignment[_ngcontent-%COMP%], .css[_ngcontent-%COMP%]   .rule[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-keyword[_ngcontent-%COMP%], .hljs-literal[_ngcontent-%COMP%], .hljs-subst[_ngcontent-%COMP%], .hljs-winutils[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#954121}.hljs-hexcolor[_ngcontent-%COMP%], .hljs-number[_ngcontent-%COMP%]{color:#40a070}.hljs-doctag[_ngcontent-%COMP%], .hljs-string[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-value[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{color:#219161}.hljs-id[_ngcontent-%COMP%], .hljs-title[_ngcontent-%COMP%]{color:#19469d}.hljs-params[_ngcontent-%COMP%]{color:#00f}.hljs-subst[_ngcontent-%COMP%], .javascript[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{font-weight:400}.haskell[_ngcontent-%COMP%]   .hljs-label[_ngcontent-%COMP%], .hljs-class[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-command[_ngcontent-%COMP%]{color:#458;font-weight:700}.django[_ngcontent-%COMP%]   .hljs-tag[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .hljs-name[_ngcontent-%COMP%], .hljs-rule[_ngcontent-%COMP%]   .hljs-property[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%], .hljs-tag[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:navy;font-weight:400}.hljs-attr[_ngcontent-%COMP%], .hljs-variable[_ngcontent-%COMP%], .instancevar[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-body[_ngcontent-%COMP%]{color:teal}.hljs-regexp[_ngcontent-%COMP%]{color:#b68}.hljs-class[_ngcontent-%COMP%]{color:#458;font-weight:700}.hljs-symbol[_ngcontent-%COMP%], .input_number[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-keyword[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .hljs-string[_ngcontent-%COMP%], .ruby[_ngcontent-%COMP%]   .hljs-symbol[_ngcontent-%COMP%]   .keymethods[_ngcontent-%COMP%], .tex[_ngcontent-%COMP%]   .hljs-special[_ngcontent-%COMP%]{color:#990073}.builtin[_ngcontent-%COMP%], .constructor[_ngcontent-%COMP%], .hljs-built_in[_ngcontent-%COMP%], .lisp[_ngcontent-%COMP%]   .hljs-title[_ngcontent-%COMP%]{color:#0086b3}.hljs-cdata[_ngcontent-%COMP%], .hljs-doctype[_ngcontent-%COMP%], .hljs-pi[_ngcontent-%COMP%], .hljs-pragma[_ngcontent-%COMP%], .hljs-preprocessor[_ngcontent-%COMP%], .hljs-shebang[_ngcontent-%COMP%]{color:#999;font-weight:700}.hljs-deletion[_ngcontent-%COMP%]{background:#fdd}.hljs-addition[_ngcontent-%COMP%]{background:#dfd}.diff[_ngcontent-%COMP%]   .hljs-change[_ngcontent-%COMP%]{background:#0086b3}.hljs-chunk[_ngcontent-%COMP%]{color:#aaa}.tex[_ngcontent-%COMP%]   .hljs-formula[_ngcontent-%COMP%]{opacity:.5}.flexbox[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;flex-wrap:wrap}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][_ngcontent-%COMP%]{height:15.625rem;width:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=col][class*=wrap][_ngcontent-%COMP%]{width:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.col-full[_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][_ngcontent-%COMP%]{height:9.375rem}.flexbox[_ngcontent-%COMP%]   ul[class*=row][class*=wrap][_ngcontent-%COMP%]{height:18.75rem}.flexbox[_ngcontent-%COMP%]   ul.row[_ngcontent-%COMP%]{width:15.625rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:flex-start;display:-webkit-box;display:flex;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center;background-color:#2196f3;color:#fff;-webkit-box-pack:center;justify-content:center;min-height:6.25rem;min-width:7.5rem}.flexbox[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50;min-height:4.6875rem;min-width:6.25rem}.box[_ngcontent-%COMP%]{border:.0625rem solid #000;margin:1rem;padding:0}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background-color:#2196f3;color:#fff;text-align:center}.box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-child(even){background-color:#4caf50}.box[_ngcontent-%COMP%]   p[class*=pad][_ngcontent-%COMP%]{display:inline-block;margin:0 1rem}'
					]
				],
				data: {}
			});
			function jp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Close']))
					],
					null,
					null
				);
			}
			function vp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Empty']))
					],
					null,
					null
				);
			}
			function xp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Group'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Rounded'])),
						(l()(), Vs(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['State']))
					],
					null,
					null
				);
			}
			function _p(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function kp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Accordion'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Expand']))
					],
					null,
					null
				);
			}
			function Cp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 12, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Background'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Border'])),
						(l()(), Vs(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Hover'])),
						(l()(), Vs(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function Sp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 24, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Container Column'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Container Row'])),
						(l()(), Vs(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Item Column'])),
						(l()(), Vs(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Item Order'])),
						(l()(), Vs(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Item Row'])),
						(l()(), Vs(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Item Size'])),
						(l()(), Vs(19, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(20, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Wrap Column'])),
						(l()(), Vs(22, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(23, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Wrap Row']))
					],
					null,
					null
				);
			}
			function Ep(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 21, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Checkbox'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Field'])),
						(l()(), Vs(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Field Group'])),
						(l()(), Vs(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Fieldset'])),
						(l()(), Vs(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Form Group'])),
						(l()(), Vs(16, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Label'])),
						(l()(), Vs(19, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(20, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['State']))
					],
					null,
					null
				);
			}
			function Ip(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Area'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Container'])),
						(l()(), Vs(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Item']))
					],
					null,
					null
				);
			}
			function Pp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Container'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Sticky Footer']))
					],
					null,
					null
				);
			}
			function Op(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Tp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 9, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Items'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Links'])),
						(l()(), Vs(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Placement']))
					],
					null,
					null
				);
			}
			function Mp(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Rp(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Ap(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Np(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Margin'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Padding']))
					],
					null,
					null
				);
			}
			function Dp(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Up(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Fp(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function Lp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 15, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Border'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Hover'])),
						(l()(), Vs(7, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(8, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Striped'])),
						(l()(), Vs(10, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(11, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Table Cell'])),
						(l()(), Vs(13, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(14, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Table Row']))
					],
					null,
					null
				);
			}
			function Vp(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function zp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Font'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Text']))
					],
					null,
					null
				);
			}
			function Hp(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 0, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null))], null, null);
			}
			function $p(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 6, 'ul', [['class', 'pad-l-sm submenu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Hide'])),
						(l()(), Vs(4, 0, null, null, 2, 'li', [], null, null, null, null, null)),
						(l()(), Vs(5, 0, null, null, 1, 'a', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Show']))
					],
					null,
					null
				);
			}
			function Bp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 116, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Alerts are styled with an '])),
						(l()(), Vs(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.alert-[bad || good || info || warn]'])),
						(l()(), Xs(-1, null, [' class.'])),
						(l()(), Vs(7, 0, null, null, 18, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(9, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(10, { flexbox: 0, box: 1 }),
						(l()(), Vs(11, 0, null, null, 2, 'aside', [['class', 'alert-bad']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, ip, ap)),
						st(12, 114688, null, 0, Ad, [eu], { class: [0, 'class'] }, null),
						(l()(), Xs(-1, 0, ['bad'])),
						(l()(), Vs(14, 0, null, null, 2, 'aside', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, ip, ap)),
						st(15, 114688, null, 0, Ad, [eu], { class: [0, 'class'] }, null),
						(l()(), Xs(-1, 0, ['good'])),
						(l()(), Vs(17, 0, null, null, 2, 'aside', [['class', 'alert-info']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, ip, ap)),
						st(18, 114688, null, 0, Ad, [eu], { class: [0, 'class'] }, null),
						(l()(), Xs(-1, 0, ['info'])),
						(l()(), Vs(20, 0, null, null, 2, 'aside', [['class', 'alert-warn']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, ip, ap)),
						st(21, 114688, null, 0, Ad, [eu], { class: [0, 'class'] }, null),
						(l()(), Xs(-1, 0, ['warn'])),
						(l()(), Vs(23, 0, null, null, 2, 'ez-alert', [['class', 'alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, ip, ap)),
						st(24, 114688, null, 0, Ad, [eu], { class: [0, 'class'] }, null),
						(l()(), Xs(-1, 0, ['good'])),
						(l()(), Vs(26, 0, null, null, 90, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(27, 0, null, null, 89, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(28, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(30, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['aside'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(33, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(36, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"alert-bad"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['bad'])),
						(l()(), Vs(40, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(42, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['aside'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(46, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(48, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['aside'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(51, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(54, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"alert-good"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['good'])),
						(l()(), Vs(58, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['aside'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(64, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(66, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['aside'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(69, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(72, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"alert-info"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['info'])),
						(l()(), Vs(76, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['aside'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(82, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['aside'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(90, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"alert-warn"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['warn'])),
						(l()(), Vs(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(96, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['aside'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(100, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(102, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ez-alert'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(105, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(108, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"alert-good"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['good'])),
						(l()(), Vs(112, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(114, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ez-alert'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0, 'alert-bad'), l(n, 15, 0, 'alert-good'), l(n, 18, 0, 'alert-info'), l(n, 21, 0, 'alert-warn'), l(n, 24, 0, 'alert-good');
					},
					function(l, n) {
						l(n, 11, 0, Ge(n, 12).ariaLabelledby, Ge(n, 12).hostClass, Ge(n, 12).role, Ge(n, 12).tabindex),
							l(n, 14, 0, Ge(n, 15).ariaLabelledby, Ge(n, 15).hostClass, Ge(n, 15).role, Ge(n, 15).tabindex),
							l(n, 17, 0, Ge(n, 18).ariaLabelledby, Ge(n, 18).hostClass, Ge(n, 18).role, Ge(n, 18).tabindex),
							l(n, 20, 0, Ge(n, 21).ariaLabelledby, Ge(n, 21).hostClass, Ge(n, 21).role, Ge(n, 21).tabindex),
							l(n, 23, 0, Ge(n, 24).ariaLabelledby, Ge(n, 24).hostClass, Ge(n, 24).role, Ge(n, 24).tabindex);
					}
				);
			}
			function qp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 55, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Close'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Alerts are closed by adding a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.close'])),
						(l()(), Xs(-1, null, [' class.'])),
						(l()(), Vs(9, 0, null, null, 9, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(),
						Vs(13, 0, null, null, 2, 'aside', [['class', 'alert-good close']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, ip, ap)),
						st(14, 114688, null, 0, Ad, [eu], { class: [0, 'class'] }, null),
						(l()(), Xs(-1, 0, ['close'])),
						(l()(),
						Vs(16, 0, null, null, 2, 'ez-alert', [['class', 'close alert-good']], [[1, 'aria-labelledby', 0], [1, 'class', 0], [1, 'role', 0], [1, 'tabindex', 0]], null, null, ip, ap)),
						st(17, 114688, null, 0, Ad, [eu], { class: [0, 'class'] }, null),
						(l()(), Xs(-1, 0, ['close'])),
						(l()(), Vs(19, 0, null, null, 36, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(20, 0, null, null, 35, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(21, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(23, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['aside'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(26, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(29, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"alert-good close"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['close'])),
						(l()(), Vs(33, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(35, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['aside'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(39, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(41, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ez-alert'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(44, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(47, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"close alert-good"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['close'])),
						(l()(), Vs(51, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(53, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ez-alert'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0, 'alert-good close'), l(n, 17, 0, 'close alert-good');
					},
					function(l, n) {
						l(n, 13, 0, Ge(n, 14).ariaLabelledby, Ge(n, 14).hostClass, Ge(n, 14).role, Ge(n, 14).tabindex),
							l(n, 16, 0, Ge(n, 17).ariaLabelledby, Ge(n, 17).hostClass, Ge(n, 17).role, Ge(n, 17).tabindex);
					}
				);
			}
			function Gp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 95, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Badges are styled with a '])),
						(l()(), Vs(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.badge-[sm || md || lg]'])),
						(l()(), Xs(-1, null, [' class.'])),
						(l()(), Vs(7, 0, null, null, 15, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(9, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(10, { flexbox: 0, box: 1 }),
						(l()(), Vs(11, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, hp, cp)),
						st(12, 114688, null, 0, Ud, [], null, null),
						(l()(), Xs(-1, 0, ['1'])),
						(l()(), Vs(14, 0, null, null, 2, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, hp, cp)),
						st(15, 114688, null, 0, Ud, [], null, null),
						(l()(), Xs(-1, 0, ['20'])),
						(l()(), Vs(17, 0, null, null, 2, 'p', [['class', 'badge-lg bg-dk-blue text-white']], null, null, null, hp, cp)),
						st(18, 114688, null, 0, Ud, [], null, null),
						(l()(), Xs(-1, 0, ['300'])),
						(l()(), Vs(20, 0, null, null, 2, 'ez-badge', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, hp, cp)),
						st(21, 114688, null, 0, Ud, [], null, null),
						(l()(), Xs(-1, 0, ['10'])),
						(l()(), Vs(23, 0, null, null, 72, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(24, 0, null, null, 71, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(25, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(27, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(30, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(33, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['1'])),
						(l()(), Vs(37, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(39, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(43, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(45, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(48, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(51, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['20'])),
						(l()(), Vs(55, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(57, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(61, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(63, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(66, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(69, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"badge-lg bg-dk-blue text-white"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['300'])),
						(l()(), Vs(73, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(75, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(79, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(81, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ez-badge'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(87, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['10'])),
						(l()(), Vs(91, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(93, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ez-badge'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0), l(n, 15, 0), l(n, 18, 0), l(n, 21, 0);
					},
					null
				);
			}
			function Zp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 50, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Empty'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['If a badge does not contain text, it is not rendered.'])),
						(l()(), Vs(6, 0, null, null, 8, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(8, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(9, { flexbox: 0, box: 1 }),
						(l()(), Vs(10, 0, null, null, 2, 'p', [['class', 'badge-sm bg-dk-blue text-white']], null, null, null, hp, cp)),
						st(11, 114688, null, 0, Ud, [], null, null),
						(l()(), Xs(-1, 0, ['1'])),
						(l()(), Vs(13, 0, null, null, 1, 'p', [['class', 'badge-md bg-dk-blue text-white']], null, null, null, hp, cp)),
						st(14, 114688, null, 0, Ud, [], null, null),
						(l()(), Vs(15, 0, null, null, 35, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(16, 0, null, null, 34, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(19, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(22, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(25, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"badge-sm bg-dk-blue text-white"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['1'])),
						(l()(), Vs(29, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(31, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(35, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(37, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(40, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(43, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"badge-md bg-dk-blue text-white"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(46, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(48, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 9, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 8, 0, 'pad-a-sm', e), l(n, 11, 0), l(n, 14, 0);
					},
					null
				);
			}
			function Qp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 115, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Buttons are styled with a '])),
						(l()(), Vs(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.btn-[xs || sm || md || lg || xl || full]'])),
						(l()(), Xs(-1, null, [' class.'])),
						(l()(), Vs(7, 0, null, null, 21, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(9, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(10, { flexbox: 0, box: 1 }),
						(l()(), Vs(11, 0, null, null, 2, 'button', [['class', 'btn-xs bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(12, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['xs'])),
						(l()(), Vs(14, 0, null, null, 2, 'button', [['class', 'btn-sm bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(15, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['sm'])),
						(l()(), Vs(17, 0, null, null, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(18, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(20, 0, null, null, 2, 'button', [['class', 'btn-lg bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(21, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['lg'])),
						(l()(), Vs(23, 0, null, null, 2, 'button', [['class', 'btn-xl bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(24, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['xl'])),
						(l()(), Vs(26, 0, null, null, 2, 'button', [['class', 'btn-full bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(27, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['full'])),
						(l()(), Vs(29, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(30, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<button '])),
						(l()(), Vs(32, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(33, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(36, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-xs bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(39, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(40, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(43, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>xs</button>\n<button '])),
						(l()(), Vs(46, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-sm bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(53, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(54, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(57, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>sm</button>\n<button '])),
						(l()(), Vs(60, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(64, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(67, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(68, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(71, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n<button '])),
						(l()(), Vs(74, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(75, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(78, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-lg bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(81, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(82, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(85, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>lg</button>\n<button '])),
						(l()(), Vs(88, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(89, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(92, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-xl bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(95, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(96, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(99, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>xl</button>\n<button '])),
						(l()(), Vs(102, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(103, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(106, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-full bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(109, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(110, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(113, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>full</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0), l(n, 15, 0), l(n, 18, 0), l(n, 21, 0), l(n, 24, 0), l(n, 27, 0);
					},
					null
				);
			}
			function Wp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 315, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Group'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Buttons are grouped with a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.btn-group-[row || col || full]'])),
						(l()(), Xs(-1, null, [' class on a parent container.'])),
						(l()(), Vs(9, 0, null, null, 54, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 16, 'section', [['aria-label', 'button row group'], ['class', 'btn-group-row'], ['role', 'group']], null, null, null, pp, dp)),
						st(14, 114688, null, 0, Ld, [], null, null),
						(l()(), Vs(15, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(16, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(18, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(19, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(21, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(22, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(24, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(25, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(27, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(28, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(30, 0, null, null, 16, 'section', [['aria-label', 'button column group'], ['class', 'btn-group-col'], ['role', 'group']], null, null, null, pp, dp)),
						st(31, 114688, null, 0, Ld, [], null, null),
						(l()(), Vs(32, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(33, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(35, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(36, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(38, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(39, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(41, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(42, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(44, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(45, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(47, 0, null, null, 16, 'section', [['aria-label', 'button full row group'], ['class', 'btn-group-full'], ['role', 'group']], null, null, null, pp, dp)),
						st(48, 114688, null, 0, Ld, [], null, null),
						(l()(), Vs(49, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(50, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(52, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(53, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(55, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(56, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(58, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(59, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(61, 0, null, 0, 2, 'button', [['class', 'btn-md bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(62, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(64, 0, null, null, 251, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(65, 0, null, null, 250, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<section '])),
						(l()(), Vs(67, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(68, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(71, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-group-row"'])),
						(l()(), Xs(-1, null, [' role='])),
						(l()(), Vs(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"group"'])),
						(l()(), Xs(-1, null, [' aria-label='])),
						(l()(), Vs(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button row group"'])),
						(l()(), Xs(-1, null, ['>\n    <button '])),
						(l()(), Vs(80, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(87, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(91, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(94, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(95, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(98, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(101, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(108, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(109, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(112, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(115, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(116, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(119, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(122, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(123, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(126, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(129, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(130, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(133, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(136, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(137, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(140, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(143, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(144, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(147, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), Vs(150, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(151, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(154, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-group-col"'])),
						(l()(), Xs(-1, null, [' role='])),
						(l()(), Vs(157, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"group"'])),
						(l()(), Xs(-1, null, [' aria-label='])),
						(l()(), Vs(160, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button column group"'])),
						(l()(), Xs(-1, null, ['>\n    <button '])),
						(l()(), Vs(163, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(164, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(167, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(170, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(171, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(174, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(177, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(181, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(184, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(185, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(188, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(191, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(192, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(195, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(198, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(199, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(202, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(205, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(206, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(209, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(212, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(213, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(216, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(219, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(220, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(223, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(226, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(227, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(230, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n</section>\n<section '])),
						(l()(), Vs(233, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(234, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(237, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-group-full"'])),
						(l()(), Xs(-1, null, [' role='])),
						(l()(), Vs(240, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"group"'])),
						(l()(), Xs(-1, null, [' aria-label='])),
						(l()(), Vs(243, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button full row group"'])),
						(l()(), Xs(-1, null, ['>\n    <button '])),
						(l()(), Vs(246, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(247, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(250, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(253, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(254, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(257, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(260, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(261, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(264, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(267, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(268, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(271, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(274, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(275, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(278, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(281, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(282, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(285, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(288, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(289, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(292, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(295, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(296, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(299, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n    <button '])),
						(l()(), Vs(302, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(303, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(306, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(309, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(310, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(313, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n</section>']))
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
			function Kp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 117, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Rounded'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Buttons are rounded by adding a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.rounded'])),
						(l()(), Xs(-1, null, [' class.'])),
						(l()(), Vs(9, 0, null, null, 21, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 2, 'button', [['class', 'btn-xs rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(14, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['xs'])),
						(l()(), Vs(16, 0, null, null, 2, 'button', [['class', 'btn-sm rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(17, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['sm'])),
						(l()(), Vs(19, 0, null, null, 2, 'button', [['class', 'btn-md rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(20, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['md'])),
						(l()(), Vs(22, 0, null, null, 2, 'button', [['class', 'btn-lg rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(23, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['lg'])),
						(l()(), Vs(25, 0, null, null, 2, 'button', [['class', 'btn-xl rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(26, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['xl'])),
						(l()(), Vs(28, 0, null, null, 2, 'button', [['class', 'btn-full rounded bg-dk-blue text-white bg-hover-blue'], ['type', 'button']], null, null, null, pp, dp)),
						st(29, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['full'])),
						(l()(), Vs(31, 0, null, null, 86, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(32, 0, null, null, 85, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<button '])),
						(l()(), Vs(34, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-xs rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(41, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(42, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(45, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>xs</button>\n<button '])),
						(l()(), Vs(48, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(49, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(52, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-sm rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(55, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>sm</button>\n<button '])),
						(l()(), Vs(62, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(63, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(66, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(69, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(73, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>md</button>\n<button '])),
						(l()(), Vs(76, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-lg rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(83, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>lg</button>\n<button '])),
						(l()(), Vs(90, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(94, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-xl rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(97, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(98, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(101, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>xl</button>\n<button '])),
						(l()(), Vs(104, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(105, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(108, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-full rounded bg-dk-blue text-white bg-hover-blue"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(111, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(112, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(115, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, ['>full</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0), l(n, 17, 0), l(n, 20, 0), l(n, 23, 0), l(n, 26, 0), l(n, 29, 0);
					},
					null
				);
			}
			function Yp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 32, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['State'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Buttons are disabled by adding a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['disabled'])),
						(l()(), Xs(-1, null, [' attribute.'])),
						(l()(), Vs(9, 0, null, null, 6, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 2, 'button', [['class', 'btn-md'], ['disabled', ''], ['type', 'button']], null, null, null, pp, dp)),
						st(14, 114688, null, 0, Ld, [], null, null),
						(l()(), Xs(-1, 0, ['disabled'])),
						(l()(), Vs(16, 0, null, null, 16, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 15, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<button '])),
						(l()(), Vs(19, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(20, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(23, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"btn-md"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(26, 0, null, null, 3, 'span', [['class', 'hljs-class']], null, null, null, null, null)),
						(l()(), Vs(27, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(30, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"button"'])),
						(l()(), Xs(-1, null, [' disabled>disabled</button>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 14, 0);
					},
					null
				);
			}
			function Jp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Xp(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function lg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Accordion'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ng(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Expand'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ug(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function eg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Background'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function tg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Border'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function sg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Hover'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function rg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Text'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ag(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 202, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 8, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['In order for flexbox to work, a parent container must have a '])),
						(l()(), Vs(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.row[-full]'])),
						(l()(), Xs(-1, null, [' or '])),
						(l()(), Vs(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.col[-full]'])),
						(l()(), Xs(-1, null, [' class.'])),
						(l()(), Vs(10, 0, null, null, 23, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(12, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(13, { flexbox: 0, box: 1 }),
						(l()(), Vs(14, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(15, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['row'])),
						(l()(), Vs(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['row'])),
						(l()(), Vs(19, 0, null, null, 4, 'ul', [['class', 'row-full']], null, null, null, null, null)),
						(l()(), Vs(20, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['full row'])),
						(l()(), Vs(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['full row'])),
						(l()(), Vs(24, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(25, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['column'])),
						(l()(), Vs(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['column'])),
						(l()(), Vs(29, 0, null, null, 4, 'ul', [['class', 'col-full']], null, null, null, null, null)),
						(l()(), Vs(30, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['full column'])),
						(l()(), Vs(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['full column'])),
						(l()(), Vs(34, 0, null, null, 168, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(35, 0, null, null, 167, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(36, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(38, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(41, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(44, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(48, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(50, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['row'])),
						(l()(), Vs(54, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(56, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(60, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(62, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['row'])),
						(l()(), Vs(66, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(68, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(74, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(78, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(80, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(83, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(86, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row-full"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(92, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['full row'])),
						(l()(), Vs(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(98, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(104, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['full row'])),
						(l()(), Vs(108, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(110, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(114, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(116, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(120, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(122, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(125, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(128, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(132, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(134, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['column'])),
						(l()(), Vs(138, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(140, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(146, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['column'])),
						(l()(), Vs(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(152, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(156, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(158, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(162, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(164, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(167, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(170, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col-full"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(174, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(176, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['full column'])),
						(l()(), Vs(180, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(182, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(186, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(188, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['full column'])),
						(l()(), Vs(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(194, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(200, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 13, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 12, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function og(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 486, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Container Column'])),
						(l()(), Vs(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Use an '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), Xs(-1, null, [' class to align ALL items in a '])),
						(l()(), Vs(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.col'])),
						(l()(), Xs(-1, null, [' flex container.'])),
						(l()(), Vs(12, 0, null, null, 53, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(14, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(15, { flexbox: 0, box: 1 }),
						(l()(), Vs(16, 0, null, null, 4, 'ul', [['class', 'col align-l']], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(21, 0, null, null, 4, 'ul', [['class', 'col align-c']], null, null, null, null, null)),
						(l()(), Vs(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(26, 0, null, null, 4, 'ul', [['class', 'col align-r']], null, null, null, null, null)),
						(l()(), Vs(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(31, 0, null, null, 4, 'ul', [['class', 'col align-t']], null, null, null, null, null)),
						(l()(), Vs(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(36, 0, null, null, 4, 'ul', [['class', 'col align-m']], null, null, null, null, null)),
						(l()(), Vs(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(41, 0, null, null, 4, 'ul', [['class', 'col align-b']], null, null, null, null, null)),
						(l()(), Vs(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(46, 0, null, null, 4, 'ul', [['class', 'col align-cm']], null, null, null, null, null)),
						(l()(), Vs(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(51, 0, null, null, 4, 'ul', [['class', 'col align-sa']], null, null, null, null, null)),
						(l()(), Vs(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(56, 0, null, null, 4, 'ul', [['class', 'col align-sb']], null, null, null, null, null)),
						(l()(), Vs(57, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(59, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(61, 0, null, null, 4, 'ul', [['class', 'col align-st']], null, null, null, null, null)),
						(l()(), Vs(62, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(64, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(66, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(67, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(68, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(70, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(73, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(76, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col align-l"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(80, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(82, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(86, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(88, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(92, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(94, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(98, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(100, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(106, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(110, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(112, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(115, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(118, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col align-c"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(122, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(124, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(128, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(130, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(136, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(140, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(142, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(146, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(148, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(152, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(154, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(157, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(160, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col align-r"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(164, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(166, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(170, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(172, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(176, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(178, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(184, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(188, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(190, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(194, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(196, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(199, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(202, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col align-t"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(206, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(208, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(212, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(214, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(218, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(220, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(224, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(226, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(230, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(232, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(236, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(238, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(241, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(244, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col align-m"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(248, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(250, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(254, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(256, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(260, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(262, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(266, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(268, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(272, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(274, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(278, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(280, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(283, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(286, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col align-b"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(290, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(292, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(296, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(298, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(302, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(304, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(308, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(310, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(314, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(316, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(320, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(322, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(325, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(328, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col align-cm"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(332, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(334, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(338, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(340, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(344, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(346, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(350, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(352, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(356, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(358, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(362, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(364, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(367, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(370, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col align-sa"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(374, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(376, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(380, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(382, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(386, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(388, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(392, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(394, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(398, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(400, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(404, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(406, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(409, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(412, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col align-sb"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(416, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(418, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(422, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(424, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(428, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(430, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(434, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(436, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(440, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(442, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(446, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(448, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(451, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(454, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col align-st"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(458, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(460, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(464, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(466, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(470, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(472, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(476, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(478, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(482, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(484, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function ig(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 486, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Container Row'])),
						(l()(), Vs(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Use an '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.align-[l || c || r || t || m || b || cm || sa || sb || st]'])),
						(l()(), Xs(-1, null, [' class to align ALL items in a '])),
						(l()(), Vs(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.row'])),
						(l()(), Xs(-1, null, [' flex container.'])),
						(l()(), Vs(12, 0, null, null, 53, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(14, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(15, { flexbox: 0, box: 1 }),
						(l()(), Vs(16, 0, null, null, 4, 'ul', [['class', 'row align-l']], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(21, 0, null, null, 4, 'ul', [['class', 'row align-c']], null, null, null, null, null)),
						(l()(), Vs(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(26, 0, null, null, 4, 'ul', [['class', 'row align-r']], null, null, null, null, null)),
						(l()(), Vs(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(31, 0, null, null, 4, 'ul', [['class', 'row align-t']], null, null, null, null, null)),
						(l()(), Vs(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(36, 0, null, null, 4, 'ul', [['class', 'row align-m']], null, null, null, null, null)),
						(l()(), Vs(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(41, 0, null, null, 4, 'ul', [['class', 'row align-b']], null, null, null, null, null)),
						(l()(), Vs(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(44, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(46, 0, null, null, 4, 'ul', [['class', 'row align-cm']], null, null, null, null, null)),
						(l()(), Vs(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(51, 0, null, null, 4, 'ul', [['class', 'row align-sa']], null, null, null, null, null)),
						(l()(), Vs(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(56, 0, null, null, 4, 'ul', [['class', 'row align-sb']], null, null, null, null, null)),
						(l()(), Vs(57, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(59, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(61, 0, null, null, 4, 'ul', [['class', 'row align-st']], null, null, null, null, null)),
						(l()(), Vs(62, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(64, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(66, 0, null, null, 420, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(67, 0, null, null, 419, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(68, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(70, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(73, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(76, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row align-l"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(80, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(82, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(86, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(88, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(92, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(94, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(98, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(100, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(104, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(106, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(110, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(112, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(115, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(118, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row align-c"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(122, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(124, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(128, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(130, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(134, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(136, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(140, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(142, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(146, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(148, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(152, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(154, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(157, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(160, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row align-r"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(164, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(166, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(170, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(172, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(176, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(178, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(182, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(184, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(188, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(190, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(194, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(196, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(199, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(202, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row align-t"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(206, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(208, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(212, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(214, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(218, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(220, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(224, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(226, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(230, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(232, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(236, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(238, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(241, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(244, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row align-m"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(248, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(250, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(254, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(256, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(260, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(262, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(266, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(268, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(272, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(274, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(278, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(280, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(283, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(286, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row align-b"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(290, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(292, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(296, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(298, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(302, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(304, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(308, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(310, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(314, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(316, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(320, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(322, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(325, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(328, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row align-cm"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(332, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(334, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(338, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(340, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(344, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(346, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(350, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(352, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(356, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(358, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(362, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(364, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(367, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(370, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row align-sa"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(374, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(376, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(380, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(382, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(386, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(388, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(392, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(394, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(398, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(400, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(404, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(406, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(409, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(412, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row align-sb"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(416, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(418, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(422, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(424, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(428, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(430, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(434, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(436, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(440, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(442, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(446, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(448, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(451, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(454, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row align-st"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(458, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(460, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(464, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(466, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(470, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(472, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(476, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(478, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(482, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(484, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function cg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 440, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Item Column'])),
						(l()(), Vs(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Use '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), Xs(-1, null, [' classes to align ONE child in a '])),
						(l()(), Vs(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.col'])),
						(l()(), Xs(-1, null, [' flex container.'])),
						(l()(), Vs(12, 0, null, null, 43, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(14, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(15, { flexbox: 0, box: 1 }),
						(l()(), Vs(16, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(19, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(21, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(24, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(26, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(29, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(31, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(34, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(36, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(39, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(41, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(44, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(46, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(49, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(51, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(54, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(56, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(57, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(58, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(66, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(70, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(72, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(76, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(82, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(90, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-l"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(96, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(100, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(102, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(106, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(108, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(111, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(114, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(118, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(120, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(124, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(126, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(130, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(132, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(135, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(138, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-c"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(142, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(144, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(150, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(156, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(159, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(162, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(166, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(168, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(172, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(174, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(178, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(180, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(183, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(186, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-r"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(190, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(192, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(196, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(198, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(202, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(204, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(207, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(210, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(214, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(216, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(220, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(222, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(226, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(228, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(231, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(234, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-t"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(238, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(240, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(244, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(246, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(250, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(252, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(255, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(258, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(264, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(270, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(274, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(276, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(279, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(282, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-m"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(286, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(288, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(292, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(294, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(298, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(300, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(303, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(306, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(312, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(316, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(318, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(322, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(324, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(327, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(330, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-b"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(334, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(336, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(340, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(342, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(346, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(348, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(351, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(354, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(358, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(360, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(364, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(366, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(370, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(372, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(375, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(378, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-cm"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(382, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(384, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(388, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(390, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(394, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(396, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(399, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(402, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(406, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(408, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(412, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(414, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(418, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(420, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(423, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(426, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-st"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(430, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(432, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(436, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(438, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function hg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 85, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Item Order'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Use '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.item-order-[1 - 12]'])),
						(l()(), Xs(-1, null, [' classes to align children in a flex container.'])),
						(l()(), Vs(9, 0, null, null, 13, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(14, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['1'])),
						(l()(), Vs(16, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['2'])),
						(l()(), Vs(18, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(19, 0, null, null, 1, 'li', [['class', 'item-order-2']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['1'])),
						(l()(), Vs(21, 0, null, null, 1, 'li', [['class', 'item-order-1']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['2'])),
						(l()(), Vs(23, 0, null, null, 62, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(24, 0, null, null, 61, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<ul '])),
						(l()(), Vs(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(29, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>\n    <'])),
						(l()(), Vs(32, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(38, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-order-2"'])),
						(l()(), Xs(-1, null, ['>1</'])),
						(l()(), Vs(41, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n    <'])),
						(l()(), Vs(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-order-1"'])),
						(l()(), Xs(-1, null, ['>2</'])),
						(l()(), Vs(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n</ul>\n<ul '])),
						(l()(), Vs(56, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(59, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>\n    <'])),
						(l()(), Vs(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-order-2"'])),
						(l()(), Xs(-1, null, ['>1</'])),
						(l()(), Vs(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n    <'])),
						(l()(), Vs(74, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(77, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-order-1"'])),
						(l()(), Xs(-1, null, ['>2</'])),
						(l()(), Vs(83, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n</ul>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function dg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 440, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Item Row'])),
						(l()(), Vs(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Use an '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.item-[l || c || r || t || m || b || cm || st]'])),
						(l()(), Xs(-1, null, [' class to align ONE child in a '])),
						(l()(), Vs(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.row'])),
						(l()(), Xs(-1, null, [' flex container.'])),
						(l()(), Vs(12, 0, null, null, 43, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(14, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(15, { flexbox: 0, box: 1 }),
						(l()(), Vs(16, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(19, 0, null, null, 1, 'li', [['class', 'item-l']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(21, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(22, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(24, 0, null, null, 1, 'li', [['class', 'item-c']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(26, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(27, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(29, 0, null, null, 1, 'li', [['class', 'item-r']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(31, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(32, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(34, 0, null, null, 1, 'li', [['class', 'item-t']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(36, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(37, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(39, 0, null, null, 1, 'li', [['class', 'item-m']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(41, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(44, 0, null, null, 1, 'li', [['class', 'item-b']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(46, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(49, 0, null, null, 1, 'li', [['class', 'item-cm']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(51, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(54, 0, null, null, 1, 'li', [['class', 'item-st']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(56, 0, null, null, 384, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(57, 0, null, null, 383, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(58, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(66, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(70, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(72, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(76, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(82, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(90, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-l"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(94, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(96, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(100, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(102, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(106, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(108, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(111, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(114, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(118, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(120, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(124, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(126, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(130, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(132, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(135, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(138, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-c"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(142, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(144, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(150, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(156, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(159, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(162, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(166, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(168, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(172, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(174, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(178, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(180, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(183, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(186, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-r"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(190, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(192, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(196, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(198, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(202, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(204, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(207, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(210, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(214, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(216, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(220, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(222, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(226, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(228, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(231, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(234, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-t"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(238, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(240, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(244, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(246, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(250, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(252, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(255, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(258, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(264, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(270, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(274, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(276, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(279, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(282, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-m"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(286, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(288, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(292, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(294, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(298, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(300, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(303, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(306, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(312, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(316, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(318, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(322, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(324, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(327, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(330, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-b"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(334, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(336, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(340, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(342, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(346, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(348, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(351, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(354, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(358, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(360, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(364, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(366, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(370, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(372, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(375, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(378, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-cm"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center middle'])),
						(l()(), Vs(382, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(384, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(388, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(390, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(394, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(396, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(399, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(402, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(406, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(408, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(412, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(414, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(418, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(420, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(423, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(426, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-st"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(430, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(432, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(436, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(438, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function pg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 331, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Item Size'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Use '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.item-[g || s || gs]-[1 - 12]'])),
						(l()(), Xs(-1, null, [' classes to grow and/or shrink children in a flex container.'])),
						(l()(), Vs(9, 0, null, null, 33, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(14, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(16, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['grow'])),
						(l()(), Vs(18, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(21, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['shrink'])),
						(l()(), Vs(23, 0, null, null, 4, 'ul', [['class', 'row']], null, null, null, null, null)),
						(l()(), Vs(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(26, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['grow & shrink'])),
						(l()(), Vs(28, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(29, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(31, 0, null, null, 1, 'li', [['class', 'item-g-1']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['grow'])),
						(l()(), Vs(33, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(34, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(36, 0, null, null, 1, 'li', [['class', 'item-s-1']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['shrink'])),
						(l()(), Vs(38, 0, null, null, 4, 'ul', [['class', 'col']], null, null, null, null, null)),
						(l()(), Vs(39, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(41, 0, null, null, 1, 'li', [['class', 'item-gs-1']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['grow & shrink'])),
						(l()(), Vs(43, 0, null, null, 288, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(44, 0, null, null, 287, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(45, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(47, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(50, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(53, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(57, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(59, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(63, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(65, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(69, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(71, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(74, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(77, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-g-1"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['grow'])),
						(l()(), Vs(81, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(83, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(87, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(89, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(93, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(95, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(98, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(101, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(105, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(107, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(111, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(113, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(117, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(119, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(122, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(125, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-s-1"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['shrink'])),
						(l()(), Vs(129, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(131, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(135, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(137, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(141, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(143, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(146, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(149, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(153, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(155, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(159, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(161, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(165, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(167, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(170, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(173, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-gs-1"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['grow &amp; shrink'])),
						(l()(), Vs(177, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(179, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(183, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(185, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(189, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(191, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(194, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(197, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(201, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(203, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(207, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(209, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(213, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(215, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(218, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(221, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-g-1"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['grow'])),
						(l()(), Vs(225, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(227, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(231, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(233, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(237, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(239, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(242, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(245, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(249, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(251, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(255, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(257, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(261, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(263, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(266, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(269, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-s-1"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['shrink'])),
						(l()(), Vs(273, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(275, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(279, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(281, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(285, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(287, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(290, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(293, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(297, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(299, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['default'])),
						(l()(), Vs(303, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(305, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(309, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(311, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(314, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(317, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"item-gs-1"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['grow &amp; shrink'])),
						(l()(), Vs(321, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(323, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(327, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(329, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function gg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 382, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Wrap Column'])),
						(l()(), Vs(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Use a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.wrap-[c || l || r || sa || sb || st]'])),
						(l()(), Xs(-1, null, [' class to align multi-column items in a '])),
						(l()(), Vs(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.col'])),
						(l()(), Xs(-1, null, [' flex container.'])),
						(l()(), Vs(12, 0, null, null, 45, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(14, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(15, { flexbox: 0, box: 1 }),
						(l()(), Vs(16, 0, null, null, 6, 'ul', [['class', 'col wrap-c']], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(23, 0, null, null, 6, 'ul', [['class', 'col wrap-l']], null, null, null, null, null)),
						(l()(), Vs(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(30, 0, null, null, 6, 'ul', [['class', 'col wrap-r']], null, null, null, null, null)),
						(l()(), Vs(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(35, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(37, 0, null, null, 6, 'ul', [['class', 'col wrap-sa']], null, null, null, null, null)),
						(l()(), Vs(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(40, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(44, 0, null, null, 6, 'ul', [['class', 'col wrap-sb']], null, null, null, null, null)),
						(l()(), Vs(45, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(51, 0, null, null, 6, 'ul', [['class', 'col wrap-st']], null, null, null, null, null)),
						(l()(), Vs(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(58, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(59, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(60, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(62, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(65, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(68, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col wrap-c"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(74, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(78, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(80, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(84, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(86, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(92, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(98, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['center'])),
						(l()(), Vs(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(104, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(108, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(110, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(114, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(116, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(119, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(122, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col wrap-l"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(126, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(128, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(132, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(134, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(138, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(140, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(146, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(152, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['left (default)'])),
						(l()(), Vs(156, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(158, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(162, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(164, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(168, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(170, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(173, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(176, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col wrap-r"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(180, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(182, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(186, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(188, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(194, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(200, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(204, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(206, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Vs(210, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(212, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(216, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(218, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(222, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(224, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(227, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(230, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col wrap-sa"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(234, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(236, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(240, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(242, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(246, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(248, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(252, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(254, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(258, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(260, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(264, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(266, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(270, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(272, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(276, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(278, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(281, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(284, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col wrap-sb"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(288, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(290, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(294, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(296, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(300, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(302, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(306, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(308, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(312, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(314, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(318, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(320, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(324, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(326, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(330, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(332, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(335, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(338, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"col wrap-st"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(342, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(344, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(348, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(350, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(354, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(356, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(360, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(362, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(366, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(368, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(372, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(374, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(378, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(380, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function fg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 382, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Wrap Row'])),
						(l()(), Vs(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Use a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.wrap-[m || t || b || sa || sb || st]'])),
						(l()(), Xs(-1, null, [' class to align multi-row items in a '])),
						(l()(), Vs(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.row'])),
						(l()(), Xs(-1, null, [' flex container.'])),
						(l()(), Vs(12, 0, null, null, 45, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(14, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(15, { flexbox: 0, box: 1 }),
						(l()(), Vs(16, 0, null, null, 6, 'ul', [['class', 'row wrap-m']], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(19, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(21, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(23, 0, null, null, 6, 'ul', [['class', 'row wrap-t']], null, null, null, null, null)),
						(l()(), Vs(24, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(26, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(28, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(30, 0, null, null, 6, 'ul', [['class', 'row wrap-b']], null, null, null, null, null)),
						(l()(), Vs(31, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(33, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(35, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(37, 0, null, null, 6, 'ul', [['class', 'row wrap-sa']], null, null, null, null, null)),
						(l()(), Vs(38, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(40, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(42, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(44, 0, null, null, 6, 'ul', [['class', 'row wrap-sb']], null, null, null, null, null)),
						(l()(), Vs(45, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(47, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(49, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(51, 0, null, null, 6, 'ul', [['class', 'row wrap-st']], null, null, null, null, null)),
						(l()(), Vs(52, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(54, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(56, 0, null, null, 1, 'li', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(58, 0, null, null, 324, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(59, 0, null, null, 323, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(60, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(62, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(65, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(68, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row wrap-m"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(72, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(74, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(78, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(80, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(84, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(86, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(90, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(92, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(96, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(98, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['middle'])),
						(l()(), Vs(102, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(104, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(108, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(110, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(114, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(116, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(119, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(122, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row wrap-t"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(126, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(128, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(132, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(134, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(138, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(140, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(144, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(146, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(150, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(152, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['top (default)'])),
						(l()(), Vs(156, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(158, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(162, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(164, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(168, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(170, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(173, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(176, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row wrap-b"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(180, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(182, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(186, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(188, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(192, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(194, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(198, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(200, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(204, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(206, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Vs(210, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(212, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(216, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(218, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(222, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(224, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(227, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(230, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row wrap-sa"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(234, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(236, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(240, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(242, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(246, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(248, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(252, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(254, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(258, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(260, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space around'])),
						(l()(), Vs(264, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(266, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(270, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(272, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(276, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(278, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(281, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(284, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row wrap-sb"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(288, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(290, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(294, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(296, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(300, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(302, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(306, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(308, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(312, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(314, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['space between'])),
						(l()(), Vs(318, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(320, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(324, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(326, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(330, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(332, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(335, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(338, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"row wrap-st"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(342, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(344, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(348, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(350, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(354, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(356, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(360, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(362, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(366, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(368, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['stretch'])),
						(l()(), Vs(372, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(374, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(378, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(380, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function mg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 15, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 14, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 13, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Forms are styled with '])),
						(l()(), Vs(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.form-group'])),
						(l()(), Xs(-1, null, [', '])),
						(l()(), Vs(7, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.field-group'])),
						(l()(), Xs(-1, null, [', '])),
						(l()(), Vs(10, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.form-label'])),
						(l()(), Xs(-1, null, [', and '])),
						(l()(), Vs(13, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.form-field'])),
						(l()(), Xs(-1, null, [' classes.']))
					],
					null,
					null
				);
			}
			function bg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 504, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Checkbox'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Checkboxes and radio buttons are grouped with a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.*-group'])),
						(l()(), Xs(-1, null, [' class on a parent container.'])),
						(l()(), Vs(9, 0, null, null, 69, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 65, 'form', [], null, null, null, null, null)),
						(l()(), Vs(14, 0, null, null, 64, 'ul', [['class', 'form-group']], null, null, null, fp, gp)),
						st(15, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(17, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, fp, gp)),
						st(19, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Name'])),
						(l()(), Vs(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, fp, gp)),
						st(22, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(23, 0, null, 0, 20, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(24, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(25, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, fp, gp)),
						st(26, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Agree'])),
						(l()(), Vs(28, 0, null, 0, 15, 'ul', [['class', 'radio-group']], null, null, null, fp, gp)),
						st(29, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(30, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(31, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(32, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yes'], ['name', 'agree'], ['type', 'radio']], null, null, null, fp, gp)),
						st(33, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(34, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yes']], null, null, null, fp, gp)),
						st(35, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Yes'])),
						(l()(), Vs(37, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(38, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(39, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'no'], ['name', 'agree'], ['type', 'radio']], null, null, null, fp, gp)),
						st(40, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(41, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'no']], null, null, null, fp, gp)),
						st(42, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['No'])),
						(l()(), Vs(44, 0, null, 0, 34, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(45, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(46, 0, null, 0, 2, 'p', [['class', 'form-label']], null, null, null, fp, gp)),
						st(47, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Color'])),
						(l()(), Vs(49, 0, null, 0, 29, 'ul', [['class', 'checkbox-group']], null, null, null, fp, gp)),
						st(50, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(51, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(52, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(53, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'blue'], ['name', 'color'], ['type', 'checkbox']], null, null, null, fp, gp)),
						st(54, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(55, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'blue']], null, null, null, fp, gp)),
						st(56, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Blue'])),
						(l()(), Vs(58, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(59, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(60, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'green'], ['name', 'color'], ['type', 'checkbox']], null, null, null, fp, gp)),
						st(61, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(62, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'green']], null, null, null, fp, gp)),
						st(63, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Green'])),
						(l()(), Vs(65, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(66, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(67, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'red'], ['name', 'color'], ['type', 'checkbox']], null, null, null, fp, gp)),
						st(68, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(69, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'red']], null, null, null, fp, gp)),
						st(70, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Red'])),
						(l()(), Vs(72, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(73, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(74, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'yellow'], ['name', 'color'], ['type', 'checkbox']], null, null, null, fp, gp)),
						st(75, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(76, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'yellow']], null, null, null, fp, gp)),
						st(77, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Yellow'])),
						(l()(), Vs(79, 0, null, null, 425, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(80, 0, null, null, 424, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(82, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>\n    <ul '])),
						(l()(), Vs(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(88, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-group"'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(94, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(97, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(100, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(103, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(106, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(109, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(112, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, ['>Name</'])),
						(l()(), Vs(115, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(118, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(121, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(124, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(127, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(130, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(133, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(136, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' placeholder='])),
						(l()(), Vs(139, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter name"'])),
						(l()(), Xs(-1, null, ['>\n        </'])),
						(l()(), Vs(142, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(145, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(148, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(151, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <p '])),
						(l()(), Vs(154, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(157, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, ['>Agree</p>\n            <ul '])),
						(l()(), Vs(160, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(163, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"radio-group"'])),
						(l()(), Xs(-1, null, ['>\n                <'])),
						(l()(), Vs(166, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(169, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(172, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(175, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(181, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(184, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(187, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"radio"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(190, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"agree"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(193, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"yes"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(196, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(199, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(202, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(205, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(208, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"yes"'])),
						(l()(), Xs(-1, null, ['>Yes</'])),
						(l()(), Vs(211, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n                </'])),
						(l()(), Vs(214, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n                <'])),
						(l()(), Vs(217, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(220, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(223, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(226, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(229, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(232, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(235, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(238, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"radio"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(241, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"agree"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(244, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"no"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(247, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(250, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(253, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(256, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(259, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"no"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(262, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['No'])),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(265, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n                </'])),
						(l()(), Vs(268, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), Vs(271, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(274, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(277, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(280, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <p '])),
						(l()(), Vs(283, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(286, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, ['>Color</p>\n            <ul '])),
						(l()(), Vs(289, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(292, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"checkbox-group"'])),
						(l()(), Xs(-1, null, ['>\n                <'])),
						(l()(), Vs(295, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(298, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(301, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(304, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(307, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(310, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(313, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(316, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"checkbox"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(319, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"color"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(322, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"blue"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(325, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(328, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(331, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(334, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(337, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"blue"'])),
						(l()(), Xs(-1, null, ['>Blue</'])),
						(l()(), Vs(340, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n                </'])),
						(l()(), Vs(343, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n                <'])),
						(l()(), Vs(346, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(349, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(352, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(355, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(358, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(361, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(364, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(367, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"checkbox"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(370, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"color"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(373, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"green"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(376, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(379, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(382, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(385, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(388, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"green"'])),
						(l()(), Xs(-1, null, ['>Green</'])),
						(l()(), Vs(391, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n                </'])),
						(l()(), Vs(394, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n                <'])),
						(l()(), Vs(397, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(400, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(403, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(406, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(409, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(412, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(415, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(418, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"checkbox"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(421, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"color"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(424, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"red"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(427, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(430, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(433, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(436, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(439, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"red"'])),
						(l()(), Xs(-1, null, ['>Red</'])),
						(l()(), Vs(442, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n                </'])),
						(l()(), Vs(445, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n                <'])),
						(l()(), Vs(448, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(451, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(454, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(457, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(460, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(463, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(466, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(469, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"checkbox"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(472, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"color"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(475, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"yellow"'])),
						(l()(), Xs(-1, null, ['>\n                    <'])),
						(l()(), Vs(478, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(481, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(484, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(487, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(490, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"yellow"'])),
						(l()(), Xs(-1, null, ['>Yellow</'])),
						(l()(), Vs(493, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n                </'])),
						(l()(), Vs(496, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n            </ul>\n        </'])),
						(l()(), Vs(499, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Vs(502, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>']))
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
			function yg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 478, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Field'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Form fields are styled with a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.form-field'])),
						(l()(), Xs(-1, null, [' class. Different styles are applied based on the form field.'])),
						(l()(), Vs(9, 0, null, null, 46, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 42, 'form', [], null, null, null, null, null)),
						(l()(), Vs(14, 0, null, null, 41, 'ul', [['class', 'form-group']], null, null, null, fp, gp)),
						st(15, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(17, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, fp, gp)),
						st(19, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Name'])),
						(l()(), Vs(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, fp, gp)),
						st(22, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(23, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(24, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(25, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'gender']], null, null, null, fp, gp)),
						st(26, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Gender'])),
						(l()(), Vs(28, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'gender'], ['name', 'gender']], null, null, null, fp, gp)),
						st(29, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(30, 0, null, 0, 1, 'option', [['value', '1']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Select'])),
						(l()(), Vs(32, 0, null, 0, 1, 'option', [['value', '2']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Female'])),
						(l()(), Vs(34, 0, null, 0, 1, 'option', [['value', '3']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Male'])),
						(l()(), Vs(36, 0, null, 0, 12, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(37, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(38, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'language']], null, null, null, fp, gp)),
						st(39, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Language'])),
						(l()(), Vs(41, 0, null, 0, 7, 'select', [['class', 'form-field'], ['id', 'language'], ['multiple', ''], ['name', 'language']], null, null, null, fp, gp)),
						st(42, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(43, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['English'])),
						(l()(), Vs(45, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['French'])),
						(l()(), Vs(47, 0, null, 0, 1, 'option', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Spanish'])),
						(l()(), Vs(49, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(50, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(51, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'notes']], null, null, null, fp, gp)),
						st(52, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Notes'])),
						(l()(), Vs(54, 0, null, 0, 1, 'textarea', [['class', 'form-field'], ['id', 'notes'], ['name', 'notes'], ['placeholder', 'Enter notes']], null, null, null, fp, gp)),
						st(55, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(56, 0, null, null, 422, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(57, 0, null, null, 421, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(58, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(60, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(64, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(66, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(69, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(72, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-group"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n        '])),
						(l()(), Vs(76, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(78, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(81, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n            '])),
						(l()(), Vs(88, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(90, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(93, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(96, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(99, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(102, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['Name'])),
						(l()(), Vs(106, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(108, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n            '])),
						(l()(), Vs(112, 0, null, null, 34, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(114, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(117, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(120, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(123, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(126, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(129, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['id'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(132, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(135, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['name'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(138, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(141, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['placeholder'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(144, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter name"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n        '])),
						(l()(), Vs(148, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(150, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n        '])),
						(l()(), Vs(154, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(156, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(159, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(162, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n            '])),
						(l()(), Vs(166, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(168, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(171, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(174, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(177, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(180, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"gender"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['Gender'])),
						(l()(), Vs(184, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(186, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n            '])),
						(l()(), Vs(190, 0, null, null, 22, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(192, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['select'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(195, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(198, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(201, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['name'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(204, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"gender"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(207, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['id'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(210, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"gender"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n                '])),
						(l()(), Vs(214, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(216, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(219, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['value'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(222, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"1"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['Select'])),
						(l()(), Vs(226, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(228, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n                '])),
						(l()(), Vs(232, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(234, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(237, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['value'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(240, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"2"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['Female'])),
						(l()(), Vs(244, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(246, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n                '])),
						(l()(), Vs(250, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(252, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(255, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['value'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(258, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"3"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['Male'])),
						(l()(), Vs(262, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(264, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n            '])),
						(l()(), Vs(268, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(270, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['select'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n        '])),
						(l()(), Vs(274, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(276, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n        '])),
						(l()(), Vs(280, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(282, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(285, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(288, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n            '])),
						(l()(), Vs(292, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(294, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(297, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(300, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(303, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(306, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"language"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['Language'])),
						(l()(), Vs(310, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(312, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n            '])),
						(l()(), Vs(316, 0, null, null, 25, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(318, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['select'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(321, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(324, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(327, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['name'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(330, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"language"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(333, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['id'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(336, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"language"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(339, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['multiple'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n                '])),
						(l()(), Vs(343, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(345, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['English'])),
						(l()(), Vs(349, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(351, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n                '])),
						(l()(), Vs(355, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(357, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['French'])),
						(l()(), Vs(361, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(363, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n                '])),
						(l()(), Vs(367, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(369, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['Spanish'])),
						(l()(), Vs(373, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(375, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['option'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n            '])),
						(l()(), Vs(379, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(381, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['select'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n        '])),
						(l()(), Vs(385, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(387, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n        '])),
						(l()(), Vs(391, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(393, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(396, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(399, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n            '])),
						(l()(), Vs(403, 0, null, null, 16, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(405, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(408, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(411, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(414, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(417, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"notes"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['Notes'])),
						(l()(), Vs(421, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(423, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n            '])),
						(l()(), Vs(427, 0, null, null, 28, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(429, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['textarea'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(432, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(435, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(438, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['name'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(441, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"notes"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(444, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['id'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(447, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"notes"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(450, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['placeholder'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(453, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter notes"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(456, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(458, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['textarea'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n        '])),
						(l()(), Vs(462, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(464, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n    '])),
						(l()(), Vs(468, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(470, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['ul'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['    \n'])),
						(l()(), Vs(474, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(476, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>']))
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
			function wg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 91, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Field Group'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Field groups are styled with a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.field-group'])),
						(l()(), Xs(-1, null, [' class.'])),
						(l()(), Vs(9, 0, null, null, 13, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), Vs(14, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, fp, gp)),
						st(15, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(17, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, fp, gp)),
						st(19, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Name'])),
						(l()(), Vs(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, fp, gp)),
						st(22, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(23, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(24, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>\n    <ul '])),
						(l()(), Vs(29, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-group"'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(38, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, ['>Name</'])),
						(l()(), Vs(59, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' placeholder='])),
						(l()(), Vs(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter name"'])),
						(l()(), Xs(-1, null, ['>\n        </'])),
						(l()(), Vs(86, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Vs(89, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 15, 0), l(n, 17, 0), l(n, 19, 0), l(n, 22, 0);
					},
					null
				);
			}
			function jg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 104, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Fieldset'])),
						(l()(), Vs(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Fieldsets are styled with a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.fieldset'])),
						(l()(), Xs(-1, null, [' class and have a '])),
						(l()(), Vs(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<legend>'])),
						(l()(), Xs(-1, null, [' tag as the first child.'])),
						(l()(), Vs(12, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(14, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(15, { flexbox: 0, box: 1 }),
						(l()(), Vs(16, 0, null, null, 13, 'form', [], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 12, 'fieldset', [['class', 'fieldset']], null, null, null, fp, gp)),
						st(18, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(19, 0, null, 0, 1, 'legend', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Contact'])),
						(l()(), Vs(21, 0, null, 0, 8, 'ul', [['class', 'form-group']], null, null, null, fp, gp)),
						st(22, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(23, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(24, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(25, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, fp, gp)),
						st(26, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Name'])),
						(l()(), Vs(28, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, fp, gp)),
						st(29, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(30, 0, null, null, 74, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(31, 0, null, null, 73, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(33, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>\n    <fieldset '])),
						(l()(), Vs(36, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(39, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"fieldset"'])),
						(l()(), Xs(-1, null, ['>\n        <legend>Contact</legend>\n        <ul '])),
						(l()(), Vs(42, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(45, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-group"'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(48, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(51, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(54, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n                <'])),
						(l()(), Vs(57, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(60, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(63, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(66, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(69, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, ['>Name</'])),
						(l()(), Vs(72, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n                <'])),
						(l()(), Vs(75, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(78, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(90, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' placeholder='])),
						(l()(), Vs(96, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter name"'])),
						(l()(), Xs(-1, null, ['>\n            </'])),
						(l()(), Vs(99, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n        </ul>\n    </fieldset>    \n</'])),
						(l()(), Vs(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e), l(n, 18, 0), l(n, 22, 0), l(n, 24, 0), l(n, 26, 0), l(n, 29, 0);
					},
					null
				);
			}
			function vg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 285, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Form Group'])),
						(l()(), Vs(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Form groups are styled with a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.form-group'])),
						(l()(), Xs(-1, null, [' class for vertical fields and '])),
						(l()(), Vs(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.form-group-inline'])),
						(l()(), Xs(-1, null, [' for horizontal fields.'])),
						(l()(), Vs(12, 0, null, null, 36, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(14, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(15, { flexbox: 0, box: 1 }),
						(l()(), Vs(16, 0, null, null, 32, 'form', [], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 15, 'ul', [['class', 'form-group-inline']], null, null, null, fp, gp)),
						st(18, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(19, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(20, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(21, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, fp, gp)),
						st(22, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Name'])),
						(l()(), Vs(24, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, fp, gp)),
						st(25, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(26, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(27, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(28, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, fp, gp)),
						st(29, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Email'])),
						(l()(),
						Vs(31, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, fp, gp)),
						st(32, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(33, 0, null, null, 15, 'ul', [['class', 'form-group']], null, null, null, fp, gp)),
						st(34, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(35, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(36, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(37, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, fp, gp)),
						st(38, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Name'])),
						(l()(), Vs(40, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, fp, gp)),
						st(41, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(42, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(43, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(44, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'email']], null, null, null, fp, gp)),
						st(45, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Email'])),
						(l()(),
						Vs(47, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'email'], ['name', 'email'], ['placeholder', 'Enter email'], ['type', 'text']], null, null, null, fp, gp)),
						st(48, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(49, 0, null, null, 236, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(50, 0, null, null, 235, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(52, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>\n    <ul '])),
						(l()(), Vs(55, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(58, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-group-inline"'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(61, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(64, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(67, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(70, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(73, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(76, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(79, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(82, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, ['>Name</'])),
						(l()(), Vs(85, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(88, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(91, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(94, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(97, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(100, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(103, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(106, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' placeholder='])),
						(l()(), Vs(109, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter name"'])),
						(l()(), Xs(-1, null, ['>\n        </'])),
						(l()(), Vs(112, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(115, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(118, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(121, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(124, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(127, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(130, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(133, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(136, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"email"'])),
						(l()(), Xs(-1, null, ['>Email</'])),
						(l()(), Vs(139, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(142, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(145, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(148, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(151, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(154, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(157, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"email"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(160, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"email"'])),
						(l()(), Xs(-1, null, [' placeholder='])),
						(l()(), Vs(163, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter email"'])),
						(l()(), Xs(-1, null, ['>\n        </'])),
						(l()(), Vs(166, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n    </ul>    \n    <ul '])),
						(l()(), Vs(169, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(172, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-group"'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(175, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(178, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(181, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(184, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(187, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(190, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(193, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(196, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, ['>Name</'])),
						(l()(), Vs(199, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(202, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(205, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(208, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(211, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(214, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(217, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(220, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' placeholder='])),
						(l()(), Vs(223, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter name"'])),
						(l()(), Xs(-1, null, ['>\n        </'])),
						(l()(), Vs(226, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(229, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(232, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(235, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(238, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(241, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(244, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(247, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(250, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"email"'])),
						(l()(), Xs(-1, null, ['>Email</'])),
						(l()(), Vs(253, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(256, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(259, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(262, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(265, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(268, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(271, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"email"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(274, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"email"'])),
						(l()(), Xs(-1, null, [' placeholder='])),
						(l()(), Vs(277, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter email"'])),
						(l()(), Xs(-1, null, ['>\n        </'])),
						(l()(), Vs(280, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Vs(283, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>']))
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
			function xg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 91, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Label'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Form labels are styled with a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.form-label'])),
						(l()(), Xs(-1, null, [' class.'])),
						(l()(), Vs(9, 0, null, null, 13, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 9, 'form', [], null, null, null, null, null)),
						(l()(), Vs(14, 0, null, null, 8, 'ul', [['class', 'form-group']], null, null, null, fp, gp)),
						st(15, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(16, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(17, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(18, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, fp, gp)),
						st(19, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Name'])),
						(l()(), Vs(21, 0, null, 0, 1, 'input', [['class', 'form-field'], ['id', 'name'], ['name', 'name'], ['placeholder', 'Enter name'], ['type', 'text']], null, null, null, fp, gp)),
						st(22, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(23, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(24, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(26, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>\n    <ul '])),
						(l()(), Vs(29, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(32, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-group"'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(35, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(38, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(41, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(44, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(47, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(50, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(53, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(56, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, ['>Name</'])),
						(l()(), Vs(59, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(62, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(65, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(68, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(71, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(74, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(77, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(80, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' placeholder='])),
						(l()(), Vs(83, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter name"'])),
						(l()(), Xs(-1, null, ['>\n        </'])),
						(l()(), Vs(86, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Vs(89, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e), l(n, 15, 0), l(n, 17, 0), l(n, 19, 0), l(n, 22, 0);
					},
					null
				);
			}
			function _g(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 155, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 10, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['State'])),
						(l()(), Vs(4, 0, null, null, 7, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Form fields can be disabled by adding a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['disabled'])),
						(l()(), Xs(-1, null, [' attribute or readonly by adding a '])),
						(l()(), Vs(9, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['readonly'])),
						(l()(), Xs(-1, null, [' attribute. '])),
						(l()(), Vs(12, 0, null, null, 20, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(14, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(15, { flexbox: 0, box: 1 }),
						(l()(), Vs(16, 0, null, null, 16, 'form', [], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 15, 'ul', [['class', 'form-group']], null, null, null, fp, gp)),
						st(18, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(19, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(20, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(21, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, fp, gp)),
						st(22, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Disabled'])),
						(l()(),
						Vs(
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
							fp,
							gp
						)),
						st(25, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(26, 0, null, 0, 6, 'li', [['class', 'field-group']], null, null, null, fp, gp)),
						st(27, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(28, 0, null, 0, 2, 'label', [['class', 'form-label'], ['for', 'name']], null, null, null, fp, gp)),
						st(29, 114688, null, 0, $d, [], null, null),
						(l()(), Xs(-1, 0, ['Readonly'])),
						(l()(),
						Vs(
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
							fp,
							gp
						)),
						st(32, 114688, null, 0, $d, [], null, null),
						(l()(), Vs(33, 0, null, null, 122, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(34, 0, null, null, 121, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(36, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>\n    <ul '])),
						(l()(), Vs(39, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-group"'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(45, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(48, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(54, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(57, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(60, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(63, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(66, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, ['>Disabled</'])),
						(l()(), Vs(69, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(72, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(75, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(78, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(81, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(87, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(90, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' placeholder='])),
						(l()(), Vs(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter name"'])),
						(l()(), Xs(-1, null, [' disabled>\n        </'])),
						(l()(), Vs(96, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n        <'])),
						(l()(), Vs(99, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(102, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(105, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"field-group"'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(108, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(111, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(114, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-label"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(117, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['for'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(120, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, ['>Readonly</'])),
						(l()(), Vs(123, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['label'])),
						(l()(), Xs(-1, null, ['>\n            <'])),
						(l()(), Vs(126, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['input'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(129, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(132, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"form-field"'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(135, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['type'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(138, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"text"'])),
						(l()(), Xs(-1, null, [' id='])),
						(l()(), Vs(141, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' name='])),
						(l()(), Vs(144, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"name"'])),
						(l()(), Xs(-1, null, [' placeholder='])),
						(l()(), Vs(147, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"Enter name"'])),
						(l()(), Xs(-1, null, [' readonly>\n        </'])),
						(l()(), Vs(150, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['li'])),
						(l()(), Xs(-1, null, ['>\n    </ul>    \n</'])),
						(l()(), Vs(153, 0, null, null, 1, 'span', [['class', 'hljs-keyword']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['form'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 15, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 14, 0, 'pad-a-sm', e), l(n, 18, 0), l(n, 20, 0), l(n, 22, 0), l(n, 25, 0), l(n, 27, 0), l(n, 29, 0), l(n, 32, 0);
					},
					null
				);
			}
			function kg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Cg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Area'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Sg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Container'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Eg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Item'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ig(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Pg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Container'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Og(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Sticky Footer'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Tg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Mg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Rg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Items'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ag(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Links'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ng(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Placement'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Dg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Ug(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Fg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Lg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Resets are used to remove padding and margin from all elements. Use space classes to add spacing to elements.']))
					],
					null,
					null
				);
			}
			function Vg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 95, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Margin'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Use a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.mar-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), Xs(-1, null, [' class to add margin to an element.'])),
						(l()(), Vs(9, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 1, 'p', [['class', 'mar-t-xs']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top extra small'])),
						(l()(), Vs(15, 0, null, null, 1, 'p', [['class', 'mar-r-sm']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right small'])),
						(l()(), Vs(17, 0, null, null, 1, 'p', [['class', 'mar-b-md']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom medium'])),
						(l()(), Vs(19, 0, null, null, 1, 'p', [['class', 'mar-l-lg']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left large'])),
						(l()(), Vs(21, 0, null, null, 1, 'p', [['class', 'mar-tb-xl']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top bottom extra large'])),
						(l()(), Vs(23, 0, null, null, 1, 'p', [['class', 'mar-lr-md']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left right medium'])),
						(l()(), Vs(25, 0, null, null, 1, 'p', [['class', 'mar-a-md']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['all medium'])),
						(l()(), Vs(27, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(28, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(30, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(33, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"mar-t-xs"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(36, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top'])),
						(l()(), Xs(-1, null, [' extra small</p>\n<'])),
						(l()(), Vs(39, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"mar-r-sm"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(45, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Xs(-1, null, [' small</p>\n<'])),
						(l()(), Vs(48, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"mar-b-md"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(54, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Xs(-1, null, [' medium</p>\n<'])),
						(l()(), Vs(57, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(60, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"mar-l-lg"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left'])),
						(l()(), Xs(-1, null, [' large</p>\n<'])),
						(l()(), Vs(66, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(69, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"mar-tb-xl"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(72, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(75, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Xs(-1, null, [' extra large</p>\n<'])),
						(l()(), Vs(78, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"mar-lr-md"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Xs(-1, null, [' medium</p>\n<'])),
						(l()(), Vs(90, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"mar-a-md"'])),
						(l()(), Xs(-1, null, ['>all medium</p>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function zg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 95, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 7, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Padding'])),
						(l()(), Vs(4, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Use a '])),
						(l()(), Vs(6, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.pad-[t || r || b || l || tb || lr || a]-[xs || sm || md || lg || xl]'])),
						(l()(), Xs(-1, null, [' class to add padding to an element.'])),
						(l()(), Vs(9, 0, null, null, 17, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(11, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(12, { flexbox: 0, box: 1 }),
						(l()(), Vs(13, 0, null, null, 1, 'p', [['class', 'pad-t-xs']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top extra small'])),
						(l()(), Vs(15, 0, null, null, 1, 'p', [['class', 'pad-r-sm']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right small'])),
						(l()(), Vs(17, 0, null, null, 1, 'p', [['class', 'pad-b-md']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom medium'])),
						(l()(), Vs(19, 0, null, null, 1, 'p', [['class', 'pad-l-lg']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left large'])),
						(l()(), Vs(21, 0, null, null, 1, 'p', [['class', 'pad-tb-xl']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top bottom extra large'])),
						(l()(), Vs(23, 0, null, null, 1, 'p', [['class', 'pad-lr-md']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left right medium'])),
						(l()(), Vs(25, 0, null, null, 1, 'p', [['class', 'pad-a-md']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['all medium'])),
						(l()(), Vs(27, 0, null, null, 68, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(28, 0, null, null, 67, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(30, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(33, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"pad-t-xs"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(36, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top'])),
						(l()(), Xs(-1, null, [' extra small</p>\n<'])),
						(l()(), Vs(39, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(42, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"pad-r-sm"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(45, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Xs(-1, null, [' small</p>\n<'])),
						(l()(), Vs(48, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(51, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"pad-b-md"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(54, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Xs(-1, null, [' medium</p>\n<'])),
						(l()(), Vs(57, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(60, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"pad-l-lg"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(63, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left'])),
						(l()(), Xs(-1, null, [' large</p>\n<'])),
						(l()(), Vs(66, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(69, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"pad-tb-xl"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(72, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['top'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(75, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['bottom'])),
						(l()(), Xs(-1, null, [' extra large</p>\n<'])),
						(l()(), Vs(78, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(81, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"pad-lr-md"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(84, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['left'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(87, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['right'])),
						(l()(), Xs(-1, null, [' medium</p>\n<'])),
						(l()(), Vs(90, 0, null, null, 1, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' class='])),
						(l()(), Vs(93, 0, null, null, 1, 'span', [['class', 'hljs-string']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"pad-a-md"'])),
						(l()(), Xs(-1, null, ['>all medium</p>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 12, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 11, 0, 'pad-a-sm', e);
					},
					null
				);
			}
			function Hg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 49, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 5, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 4, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Spinners are styled with a '])),
						(l()(), Vs(4, 0, null, null, 1, 'code', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['.spinner[-dotted]'])),
						(l()(), Xs(-1, null, [' class.'])),
						(l()(), Vs(7, 0, null, null, 7, 'section', [['class', 'pad-a-sm']], null, null, null, null, null)),
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(9, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(10, { flexbox: 0, box: 1 }),
						(l()(), Vs(11, 0, null, null, 1, 'p', [['class', 'spinner']], null, null, null, bp, mp)),
						st(12, 114688, null, 0, Kd, [], null, null),
						(l()(), Vs(13, 0, null, null, 1, 'p', [['class', 'spinner-dotted']], null, null, null, bp, mp)),
						st(14, 114688, null, 0, Kd, [], null, null),
						(l()(), Vs(15, 0, null, null, 34, 'figure', [], null, null, null, null, null)),
						(l()(), Vs(16, 0, null, null, 33, 'pre', [['class', 'pad-a-sm border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(17, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(19, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(22, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(25, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"spinner"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(28, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(30, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Xs(-1, null, ['\n'])),
						(l()(), Vs(34, 0, null, null, 10, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['<'])),
						(l()(), Vs(36, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, [' '])),
						(l()(), Vs(39, 0, null, null, 1, 'span', [['class', 'hljs-attribute']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['class'])),
						(l()(), Xs(-1, null, ['='])),
						(l()(), Vs(42, 0, null, null, 1, 'span', [['class', 'hljs-value']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['"spinner-dotted"'])),
						(l()(), Xs(-1, null, ['>'])),
						(l()(), Vs(45, 0, null, null, 4, 'span', [['class', 'hljs-tag']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['</'])),
						(l()(), Vs(47, 0, null, null, 1, 'span', [['class', 'hljs-title']], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['p'])),
						(l()(), Xs(-1, null, ['>']))
					],
					function(l, n) {
						var u = n.component,
							e = l(n, 10, 0, u.checkSection('Flexbox'), u.checkSection('Space'));
						l(n, 9, 0, 'pad-a-sm', e), l(n, 12, 0), l(n, 14, 0);
					},
					null
				);
			}
			function $g(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Bg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function qg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Gg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Border'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Zg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Hover'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Qg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Striped'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Wg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Table Cell'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Kg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Table Row'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Yg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Jg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function Xg(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Font'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function lf(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Text'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function nf(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function uf(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 2, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function ef(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Hide'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function tf(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 5, 'article', [['class', 'mar-b-lg box-shadow-1 border-lr-gray section']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 4, 'section', [['class', 'pad-a-sm bg-lt-gray border-tb-gray']], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Show'])),
						(l()(), Vs(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
						(l()(), Xs(-1, null, ['Coming soon.']))
					],
					null,
					null
				);
			}
			function sf(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 193, 'nav', [['class', 'pad-a-sm border-a-gray box-shadow-1 fixed-l styleguide-menu']], null, null, null, null, null)),
						(l()(), Vs(1, 0, null, null, 192, 'ul', [], null, null, null, null, null)),
						(l()(), Vs(2, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(5, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(6, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Alert'])),
						(l()(), Ls(16777216, null, null, 1, null, jp)),
						st(9, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(10, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(13, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(14, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Badge'])),
						(l()(), Ls(16777216, null, null, 1, null, vp)),
						st(17, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(18, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(21, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(22, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Button'])),
						(l()(), Ls(16777216, null, null, 1, null, xp)),
						st(25, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(26, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(29, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(30, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Card'])),
						(l()(), Ls(16777216, null, null, 1, null, _p)),
						st(33, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(34, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(37, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(38, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Collapse'])),
						(l()(), Ls(16777216, null, null, 1, null, kp)),
						st(41, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(42, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(45, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(46, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Color'])),
						(l()(), Ls(16777216, null, null, 1, null, Cp)),
						st(49, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(50, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(53, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(54, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Flexbox'])),
						(l()(), Ls(16777216, null, null, 1, null, Sp)),
						st(57, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(58, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(61, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(62, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Form'])),
						(l()(), Ls(16777216, null, null, 1, null, Ep)),
						st(65, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(66, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(69, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(70, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Grid'])),
						(l()(), Ls(16777216, null, null, 1, null, Ip)),
						st(73, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(74, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(77, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(78, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Layout'])),
						(l()(), Ls(16777216, null, null, 1, null, Pp)),
						st(81, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(82, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(85, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(86, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Modal'])),
						(l()(), Ls(16777216, null, null, 1, null, Op)),
						st(89, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(90, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(93, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(94, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Nav'])),
						(l()(), Ls(16777216, null, null, 1, null, Tp)),
						st(97, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(98, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(101, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(102, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Position'])),
						(l()(), Ls(16777216, null, null, 1, null, Mp)),
						st(105, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(106, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(109, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(110, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Slider'])),
						(l()(), Ls(16777216, null, null, 1, null, Rp)),
						st(113, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(114, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(117, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(118, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Slideshow'])),
						(l()(), Ls(16777216, null, null, 1, null, Ap)),
						st(121, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(122, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(125, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(126, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Space'])),
						(l()(), Ls(16777216, null, null, 1, null, Np)),
						st(129, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(130, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(133, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(134, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Spinner'])),
						(l()(), Ls(16777216, null, null, 1, null, Dp)),
						st(137, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(138, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(141, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(142, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Switch'])),
						(l()(), Ls(16777216, null, null, 1, null, Up)),
						st(145, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(146, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(149, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(150, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Tab'])),
						(l()(), Ls(16777216, null, null, 1, null, Fp)),
						st(153, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(154, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(157, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(158, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Table'])),
						(l()(), Ls(16777216, null, null, 1, null, Lp)),
						st(161, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(162, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(165, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(166, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Tooltip'])),
						(l()(), Ls(16777216, null, null, 1, null, Vp)),
						st(169, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(170, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(173, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(174, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Typography'])),
						(l()(), Ls(16777216, null, null, 1, null, zp)),
						st(177, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(178, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(181, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(182, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Utilities'])),
						(l()(), Ls(16777216, null, null, 1, null, Hp)),
						st(185, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(186, 0, null, null, 7, 'li', [], null, null, null, null, null)),
						(l()(),
						Vs(
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
						rt(512, null, _a, ka, [xu, _u, eu, ou]),
						st(189, 278528, null, 0, Sa, [_a], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
						Js(190, { 'bg-lt-gray': 0 }),
						(l()(), Xs(-1, null, ['Visibility'])),
						(l()(), Ls(16777216, null, null, 1, null, $p)),
						st(193, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Vs(194, 0, [['content', 1]], null, 139, 'main', [['class', 'pad-a-xl styleguide'], ['tabindex', '-1']], null, null, null, null, null)),
						(l()(), Vs(195, 0, null, null, 0, 'h1', [['class', 'pad-t-xl']], [[8, 'innerHTML', 1]], null, null, null, null)),
						(l()(), Ls(16777216, null, null, 1, null, Bp)),
						st(197, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, qp)),
						st(199, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Gp)),
						st(201, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Zp)),
						st(203, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Qp)),
						st(205, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Wp)),
						st(207, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Kp)),
						st(209, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Yp)),
						st(211, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Jp)),
						st(213, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Xp)),
						st(215, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, lg)),
						st(217, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, ng)),
						st(219, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, ug)),
						st(221, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, eg)),
						st(223, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, tg)),
						st(225, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, sg)),
						st(227, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, rg)),
						st(229, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, ag)),
						st(231, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, og)),
						st(233, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, ig)),
						st(235, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, cg)),
						st(237, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, hg)),
						st(239, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, dg)),
						st(241, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, pg)),
						st(243, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, gg)),
						st(245, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, fg)),
						st(247, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, mg)),
						st(249, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, bg)),
						st(251, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, yg)),
						st(253, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, wg)),
						st(255, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, jg)),
						st(257, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, vg)),
						st(259, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, xg)),
						st(261, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, _g)),
						st(263, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, kg)),
						st(265, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Cg)),
						st(267, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Sg)),
						st(269, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Eg)),
						st(271, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Ig)),
						st(273, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Pg)),
						st(275, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Og)),
						st(277, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Tg)),
						st(279, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Mg)),
						st(281, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Rg)),
						st(283, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Ag)),
						st(285, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Ng)),
						st(287, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Dg)),
						st(289, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Ug)),
						st(291, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Fg)),
						st(293, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Lg)),
						st(295, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Vg)),
						st(297, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, zg)),
						st(299, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Hg)),
						st(301, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, $g)),
						st(303, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Bg)),
						st(305, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, qg)),
						st(307, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Gg)),
						st(309, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Zg)),
						st(311, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Qg)),
						st(313, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Wg)),
						st(315, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Kg)),
						st(317, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Yg)),
						st(319, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Jg)),
						st(321, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, Xg)),
						st(323, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, lf)),
						st(325, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, nf)),
						st(327, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, uf)),
						st(329, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, ef)),
						st(331, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null),
						(l()(), Ls(16777216, null, null, 1, null, tf)),
						st(333, 16384, null, 0, Ea, [Tu, Pu], { ngIf: [0, 'ngIf'] }, null)
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
			function rf(l) {
				return ur(
					0,
					[(l()(), Vs(0, 0, null, null, 1, 'ng-component', [], null, null, null, sf, wp)), st(1, 114688, null, 0, yp, [], null, null)],
					function(l, n) {
						l(n, 1, 0);
					},
					null
				);
			}
			var af = Ne('ng-component', yp, rf, {}, {}, []),
				of = Wu({ encapsulation: 0, styles: [['']], data: {} });
			function cf(l) {
				return ur(
					0,
					[
						(l()(), Vs(0, 0, null, null, 3, 'ez-root', [], null, null, null, rp, sp)),
						st(1, 114688, null, 0, up, [eu], null, null),
						(l()(), Vs(2, 16777216, null, 0, 1, 'router-outlet', [], null, null, null, null, null)),
						st(3, 212992, null, 0, od, [ad, Tu, Yn, [8, null], ku], null, null)
					],
					function(l, n) {
						l(n, 1, 0), l(n, 3, 0);
					},
					null
				);
			}
			function hf(l) {
				return ur(0, [(l()(), Vs(0, 0, null, null, 1, 'docs-root', [], null, null, null, cf, of)), st(1, 49152, null, 0, ca, [], null, null)], null, null);
			}
			var df = Ne('docs-root', ca, hf, {}, {}, []);
			class pf {}
			class gf {}
			var ff = aa(ia, [ca], function(l) {
				return (function(l) {
					const n = {},
						u = [];
					let e = !1;
					for (let t = 0; t < l.length; t++) {
						const s = l[t];
						s.token === Fl && !0 === s.value && (e = !0), 1073741824 & s.flags && u.push(s.token), (s.index = t), (n[Gu(s.token)] = s);
					}
					return { factory: null, providersByKey: n, providers: l, modules: u, isRoot: e };
				})([
					Se(512, Yn, Jn, [[8, [Rd, af, df]], [3, Yn], lu]),
					Se(5120, Lt, Ds, [[3, Lt]]),
					Se(4608, va, xa, [Lt, [2, ja]]),
					Se(5120, vt, Us, [ns]),
					Se(5120, Mt, Rt, []),
					Se(5120, xu, As, []),
					Se(5120, _u, Ns, []),
					Se(4608, Pi, Oi, [Ta]),
					Se(6144, En, null, [Pi]),
					Se(4608, xi, ki, []),
					Se(
						5120,
						Wo,
						function(l, n, u, e, t, s, r, a) {
							return [new ji(l, n, u), new Ii(e), new Ci(t, s, r, a)];
						},
						[Ta, ns, Dt, Ta, Ta, xi, Ft, [2, _i]]
					),
					Se(4608, Ko, Ko, [Wo, ns]),
					Se(135680, Xo, Xo, [Ta]),
					Se(4608, ri, ri, [Ko, Xo, Mt]),
					Se(6144, ru, null, [ri]),
					Se(6144, Jo, null, [Xo]),
					Se(4608, os, os, [ns]),
					Se(5120, Qc, Cd, [sd]),
					Se(4608, dd, dd, []),
					Se(6144, cd, null, [dd]),
					Se(135680, pd, pd, [sd, xs, qt, Vl, cd]),
					Se(4608, hd, hd, []),
					Se(5120, gd, jd, [sd, Ma, fd]),
					Se(5120, Pd, Id, [Sd]),
					Se(
						5120,
						Ut,
						function(l) {
							return [l];
						},
						[Pd]
					),
					Se(1073742336, Oa, Oa, []),
					Se(1024, Rn, Fi, []),
					Se(
						1024,
						fs,
						function() {
							return [yd()];
						},
						[]
					),
					Se(512, Sd, Sd, [Vl]),
					Se(
						1024,
						Ot,
						function(l, n) {
							return [((u = l), Go('probe', Qo), Go('coreTokens', Object.assign({}, Zo, (u || []).reduce((l, n) => ((l[n.name] = n.token), l), {}))), () => Qo), Ed(n)];
							var u;
						},
						[[2, fs], Sd]
					),
					Se(512, Tt, Tt, [[2, Ot]]),
					Se(131584, js, js, [ns, Ft, Vl, Rn, Yn, Tt]),
					Se(1073742336, Fs, Fs, [js]),
					Se(1073742336, Li, Li, [[3, Li]]),
					Se(1073742336, ep, ep, []),
					Se(1024, md, xd, [[3, sd]]),
					Se(512, Sc, Ec, []),
					Se(512, ad, ad, []),
					Se(256, fd, { useHash: !0, anchorScrolling: 'enabled' }, []),
					Se(1024, pa, vd, [ha, [2, ga], fd]),
					Se(512, fa, fa, [pa, ha]),
					Se(512, qt, qt, []),
					Se(512, xs, Cs, [qt, [2, _s]]),
					Se(
						1024,
						Jh,
						function() {
							return [[{ path: 'components', component: yp }, { path: '', redirectTo: '/components', pathMatch: 'full' }, { path: '**', redirectTo: '/components', pathMatch: 'full' }]];
						},
						[]
					),
					Se(1024, sd, kd, [js, Sc, ad, fa, Vl, xs, qt, Jh, fd, [2, ld], [2, Kh]]),
					Se(1073742336, wd, wd, [[2, md], [2, sd]]),
					Se(1073742336, pf, pf, []),
					Se(1073742336, Nd, Nd, []),
					Se(1073742336, Dd, Dd, []),
					Se(1073742336, Fd, Fd, []),
					Se(1073742336, Vd, Vd, []),
					Se(1073742336, zd, zd, []),
					Se(1073742336, Hd, Hd, []),
					Se(1073742336, Bd, Bd, []),
					Se(1073742336, qd, qd, []),
					Se(1073742336, Gd, Gd, []),
					Se(1073742336, Zd, Zd, []),
					Se(1073742336, Qd, Qd, []),
					Se(1073742336, Wd, Wd, []),
					Se(1073742336, Yd, Yd, []),
					Se(1073742336, Jd, Jd, []),
					Se(1073742336, Xd, Xd, []),
					Se(1073742336, lp, lp, []),
					Se(1073742336, np, np, []),
					Se(1073742336, tp, tp, []),
					Se(1073742336, gf, gf, []),
					Se(1073742336, ia, ia, []),
					Se(256, Fl, !0, [])
				]);
			});
			(function() {
				if (un) throw new Error('Cannot enable prod mode after platform setup.');
				nn = !1;
			})(),
				Ui()
					.bootstrapModuleFactory(ff)
					.catch((l) => console.log(l));
		}
	},
	[[0, 0]]
]);
//# sourceMappingURL=main-es2015.bd285bd813e9748c753b.js.map
