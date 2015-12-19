var Q = require('q')
var HTTP = require("q-io/http");

var url = 'http://localhost:1337'
var wrongurl = 'http://localhost:1332'

HTTP.read(url)
  .then((res)=>{
    console.log(JSON.parse(res));
  })
  .catch(console.log)
