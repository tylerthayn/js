/**
 * String as base64 text.  Implements for Browser, NodeJs and GScripts platforms.
 * @function String#AsBase64
 * @returns {String} text - The base64 text
 */
Object.defineProperty(String.prototype, 'AsBase64', {
	enumerable: false,
	configurable: true,
	value: function (test) {
		try {
			if (typeof Buffer === 'function' && 'from' in Buffer) {return Buffer.from(this).toString('base64')} //NodeJs
			if (typeof btoa === 'function') {return btoa(this)} //Browser
			if (typeof Utilities === 'object' && 'base64Encode' in Utilities) {return Utilities.base64Encode(this)} //GScripts
		} catch (e) {if (typeof test !== 'boolean' || test === false) {console.log(`String.AsBase64('${this}'): invalid conversion`)}}
		return this
	}
 })
