var Q = require('q')

function throwMyGod() {
  throw Error('OH NOES')
}

function iterate() {
  for (var i = 1; i <= 5; i++) {
      console.log(`${i}`);
  }
  return throwMyGod()
}


Q.fcall(iterate)
  .catch((err) => {
    console.log(err);
  })
