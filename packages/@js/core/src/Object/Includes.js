import "./Has.js"

/** Check if object has the child element paths
 * @function Object#Includes
 * @param {...String|String[]} paths - Array of paths
 * @returns {Boolean} result
 */
Object.defineProperty(Object.prototype, 'Includes', {
	enumerable: false,
	configurable: true,
	value: Object.prototype.Has
})
