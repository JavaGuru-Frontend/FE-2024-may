let addBtnElement = document.getElementById('addBtn');
let taskElement = document.getElementById('task');
let outputElement = document.getElementById('output');


let addValue = () => {
outputElement.innerHTML += `<li>${(taskElement.value)}</li>`;


}

addBtnElement.addEventListener('click', addValue)