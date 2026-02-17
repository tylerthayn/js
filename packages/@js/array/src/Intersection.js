import intersection from "lodash-es/intersection.js"

/**
 * @function Array.Intersection
 * @param {...Array] lists
 * @returns {Array}
 */
 !Reflect.has(Array, 'Intersection') && Object.defineProperty(Array, 'Intersection', {
	enumerable: false,
	configurable: true,
	value: function (...lists) {
		return intersection(...lists)
	}
 })

/**
 * @function Array#Intersection
 * @param {...lists} lists
 * @returns {Array}
 */
 !Reflect.has(Array.prototype, 'Intersection') && Object.defineProperty(Array.prototype, 'Intersection', {
	enumerable: false,
	configurable: true,
	value: function (...lists) {
		return Array.Intersection(this, ...lists)
	}
 })