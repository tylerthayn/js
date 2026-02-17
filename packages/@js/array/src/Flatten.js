import "./last.js"
import  flattenDepth from "lodash-es/flattenDepth.js"

/**
 * Flatten arrays
 * @function Array.Flatten
 * @param {...Array} lists
 * @param {Number} [depth=Infinity]
 * @returns {Array}
 */
 !Reflect.has(Array, 'Flatten') && Object.defineProperty(Array, 'Flatten', {
	enumerable: false,
	configurable: true,
	value: function (...args) {
		let depth = typeof args.last === 'number' ? args.pop() : Infinity
		return flattenDepth(args, depth+1)
	}
 })

/**
 * @function Array#Flatten
 * @param {Number} [depth=Infinity]
 * @returns {Array}
 */
 !Reflect.has(Array.prototype, 'Flatten') && Object.defineProperty(Array.prototype, 'Flatten', {
	enumerable: false,
	configurable: true,
	value: function (n = Infinity) {
		return Array.Flatten(this, n)
	}
 })
