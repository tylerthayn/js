import { Array } from "@js/array";

console.log(Array)

let a = [1,3,4,2,5]

console.log(a.first)


let data = [
	{id: 3},
	{id: 5},
	{id: 4},
	{id: 2},
	{id: 1}
]

console.log(data.sort(Array.Sorts.Number.SortBy('id')))




