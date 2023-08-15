// original

// function createPost (post) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: "POST",
//         body: JSON.stringify({
//             title: post.title,
//             body: post.body,

//         })
//     })
// }
// ###########################################################

// applying destructuring from the code above
function createPost (title, body) {
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: "POST",
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {
            "Content-Type": "application/json",
            token: "abc123", //fake token for demo purposes
        },
    })
    .then((res) => res.json())
    .then((data) => console.log(data)) // return of promise
}

createPost({title: "My Post", body: "This is my post"})