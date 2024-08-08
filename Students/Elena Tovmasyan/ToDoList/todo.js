let btnElement = document.getElementById(`btn`);
let taskElement = document.getElementById(`task`);
let outputElement = document.getElementById(`output`);

let todoData = JSON.parse(localStorage.getItem(`ToDoList`)) || [];

let addValue = () => {
    saveToLocalStorage(taskElement.value);
    loadFromLocalStorage();
};


let saveToLocalStorage = (historyRecord) => {
    todoData.push(historyRecord);
    localStorage.setItem(`ToDoList`, JSON.stringify(todoData));
};


let loadFromLocalStorage = () => {
    outputElement.innerHTML = ``;
    todoData.forEach(todo => {
        outputElement.innerHTML += `<li>${todo}</li>`;  
    }) ;
};



btnElement.addEventListener(`click`, addValue);
loadFromLocalStorage();