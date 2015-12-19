var Q = require('q')
var defer = Q.defer()

function attachTitle(argument) {

  //es6 string interpolation
  var res =  `DR. ${argument}`
  return res
}

//esto mola mazo, concatenate promises
defer.promise
  .then(attachTitle)
  .then(console.log)

defer.resolve('MANHATTAN')
