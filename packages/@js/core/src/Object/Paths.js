import "./Each.js"

/** Gets a list of object element paths
 * @function Object#Paths
 * @param {Number} [depth] - Depth of recursion
 * @param {Array} paths - The object element paths
 */
Object.defineProperty(Object.prototype, 'Paths', {
	enumerable: false,
	configurable: true,
	value: function(depth = Infinity) {
		const list = []
		visit(this)
		return list.Unique()

		function visit(object, keys = []) {
			object.Each((value, name) => {
				keys.push(name)
				if (typeof value === 'object') {
					visit(value, keys)
				} else {
					list.push((keys.length < depth + 1 ? keys : keys.slice(0, depth)).join('.'))
				}
				keys.pop()
			})

		}
	}
})
