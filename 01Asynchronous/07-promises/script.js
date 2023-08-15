// A promise is an objectthat represents the completion or failure of an asynchronous operation

//when the task is complete, the promise either fulfilled or rejected.

//Using regular function
// const promise = function (callback) {
//   //Simulate some async task
//   setTimeout(() => {
//     console.log("Async Task Completed");
//     callback(); //invoke callback to resolve promise
//   }, 3000)
// }

// promise(function() {
//   console.log("Promise consumed....");
// });
// console.log("Hello from Global Scope");


//##########################
//Using arrow function
//create a promise using a constructor
// const promise = new Promise((resolve, reject) => {
//   //Do some async task
//   setTimeout(() => {
//     console.log("Async Task Complete");
//     resolve();
//   },3000)
// });

// //To handle the promise
// promise.then(() => {
//   console.log("Promise Consumed...");  
// });

// console.log("Hello from Global Scope");

//##########################

// const promise = new Promise((resolve, reject) => {
//   //Do some async task
//   setTimeout(() => {
//     console.log("Async Task Complete");
//     resolve();
//   },3000)
// });

// //To handle the promise
// promise.then(() => {
//   console.log("Promise Consumed...");  
// });

// new Promise((resolve,reject) => {
//   //DO some asyn task
//   setTimeout(() => {
//     console.log("Async task 2 complete");
//     resolve()
//   },3000)
// }).then(() => console.log("Promise 2 consumed"));

// console.log("Hello from Global Scope");

//######################################
//Returning a data
// const promise = new Promise((resolve, reject) => {
//   //Do some async task
//   setTimeout(() => {
//     console.log("Async Task Complete");
//     resolve();
//   },3000)
// });

// //To handle the promise
// promise.then(() => {
//   console.log("Promise Consumed...");  
// });

// new Promise((resolve,reject) => {
//   //DO some asyn task
//   setTimeout(() => {
//     resolve({ name: "Ryan", age: 22})   
//   },3000)
// }).then((user) => console.log(user));

// console.log("Hello from Global Scope");

//#######################################
// const promise = new Promise((resolve, reject) => {
//   //Do some async task
//   setTimeout(() => {
//     console.log("Async Task Complete");
//     resolve();
//   },3000)
// });

// //To handle the promise
// promise.then(() => {
//   console.log("Promise Consumed...");  
// });

// const getUser = new Promise((resolve,reject) => {
//   //DO some asyn task
//   setTimeout(() => {
//     resolve({ name: "Ryan", age: 22})   
//   },3000)
// });

// getUser.then((user) => console.log(user));

// console.log("Hello from Global Scope");

//##########################
//Handling Error
const promise = new Promise((resolve, reject) => {
    //Do some async task
    setTimeout(() => {
      console.log("Async Task Complete");
      resolve();
    },3000)
  });
  
  //To handle the promise
  // promise.then(() => {
  //   console.log("Promise Consumed...");  
  // });
  
  const getUser = new Promise((resolve,reject) => {
    //DO some asyn task
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve({ name: "Ryan", age: 22})   
      } else {
        reject ("Error: something went wrong")
      }
  
    },3000)
  });
  
  getUser.then((user) => console.log(user)).catch((error) => console.log(error)).finally(() => console.log("The promise has been resolved or rejected!"));
  
  console.log("Hello from Global Scope");