import { defaults, defaultsDeep } from "lodash-es"

/**
 * @function Merge
 * @param {Boolean} [deep=true]
 * @param {Object} target
 * @param {...Object} source
 * @returns {Object}
 * @see {@link https://lodash.com/docs/4.17.15#defaults}
 * @tutorial Extend-Merge-Mixin
 */
export function Merge (...sources) {
	let deep = typeof sources[0] === 'boolean' ? sources.shift() : true
	let target = sources.shift()

	if (deep) {
		return defaultsDeep(target, ...sources)
	} else {
		return defaults(target, ...sources)
	}
}
