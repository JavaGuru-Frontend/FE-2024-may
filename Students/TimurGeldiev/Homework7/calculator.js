let inElement = document.getElementById("input");
let allBtn = document.getElementsByClassName("btn");

let isResultShown = false;

const defaultValue = "0";
inElement.value = defaultValue;

Array.from(allBtn).forEach((button) => {
  button.addEventListener("click", () => {
    let buttonValue = button.innerHTML;
    let operators = ["+", "-", "*", "/", "."];
    let lastChar = inElement.value[inElement.value.length - 1];
    

    if (buttonValue != "=" && inElement.value.length < 10) {
      if (isResultShown) {   //Очистка поля ввода при вводе нового числа если функция eval уже была использована
        inElement.value = defaultValue;
        isResultShown = false;
      }
      switch (buttonValue) { //switch для преобразования операторов для функции eval
        case "×":
          buttonValue = "*";
          break;
        case "÷":
          buttonValue = "/";
          break;
        case "−":
          buttonValue = "-";
          break;
        case "+":
          buttonValue = "+";
          break;
        default:
      }
      if (operators.includes(buttonValue) && operators.includes(lastChar)) { //Проверка на ввод нескольких операторов подряд
        return;
      }
      if(buttonValue == "0"){
        if (inElement.value == "" || operators.includes(lastChar)){ //Если поле пустое или последний символ это оператор, то можно добавить ещё один 0
          inElement.value += buttonValue;
          return;
        }
        else if(inElement.value == "0"){ //Если в поле ввода только 0, то ещё один 0 добавить нельзя
          return;
        }
      }
      if(buttonValue == "." && lastChar == "0"){ //Ввод дробного числа
        inElement.value += buttonValue;
        return;
      }
      if(inElement.value == defaultValue && !operators.includes(buttonValue)){ //Перезапись дефолтного 0 на новое значение
        inElement.value = buttonValue;
      }else{
        inElement.value += buttonValue;
      }

      
    }
    switch (buttonValue) {
      case "=":
        if (inElement.value == "" || //если пустое значение поля
            operators.includes(lastChar) || //если оператор последний в строке
            operators.includes(inElement.value[0]) ) { //если оператор единственный в строке
                alert("Incorrect value");
                inElement.value = defaultValue;
                isResultShown = false;
          return;
        } else if (inElement.value.includes("/0")) {  //Проверка деления на 0
          alert("Can't divide by 0");
          inElement.value = defaultValue;
          isResultShown = false;
          return;
        } else {
          try {
            let result = eval(inElement.value);
            if (Number.isInteger(result)){  //Проверка на целое число, если float то проиходит округление до 8 символа чтобы не выйти за границу поля
              inElement.value = result;
            }else{
              inElement.value = result.toFixed(8);
            }
            isResultShown = true;
          } catch (error) {
            console.error("Eval function error", error);
          }
        }
        break;
      case "C": //Очистка поля 
        inElement.value = defaultValue;
        isResultShown = false;
        break;
      default:
        break;
    }
  });
});

inElement.addEventListener("input", (event) => { 
  let inputValue = inElement.value;
  let allowedChars = /^[0-9e+\-*/.]*$/; //Разрешённые для ввода мануально символы

  if (!allowedChars.test(inputValue)) {
    alert("Wrong input");
    inElement.value = defaultValue;
  }
});
