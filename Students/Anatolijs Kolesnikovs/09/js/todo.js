let addBtnElement = document.getElementById('addBtn');
let taskElement = document.getElementById('task');
let outputElement = document.getElementById('output');


let addValue = () => {
saveToLocalStorage(taskElement.value);
loadFromLocalStorage();
}

let toggleDone = (event) => {
	let clickedElement = event.target
	if (clickedElement.classList.contains('todo_done')) {
		clickedElement.classList.remove('todo_done')
	} else {
		clickedElement.classList.add('todo_done')
	}
	 debugger;
}

let saveToLocalStorage = (historyRecord) => {
	
	const task = {
		'done': false,
		'taskText': historyRecord,
	}


    let dataBase  = JSON.parse(localStorage.getItem('toDoList')) || [] ;
    dataBase.push(task);
    localStorage.setItem('toDoList', JSON.stringify(dataBase))
}

let loadFromLocalStorage = () => {
	outputElement.innerHTML = '';
    let dataBase  = JSON.parse(localStorage.getItem('toDoList')) || [] ;
    dataBase.forEach((todo, i) => {
        outputElement.innerHTML += `
		  <li 
		  		class="todo ${ todo.done ? 'todo_done' : ''} todo_${i}"
				onclick="toggleDone(event)"
				data-index=${i}
			>
		  		${todo.taskText}
				<button
					class=''
					onclick="remove(event)"
				>
					Remove
				</button>
			</li>`;
    });

}

addBtnElement.addEventListener('click', addValue);
loadFromLocalStorage();