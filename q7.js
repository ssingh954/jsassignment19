/*
Q7). What will the output be?
Ans :  

Error: The Fails!
undefined

*/

var p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
    })
    .catch(error => console.log(error))
    .then(error => console.log(error))