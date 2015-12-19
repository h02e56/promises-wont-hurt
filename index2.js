var Q = require('q')
var defer = Q.defer()

function showError(err) {
  // body...
  console.log(err.message)
}

defer.promise.then(null, showError)

setTimeout(defer.reject, 300, new Error('REJECTED!'))
