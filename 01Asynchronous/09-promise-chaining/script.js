// ############### Start file
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
        
//         if (!error) {
//             resolve({ name: "Ryan", age: 40 });
//         } else {
//             reject("Error: Something went wrong");
//         }
//     }, 1000);
// });

// promise
//     .then((user) => {
//         console.log(user);
//     })
//     .catch((error) => console.log(error));


//##############################################
//chaining the name
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
        
//         if (!error) {
//             resolve({ name: "Ryan", age: 40 });
//         } else {
//             reject("Error: Something went wrong");
//         }
//     }, 1000);
// });

// promise
//     .then((user) => {
//         console.log(user);
//         return user.name;
//     }).then((name) => {
//         console.log(name);
//     }).catch((error) => console.log(error));
//##############################################

//chaining the name then the length
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        
        if (!error) {
            resolve({ name: "Ryan", age: 40 });
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000);
});

promise
    .then((user) => {
        console.log(user);
        return user.name;
    }).then((name) => {
        console.log(name);
        return name.length;
    }).then((nameLength) => {
        console.log(nameLength);
    }).catch((error) => console.log(error)).then(() => console.log("This will run no matter what"));