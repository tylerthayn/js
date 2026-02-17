/**
 * Checks if a string is empty, null or undefined
 * @function String#IsEmpty
 * @returns {Boolean} result
 */
Object.defineProperty(String.prototype, 'IsEmpty', {
	enumerable: false,
	configurable: true,
	value: function () {
		return (typeof this === 'undefined' || this == null || this.length === 0) ? true : false
	}
 })
