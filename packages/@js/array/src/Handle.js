/** Iterate array calling fn for each element until fn returns a non-falsey value, which is then returned.  Like {@link Array#Some} except that the value is returned
 * @function Array#Handle
 * @param {Function} fn
 * @param {Object} [thisArg]
 * @returns {*}
 */
 !Reflect.has(Array.prototype, 'Handle') && Object.defineProperty(Array.prototype, 'Handle', {
	enumerable: false,
	configurable: true,
	value: function (fn, thisArg) {
		for (var i=0; i<this.length; i++) {
			let v = fn.call(thisArg, this[i], i, this)
			if (!!v) {
				return v
			}
		}
	}
 })