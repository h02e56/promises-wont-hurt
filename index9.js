var Q = require('q')
var Defer = Q.defer


var promise1 = Defer()
var promise2 = Defer()

function all(p1, p2) {
  var value = 0
  var result = []
  var finalPromise = Defer()

  function inc(res) {
    value++
    result.push(res)
    if(value == 2){
      finalPromise.resolve(result)
    }
  }
  p1.promise
    .then(inc, finalPromise.reject)
    .done()
  p2.promise
    .then(inc, finalPromise.reject)
    .done()

  p1.resolve('PROMISES')
  p2.resolve('FTW')

  return finalPromise.promise
}

setTimeout(() => {
  all(promise1, promise2).then(console.log).done()
}, 200)
