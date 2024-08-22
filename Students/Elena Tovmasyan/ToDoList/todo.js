let btnAddElement = document.getElementById(`btnAdd`);
let taskElement = document.getElementById(`task`);
let outputElement = document.getElementById(`output`);

let addValue = () => {
    // outputElement.innerHTML += `<li>${(taskElement.value)}</li>`;
    saveToLocalStorage(taskElement.value);
    loadFromLocalStorage();
};

let deleteItem = (event) => {
    let elementClickedID = event.target.dataset.id;
    let todoData = JSON.parse(localStorage.getItem(`ToDoList`)) || [];
    todoData.splice(elementClickedID, 1);
    localStorage.setItem(`ToDoList`, JSON.stringify(todoData));
    loadFromLocalStorage();
}

let editItem = (event) => {

}

let toggleDone = (event) => {

    /* let clickedElement = event.target;                      //это свойство объекта события в JavaScript, которое указывает на элемент, на котором событие произошло
    if (clickedElement.classList.contains(`todo_done!`)) {     /* Метод contains проверяет, есть ли в списке классов указанный класс. Он возвращает true, если класс присутствует, и false, если нет. */
  /*       clickedElement.classList.remove(`todo_done!`)
    }
    else {
        clickedElement.classList.add(`todo_done!`)
    } */

    let elementClickedID = event.target.dataset.id;
    let todoData = JSON.parse(localStorage.getItem(`ToDoList`)) || [];
    if (todoData(elementClickedID).done) {
        todoData(elementClickedID).done = false
    } else {
        todoData(elementClickedID).done = true
    }

/*     аналогично if else:
    todoData(elemenClickedID).done = !todoData(elemenClickedID).done */
    
    localStorage.setItem(`ToDoList`, JSON.stringify(todoData));
    loadFromLocalStorage();
};


let saveToLocalStorage = (historyRecord) => {
    const task = {
        'done': false,
        'taskText': historyRecord                                    /* Почему 'done' и 'taskText' не работают скошенные кавычки? */
        };
    let todoData = JSON.parse(localStorage.getItem(`ToDoList`)) || [];
    todoData.push(task);
    localStorage.setItem(`ToDoList`, JSON.stringify(todoData));
};


let loadFromLocalStorage = () => {
    outputElement.innerHTML = ``;
    let todoData = JSON.parse(localStorage.getItem(`ToDoList`)) || [];
    todoData.forEach((todo,key) => {
  /*   let isTaskChecked = todo.done;    */                                     
        outputElement.innerHTML += 
        `<li class="todo_done
        ${/* isTaskChecked */todo.done ? `todo_done` : `` }"
        onclick="toggleDone(event)"
        data-id="${key}"
        >
        ${todo.taskText}

        <input type="text" class="disabled">
        </input>

        <button class="edit" onclick="editItem(event)"
        data-id="${key}">
        Edit
        </button>

        <button onclick="deleteItem(event)"
        data-id="${key}">
        Delete
        </button>
        </li>`;
    });
}; 

btnAddElement.addEventListener(`click`, addValue);
loadFromLocalStorage();