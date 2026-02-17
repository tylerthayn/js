/**
 * Remove a items from the list.  Mutates the array.  When element is a function, elements will be removed on truthy results.
 * @function Array#Delete
 * @param {...(*|Function)} elements - Elements to remove or test function.
 * @returns {Array} this
 * @example
 * ['one', 'two', 'three'].Delete('two')
 * @example
 * let list = ['two', 'three']
 * ['one', 'two', 'three'].Delete(...list)
 * @example
 * ['one', 2, 'three'].Delete((e) => typeof e === 'Number')
 */
 !Reflect.has(Array.prototype, 'Delete') && Object.defineProperty(Array.prototype, 'Delete', {
	enumerable: false,
	configurable: true,
	value: function (...elements) {
		for (var e of elements) {
			for (var i=this.length-1; i>=0; i--) {
				if (typeof e === 'function') {
					if (e(this[i])) {
						this.splice(i, 1)
					}
				} else {
					if (e === this[i]) {
						this.splice(i, 1)
					}
				}
			}
		}
		return this
	}
 })