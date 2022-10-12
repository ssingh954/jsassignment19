//Q1. What is the output of the code above ?
/* Ans :  

Error 1   
Success 4

*/

function job() {
  return new Promise(function(resolve, reject) {
  reject();
  });
  }
  let promise = job();
  promise
  .then(function() {
  console.log('Success 1');
  })
  .then(function() {
  console.log('Success 2');
  })
  .then(function() {
  console.log('Success 3');
  })
  .catch(function() {
  console.log('Error 1');
  })
  .then(function() {
  console.log('Success 4');
  });