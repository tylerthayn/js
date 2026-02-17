import { flattenDeep, pickBy } from "lodash-es"

/**
 * Creates an object composed of the omitted object properties
 * @function Object#Omit
 * @param {...(String|String[])} paths
 * @returns {Object} object
 */
Object.defineProperty(Object.prototype, 'Omit', {
	enumerable: false,
	configurable: true,
	value: function (...args) {
		args = flattenDeep(args)
		return pickBy(this, (value, key) => {
			return !args.includes(key)
		})
	}
})

