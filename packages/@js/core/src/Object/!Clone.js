import { Clone } from "@js/Clone"

/**
 * @function Object#Clone
 * @param {Boolean} [deep=false]
 * @return {Object} - The cloned object
 */
Object.defineProperty(Object.prototype, 'Clone', {
	enumerable: false,
	configurable: true,
	value: function (deep = false) {
		return Clone(deep, this)
	}
})
