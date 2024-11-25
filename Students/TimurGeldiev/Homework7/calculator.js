let inElement = document.getElementById("input");
let allBtn = document.getElementsByClassName("btn");

let isResultShown = false;

Array.from(allBtn).forEach((button) => {
  button.addEventListener("click", () => {
    let buttonValue = button.textContent;
    let operators = ["+", "-", "*", "/"];
    let lastChar = inElement.value[inElement.value.length - 1];

    if (buttonValue != "=" && inElement.value.length < 10) {
      if (isResultShown) {
        inElement.value = "";
        isResultShown = false;
      }
      switch (buttonValue) {
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
      if (operators.includes(buttonValue) && operators.includes(lastChar)) {
        return;
      }

      inElement.value += buttonValue;
    }
    switch (buttonValue) {
      case "=":
        if (inElement.value == "" ||
            operators.includes(lastChar) ||
            operators.includes(inElement.value[0])) {
                alert("Incorrect value");
                inElement.value = "";
                isResultShown = false;
          return;
        } else if (inElement.value.includes("/0")) {
          alert("Can't divide by 0");
          inElement.value = "";
          isResultShown = false;
          return;
        } else {
          try {
            inElement.value = eval(inElement.value);
            isResultShown = true;
          } catch (error) {
            console.error("Eval function error", error);
          }
        }
        break;
      case "C":
        inElement.value = "";
        isResultShown = false;
        break;
      default:
        break;
    }
  });
});

inElement.addEventListener("input", (event) => {
  let inputValue = inElement.value;
  let allowedChars = /^[0-9e+\-*/]*$/;

  if (!allowedChars.test(inputValue)) {
    alert("Wrong input");
    inElement.value = "";
  }
});
