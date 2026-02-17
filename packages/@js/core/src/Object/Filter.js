import { pickBy } from "lodash-es"

/**
 * @callback Object.FilterFn
 * @param {*} value
 * @param {String} key
 * @returns {Boolean}
 */

/** Creates an object composed of the filtered object properties
 * @function Object#Filter
 * @param {Object.FilterFn} cb
 * @returns {Object} object
 */
Object.defineProperty(Object.prototype, 'Filter', {
	enumerable: false,
	configurable: true,
	value: function (fn) {
		return pickBy(this, fn)
	}
})

