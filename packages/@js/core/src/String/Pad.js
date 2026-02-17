import "./Repeat.js"

/**
 * Pads a string out to a certain width
 * @function String#Pad
 * @param {Number} length - Length of the string in chars
 * @param {String} [padChar] - Char to pad with
 * @param {Boolean} [rightPad] - Pad chars tot he right instead of the left
 * @returns {String} text - Padded string
 */
Object.defineProperty(String.prototype, 'Pad', {
	enumerable: false,
	configurable: true,
	value: function (length, padChar, rightPad) {
		let s = this + ''
		length = length - s.length
		if (length <= 0) {return s}
		padChar = (padChar+'').Repeat(length)
		if (typeof rightPad !== 'undefined' && rightPad === true) {
			return s+padChar
		}
		return padChar + s
	}
 })
