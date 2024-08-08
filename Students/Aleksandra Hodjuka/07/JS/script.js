document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".calculator button");
    let clearDisplayOnNextInput = false;

    
    const savedDisplay = localStorage.getItem("calculatorDisplay");
    if (savedDisplay) {
        display.textContent = savedDisplay;
    } else {
        display.textContent = "0";
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            handleButtonClick(buttonText, button.classList);
        });
    });

    document.addEventListener("keydown", (event) => {
        const key = event.key;

        if (key === "Enter") {
            const equalsButton = document.querySelector(".button__operator_equals");
            if (equalsButton) {
                handleButtonClick("=", equalsButton.classList);
            }
            event.preventDefault();
        } else if (isNumericKey(key) || isOperatorKey(key)) {
            handleButtonClick(key, getButtonClassList(key));
        }
    });

    let isNumericKey = (key) => {
        return /\d/.test(key);
    };

    let isOperatorKey = (key) => {
        return ["+", "-", "*", "/"].includes(key);
    };

    let getButtonClassList = (key) => {
        const button = Array.from(buttons).find(button => button.textContent === key);
        return button ? button.classList : null;
    };

    let handleButtonClick = (buttonText, buttonClasses) => {
        if (!buttonClasses) return;

        switch (true) {
            case buttonClasses.contains("button__function_clear"):
                display.textContent = "0";
                clearDisplayOnNextInput = false;
                break;

            case buttonClasses.contains("button__operator_equals"):
                try {
                    display.textContent = eval(display.textContent) || "0";
                } catch {
                    display.textContent = "Error";
                }
                clearDisplayOnNextInput = true;
                break;

            default:
                if (clearDisplayOnNextInput) {
                    display.textContent = buttonText;
                    clearDisplayOnNextInput = false;
                } else {
                    if (display.textContent === "0" || display.textContent === "Error") {
                        display.textContent = buttonText;
                    } else {
                        display.textContent += buttonText;
                    }
                }
                break;
        }
       
        localStorage.setItem("calculatorDisplay", display.textContent);
    };
});