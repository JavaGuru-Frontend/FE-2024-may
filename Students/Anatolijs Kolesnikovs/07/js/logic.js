

let outElement = document.getElementById('output');


let printValue = (printNumber) => {
	outElement.innerHTML +=`${printNumber}`;
}

let equal = () => {
	outElement.innerHTML = eval(outElement.innerHTML);

}

let clearList = () => {
	outElement.innerHTML = ('');
}

