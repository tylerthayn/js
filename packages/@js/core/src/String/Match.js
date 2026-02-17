/**
 * String match convenience function
 * @function String#Match
 * @param {String|RegExp} pattern
 * @returns {Boolean}
 */
Object.defineProperty(String.prototype, 'Match', {
	enumerable: false,
	configurable: true,
	value: function (pattern) {
		return !(this.match(pattern) == null)
	}
 })
