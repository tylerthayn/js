import { Mixin } from "./Mixin.js"

/*
 * @class Listener
 * @param {Function} fn
 * @param {Object} [context]
 * @param {Boolean} [once=false]
 */
class Listener {
	constructor (fn, context, once = false) {
		/** @type {Function} */
		this.fn = fn
		/** @type {Object} */
		this.context = context
		/** @type {Boolean} */
		this.once = once
	}
}


/** EE
 * @class EventEmitter
 * @param {Object} [ctx] - will Mixin EventEmitter to ctx
 * @returns {EventEmitter}
 */
function EventEmitter (ctx) {
	ctx = typeof ctx !== 'undefined' ? ctx : this
	EventEmitter.Init.call(ctx)

	if (ctx !== this) {
		Mixin(ctx, EventEmitter)
	}

	return ctx
}

Object.defineProperty(EventEmitter, Symbol.hasInstance, {
	value: function (obj) {
		return Reflect.has(obj, '_events')
	}
})

/** EventEmitter initialization function
 * @function EventEmitter.Init
 */
EventEmitter.Init = function () {
	/**
	 * @member {Object} EventEmitter#_events
	 */
	Object.defineProperty(this, '_events', {
		configurable: true,
		writable: true,
		enumerable: false,
		value: Object.create(null)
	})

}


EventEmitter.prototype = Object.create(Object.prototype,
/** @lends EventEmitter# */
{
	constructor: {value: EventEmitter, enumerable: false, writable: true, configurable: true},
	/**
	 * @function
	 * @param {String} event
	 * @param {Function} fn
	 * @param {Boolean} [once=false]
	 * @param {Boolean} [prepend=false]
	 * @param {Object} [context]
	 */
	addListener: {value: function (event, fn, once=false, prepend=false, context=null) {
		let listener = new Listener(fn, context || this, once)
		if (this._events[event]) {
			if (prepend) {
				this._events[event].unshift(listener)
			} else {
				this._events[event].push(listener)
			}
		} else {
			this._events[event] = [listener]
		}

		return this
	 }},
	/**
	 * @function
	 * @param {String} event
	 * @param {...*} arg
	 */
	emit: {value: function (...args) {
		let extra = typeof args[0] === 'boolean' ? args.shift() : true
		let event = args.shift()

		let returnValue = null
		if (this._events[event]) {

			for (var listener of this._events[event]) {

				if (listener.once) {
					this.removeListener(event, listener.fn)
				}

				let res = listener.fn.call(listener.context, ...args)
				if (typeof res !== 'undefined') {
					if (res === false) {
						return false
					} else {
						returnValue = res
					}
				}
			}
		}

		if (extra) {
			SubNames(event).forEach(name => {

				this.emit(false, name, event, ...args)
			})

			this.emit(false, '*', event, ...args)
		}

		return returnValue
	 }},
	/**
	 * @function
	 * @returns {String[]}
	 */
	eventNames: {value: function () {
		return Object.keys(this._events)
	 }},
	/**
	 * @function
	 * @param {String} [event] - event name, can be space separated list
	 * @param {...Function} fn
	 * @returns {EventEmitter}
	 */
	off: {value: function (...args) {
		return this.removeListener(...args)
	 }},
	/**
	 * @function
	 * @param {String} event - event name, can be space separated list
	 * @param {Function} fn
	 * @param {Object} [context]
	 * @param {Boolean} [prepend=false]
	 * @returns {EventEmitter}
	 */
	on: {value: function (event, fn, context, prepend=false) {
		let events = event.split(' ')
		events.forEach(e => {
			this.addListener(e.trim(), fn, false, prepend, context)
		})
		return this
	 }},
	/**
	 * @function
	 * @param {String} event - event name, can be space separated list
	 * @param {Function} fn
	 * @param {Object} [context]
	 * @param {Boolean} [prepend=false]
	 * @returns {EventEmitter}
	 */
	once: {value: function (event, fn, context, prepend=false) {
		let events = event.split(' ')
		events.forEach(e => {
			this.addListener(e.trim(), fn, true, prepend, context)
		})
		return this
	 }},
	/**
	 * @function
	 * @param {String} [event] - event name, can be space separated list
	 * @param {...Function} fn
	 * @returns {EventEmitter}
	 */
	removeListener: {value: function (...args) {
		let events = this.eventNames()
		if (args.length > 0 && typeof args[0] === 'string') {
			events = args.shift().split(' ').map(e => e.trim())
		}
		let listeners = args.filter(a => typeof a === 'function')

		for (var event of events) {
			if (this._events[event]) {

				let _listeners = listeners.length > 0 ? listeners : this._events[event].map(l => l.fn)
				_listeners.forEach(l => {
					for (var i=this._events[event].length-1; i>=0; i--) {
						if (this._events[event][i].fn === l) {
							this._events[event].splice(i, 1)
						}
					}
				})
			}
		}
	 }}
})

function SubNames (name) {

	let names = []
	while (name.includes(':')) {
		name = name.slice(0, name.lastIndexOf(':'))
		names.push(name)
	}
	return names
}

EventEmitter.Mixin = function (obj) {
	Mixin(obj, EventEmitter)

	EventEmitter.Init.call(obj)
}

export { EventEmitter }

