/** Iterate array calling fn on each element.  If fn returns a truthy value, then iteration will be stopped
 * @function Array#Some
 * @param {Function} fn
 * @param {Object} [thisArg]
 */
 !Reflect.has(Array.prototype, 'Some') && Object.defineProperty(Array.prototype, 'Some', {
	enumerable: false,
	configurable: true,
	value: function (fn, thisArg) {
		for (var i=0; i<this.length; i++) {
			let v = fn.call(thisArg, this[i], i, this)
			if (!!v) {
				return
			}
		}
	}
 })