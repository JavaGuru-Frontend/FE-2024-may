document.addEventListener("DOMContentLoaded", () => {  
    //JavaScript выполнится только после того, как весь HTML документ будет полностью загружен
    
    const display = document.getElementById("display");
    //Находит элемент с id="display" и сохраняет его в переменную display. 
    const buttons = document.querySelectorAll(".calculator button");
    //Находит все кнопки внутри элемента с классом calculator и 
    //сохраняет их в переменную buttons. 

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            //Сохраняет текст, отображаемый на кнопке, в переменную buttonText.
            
            switch (true) {
                case button.classList.contains("button__function_clear"):
                    display.textContent = "0";
                    break;
                    //Проверяет, содержит ли кнопка класс button__function_clear. 
                    //Если да, то это кнопка для очистки дисплея.
                
                case button.classList.contains("button__operator_equals"):
                    try {
                        display.textContent = eval(display.textContent) || "0";//гарантирует, что результат не будет пустым.
                    } catch {
                        display.textContent = "Error";
                    }
                    break;
                    //Проверяет, содержит ли кнопка класс button__operator_equals.
                    // Если да, то это кнопка для вычисления результата.
                
                default:
                    if (display.textContent === "0" || display.textContent === "Error") {
                        display.textContent = buttonText;
                    } else {
                        display.textContent += buttonText;
                    }
                    break;
            }
        });
    });
});