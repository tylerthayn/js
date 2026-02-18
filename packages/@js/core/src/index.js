/**
 * @module @js/core
 * @version 2.0.0
 *
 * @borrows Clone
 * @borrows Define
 * @borrows Extend
 * @borrows IsEqual
 * @borrows log
 * @borrows logj
 * @borrows Merge
 * @borrows Mixin
 * @borrows Type
 *
 * @todo tutorial: Extend-Merge-Mixin Usage
 * @todo tutorial: Array.Handle() & Array.Some() Usage
 * @todo Object versions of Handle and Some iterations?
 */

import "./Array/index.js"
import "./Object/index.js"
import "./String/index.js"

import { Clone } from "./Clone.js"
import { Define } from "./Define.js"
import { Extend } from "./Extend.js"
import { IsEqual } from "./IsEqual.js"
import { log } from "./log.js"
import { logj } from "./logj.js"
import { Merge } from "./Merge.js"
import { Mixin } from "./Mixin.js"
import { EventEmitter } from "./EventEmitter.js"
import { Type } from "./Type.js"

Extend( globalThis, {Clone, Define, Extend, IsEqual, log, logj, Merge, Mixin, EventEmitter, Type})

export { Clone, Define, Extend, IsEqual, log, logj, Merge, Mixin, /** @type {EventEmitter} */EventEmitter, Type }

