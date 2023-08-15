//starting file is yung last nung last topic

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
  //######################
    //movies
    // const moviesPromise = getData("./movies.json")
    // moviesPromise.then((m) => console.log(m));
    
    //##########################
    //lahat na
    // const moviesPromise = getData("./movies.json")
    // const actorsPromise = getData("./actors.json")
    // const directorsPromise = getData("./directors.json")
  
    // //takes in promises
    // Promise.all([moviesPromise, actorsPromise, directorsPromise]).then((data) => {
    //   console.log(data);
    // });
  
    //####################################### pag may error
    // const moviesPromise = getData("./movies.json")
    // const actorsPromise = getData("./actors.json")
    // const directorsPromise = getData("./directors.json")
  
    // //takes in promises
    // Promise.all([moviesPromise, actorsPromise, directorsPromise]).then((data) => {
    //   console.log(data);
    // }).catch((error) => console.log(error))
  
    //pwede din dito ang additional promise
    //gawa tayo ng eme na promise
  
    const moviesPromise = getData("./movies.json")
    const actorsPromise = getData("./actors.json")
    const directorsPromise = getData("./directors.json")
  
    const emePromise = new Promise((resolve, reject) => {
      resolve("Hello World");
    });
  
    //takes in promises
    Promise.all([moviesPromise, actorsPromise, directorsPromise, emePromise]).then((data) => {
      console.log(data);
    }).catch((error) => console.log(error))