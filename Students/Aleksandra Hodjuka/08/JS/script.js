let addBtnElement = document.getElementById ('addBtn');
let taskElement = document.getElementById ('task');
let outputElement = document.getElementById ('output');


let addValue =()=> {
   saveToLocalStorage(taskElement.value);
   loadFromLocalStorage();
}


let toggleDone = (event)=>{
let clickedElement = event.target;
if(clickedElement.classList.contains('todo_done')){
   clickedElement.classList.remove('todo_done')
}else{
   clickedElement.classList.add('todo_done')
}
}

let saveToLocalStorage=(historyRecord)=>{

const task = {
   'done': false,
   'taskText':historyRecord
}

let toDoData = JSON.parse(localStorage.getItem('toDoList'))|| [];
toDoData.push(task);
   localStorage.setItem('toDoList',JSON.stringify(toDoData))
}

let loadFromLocalStorage = () => {
   outputElement.innerHTML = '';
  let toDoData = JSON.parse(localStorage.getItem('toDoList'))|| [];
  toDoData.forEach(todo => {
   outputElement.innerHTML += 
   `<li 
   class="todo ${todo.done ? 'todo_done':''}" 
   onclick= "toggleDone(event)">
   
   
   ${todo.taskText}
   <button>

   Remove
   </button>

   
   </li>`;
});
}
addBtn.addEventListener('click',addValue)
 //loadFromLocalStorage();

