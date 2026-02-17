/**
 * Object Type lookup
 * @function Type
 * @param {*} item - Item to lookup type of
 * @param {(String|Object)} [compare] - Comparison type label string or comparison object
 * @returns {(String|Boolean)} result - String representing item type or a boolean from type comparisons
 */
export function Type () {

	// Type.call(thisObject) => return type label
	if (arguments.length === 0) {return Type(this)}

	// Type(obj) => return type label
	if (arguments.length === 1) {
		let type = Object.prototype.toString.call(arguments[0]).match(/\[object (.+)\]/i)[1]
		return type !== 'Object' ? type : arguments[0].constructor.name || type
	}

	// Type(obj, typeLabel) || Type(obj1, obj2) => return boolean indicating whether type's are the same
	if (arguments.length === 2) {
		if (Array.isArray(arguments[1])) {
			for (let i=0; i<arguments[1].length; i++) {
				if (Type(arguments[0], arguments[1][i])) {
					return true
				}
			}
			return false
		}
		return Type(arguments[0]).toLowerCase() === (typeof arguments[1] === 'string' ? arguments[1] : Type(arguments[1])).toLowerCase()
	}

	// Type(obj1, obj2, ...objN) return boolean indicating whether all object type's match
	for (let i=1; i<arguments.length; i++) {
		if (!Type(arguments[0], arguments[i])) {
			return false
		}
	}
	return true

}
