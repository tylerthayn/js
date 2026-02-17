/**
 * @callback Object.EachIterator
 * @param {*} value
 * @param {Number|String} index - the array index or object key
 * @param {Object} context
 */

/** Object elements iterator
 * @function Object#Each
 * @param {Boolean} [own=false]
 * @param {Object.EachIterator} fn - Iterator function
 */
Object.defineProperty(Object.prototype, 'Each', {
	enumerable: false,
	configurable: true,
	value: function (...args) {
		let own = typeof args[0] === 'boolean' ? args.shift() : false
		let cb = args.shift()

		if (Array.isArray(this)) {
			for (let i=0; i<this.length; i++) {
				if (cb(this[i], i, this) === false) {return}
			}
		} else {
			if (own) {
				let keys = Reflect.ownKeys(this)
				for (let i=0; i<keys.length; i++) {
					if (cb(this[keys[i]], keys[i], this) === false) {return}
				}
			} else {
				for (var key in this) {
					if (cb(this[key], key, this) === false) {return}
				}
			}
		}
	}
})
