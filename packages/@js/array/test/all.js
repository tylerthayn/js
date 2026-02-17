import "@js/array";


let a = [1,2,3,4,5]
console.log(a.Handle(e => e === 5 ? 'Five' : false))
a.Some(e => {
	console.log(e)
	if (e === 3) {
		return true
	}
})

await a.forEachAsync(async (e) => {
	return new Promise((resolve, reject) => {
		console.log(e)

		setTimeout(resolve, 3000)
	})
})

log('--')


