var Q = require('q')

var invalid = process.argv[2]

var valid = JSON.stringify({
  name: 'jose',
  surname: 'dsa'
})

function parsePromised (argument) {
  var defer = Q.defer()
  var res

  try {
    res = JSON.parse(argument)
  } catch (e) {
    defer.reject(e)
  } finally {
    defer.resolve(res)
  }
  return defer.promise
}


parsePromised(invalid)
  .then(console.log, console.log)

parsePromised(valid)
  .then(console.log, console.log )
