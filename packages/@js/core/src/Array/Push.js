/** Push all elments onto the array.  If an element is an array, its elements will pushed.
 * @function Array#Push
 * @param {*} elements
 * @returns {Array} this
 */
Object.defineProperty(Array.prototype, 'Push', {
	enumerable: false,
	configurable: true,
	value: function (...elements) {
		for (var e of elements) {
			if (Array.isArray(e)) {
				this.push(...e)
			} else {
				this.push(e)
			}
		}
		return this
	}
})