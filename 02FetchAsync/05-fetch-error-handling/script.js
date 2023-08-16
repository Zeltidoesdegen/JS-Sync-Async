// fetch("http://httpstat.us/404")
//   .then((response) => {
//     return response;
// })
// .then(() => {
//   console.log("success");
// }).catch((error) => {
//   console.log(error);
// });

//#################################
// fetch("http://codegeass.net")
// .then((response) => {
//   return response;
// })
// .then(() => {
//   console.log("success");
// }).catch((error) => {
//   console.log(error);
// });

//#################################
// fetch("http://httpstat.us/404")
//   .then((response) => {
//     // console.log(response.ok);
//     if (!response.ok) {
//       throw new Error("Request Failed!")
//     }
//     return response;
// })
// .then(() => {
//   console.log("success");
// }).catch((error) => {
//   console.log(error);
// });
//#################################
//different response (messages)
fetch("http://httpstat.us/403")
  .then((response) => {    
    if (response.status === 404) {
      throw new Error("Not Found!");
    } else if (response.status === 500) {
      throw new Error("Server Error");      
    } else if (response.status !== 200) {
      throw new Error("Request Failed");      

    }


    return response;
})
.then(() => {
  console.log("success");
}).catch((error) => {
  console.log(error);
});
//#################################
//#################################
//#################################
//#################################
//#################################
//#################################
//#################################
//#################################
//#################################
//#################################
//#################################
//#################################