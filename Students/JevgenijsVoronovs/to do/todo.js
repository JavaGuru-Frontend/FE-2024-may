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
                    class="removeBTN"
                >
                    Remove
                </button>
                ${!todo.done 
                    ? `<button 
                    onclick="edit(event)"
                    data-id=${key}
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