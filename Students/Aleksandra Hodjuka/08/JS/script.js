let addBtnElement = document.getElementById('addBtn');
let taskElement = document.getElementById('task');
let outputElement = document.getElementById('output');

let addValue = () => {
    saveToLocalStorage(taskElement.value);
    loadFromLocalStorage();
}

let toggleDone = (event) => {
    let clickedElement = event.target;
    if (clickedElement.classList.contains('todo')) {
        let toDoData = JSON.parse(localStorage.getItem('toDoList')) || [];
        let index = clickedElement.getAttribute('data-index');
        toDoData[index].done = !toDoData[index].done;
        localStorage.setItem('toDoList', JSON.stringify(toDoData));
        loadFromLocalStorage();
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

let loadFromLocalStorage = () => {
    outputElement.innerHTML = '';
    let toDoData = JSON.parse(localStorage.getItem('toDoList')) || [];
    toDoData.forEach((todo, index) => {
        outputElement.innerHTML +=
            `<li 
                class="todo ${todo.done ? 'todo_done' : ''}" 
                data-index="${index}" 
                onclick="toggleDone(event)">
                
                ${todo.taskText}
                <button onclick="removeTask(${index})">
                    Remove
                </button>
            </li>`;
    });
}

let removeTask = (index) => {
    let toDoData = JSON.parse(localStorage.getItem('toDoList')) || [];
    toDoData.splice(index, 1);  // Удаляет задачу по указанному индексу
    localStorage.setItem('toDoList', JSON.stringify(toDoData));
    loadFromLocalStorage();  
}

addBtnElement.addEventListener('click', addValue);
