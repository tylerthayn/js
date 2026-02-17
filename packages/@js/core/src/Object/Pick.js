import "../Array/Flatten.js"
import { pick } from "lodash-es"

/** Creates an object composed of the picked object properties
 * @function Object#Pick
 * @param {...(string|string[])} paths
 * @returns {object} object
 */
Object.defineProperty(Object.prototype, 'Pick', {
	enumerable: false,
	configurable: true,
	value: function (...args) {
		return pick(this, Array.Flatten(args))
	}
})
