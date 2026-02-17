/**
 * Repeats a string of text n times
 * @function String#Repeat
 * @param {Number} n - Number of times to repeat
 * @returns {String} text
 */
Object.defineProperty(String.prototype, 'Repeat', {
	enumerable: false,
	configurable: true,
	value: function (n) {
		let s = ''
		for (let i=0; i<n; i++) {s += this}
		return s
	}
 })
