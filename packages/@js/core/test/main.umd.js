require({
	paths: {
		'@js/core': '../dist/core.umd.min'
	}
}, ['@js/core'], ({ core }) => {

	console.log(core)

})
