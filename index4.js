var Q = require('q')
var defer = Q.defer()

defer.promise.then(console.log, console.log)
//always async function 
defer.resolve('SECOND')
console.log('FIRST')
