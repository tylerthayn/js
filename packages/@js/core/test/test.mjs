import "@js/core";

import users from './users.json' with { type: 'json' };

/*
let a = [1,2,3]
log(a.last)

log(Clone(a))

log = new log('TTT')
log('hi')
log = new log('1')
log('test')
*/


log('hi')
log({name: 'TTT'})
console.log('-----')
log = new log('TTT')
log('hi')
log({name: 'TTT'})
console.log('======')
logj('hi')
logj({name: 'TTT'})
console.log('-----')
logj = new logj('TTT')
logj('hi')
logj({name: 'TTT'})


logj(users.sort(Array.Sorts.String.SortBy('name.first')))


