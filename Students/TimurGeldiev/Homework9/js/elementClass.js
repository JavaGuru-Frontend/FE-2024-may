class CustomElement{
    constructor(tag, className, text){
        this.tag = tag;
        this.className = className;
        this.text = text;
    }
    createNewElement(){
        const elem = document.createElement(this.tag);
        elem.className = this.className || '';
        elem.textContent = this.text || '';
        return elem;
    }
}