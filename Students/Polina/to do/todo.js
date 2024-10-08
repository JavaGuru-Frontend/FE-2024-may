let addBtnElement = document.getElementById('addBtn');
let taskElement = document.getElementById('task');
let outputElement = document.getElementById('output');

let addValue = () => {
    saveToLocalStorage(taskElement.value);
    loadFromLocalStorage();
}
let clearItem = (event) => {
    let clickedElement = event.target;
    let todoData = JSON.parse(localStorage.getItem('toDoList')) || [] ;
    todoData.splice(clickedElement, 1);
}

let toggleDone = (event) => {
    
    let clickedElement = event.target;
    let todoData = JSON.parse(localStorage.getItem('toDoList')) || [] ;

    if ( clickedElement.classList.contains('todo_done')) {
        clickedElement.classList.remove('todo_done')
    } else {
        clickedElement.classList.add('todo_done')
    }
}

let saveToLocalStorage = (historyRecord) => {
    const task = {
        'done': false,
        'taskText': historyRecord
    }
    let todoData = JSON.parse(localStorage.getItem('toDoList')) || [] ;
    todoData.push(task);
    localStorage.setItem('toDoList', JSON.stringify(todoData))
}

let loadFromLocalStorage = () => {
    outputElement.innerHTML = '';
    let todoData = JSON.parse(localStorage.getItem('toDoList')) || [] ;
    todoData.forEach(todo => {
            outputElement.innerHTML += `
            <li 
            class="todo ${ todo.done ? 'todo_done' : '' }"
            onclick="toggleDone(event)"
            >
                ${todo.taskText}
                <button onclick="clearItem(event)">
                Remove
                </button>
            </li>`;
});
}

addBtn.addEventListener('click', addValue);

loadFromLocalStorage();