var Q = require('q')
var defer = Q.defer()

defer.promise.then(console.log)
setTimeout(function () {
  defer.resolve('RESOLVED!')
}, 300)
