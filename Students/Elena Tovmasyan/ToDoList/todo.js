let btnElement = document.getElementById(`btnAdd`);
let taskElement = document.getElementById(`task`);
let outputElement = document.getElementById(`output`);

let addValue = () => {
    saveToLocalStorage(taskElement.value);
    loadFromLocalStorage();
};


let toggleDone = (event) => {
    let clickedElement = event.target;
    if (clickedElement.classlist.contains(`todo_done!`)) {
        clickedElement.classlist.remove(`todo_done!`)
    }
    else {
        clickedElement.classlist.add(`todo_done!`)
    }
};


let saveToLocalStorage = (historyRecord) => {
    const task = {
        'done': false,
        'taskText': `historyRecord `                                     /* Почему 'done' и 'taskText' не работают скошенные кавычки? */
        };
    let toDoData = JSON.parse(localStorage.getItem(`ToDoList`)) || [];
    toDoData.push(task);
    localStorage.setItem(`ToDoList`, JSON.stringify(toDoData));
};


let loadFromLocalStorage = () => {
    outputElement.innerHTML = ``;
    let toDoData = JSON.parse(localStorage.getItem(`ToDoList`)) || [];
    toDoData.forEach(todo => {
        let = isTaskChecked = todo.done;                                /* Почему здесь после let - знак равно? */

        outputElement.innerHTML +=
        `<li class="todo_done" ${isTaskChecked ? `todo_done` : ``} onclick="toggleDone(event)">
        ${todo.taskText};
        <button>Delite</button>;
        </li>`;  
    });
};


btnElement.addEventListener(`click`, addValue);
// loadFromLocalStorage();