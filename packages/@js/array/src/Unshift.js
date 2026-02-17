/** Unshift items onto the array
 * @function Array#Unshift
 * @param {...*} elements
 * @returns {Array} this
 */
 !Reflect.has(Array.prototype, 'Unshift') && Object.defineProperty(Array.prototype, 'Unshift', {
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