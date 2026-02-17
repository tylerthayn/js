/**
 * Create a new array with elements omitted at certain indexes
 * @function Array#OmitAt
 * @param {...Number} indexes
 * @returns {Array}
 */
Object.defineProperty(Array.prototype, 'OmitAt', {
	enumerable: false,
	configurable: true,
	value: function (...indexes) {
		return this.filter((e, i) => !indexes.includes(i))
	}
 })