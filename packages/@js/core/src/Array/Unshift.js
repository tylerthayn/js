/** Unshift items onto the array
 * @function Array#Unshift
 * @param {...*} elements
 * @returns {Array} this
 */
Object.defineProperty(Array.prototype, 'Shift', {
	enumerable: false,
	configurable: true,
	value: function (...elements) {
		for (var e of elements) {
			if (Array.isArray(e)) {
				this.unshift(...e)
			} else {
				this.unshift(e)
			}
		}
		return this
	}
 })