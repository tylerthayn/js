/** Pop items off the array
 * @function Array#Pop
 * @param {Number} [n=1]
 * @returns {*|Array}
 */
Object.defineProperty(Array.prototype, 'Pop', {
	enumerable: false,
	configurable: true,
	value: function (n = 1) {
		return n === 1 ? this.pop() : this.splice(n * -1)
	}
 })