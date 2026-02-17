import { flattenDeep, has } from "lodash-es"

function Has (...args) {
	args = flattenDeep(args)
	for (let i=0; i<args.length; i++) {
		if (!has(this, args[i])) {
			return false
		}
	}
	return true
}

/** Check if object has the child element paths
 * @function Object#Has
 * @param {...String|String[]} paths - Array of paths
 * @returns {Boolean} result
 */
Object.defineProperty(Object.prototype, 'Has', {
	enumerable: false,
	configurable: true,
	value: function (...args) {
		return Has.call(this, ...args)
	}
})


export { Has }
