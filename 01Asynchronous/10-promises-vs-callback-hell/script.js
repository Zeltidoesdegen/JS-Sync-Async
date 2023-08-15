//original callback
// function getData(endpoint, cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', endpoint);
//   xhr.onreadystatechange = function () {
//     if ((this.readyState === 4) & (this.status === 200)) {
//       cb(JSON.parse(this.responseText));
//     }
//   };
//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);
// }
// getData('./movies.json', (data) => {
//   console.log(data);
//   getData('./actors.json', (data) => {
//     console.log(data);
//     getData('./directors.json', (data) => {
//       console.log(data);
//     });
//   });
// });

//implementing using promises
function getData(endpoint) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      xhr.open('GET', endpoint);
      
      xhr.onreadystatechange = function () {
        
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject("Something went wrong")
          }
        }    
        };
  
        setTimeout(() => {
          xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);   
    });
    }
  
  //display the movies
  // getData("./movies.json").then((movies) => {
  //   console.log(movies);
  // })
  
  //movies and actors
  // getData("./movies.json").then((movies) => {
  //   console.log(movies);
  //   return getData("./actors.json")
  // }).then((actors) => {
  //   console.log(actors);
  // })
  
  //###########################################
  //pati pamato at pamanggulo movies, actors, directors
  // getData("./movies.json").then((movies) => {
  //   console.log(movies);
  //   return getData("./actors.json")
  // }).then((actors) => {
  //   console.log(actors);
  //   return getData("./directors.json")
  // }).then((directors) => {
  //   console.log(directors);
  // })
  
  //#######################################
  //pag may error
  getData("./movies.json").then((movies) => {
    console.log(movies);
    return getData("./actors.json")
  }).then((actors) => {
    console.log(actors);
    return getData("./directors1.json")
  }).then((directors) => {
    console.log(directors);
  }).catch((error) => console.log(error));