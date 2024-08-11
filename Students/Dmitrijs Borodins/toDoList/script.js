
let addBtnElement = document.getElementById(`addBtn`);
let taskElement = document.getElementById(`task`);
let outputElement = document.getElementById(`output`);


let addValue = () => {
   // outputElement.innerHTML += `<li>${(taskElement.value)}</li>`;
   saveToLocalStorage(taskElement.value);
   loadFromLocalStorage();
}









let toggleDone = (event) => {

   let clickedElement = event.target //это свойство объекта события в JavaScript, которое указывает на элемент, на котором событие произошло
   if (clickedElement.classList.contains(`todo_done`)) { // Метод contains проверяет, есть ли в списке классов указанный класс. Он возвращает true, если класс присутствует, и false, если нет.//
      clickedElement.classList.remove(`todo_done`)
   }
   else {
      clickedElement.classList.add(`todo_done`)
   }

}

let saveToLocalStorage = (historyRecord) => {
   const task = {
      'done': false,
      'taskText': historyRecord
   }

   let ToDoData = JSON.parse(localStorage.getItem(`toDoList`)) || [];
   ToDoData.push(task);
   localStorage.setItem(`toDoList`, JSON.stringify(ToDoData));

   // localStorage.setItem(`toDoList`, historyRecord)
}

let loadFromLocalStorage = () => {
   outputElement.innerHTML = ``;
   let ToDoData = JSON.parse(localStorage.getItem(`toDoList`)) || [];
   ToDoData.forEach((todo, key) => {// todo любой элемент,который взяли из массива ToDoData//
      let = isTaskCheked = todo.done

      outputElement.innerHTML +=
         `
         <li class"todo_done" ${isTaskCheked ? `todo_done` : ``} onclick="toggleDone(event)">
         ${todo.taskText}
         <button>Remove</button>
         </li>`;

   });

   // todo.done ? 'todo_done' : '': Это тернарный оператор. Он проверяет условие todo.done. Если todo.done истинно (то есть равно true), то в class будет добавлен класс 'todo_done'. Если же todo.done ложно (равно false), то ничего не добавится, и значение class останется пустым ('').

}

addBtnElement.addEventListener(`click`, addValue);
loadFromLocalStorage();

