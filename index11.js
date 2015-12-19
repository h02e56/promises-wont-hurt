var Q = require('q')
var HTTP = require("q-io/http");

var cache = 'http://localhost:7000'
var db = 'http://localhost:7001'

HTTP.read(cache)
  .then((json) => {
    return json.toString()
  })
  .then(getData)
  .then((res) => {
    return JSON.parse(res.toString())
  })
  .then(console.log)
  .catch(console.log)

function getData(id) {
   return HTTP.read(`${db}/${id}`)
}
