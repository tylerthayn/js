/** Creates an array of property names
 * @function Object#Keys
 * @param {Boolean} [own=false]
 * @returns {Array}
 */
Object.defineProperty(Object.prototype, 'Keys', {
	enumerable: false,
	configurable: true,
	value: function (own = false) {
		if (own) {
			return Reflect.ownKeys(this)
		} else {
			let keys = []
			for (var key in this) {
				keys.push(key)
			}
			return keys
		}
	}
})
