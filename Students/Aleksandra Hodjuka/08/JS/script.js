let addBtnElement = document.getElementById('addBtn');
let taskElement = document.getElementById('task');
let outputElement = document.getElementById('output');

let addValue = () => {
    saveToLocalStorage(taskElement.value);
    loadFromLocalStorage();
    taskElement.value = ''; 
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
            `<li class="todo-item">
                <span class="todo ${todo.done ? 'todo_done' : ''}" data-index="${index}" onclick="toggleDone(event)">
                    ${todo.taskText}
                </span>
                <input type="text" class="edit-field" id="editField${index}" value="${todo.taskText}" style="display:none;">
                <button onclick="editTask(${index})" id="editBtn${index}">Edit</button>
                <button onclick="saveTask(${index})" id="saveBtn${index}" style="display:none;">Save</button>
                <button onclick="removeTask(${index})">Remove</button>
            </li>`;
    });
}

let editTask = (index) => {
    document.getElementById(`editField${index}`).style.display = 'inline';
    document.getElementById(`saveBtn${index}`).style.display = 'inline';
    document.getElementById(`editBtn${index}`).style.display = 'none';

    let taskTextElement = document.querySelector(`[data-index='${index}']`);
    taskTextElement.style.display = 'none';
}

let saveTask = (index) => {
    let toDoData = JSON.parse(localStorage.getItem('toDoList')) || [];
    let newTaskText = document.getElementById(`editField${index}`).value;

    if (newTaskText.trim() !== '') {//проверка на пустую строку
        toDoData[index].taskText = newTaskText;
        localStorage.setItem('toDoList', JSON.stringify(toDoData));
        loadFromLocalStorage();  
    }
}

let removeTask = (index) => {
    let toDoData = JSON.parse(localStorage.getItem('toDoList')) || [];
    toDoData.splice(index, 1);  // Удаляет задачу по указанному индексу
    localStorage.setItem('toDoList', JSON.stringify(toDoData));
    loadFromLocalStorage();  
}


addBtnElement.addEventListener('click', addValue);

