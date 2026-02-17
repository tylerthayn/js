import "./AsAscii.js"
import "./AsBase64.js"

/**
 * Tests if a string is Base64 format
 * @function String#IsBase64
 * @returns {Boolean} result
 */
Object.defineProperty(String.prototype, 'IsBase64', {
	enumerable: false,
	configurable: true,
	value: function () {
		return this.toString() === this.AsAscii(true).AsBase64(true)
	}
 })
