// const jokes = new XMLHttpRequest();
// jokes.open("GET", "https://api.chucknorris.io/jokes/random");

// jokes.onreadystatechange = function () {
//     console.log(this.readyState);
//     console.log(this.status);
// };
// jokes.send();

// WORKING!!!!

const jokeDiv = document.querySelector("#joke");
const getjokeBtn = document.querySelector("#joke-btn");

function fetchRndmJk() {
    const jokes = new XMLHttpRequest();
    jokes.open("GET", "https://api.chucknorris.io/jokes/random");

    jokes.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const jkdata = JSON.parse(this.responseText);
            jokeDiv.innerHTML = jkdata.value;
        }
    };
    jokes.send();
}

getjokeBtn.addEventListener("click", function (){
    fetchRndmJk();
});

fetchRndmJk();