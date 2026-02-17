var setProperty=function setProperty(target,name,value){'__proto__'===name?Object.defineProperty(target,name,{enumerable:true,configurable:true,value:value,writable:true}):target[name]=value};
var getProperty=function getProperty(obj,name){if('__proto__'===name){if(!Object.prototype.hasOwnProperty.call(obj,name))return;return Object.getOwnPropertyDescriptor(obj,name).value}return obj[name]};
var isPlainObject=function isPlainObject(obj){if(!obj||'[object Object]'!==Object.prototype.toString.call(obj))return false;var hasOwnConstructor=Object.prototype.hasOwnProperty.call(obj,'constructor');var hasIsPrototypeOf=obj.constructor&&obj.constructor.prototype&&Object.prototype.hasOwnProperty.call(obj.constructor.prototype,'isPrototypeOf');if(obj.constructor&&!hasOwnConstructor&&!hasIsPrototypeOf)return false;var key;for(key in obj);return'undefined'===typeof key||Object.prototype.hasOwnProperty.call(obj,key)};

function ExtendArray (...args) {
	let target = args.shift()
	target = target == null || !Array.isArray(target) ? [] : target
	while (args.length > 0) {
		let src = args.shift()
		if (src != null) {
			if (Array.isArray(src)) {
				/* jshint ignore:start */
				src.forEach(e => {
					if (!target.includes(e)) {
						target.push(e)
					}
				})
				/* jshint ignore:end */
			} else {
				target.push(src)
			}
		}
	}
	return target
}


 /** Extends properties onto an object
 * @function Extend
 * @param {Object} target
 * @param {...Object} source
 * @returns {Object}
 * @tutorial Extend-Merge-Mixin
 */
export function Extend (...args) {
	let target = args.shift()
	target = target == null || (typeof target !== 'object' && typeof target !== 'function') ? {} : target

	if (Array.isArray(target)) {
		return ExtendArray(target, ...args)
	}
	while (args.length > 0) {
		let src = args.shift()
		if (src != null) {
			for (var name in src) {
				let targetProperty = getProperty(target, name)
				let srcProperty = getProperty(src, name)

				if (typeof srcProperty !== 'undefined' && srcProperty != null && srcProperty !== target) {
					if (Array.isArray(targetProperty)) {
						setProperty(target, name, ExtendArray(targetProperty, srcProperty))
					} else if (!isPlainObject(targetProperty)) {
						setProperty(target, name, srcProperty)
					} else {
						setProperty(target, name, Extend(targetProperty, srcProperty))
					}
				}

			}

		}
	}
	return target
}
