// const intervalID = setInterval(myCallback, 1000)

// function myCallback() {
//     console.log(Date.now());
// }

// function stopChange() {
//     clearInterval(intervalID)
// }

// document.getElementById("stop").addEventListener("click", stopChange);

// #################################################################

// const intervalID = setInterval(myCallback, 1000, "Hello")

// function myCallback(a) {
//     console.log(a, Date.now());
// }

// function stopChange() {
//     clearInterval(intervalID)
// }

// document.getElementById("stop").addEventListener("click", stopChange);

// #################################################################
let intervalID;

function startChange() {
    if(!intervalID){
        intervalID = setInterval(changeRandomColor, 1000)
    }

}

function stopChange() {
    clearInterval(intervalID);
}

function changeColor() {
    if (document.body.style.backgroundColor !== "black") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}

function changeRandomColor() {
    const randomColor = Math.floor(Math.random()* 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`
}

document.getElementById("stop").addEventListener("click", stopChange);
document.getElementById("start").addEventListener("click", startChange);