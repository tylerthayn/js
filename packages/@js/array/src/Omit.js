import without from "lodash-es/without.js"

/**
 * Create a new array with elements omitted
 * @function Array#Omit
 * @param {...*} elements - Elements to omit
 * @returns {Array}
 */
 !Reflect.has(Array.prototype, 'Omit') && Object.defineProperty(Array.prototype, 'Omit', {
	enumerable: false,
	configurable: true,
	value: function (...elements) {
		return without(this, ...elements)
	}
 })
