function Factory (name) {

	return function (...args) {
		if (new.target) {
			return Factory(name+':'+args[0])
		}

		for (var arg of args) {
			console.log(`(${name})${arg}`)
		}
	}
}

/**
 * @function log
 * @param {...String} msg
 */
/** objects will be logged as json
 * @function log
 * @param {...Object} obj
 */

/** when called with new
 * @scope instance
 * @function log
 * @param {String} name
 * @returns {Function}
 */
export function log (...args) {

	if (new.target) {
		return Factory(args[0])
	}

	for (var arg of args) {
		console.log(arg)
	}

}
