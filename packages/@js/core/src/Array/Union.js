import "./Unique.js"

/**
 * Array Union
 * @function Array#Union
 * @param {...*} lists
 * @returns {Array}
 */
Object.defineProperty(Array.prototype, 'Union', {
	enumerable: false,
	configurable: true,
	value: function (...lists) {
		return (this.concat(...lists)).Unique()
	}
 })