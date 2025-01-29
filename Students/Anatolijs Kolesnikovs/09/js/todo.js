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

let todoClass= () => {
	`'${ todo.done ? 'todo_done' : '' }'`
}




let loadFromLocalStorage = () => {
	outputElement.innerHTML = '';
    let dataBase  = JSON.parse(localStorage.getItem('toDoList')) || [] ;
    dataBase.forEach((todo, key) => {
		    const container = new BaseElement('div','todo','todo');
			outputElement.append(container.element);
			let todoParent = document.getElementById('todo');
			const span = new Span(`"${ todo.done ? 'todo_done' : '' }"` ,'toggleDone(event)',`${key}`, `${todo.taskText}`);
			todoParent.appendChild(span.element);
			const todoInput = new input('disabled', `${key}`, 'text');
			todoParent.appendChild(todoInput.element);
			const editButton = new button('editBtn','edit(event)',`${key}`, 'edit');
			todoParent.appendChild(editButton.element);
			// const removeButton = new button('removeBtn','removeItem(event)',`${key}`, 'Remove');
			// () => removeItem(event)
			const removeButton = new button('removeBtn',() => removeItem(event),`${key}`, 'Remove');
			todoParent.appendChild(removeButton.element);
		

    });

}

addBtnElement.addEventListener('click', addValue);



loadFromLocalStorage();