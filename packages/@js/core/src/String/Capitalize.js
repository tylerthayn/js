/**
 * Capitalize words in a string
 * @function String#Capitalize
 * @param {Boolean} [allWords=false] - Capitalize first letter of each word
 * @returns {String} text - Capitalized text
 */
Object.defineProperty(String.prototype, 'Capitalize', {
	enumerable: false,
	configurable: true,
	value: function (allWords) {
		const s = this.toLowerCase()
		if (typeof allWords !== 'undefined' && allWords === true) {
			return s.replace(/(^|[^a-zA-Z\u00C0-\u017F'])([a-zA-Z\u00C0-\u017F])/g, function (m) {
				return m.toUpperCase()
			})
		} else {
			return s.charAt(0).toUpperCase() + s.substring(1)
		}
	}
 })
