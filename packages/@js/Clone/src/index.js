/**
 * @module @js/Clone
 * @version 0.1.1
 *
 * @license
 * Copyright (c) 2025 Tyler Thayn
 * Licensed under the MIT license.
 */

import { clone, cloneDeep } from "lodash-es"

/**
 * @function Clone
 * @param {Boolean} [deep=false]
 * @param {*} value - value to clone
 * @return {*} - the cloned value
 * @see {@link https://lodash.com/docs/4.17.15#clone}
 */
export function Clone (...args) {
	let deep = args.length > 1 && typeof args[0] === 'boolean' ? args.shift() : false
	return deep ? cloneDeep(args[0]) : clone(args[0])
 }
