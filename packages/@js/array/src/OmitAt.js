/**
 * Create a new array with elements omitted at certain indexes
 * @function Array#OmitAt
 * @param {...Number} indexes
 * @returns {Array}
 */
 !Reflect.has(Array.prototype, 'OmitAt') && Object.defineProperty(Array.prototype, 'OmitAt', {
	enumerable: false,
	configurable: true,
	value: function (...indexes) {
		return this.filter((e, i) => !indexes.includes(i))
	}
 })