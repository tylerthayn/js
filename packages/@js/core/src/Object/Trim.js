import { isEqual } from "lodash-es"

/** Trim empty, null, undefined elements from an object
 * @function Object#Trim
 * @returns {object} object
 */
Object.defineProperty(Object.prototype, 'Trim', {
	enumerable: false,
	configurable: true,
	value: function () {
		Object.keys(this).forEach(function (k) {
			if (typeof this[k] === 'undefined' || this[k] === null) {
				delete this[k]
			} else if (typeof this[k] === 'object') {
				if (Array.isArray(this[k])) {
					if (this[k].length === 0) {
						delete this[k]
					}
				} else {
					this[k] = this[k].Trim()
					if (isEqual(this[k], {})) {
						delete this[k]
					}
				}
			} else if (typeof this[k] === 'string' && this[k] === '') {
				delete this[k]
			} else if (typeof this[k] === 'number' && Number.isNaN(this[k])) {
				delete this[k]
			}
		}, this)
		return this
	}
})
