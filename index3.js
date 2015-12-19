var Q = require('q')
var defer = Q.defer()

defer.promise.then(console.log, console.log)

//promises one resolved dont live any more an
//any post rejection or resolve will not work
defer.resolve('I FIRED')
defer.reject('I DID NOT FIRE')
