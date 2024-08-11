let addBtnElement = document.getElementById('addBtn');
let taskElement = document.getElementById('task');
let outputElement = document.getElementById('output');


let addValue = () => {
    saveToLocalStorage (taskElement.value);
    loadfromLocalStorage ();

}

let deleteItem = (event) => {
    let elementClickedID = event.target.dataset.id;
    let todoData = JSON.parse(localStorage.getItem('toDoList'));
    todoData.splice(elementClickedID, 1);

    localStorage.setItem('toDoList', JSON.stringify(todoData));
    loadfromLocalStorage();
}

let toggleDone = (event) => {
    let clickedElement = event.target
    if (clickedElement.classList.contains('todo_done')) {
        clickedElement.classList.remove('todo_done')

    } else {
        clickedElement.classList.add('todo_done')
    }
    
}

let edit = (event) => {
    if( event.target.innerText === 'Edit'){
        event.target.innerText = 'save';
        document.getElementById(`input-${elementClickedID}`).classList.remove('disabled');
    } else if (event.target.innerText = 'save') {
        event.target.innerText === 'Edit';
        document.getElementById(`input-${elementClickedID}`).classList.remove('disabled'); 
    }

    let newText = document.getElementById(`input-${elementClickedID}`).value;
    let todoData = JSON.parse(localStorage.getItem('todoList')) || [];
    todoData[elementClickedID].taskText = newText;
    localStorage.setItem('todoList', JSON.stringify(todoData));
    loadfromLocalStorage();
    
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
                <input type='text' class='disabled' id='${i}'>
                <button 
                onclick="remove(event)" data-id=${i}
                >
                Remove</button>
                <button 
                onclick="edit(event)" data-id=${i}
                >
                Edit</button>
        </li>`;
    });
}

addBtnElement.addEventListener('click', addValue); 
loadfromLocalStorage()