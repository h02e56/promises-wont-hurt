var Q = require('q')
var HTTP = require("q-io/http");
var _ = require('lodash');

var urls = {
  cache: 'http://localhost:7000',
  db : 'http://localhost:7001'
}

var flow =  _.flow(getCache, getData)

var start =  _.bind(flow, urls)

Q.fcall(start, 'dsa')
  .then(printResult)

function printResult(res) {
  return res;
  // console.log(JSON.parse(res.toString()))
}

function getCache(){
  return HTTP.read(this.cache)
    .then((json) => {
      return json.toString()
    })
}
function getData(id) {
  console.log(id);
  return HTTP.read(`${this.db}/${id}`)
   .then((json) => {
     return json.toString()
   })
}
