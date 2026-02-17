/** Shift items off the array
 * @function Array#Shift
 * @param {Number} [n=1]
 * @returns {*|Array}
 */
Object.defineProperty(Array.prototype, 'Shift', {
	enumerable: false,
	configurable: true,
	value: function (n = 1) {
		return n === 1 ? this.unshift() : this.splice(0, n)
	}
 })