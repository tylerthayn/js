import { set } from "lodash-es"

/**
 * @function Object.Set
 * @param {Object} ctx
 * @param {String} path
 * @param {*} value
 * @returns {Object}
 */
Object.defineProperty(Object, 'Set', {
	enumerable: false,
	configurable: true,
	value: function (ctx, path, value) {
		return set(ctx, path, value)
	}
})

/**
 * @function Object#Set
 * @param {String} path
 * @param {*} value
 * @returns {Object}
 */
Object.defineProperty(Object.prototype, 'Set', {
	enumerable: false,
	configurable: true,
	value: function (path, value) {
		return set(this, path, value)
	}
})
