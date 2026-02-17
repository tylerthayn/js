/** Async version of {@link Array#Some}
 * @function Array#SomeAsync
 * @async
 * @param {Function} fn
 * @param {Object} [thisArg]
 */
Object.defineProperty(Array.prototype, 'SomeAsync', {
	enumerable: false,
	configurable: true,
	value: async function (fn, thisArg) {
		let i = 0
		for await (var e of this) {
			let v = await fn.call(thisArg, e, i, this)
			i++
			if (!!v) {
				return
			}
		}
	}
 })