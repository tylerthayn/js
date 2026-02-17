import "./Unique.js"

/**
 * Array Union
 * @function Array#Union
 * @param {...*} lists
 * @returns {Array}
 */
 !Reflect.has(Array.prototype, 'Union') && Object.defineProperty(Array.prototype, 'Union', {
	enumerable: false,
	configurable: true,
	value: function (...lists) {
		return (this.concat(...lists)).Unique()
	}
 })