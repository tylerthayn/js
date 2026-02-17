/** Async version of {@link Array#Handle}
 * @function Array#HandleAsync
 * @async
 * @param {Function} fn
 * @param {Object} [thisArg]
 * @returns {*}
 */
Object.defineProperty(Array.prototype, 'HandleAsync', {
	enumerable: false,
	configurable: true,
	value: async function (fn, thisArg) {
		let i = 0
		for await (var e of this) {
			let v = await fn.call(thisArg, e, i, this)
			i++
			if (!!v) {
				return v
			}
		}
	}
 })