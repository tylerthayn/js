function Factory (name) {

	return function (...args) {
		if (new.target) {
			return Factory(name+':'+args[0])
		}

		for (var arg of args) {
			console.log(`(${name})`+JSON.stringify(arg, null, '\t'))
		}
	}
}

/**
 * @function logj
 * @param {...obj} obj
 */
/** when called with new
 * @scope instance
 * @function logj
 * @param {String} name
 * @returns {Function}
 */
export function logj (...args) {

	if (new.target) {
		return Factory(args[0])
	}

	for (var arg of args) {
		console.log(JSON.stringify(arg, null, '\t'))
	}

}
