
function Mix (target, source, force = false) {

	let descriptors = Object.getOwnPropertyDescriptors(source)
	for (var key of Object.keys(descriptors)) {
		if (force || !Reflect.has(target, key)) {
			Object.defineProperty(target, key, descriptors[key])
		}
	}

	for (key in source) {
		if (force || !Reflect.has(target, key)) {
			target[key] = source[key]
		}
	}

}

/**
 * @function Mixin
 * @param {Boolean} [force=false]
 * @param {Function|Object} target
 * @param {...(Function|Object)} source
 * @returns {Function|Object}
 * @tutorial Extend-Merge-Mixin
 */
function Mixin (...sources) {
	let force = typeof sources[0] === 'boolean' ? sources[0] : false
	let target = sources.shift()

	for (var source of sources) {
		if (typeof target === 'function') {
			if (typeof source === 'function') {
				Mix(target.prototype, source.prototype, force)
			} else {
				Mix(target.prototype, source, force)
			}
		} else {
			if (typeof source === 'function') {
				Mix(target, source.prototype, force)
			} else {
				Mix(target, source, force)
			}
		}
	}

	return target
}

export { Mixin }
