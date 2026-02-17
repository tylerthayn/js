/**
 * Gets the last element of an array
 * @member {*} Array#last
 */
 !Reflect.has(Array.prototype, 'last') && Object.defineProperty(Array.prototype, 'last', {
	enumerable: false,
	configurable: true,
	get: function () {
		return this.length > 0 ? this[this.length-1] : null
	}
 })