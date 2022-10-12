/*
Q2). Write a sleep function using a promise in javascript?
Ans: 
*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function delayedGreeting() {
    console.log("Hello");
    await sleep(2000);
    console.log("World!");
    await sleep(2000);
    console.log("Goodbye!");
  }
  
  delayedGreeting();
  