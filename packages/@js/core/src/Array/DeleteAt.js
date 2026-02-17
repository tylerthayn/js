/**
 * Remove an element at index.  Mutates array
 * @function Array#DeleteAt
 * @param {...Number} indexes
 * @returns {Array} this
 */
Object.defineProperty(Array.prototype, 'DeleteAt', {
	enumerable: false,
	configurable: true,
	value: function (...indexes) {
		for (var index of indexes.sort().reverse()) {
			this.splice(index, 1)
		}
		return this
	}
 })