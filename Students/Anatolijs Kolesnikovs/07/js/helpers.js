let printValue = (znachenie) => {
	output.innerHTML += `${znachenie}`
}

let clearInput = () => {
	output.innerHTML = '';
}

let handleError = () => {
	console.log('pizdec')
}

let saveHistory = (text) => {
	localStorage.setItem('item', text);
}

let printHistory = () => {
	history.innerHTML = localStorage.getItem('item')
}

let checkDivivzero = (result) => {
	if (result === 'Infinity') {
		return true;
	} else {
		return false;
	}

}


function equal() {
	let result = eval(output.innerHTML);
	if (checkDivivzero(result) === false) {
		saveHistory(`${output.innerHTML}=${result}`);
		clearInput();
		printValue(result);
		printHistory();
	} else {
		clearInput();
		output.innerHTML = "error"
	}

}