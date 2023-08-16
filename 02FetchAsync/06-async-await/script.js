// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({name: "Ryan", age: 22});
//   }, 1000)
// });

// promise.then((data) => console.log(data)); //consuming it with .then and getting the data

//##################################
//for async await, kailangan nasa function sya na asynchronous
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({name: "Ryan", age: 22});
//   }, 1000)
// });

// async function getPromise() {
//   const response = await promise;
//   console.log(response);
// }

// getPromise()

//##################################
// using async await on fetch

// async function getUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   const data = await res.json();

//   console.log(data);
// }
// getUsers();

// //comparing it with .then
// function getUsers2() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// }
// getUsers2();

//##################################
//implementing using arrow function
getPosts = async () => {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();
  
    console.log(data);
  }
  
  getPosts()
  
  //##################################
  //##################################
  //##################################
  //##################################
  //##################################
  //##################################
  //##################################
  //##################################
  //##################################
  //##################################
  //##################################
  //##################################
  //##################################
  //##################################