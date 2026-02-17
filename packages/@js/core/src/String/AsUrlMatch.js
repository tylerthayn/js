function AsUrlMatch (t){if("string"!=typeof t)return null;var e="(?:^",n=function(t){return t.replace(/[[^$.|?*+(){}\\]/g,"\\$&")},r=/^(\*|https?|file|ftp|chrome-extension):\/\//.exec(t);if(!r)return null;if(t=t.substr(r[0].length),e+="*"===r[1]?"https?://":r[1]+"://","file"!==r[1]){if(!(r=/^(?:\*|(\*\.)?([^\/*]+))(?=\/)/.exec(t)))return null;t=t.substr(r[0].length),"*"===r[0]?e+="[^/]+":(r[1]&&(e+="(?:[^/]+\\.)?"),e+=n(r[2]))}return e+=t.split("*").map(n).join(".*"),e+="$)"}

/**
 * String as converted to url match pattern
 * @function String#AsUrlMatch
 * @returns {String} pattern - The match pattern
 */
Object.defineProperty(String.prototype, 'AsUrlMatch', {
	enumerable: false,
	configurable: true,
	value: function () {
		return AsUrlMatch(this.toString())
	}
 })