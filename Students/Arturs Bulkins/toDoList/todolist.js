let addBtnElement = document.getElementById('addBtn');
let taskElement = document.getElementById('task');
let outputElement = document.getElementById('output');


let addValue = () => {
    saveToLocalStorage (taskElement.value);
    loadfromLocalStorage ();

}

let toggleDone = (event) => {
    let clickedElement = event.target
    if (clickedElement.classList.contains('todo_done')) {
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
    
    let toDoData = JSON.parse(localStorage.getItem('toDoList')) || [];
    toDoData.push(task);
    localStorage.setItem('toDoList', JSON.stringify(toDoData));
}

let loadfromLocalStorage = () => {
    outputElement.innerHTML = '';
    let toDoData = JSON.parse(localStorage.getItem('toDoList')) || [];
    toDoData.forEach((toDo, i) => {

        outputElement.innerHTML += `
        <li 
            class="todo ${ toDo.done ? 'todo_done' : ''} todo_${i}" 
            onclick="toggleDone(event)"
        >
            ${toDo.taskText}
            <button 
            onclick="remove(event)"
            >
            Remove</button>
        </li>`;
    });
}

addBtnElement.addEventListener('click', addValue); 
loadfromLocalStorage()