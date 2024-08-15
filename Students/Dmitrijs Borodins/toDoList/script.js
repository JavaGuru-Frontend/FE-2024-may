let addBtnElement = document.getElementById('addBtn');
let taskElement = document.getElementById('task');
let outputElement = document.getElementById('output');

let addValue = () => {
    saveToLocalStorage(taskElement.value);
    loadFromLocalStorage();
}


let deleteItem = (event) => {
    let elementClickedID = event.target.dataset.id;
    let todoData = JSON.parse(localStorage.getItem('toDoList')) || [];

    todoData.splice( elementClickedID, 1);

    localStorage.setItem('toDoList', JSON.stringify(todoData));
    loadFromLocalStorage();
} 

let toggleDone = (event) => {   
    let elementClickedID = event.target.dataset.id;
    let todoData = JSON.parse(localStorage.getItem('toDoList')) || [];

    todoData[elementClickedID].done = !todoData[elementClickedID].done
    
    localStorage.setItem('toDoList', JSON.stringify(todoData));
    loadFromLocalStorage();
}

let edit = (event) => {
    let elementClickedID = event.target.dataset.id;

    if( event.target.innerText === 'Edit' ) {
        event.target.innerText = 'save';
        document.getElementById(`input-${elementClickedID}`).classList.remove('disabled')
    } else if (event.target.innerText === 'save') {
        event.target.innerText = 'Edit';
        document.getElementById(`input-${elementClickedID}`).classList.add('disabled')

        let newtext = document.getElementById(`input-${elementClickedID}`).value;
        let todoData = JSON.parse(localStorage.getItem('toDoList')) || [];
        todoData[elementClickedID].taskText = newtext;
        localStorage.setItem('toDoList', JSON.stringify(todoData));
        loadFromLocalStorage();
    }
}

let saveToLocalStorage = (historyRecord) => {
    const task = {
        'done': false,
        'taskText': historyRecord
    }


    let todoData = JSON.parse(localStorage.getItem('toDoList')) || [];
    todoData.push(task);
    localStorage.setItem('toDoList', JSON.stringify(todoData));

}

let loadFromLocalStorage = () => {
    outputElement.innerHTML = '';
    let todoData = JSON.parse(localStorage.getItem('toDoList')) || [];
    todoData.forEach((todo, key) => {
            console.log(key)
            outputElement.innerHTML += `
            <div class='todo'>
                <span 
                    class=" ${ todo.done ? 'todo_done' : '' }"
                    onclick="toggleDone(event)"
                    data-id="${key}"
                >
                    ${todo.taskText}
                </span>
                <input type='text' class='disabled' id="input-${key}">
                <button 
                    onclick="deleteItem(event)"
                    data-id=${key}
                    class="btn-red"
                >
                    Remove
                </button>
                ${!todo.done 
                    ? `<button 
                    onclick="edit(event)"
                    data-id=${key}
                    class="btn-edit"
                    >
                    Edit
                    </button>`
                    : ''
                }
                
            </div>
            `;
});
}

addBtn.addEventListener('click', addValue);
loadFromLocalStorage();





// let addBtnElement = document.getElementById(`addBtn`);
// let taskElement = document.getElementById(`task`);
// let outputElement = document.getElementById(`output`);


// let addValue = () => {
//    // outputElement.innerHTML += `<li>${(taskElement.value)}</li>`;
//    saveToLocalStorage(taskElement.value);
//    loadFromLocalStorage();
// }


// let deleteItem = (event) => {
//    let elementClickedID = event.target.dataset.id;
//    let todoData = JSON.parse(localStorage.getItem('toDoList')) || [];

//    todoData.splice(elementClickedID, 1);

//    localStorage.setItem('toDoList', JSON.stringify(todoData));
//    loadFromLocalStorage();
// }









// let toggleDone = (event) => {
//    let elementClickedID = event.target.dataset.id;
//    let todoData = JSON.parse(localStorage.getItem('toDoList')) || [];

//    todoData[elementClickedID].done = !todoData[elementClickedID].done

//    localStorage.setItem('toDoList', JSON.stringify(todoData));
//    loadFromLocalStorage();
//    // let clickedElement = event.target //это свойство объекта события в JavaScript, которое указывает на элемент, на котором событие произошло
//    // if (clickedElement.classList.contains(`todo_done`)) { // Метод contains проверяет, есть ли в списке классов указанный класс. Он возвращает true, если класс присутствует, и false, если нет.//
//    //    clickedElement.classList.remove(`todo_done`)
//    // }
//    // else {
//    //    clickedElement.classList.add(`todo_done`)
//    // }

// }

// let saveToLocalStorage = (historyRecord) => {
//    const task = {
//       'done': false,
//       'taskText': historyRecord
//    }

//    let ToDoData = JSON.parse(localStorage.getItem(`toDoList`)) || [];
//    ToDoData.push(task);
//    localStorage.setItem(`toDoList`, JSON.stringify(ToDoData));

//    // localStorage.setItem(`toDoList`, historyRecord)
// }

// let loadFromLocalStorage = () => {
//    outputElement.innerHTML = ``;
//    let ToDoData = JSON.parse(localStorage.getItem(`toDoList`)) || [];
//    ToDoData.forEach((todo, key) => {// todo любой элемент,который взяли из массива ToDoData//
//       let = isTaskCheked = todo.done

//       outputElement.innerHTML +=
//          `
//       <li class="${isTaskCheked ? `todo_done` : ``}" data-id="${key}" onclick="toggleDone(event)">
//       ${todo.taskText}
      
//       </li>
//       <button class="btn-red">Remove</button>
//       `;

//    });

//    // todo.done ? 'todo_done' : '': Это тернарный оператор. Он проверяет условие todo.done. Если todo.done истинно (то есть равно true), то в class будет добавлен класс 'todo_done'. Если же todo.done ложно (равно false), то ничего не добавится, и значение class останется пустым ('').

// }

// addBtnElement.addEventListener(`click`, addValue);
// loadFromLocalStorage();

