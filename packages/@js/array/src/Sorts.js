/** Small collection of sort functions for arrays
 * @namespace Array.Sorts
 */
 !Reflect.has(Array, 'Sorts') && Object.defineProperty(Array, 'Sorts', {
	enumerable: false,
	configurable: true,
	writable: true,
	value: {
		/** Number sorting Sort function generators
		 * @namespace Array.Sorts.Number
		 */
		Number: {
			/**
			 * @function Array.Sorts.Number.SortBy
			 * @param {String} key
			 * @returns {Function}
			 */
			SortBy: (key) => {return (a, b) => {return a[key] - b[key]}}
		 },
		/** String sorting Sort function generators
		 * @namespace Array.Sorts.String
		 */
		String: {
			/**
			 * @function Array.Sorts.String.SortBy
			 * @param {String} key
			 * @returns {Function}
			 */
			SortBy: (key) => {return (a, b) => {return a[key].localCompare(b[key])}}
		 },
		/**
		 * @function Array.Sorts.SortByName
		 * @returns {Array}
		 */
		SortByName: (a, b) => {return a.name.localCompare(b.name)},
	}

 })
