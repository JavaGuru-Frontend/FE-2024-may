let addBtnElement = document.getElementById('addBtn');
let taskElement = document.getElementById('task');
let outputElement = document.getElementById('output');


let addValue = () => {
saveToLocalStorage(taskElement.value);
loadFromLocalStorage();
}

let saveToLocalStorage = (historyRecord) => {
    let dataBase  = JSON.parse(localStorage.getItem('toDoList')) || [] ;
    dataBase.push(historyRecord);
    localStorage.setItem('toDoList', JSON.stringify(dataBase))
}

let loadFromLocalStorage = () => {
    let dataBase  = JSON.parse(localStorage.getItem('toDoList')) || [] ;
    dataBase.forEach(todo => {
        outputElement.innerHTML += `<li>${todo}</li>`;
    });

}

addBtnElement.addEventListener('click', addValue)

loadFromLocalStorage();