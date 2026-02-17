/**
 * Array unique elements
 * @function Array#Unique
 * @param {Boolean} [mutate=false]
 * @returns {Array}
 */
 !Reflect.has(Array.prototype, 'Unique') && Object.defineProperty(Array.prototype, 'Unique', {
	enumerable: false,
	configurable: true,
	value: function (mutate=false) {
		if (mutate) {
			let uniq = this.Unique()
			this.length = []
			uniq.forEach(e => this.push(e))
			return this
		} else {
			var a = []
			for (let i=0; i<this.length; i++) {
				if (a.indexOf(this[i]) === -1) {
					a.push(this[i])
				}
			}
			return a
		}
	}
 })
