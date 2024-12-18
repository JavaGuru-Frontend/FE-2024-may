let printValue = (znachenie) => {
	output.innerHTML += `${znachenie}`
}

let clearInput = () => {
	output.innerHTML = '';
}

let handleError = () => {
	console.error('pizdec')
}

let saveHistory = (text) => {
	localStorage.setItem('item', text);
}

let printHistory = () =>{
	history.innerHTML = localStorage.getItem('item')
}



let equal = () => {
	let result = eval(output.innerHTML);
	saveHistory(`${output.innerHTML}=${result}`);
	clearInput();
	printValue(result);
	printHistory()
}