

class BaseElement {
    constructor(tag, className, id) {
        this.tag = tag
        this.className = className;
        this.id = id;
        this.element = null;
        this.createElement();
    } 

    createElement() {
        this.element = document.createElement(this.tag);
        this.element.classList.add(this.className);
        this.element.id = (this.id);

        
    }
}

class Paragraph extends BaseElement {
    constructor(className, text, ) {
        super('p', className);
        this.text = text;

        this.init();
    }
    init() {
        this.element.innerText = this.text;
    }
}

class Span extends BaseElement {
	constructor(className, onclick, id, text){
		super('span', className, id);
		this.onclick = onclick;
		this.text = text;

		this.init(); 
	}
	init() {
		this.element.innerText = this.text;
		this.element.onclick = (event) => {
			this.onclick(event); 
	  };
	}
}


class input extends BaseElement {
	constructor(className, id, type){
		super('input', className, id);
		this.type = type;

		this.init(); 
	}
	init() {

		this.element.type = this.type;
	}
}

class button extends BaseElement {
	constructor(className,onclick, id, text) {
		super('button', className, id);
		this.onclick = onclick;
        this.text = text;

		this.init(); 
	}
	init() {

        this.element.innerText = this.text;
		  this.element.onclick = (event) => {
            this.onclick(event); 
        };

	}
}











{/* <span 
class="${ todo.done ? 'todo_done' : '' }"
onclick="toggleDone(event)"
data-id="${key}"
>
${todo.taskText}


</span> */}











// const 0 = '<div>'
// const a = '<div>'
// const mainText = new Paragraph('class', 'helloWorld');

// a.appendChild(mainText);
// a.appendChild(butto);


// 0.appendChild(a);





// class Todo {
//         constructor(tag, classname){
//             this.tag = tag
//             this.classname = classname
//         }
//         createTodo() {
//             this.todo = document.createElement(this.tag);
//             this.element.classList.add(this.classname);

//         }
// }

// class Span {
//         constructor(tag, classname, id, text) {
//             this.tag = tag
//             this.classname = classname
//             this.id = id
//             this.text = text
//         }
//         createSpan() {
//             this.span = document.createElement(this.tag);
//             this.span.classList.add(this.classname);
//             this.span.id(this.id);
//             this.span.innerHTML = (this.text);
//         }
// }

// class  Input {
//         constructor(tag, type, classname, id, text) {
//             this.tag = tag
//             this.type = type
//             this.classname = classname
//             this.id = id
//             this.text = text
//         }
//         createInput() {
//             this.input = document.createElement(this.tag);
//             this.input.type(type)
//             this.input.classList.add(this.classname);
//             this.input.id(this.id);
//             this.input.innerHTML = (this.text);
//         }
// }

// class Button {
//     constructor(tag, classname, onclick, id, text) {
//         this.tag = tag
//         this.classname = classname
//         this.onclick = onclick
//         this.id = id
//         this.text = text
//     }
//     createInput() {
//         this.button = document.createElement(this.tag);
//         this.button.classList.add(this.classname);
//         this.button.onclick(this.onclick)
//         this.button.id(this.id);
//         this.button.innerHTML = (this.text);
//     }
// }

// class Element {
//     constructor(tag, classname, onclick, id, type, text ) {
//         this.tag = tag
//         this.classname = classname
//         this.onclick = onclick
//         this.id = id
//         this.type = type
//         this.text = text
//         this.element = null;
//     }
//     createElement() {
//         this.element = document.createElement(this.tag);
//         this.element.classList.add(this.classname);
//         this.element.onclick(this.onclick);
//         this.element.id(this.id);
//         this.element.type(this.type);
//         this.element.text(this.text);

// }
// }