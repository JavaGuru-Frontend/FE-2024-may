class element {
	constructor(tag, className) {
	  this.tag        = tag;
	  this.className  = className;
 
	  this.element = null;
 
	  this.createElement();
	}
 
	createElement() {
	  this.element = document.createElement(this.tag);
	  this.element.classList.add(this.className);
	}
 }
 
 class Paragraph extends element {
	constructor(className, text) {
	  super('p', className);
	  this.text = text;
 
	  this.init();
	}
	init() {
	  this.element.innerText = this.text;
	}
 }


const container = new Paragraph('newClass','Not Working');

document.getElementById('output').appendChild(container.element)

