/*
Q4). What is the output of this code snippet?
Ans :  

start
middle
1
end
success

*/
console.log('start')
const fn = () => (new Promise((resolve, reject) => {
console.log(1);
resolve('success')
}))
console.log('middle')
fn().then(res => {
console.log(res)
})
console.log('end')