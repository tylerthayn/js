const templateRe = /\{ *([\w_ -]+) *\}/g;

/**
 * Simple rendering util with '{name}' replacements.
 * @function String#Render
 * @param {Object} data
 * @returns {String}
 */
Object.defineProperty(String.prototype, 'Render', {
	enumerable: false,
	configurable: true,
	value: function (data = {}) {
		return this.replace(templateRe, (str, key) => {
			let value = data[key]
			if (value === undefined) {
				//throw new Error(`No value provided for variable ${str}`)
				return '{'+key+'}'
			} else if (typeof value === 'function') {
				value = value(data)
			}
			return value
		})
	}
 })
