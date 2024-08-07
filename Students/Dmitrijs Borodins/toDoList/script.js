
let addBtnElement = document.getElementById(`add-task`);
let taskElement = document.getElementById(`new-task`);
let outputElement = document.getElementById(`task-list`);


let addValue = () => {
   // outputElement.innerHTML += `<li>${(taskElement.value)}</li>`;
   saveToLocalStorage(taskElement.value);
   loadFromLocalStorage();
}

let toggleDone = (event) => {

   let clickedElement = event.target
   if (clickedElement.classList.contains(`todo_done`)) {
      clickedElement.classList.remove(`todo_done`)
   }
   else {
      clickedElement.classList.add(`todo_done`)
   }

}

let saveToLocalStorage = (historyRecord) => {
   const task = {
      'done': false,
      'taskText': historyRecord  //Почему тут нельзя использовать скошенные кaвычки//
   }

   let ToDoData = JSON.parse(localStorage.getItem(`toDoList`)) || [];
   ToDoData.push(task);
   localStorage.setItem(`toDoList`, JSON.stringify(ToDoData));

   // localStorage.setItem(`toDoList`, historyRecord)
}

let loadFromLocalStorage = () => {
   outputElement.innerHTML = ``;
   let ToDoData = JSON.parse(localStorage.getItem(`toDoList`)) || [];
   ToDoData.forEach(todo => {
      let = isTaskCheked = todo.done

      outputElement.innerHTML +=
         `<li class"todo_done" ${isTaskCheked ? `todo_done` : ``} onclick="toggleDone(event)">
         ${todo.taskText}
         <button>Remove</button>
         </li>`;

   });


}

addBtnElement.addEventListener(`click`, addValue);
// loadFromLocalStorage();

