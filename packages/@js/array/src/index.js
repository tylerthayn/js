/**
 * @module @js/array
 * @version 0.1.2
 * @see {@link Array}
 *
 * @license
 * Copyright (c) 2025 Tyler Thayn
 * Licensed under the MIT license.
 * @see {@link http://git.ttscloud.net/js/array}
 */

let Array = globalThis.Array // jshint ignore:line

/* Static Functions */
import "./Difference.js";
import "./Flatten.js";
import "./Intersection.js";

/* Instance members */
import "./first.js";
import "./head.js";
import "./last.js";
import "./tail.js";

/* Instance Functions */
import "./forEachAsync.js";
import "./Delete.js";
import "./DeleteAt.js";
import "./Handle.js";
import "./HandleAsync.js";
import "./Omit.js";
import "./OmitAt.js";
import "./Pop.js";
import "./Push.js";
import "./Shift.js";
import "./Shuffle.js";
import "./Some.js";
import "./SomeAsync.js";
import "./Sorts.js";
import "./Unique.js";
import "./Union.js";
import "./Unshift.js";
import "./Xor.js";

export { Array }

/**
 * @class Array
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array}
 */
