var Q = require('q')
var Defer = Q.defer


var p1 = Defer()
var p2 = Defer()


Q.all([p1.promise, p2.promise])
  .then(console.log, null)

p1.resolve('PROMISES')
p2.resolve('FTW')
