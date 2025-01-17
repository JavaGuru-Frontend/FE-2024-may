let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clear");
let input = document.getElementById("input");
let taskList = document.getElementById('taskList');

let addTask = () => {
    if(input.value.trim() === "") return;
    saveTasks(input.value);
    input.value = "";
    printTasks();
}

let toggleDone = (event) => {
    let clickedElement = event.target;
    let index = clickedElement.dataset.index;
    let tasks = JSON.parse(localStorage.getItem('taskList') || []);
    tasks[index].done = !tasks[index].done;
    localStorage.setItem('taskList', JSON.stringify(tasks));
    if(clickedElement.classList.contains('todo_done')) {
        clickedElement.classList.remove('todo_done');
    }else{
        clickedElement.classList.add('todo_done');
    }

}
let removeTask = (index) => {
    let tasks = JSON.parse(localStorage.getItem("taskList") || []);
    if (index < 0 || index >= tasks.length) {
        console.error(`Task not found!`);
        return;
    }
    tasks.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tasks));
    printTasks();
}
let editTask = (index) => {
    let tasks = JSON.parse(localStorage.getItem("taskList") || []);
    let currentTask = tasks[index];
    if(currentTask.done){
        alert("You can't edit completed task");
        return;
    }
    let newText = prompt("Edit task:", currentTask.taskText);
    if(newText !== null && newText.trim() !== ""){
        currentTask.taskText = newText.trim();
        tasks[index] = currentTask;
        localStorage.setItem("taskList", JSON.stringify(tasks));
        printTasks();
    }
}

let saveTasks = (taskText) => {
    const task = {
        'done' : false,
        'taskText' : taskText
    }

    let taskData = JSON.parse(localStorage.getItem('taskList')) || [] ;
    taskData.push(task);
    localStorage.setItem('taskList', JSON.stringify(taskData));
}
let printTasks = () => {
    // fetch('https://dummyjson.com/todos')
    // .then(res => res.json())
    // .then(response => renderFromServer(response.todos));

    let printTask = JSON.parse(localStorage.getItem('taskList')) || [];
    taskList.innerHTML = '';
    printTask.forEach((taskRecord, index) => {
        let isTaskChecked = taskRecord.done;

        const itemContainer = new CustomElement('div', 'itemContainer').createNewElement();

        const todoClass = `todo ${isTaskChecked ? 'todo_done' : ''} task_${index}`;
        const todo = new CustomElement('div', todoClass, `${index + 1}. ${taskRecord.taskText}`).createNewElement();
        todo.dataset.index = index;
        todo.addEventListener('click', (event) => toggleDone(event));

        const buttonsContainer = new CustomElement('div', 'buttonsContainer').createNewElement();

        const removeButton = new CustomElement('button', 'remove-btn', 'Remove').createNewElement();
        removeButton.id = `remove_${index}`;
        removeButton.addEventListener('click', () => removeTask(index));

        const editButton = new CustomElement('button', 'edit-btn', 'Edit').createNewElement();
        editButton.addEventListener('click', () => editTask(index));

        buttonsContainer.appendChild(removeButton);
        buttonsContainer.appendChild(editButton);
        itemContainer.appendChild(todo);
        itemContainer.appendChild(buttonsContainer);

        taskList.appendChild(itemContainer);

        // taskList.innerHTML += `<div class="itemContainer">
        //                         <div class="todo ${isTaskChecked ? 'todo_done': ''} task_${index}"
        //                         data-index="${index}"
        //                         onclick="toggleDone(event)"> ${index + 1}. ${taskRecord.taskText}
        //                         </div>
        //                         <div class="buttonsContainer">
        //                         <button class="remove-btn" id="remove_${index}" onclick="removeTask(${index})">Remove</button>
        //                         <button class="edit-btn" onclick="editTask(${index})">Edit</button>
        //                         </div>
        //                         </div>`

    });
}
let clearHistory = () => {
    localStorage.removeItem('taskList');
    taskList.innerHTML = '';
}
// let renderFromServer = (todos) => {
//     todos.forEach((taskRecord) => {
//             taskList.innerHTML += `<div>${taskRecord.id}. ${taskRecord.todo}</div>`
//         })
// }

addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearHistory);
document.addEventListener("DOMContentLoaded", printTasks);



