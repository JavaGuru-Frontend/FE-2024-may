let addBtnElement = document.getElementById('addBtn');
let taskElement = document.getElementById('task');
let outputElement = document.getElementById('output');


let addValue = () => {
	saveToLocalStorage(taskElement.value);
	loadFromLocalStorage();
}

let removeItem = (event) => {
	let elementClickedID = event.target.dataset.id;
	let dataBase  = JSON.parse(localStorage.getItem('toDoList')) || [] ;

	dataBase.splice(elementClickedID, 1);

	localStorage.setItem('toDoList', JSON.stringify(dataBase));
	loadFromLocalStorage();
}

let toggleDone = (event) => {
	let elementClickedID = event.target.dataset.id;
	let dataBase  = JSON.parse(localStorage.getItem('toDoList')) || [] ;

	dataBase[elementClickedID].done = !dataBase[elementClickedID].done


	localStorage.setItem('toDoList', JSON.stringify(dataBase));
	loadFromLocalStorage();
}

let edit = (event) => {
	let elementClickedID = event.target.dataset.id;
	if( event.target.innerText === 'Edit' ) {
		event.target.innerText = 'save';
		document.getElementById(`input-${elementClickedID}`).classList.remove('disabled')
	} else if (event.target.innerText === 'save')  {
		event.target.innerText = 'Edit';
	    document.getElementById(`input-${elementClickedID}`).classList.add('disabled')

		let newtext = document.getElementById(`input-${elementClickedID}`).value;
		let dataBase  = JSON.parse(localStorage.getItem('toDoList')) || [] ;
		dataBase[elementClickedID].taskText = newtext
		localStorage.setItem('toDoList', JSON.stringify(dataBase));
		loadFromLocalStorage();

	}




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
    dataBase.forEach((todo, key) => {


        outputElement.innerHTML += `
		  <div class="todo"> 
				<span 
					   class="${ todo.done ? 'todo_done' : '' }"
					   onclick="toggleDone(event)"
					   data-id="${key}"
				>
					   ${todo.taskText}
					   
					
				</span>
				<input type='text' class='disabled' id="input-${key}">
				<button

				class='editBtn'	    
				onclick="edit(event)"
				data-id="${key}"
					    
				>
							Edit
					
				</button>
				<button
							class=''
							onclick="removeItem(event)"
							data-id="${key}"
				>
							Remove
				</button>
		 </div
			`;
    });

}

addBtnElement.addEventListener('click', addValue);



loadFromLocalStorage();