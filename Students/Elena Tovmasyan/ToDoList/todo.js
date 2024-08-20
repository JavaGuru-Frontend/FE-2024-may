let btnAddElement = document.getElementById(`btnAdd`);
let taskElement = document.getElementById(`task`);
let outputElement = document.getElementById(`output`);

let addValue = () => {
       // outputElement.innerHTML += `<li>${(taskElement.value)}</li>`;
    saveToLocalStorage(taskElement.value);
    loadFromLocalStorage();
};

let toggleDone = (event) => {
    let clickedElement = event.target;                      //это свойство объекта события в JavaScript, которое указывает на элемент, на котором событие произошло
    if (clickedElement.classList.contains(`todo_done!`)) {  /* Метод contains проверяет, есть ли в списке классов указанный класс. Он возвращает true, если класс присутствует, и false, если нет. */
        clickedElement.classList.remove(`todo_done!`)
    }
    else {
        clickedElement.classList.add(`todo_done!`)
    }
};


let saveToLocalStorage = (historyRecord) => {
    const task = {
        'done': false,
        'taskText': historyRecord                                         /* В 'done' и 'taskText' не работают скошенные кавычки. */
    };
    let todoData = JSON.parse(localStorage.getItem(`ToDoList`)) || [];
    todoData.push(task);
    localStorage.setItem(`ToDoList`, JSON.stringify(todoData));
};                                                                        // localStorage.setItem(`ToDoList`, historyRecord)


let loadFromLocalStorage = () => {
    outputElement.innerHTML = ``;
    let todoData = JSON.parse(localStorage.getItem(`ToDoList`)) || [];
    todoData.forEach(todo => {
  /*   let isTaskChecked = todo.done;    */                                     
        outputElement.innerHTML += 
        `<li class="todo_done
        ${/* isTaskChecked */todo.done ? `todo_done` : `` }"
        onclick="toggleDone(event)">
        ${todo.taskText}
        <button onclick="remove(event)">Delete</button>
        </li>`;
    });
}; 

btnAddElement.addEventListener(`click`, addValue);
loadFromLocalStorage();