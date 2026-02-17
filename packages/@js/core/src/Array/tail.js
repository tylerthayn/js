/**
 * all elements but the first element of array
 * @member {Array} Array#tail
 */
Object.defineProperty(Array.prototype, 'tail', {
	enumerable: false,
	configurable: true,
	get: function () {
		return this.length > 1 ? this.slice(1, this.length) : []
	}
 })