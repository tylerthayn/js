import xor from "lodash-es/xor.js"

/** Array Xor
 * @function Array#Xor
 * @param {...Array} lists
 * @returns {Array}
 */
 !Reflect.has(Array.prototype, 'Xor') && Object.defineProperty(Array.prototype, 'Xor', {
	enumerable: false,
	configurable: true,
	value: function (...lists) {
		return xor(this, ...lists)
	}
 })