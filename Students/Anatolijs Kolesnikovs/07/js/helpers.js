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
    let historyData = JSON.parse(localStorage.getItem('history')) || []


    historyData.push(text);
    localStorage.setItem('history', JSON.stringify(historyData));
}

let printHistory = () => {
    let printHistory = JSON.parse(localStorage.getItem('history'));
    printHistory.forEach((historyRecord) => {
        history.innerHTML += `<li>${historyRecord}</li>`
    })
}

let checkDivivzero = (parameter) => {
	if (parameter == 'Infinity') {
		return true;
	} else {
		return false;
	}

}

	function equal() {
		let result = eval(output.innerHTML);
		if (checkDivivzero(result)) {
			clearInput();
			result = "error";
			printValue(result);
		} else {
			saveHistory(`${output.innerHTML}=${result}`);
			clearInput();
			printValue(result);
			printHistory();
		}
		
		}
	
printHistory();