// const jokes = new XMLHttpRequest();
// jokes.open("GET", "https://api.chucknorris.io/jokes/random");

// jokes.onreadystatechange = function () {
//     console.log(this.readyState);
//     console.log(this.status);
// };
// jokes.send();

// WORKING!!!!

// ###########################################################
// My answer
// const jokeDiv = document.querySelector("#joke");
// const getjokeBtn = document.querySelector("#joke-btn");

// function fetchRndmJk() {
//     const jokes = new XMLHttpRequest();
//     jokes.open("GET", "https://api.chucknorris.io/jokes/random");

//     jokes.onreadystatechange = function () {
//         if (this.readyState === 4 && this.status === 200) {
//             const jkdata = JSON.parse(this.responseText);
//             jokeDiv.innerHTML = jkdata.value;
//         }
//     };
//     jokes.send();
// }

// getjokeBtn.addEventListener("click", function (){
//     fetchRndmJk();
// });

// fetchRndmJk();

// ###########################################################
// Efficient way, using DOMcontentloaded

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById("joke-btn")

const generateJoke = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api.chucknorris.io/jokes/random")

    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                jokeEl.innerHTML = JSON.parse(this.responseText).value;
            } else {
                jokeEl.innerHTML = "Something Went Wrong (It's not funny!!!)";
            }
        }
    };
    xhr.send();
};
jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded",generateJoke);