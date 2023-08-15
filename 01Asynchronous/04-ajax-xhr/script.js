// const xhr = new XMLHttpRequest();
// xhr.open("GET", "./movies.json")
// //readyState has 5 possible values
// // 0 - request not initialized
// // 1 - server connection established
// // 2 - request received
// // 3 - processing request
// // 4 - request finished and response is ready

// xhr.onreadystatechange = function () {
//     console.log(this.readyState);
//     console.log(this.status);
// };
// xhr.send();

//4 and 200 - eto yung mga need natin

//######################################
//4 and 200 - eto yung mga need natin
//output lang sa console.log
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "./movies.json")

// xhr.onreadystatechange = function () {
//    if (this.readyState === 4 && this.status === 200){
//     console.log(JSON.parse(this.responseText));
//    }


// };
// xhr.send();

//######################################
//Displaying the movies.json
// const xhr = new XMLHttpRequest();

// xhr.open("GET", "./movies.json")

// xhr.onreadystatechange = function () {
//    if (this.readyState === 4 && this.status === 200){
//     const data = JSON.parse(this.responseText)

//     data.forEach((movie) => {
//         const li = document.createElement("li")
//         li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`
//         document.querySelector("#results").appendChild(li);
//     })
//    }
// };
// xhr.send();

//##############################
//Github api
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/Zeltidoesdegen/repos")


xhr.onreadystatechange = function () {
   if (this.readyState === 4 && this.status === 200){
    const data = JSON.parse(this.responseText)

    data.forEach((repo) => {
        const li = document.createElement("li")
        li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description} - ${repo.url}`
        document.querySelector("#results").appendChild(li);
    })
   }
};
xhr.send();