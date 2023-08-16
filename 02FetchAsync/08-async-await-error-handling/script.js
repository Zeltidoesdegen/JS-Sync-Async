// const getUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUsers();

//##########################################
//async await then try catch
// const getUsers = async () => {
//   try {
//     const response = await fetch("http://httpstat.us/404")

//     const data = await response.text();

//     if(!response.ok) {
//       throw new Error("Request failed")
//     }
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getUsers();


//##########################################
// .then = .catch
//async await = try catch
//async await  = .catch
//##########################################
//async await then .catch
const getPosts = async () => {
    const response = await fetch("http://httpstat.us/404")
    const data = await response.text();
    if(!response.ok) {
      throw new Error("Request failed")
    }
    console.log(data);
 
}
getPosts().catch((error) => console.log(error));


//##########################################
//##########################################
//##########################################