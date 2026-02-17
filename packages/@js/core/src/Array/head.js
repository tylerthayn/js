/**
 * all elements but the last element of array
 * @member {Arry} Array#head
 */
Object.defineProperty(Array.prototype, 'head', {
	enumerable: false,
	configurable: true,
	get: function () {
		return this.slice(0, this.length-1)
	}
 })