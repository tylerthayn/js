import { get } from "lodash-es"

/**
 * @function Object.Get
 * @param {Object} ctx
 * @param {String} path
 * @param {*} defaultValue
 * @returns {*}
 */
Object.defineProperty(Object, 'Get', {
	enumerable: false,
	configurable: true,
	value: function (ctx, path, defaultValue) {
		return get(ctx, path, defaultValue)
	}
})

/**
 * @function Object#Get
 * @param {String} path
 * @param {*} defaultValue
 * @returns {*}
 */
Object.defineProperty(Object.prototype, 'Get', {
	enumerable: false,
	configurable: true,
	value: function (path, defaultValue) {
		return get(this, path, defaultValue)
	}
})
