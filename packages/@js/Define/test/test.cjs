let { Define } = require('@js/Define')

let count = 0
let idManager = {}

Define(idManager, 'id', {get: () => {return ++count}})


console.log(idManager.id)
console.log(idManager.id)
