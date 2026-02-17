/** Async version of forEach
 * @function Array#forEachAsync
 * @async
 * @param {Function} fn
 * @param {Object} [thisArg]
 */
Object.defineProperty(Array.prototype, 'forEachAsync', {
	enumerable: false,
	configurable: true,
	value: async function (fn, thisArg) {
		let i = 0
		for await (var e of this) {
			await fn.call(thisArg, e, i, this)
			i++
		}
	}
 })