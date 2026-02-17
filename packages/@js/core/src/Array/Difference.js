import difference from "lodash-es/difference.js";

/**
 * Difference in arrays
 * @function Array.Difference
 * @param {...Array} lists
 * @returns {Array} diff
*/
Object.defineProperty(Array, 'Difference', {
	enumberable: false,
	configurable: true,
	value: function (...lists) {
		if (lists.length < 2) {
			return lists[0]
		}
		let diff = difference(lists[0], lists[1])
		for (var i=2; i<lists.length; i++) {
			diff = difference(diff, lists[i])
		}
		return diff
	}
 })

/**
 * Difference in arrays
 * @function Array#Difference
 * @param {...Array} lists
 * @returns {Array}
 */
Object.defineProperty(Array.prototype, 'Difference', {
	enumerable: false,
	configurable: true,
	value: function (...lists) {
		return Array.Difference(this, ...lists)
	}
 })