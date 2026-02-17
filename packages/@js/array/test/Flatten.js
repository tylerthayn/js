import "@esm/array";

let a = [
	1,
	[20, 21, [23, 24, 25]],
	[30, [301, 302]]
]

let b = [
	9,
	[10, [101, 1002]]
]

console.log(Array.Flatten(a, b))
console.log(Array.Flatten(a, 1))
console.log(Array.Flatten(a, b, 1))
console.log(Array.Flatten(a, b, 2))
console.log(Array.Flatten(a, b, 3))




