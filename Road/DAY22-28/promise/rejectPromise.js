var promise = new Promise(function (resolve, reject) {
  setTimeout(() => reject(Error('REJECTED!')), 300);
}).then(null, function (error) {
  onReject(error);
});
function onReject(error) {
  console.log(error.message);
}
