let printValue = (znachenie) => {
	output.innerHTML += `${znachenie}`
}

let clearInput = () => {
	output.innerHTML = '';
}

let handleError = () => {
	console.error('pizdec')

}

let equal = () => {
	let result = eval(output.innerHTML);
	clearInput();
	printValue(result);
}


