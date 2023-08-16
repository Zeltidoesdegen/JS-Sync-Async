//https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/todos?_limit=10

//#####################################
const apiURL = "https://jsonplaceholder.typicode.com/todos"

const getTodo = () => {
    fetch(apiURL + "?_limit=10")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((todo) => addToDoDiv(todo));
        });
};

function addToDoDiv (todo) {
    const div = document.createElement('div');
    div.classList.add('todo');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id', todo.id);

    if (todo.completed) {
        div.classList.add('done');
    }

    document.getElementById('todo-list').appendChild(div);
};

function createToDo (e) {
    e.preventDefault();

    const newTodo = {
        title: e.target.firstElementChild.value,
        completed: false,
    };

    fetch(apiURL ,{
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => addToDoDiv(data));
};

function clickComplete (event) {
    if (event.target.classList.contains('todo')) {
        event.target.classList.toggle('done');
        const id = event.target.dataset.id;
        updateToDo(id, event.target.classList.contains('done'));
    }
};

function updateToDo (id, completed) {
    fetch(`${apiURL}/${id}`, {
        method: "PUT",
        body: JSON.stringify({completed}),
        headers: {
            'Content-Type': 'application/json'
        },
    });

}

function deleteToDo (event) {
    if (event.target.classList.contains('todo')) {
        const id = event.target.dataset.id;
        fetch(`${apiURL}/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(() => event.target.remove())
    }
}

function start () {
    document.addEventListener('DOMContentLoaded', getTodo);
    document.querySelector('#todo-form').addEventListener('submit',createToDo);
    document.querySelector('#todo-list').addEventListener('click',clickComplete);
    document.querySelector('#todo-list').addEventListener('dblclick',deleteToDo);
};

start()

// constructor = regular function    

