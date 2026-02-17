require({
	paths: {
		'@js/array': '../dist/Array.umd.min'
	}
}, ['@js/array'], (Array) => {

	console.log(Array)

})
