let inElement = document.getElementById("input");
let allBtn = document.getElementsByClassName("btn");
let history = document.getElementById('history');

let isResultShown = false;

const defaultValue = "0";
inElement.value = defaultValue;

let printValue = (value, replace = false) => {
    if (replace) {
        inElement.value = `${value}`;
    } else {
        inElement.value += `${value}`;
    }
}
let clearInput = () => {
    inElement.value = defaultValue;
}
let saveHistory = (text) => {
    let historyData = JSON.parse(localStorage.getItem('history')) || []


    historyData.push(text);
    localStorage.setItem('history', JSON.stringify(historyData));
}
let printHistory = () => {
    let printHistory = JSON.parse(localStorage.getItem('history'));
    history.innerHTML = '';
    printHistory.forEach((historyRecord) => {
        history.innerHTML += `<li>${historyRecord}</li>`
    })
}
let clearHistory = () => {
    localStorage.removeItem('history');
    history.innerHTML = '';
}
let equal = () => {
    try {
        let result = eval(inElement.value);
        if (isNaN(result) || !isFinite(result)) {
            alert("Calculations error");
            clearInput();
        } else {
            if (result % 1 !== 0) {
                result = result.toFixed(8);
            }
            saveHistory(`${inElement.value} = ${result}`)
            clearInput();
            printValue(result, true);
            printHistory();
        }
        isResultShown = true;

    } catch (error) {
        console.log(error);
        clearInput();
        printValue("ERROR", true);
    }
}
let handleInput = (event) => {
    let inputValue = inElement.value;
    let allowedChars = /^[0-9e+\-*/.]*$/;
    if (event.type === 'input') {
        if (!allowedChars.test(inputValue)) {
            alert("Wrong input");
            clearInput();
        }
    }
    if (event.type === 'keydown') {
        let allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'e'];
        if (allowedKeys.includes(event.key)) {
            for (let i = 0; i < btnArray.length; i++) {
                let id = btnArray[i].getAttribute('data-id');
                if (id === event.key) {
                    btnArray[i].click()
                }
            }
        } else if (event.keyCode === 13) {
            equal();
        }
    }
}

Array.from(allBtn).forEach((button) => {
    button.addEventListener("click", () => {
        let type = button.getAttribute('data-type');
        let buttonValue = button.getAttribute('data-id');


        let operators = ["+", "-", "*", "/", "."];
        let lastChar = inElement.value[inElement.value.length - 1];


        if (buttonValue !== "=") { //Очистка поля ввода при вводе нового числа если функция eval уже была использована
            if (isResultShown) {
                if (!operators.includes(buttonValue)) { //Если следующий ввод это оператор, то поле не очищается
                    clearInput();
                }
                isResultShown = false;


            }

            if (operators.includes(buttonValue) && operators.includes(lastChar)) { //Проверка на ввод нескольких операторов подряд
                return;
            }
            if (buttonValue === ".") {
                let numbers = inElement.value.split(/[\+\-\*\/]/);
                let currentNumber = numbers[numbers.length - 1];
                if (currentNumber.includes(".")) {
                    return;
                }
                printValue(buttonValue);
                return;
            }
            if (buttonValue === "0") {
                if (inElement.value === "" || operators.includes(lastChar)) { //Если поле пустое или последний символ это оператор, то можно добавить ещё один 0
                    printValue(buttonValue);
                    return;
                } else if (inElement.value === "0") { //Если в поле ввода только 0, то ещё один 0 добавить нельзя
                    return;
                }
            }
        }

        switch (type) {
            case 'operator':
                if (!operators.includes(lastChar)) {
                    printValue(buttonValue);
                }
                break;

            case 'number':
                if (inElement.value === defaultValue && buttonValue !== ".") {
                    printValue(buttonValue, true);
                } else if (inElement.value.length < 10) {
                    printValue(buttonValue, false);
                }
                break;
            case 'clear':
                clearInput();
                break;
            case 'equal':
                try {
                    equal();
                } catch (error) {
                    console.log(error)
                    clearInput();
                }
                break;
            case 'clearHistory':
                clearHistory();
                break;
            default:
                alert("Something went wrong!");
                break;
        }

    });
});

inElement.addEventListener("input", handleInput);
inElement.addEventListener("keydown", handleInput);


