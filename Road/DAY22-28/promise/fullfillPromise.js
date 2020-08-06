('use strict');

var promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve('FULFILLED!'), 300);
});
promise.then((value) => console.log(value));
