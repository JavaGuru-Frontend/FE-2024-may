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


let saveTasks = (taskText) => {
    let taskData = JSON.parse(localStorage.getItem('taskList')) || []
    taskData.push(taskText);
    localStorage.setItem('taskList', JSON.stringify(taskData));
}
let printTasks = () => {
    let printTask = JSON.parse(localStorage.getItem('taskList'));
    taskList.innerHTML = '';
    printTask.forEach((taskRecord, index) => {
        taskList.innerHTML += `<div>${index + 1}. ${taskRecord}</div>`
    })
}
let clearHistory = () => {
    localStorage.removeItem('taskList');
    taskList.innerHTML = '';
}
addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click", clearHistory);
document.addEventListener("DOMContentLoaded", printTasks);



