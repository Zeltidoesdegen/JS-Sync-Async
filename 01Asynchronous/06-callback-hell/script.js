//Introduction
//this will generate the movies, actors, directors in no particular order because of the random setTimeout (1-4 seconds)
//we do not have control over the output, thus we have to use nested callbacks (callback hell)


//##########################################
//Output is in no particular order
// function getData(endpoint) {
//     const xhr = new XMLHttpRequest();

//     xhr.open("GET", endpoint);

//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200){
//          console.log(JSON.parse(this.responseText));
//         }
//      };
     
//      //random 1-5 seconds
//      setTimeout(() => {
//          xhr.send();        
//      },Math.floor(Math.random() * 4000) + 1000);
//     }
    
//     getData("./movies.json")
//     getData("./actors.json")
//     getData("./directors.json")
//##########################################
//controlling the output
function getData(endpoint,cb) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
         cb(JSON.parse(this.responseText));
        }
     };

     //random 1-5 seconds
     setTimeout(() => {
        xhr.send();        
     },Math.floor(Math.random() * 3000) + 1000);
}

//Movies muna
// getData("./movies.json", (data) => {
//     console.log(data);
// })

//Movies then actors
// getData("./movies.json", (data) => {
//     console.log(data);
//     getData("./actors.json", (data) => {
//         console.log(data);
//     })
// })

//Movies, then actors, then directors
getData("./movies.json", (data) => {
    console.log(data);
    getData("./actors.json", (data) => {
        console.log(data);
        getData("./directors.json", (data) => {
            console.log(data);
        })
    })
})