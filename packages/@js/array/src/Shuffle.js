/**
 * In-place array shuffle
 * @function Array#Shuffle
 * @param {Number} [seed]
 * @returns {Array}
 */
 !Reflect.has(Array.prototype, 'Shuffle') && Object.defineProperty(Array.prototype, 'Shuffle', {
	enumerable: false,
	configurable: true,
	value: function (seed = 1000) {
		let i, j, shuffleItem
		if (this.length === 2 && ((Math.random()*1000)%2)) {
			shuffleItem = this[0]
			this[0] = this[1]
			this[1] = shuffleItem
		}

		for (i = 0; i < this.length - 2; i++) {
			j = (Math.round(Math.random() * seed) + i) % this.length;
			shuffleItem = this[i]
			this[i] = this[j]
			this[j] = shuffleItem
		}
		return this
	}
 })