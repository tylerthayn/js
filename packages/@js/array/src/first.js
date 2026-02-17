/**
 * First element in an array
 * @member {*} Array#first
 */
 !Reflect.has(Array.prototype, 'first') && Object.defineProperty(Array.prototype, 'first', {
	enumerable: false,
	configurable: true,
	get: function () {
		return this.length > 0 ? this[0] : null
	}
 })