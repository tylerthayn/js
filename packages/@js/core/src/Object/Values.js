import "./Keys.js"

/** Creates an array of property values
 * @function Object#Values
 * @param {Boolean} [own=false]
 * @returns {Array}
 */
Object.defineProperty(Object.prototype, 'Values', {
	enumerable: false,
	configurable: true,
	value: function (own = false) {
		let keys = this.Keys(own)
		let values = []
		for (var key of keys) {
			values.push(this[key])
		}
		return values
	}
})
