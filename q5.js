/*
Q5). Write a function delay that returns a promise. 
And that promise should return a setTimeout that calls resolve after 1000ms.

*/
const delay = async (time) => {
    return new Promise(resolve => setTimeout(resolve, time * 1000))
}

const sayHello = async () => {
    await delay(2)
    console.log('Hello there')
}
sayHello()