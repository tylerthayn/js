/**
 * Test whether a string is JSON
 * @function String#IsJson
 * @returns {Boolean} result
 */
Object.defineProperty(String.prototype, 'IsJson', {
	enumerable: false,
	configurable: true,
	value: function () {
		try {
			JSON.parse(this)
		} catch (e) {
			return false
		}
		return true
	}
 })
