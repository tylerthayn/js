require('@js/core')

let users = require('./users.json')

logj(users.sort(Array.Sorts.String.SortBy('name.first')))

//let a = [1,2,3]
//console.log(a.last)

//console.log(Clone(a))

