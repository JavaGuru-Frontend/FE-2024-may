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
    debugger;
    printHistory.forEach((historyRecord) => {
        history.innerHTML += `<li>${historyRecord}</li>`
    })
}

// let checkDivivzero = (parameter) => {
// 	if (parameter === 'Infinity') {
// 		return true;
// 	} else {
// 		return false;
// 	}

// }



function equal() {
	let result = eval(output.innerHTML);
	if (isNaN(result)){
		clearInput();
		printValue(output.innerHTML="error");
	  } else {
		console.log(result)
		saveHistory(`${output.innerHTML}=${result}`);
		clearInput();
		printValue(result);
		printHistory();
	}






	// if (checkDivivzero(result)) {
	// 	clearInput();
	// 	printValue(output.innerHTML="error");

	// function equal() {
	// 	let result = eval(output.innerHTML);
	// 	if (result === 'Infinity') {
	// 			saveHistory(`${output.innerHTML}=${result}`);
	// 			clearInput();
	// 			printValue(result);
	// 			printHistory();
	// 	} else {
	// 			clearInput();
	// 			result = "error";
	// 			printValue(result);
	// 	}
		
	// 	}







}	
printHistory();