/* let printValue = (printNumber, clear) => {
    document.getElementById(`IN`).innerHTML += `${printNumber}`;
} */

    /* первый способ, как вызвать нажатием кнопки появление контента; = `${printNumber}` - цифра перезаписывается,
    += - если мы хотим, чтобы цифра не перезаписывалась, а добавлялась к предыдущей */
    

/*     Вариант кода 1: */

/* let printValue = (printNumber) => {
    document.getElementById(`IN`).innerHTML += `${printNumber}`;
}

let equal = () => {
    document.getElementById(`IN`).innerHTML = eval(document.getElementById(`IN`).innerHTML);
}
 */
/* Это плохой код, некомпактный. Потому что можно в нем запутаться. 3 раза обращаемся к одноу и тому же месту. */


/* Вариант кода 2: */

/* let printValue = (printNumber, clear) => {
        
    if(clear) {
        document.getElementById(`IN`).innerHTML = `${printNumber}`;
    }
        else {
            document.getElementById(`IN`).innerHTML += `${printNumber}`;
    }
}

let equal = () => {
    printValue(
        eval(document.getElementById(`IN`).innerHTML),
        true
    );
}
 */

/* Вариант кода 3:  */

/* let printValue = (printNumber, clear) => {
    
    if(clear) {
        document.getElementById(`IN`).innerHTML = ` `;
    }
        
    document.getElementById(`IN`).innerHTML += `${printNumber}`; 
}

let equal = () => {
    printValue(
        eval(document.getElementById(`IN`).innerHTML),
        true
    );
} */

/* Вариант кода 4: */

/* let output = document.getElementById(`IN`)   

let printValue = (printNumber, clear) => {

    if(clear) {
        output.innerHTML = ` `;
    }
        output.innerHTML += `${printNumber}`;
}

let equal = () => {

    if(eval(output.innerHTML) !== Infinity) {
        output.innerHTML = eval(output.innerHTML).toFixed(4);
    }
    else {
        output.innerHTML = `ERROR`;
    }
}

let clearOutput = () => {
    output.innerHTML = ` `;
} */


/* Вариант кода 5 (другие привязки в Html): */

let btnArray = document.getElementsByClassName(`btn`);

let output = document.getElementById(`IN`)


/* for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].addEventListener(`click`, () => {
        console.log(`test`);
    })
} */


let printValue = (zna4enie) => {
    output.innerHTML += `${zna4enie}`;
}

let clearInput = () => {
    output.innerHTML = ` `;
}

let equal = () => {
        let result = eval(output.innerHTML);
        clearInput();
    printValue(`${result}`);
}

Array.from(btnArray).forEach((element) => {
    element.addEventListener(`click`, () => {
        let type = element.getAttribute (`data-type`);
        let id = element.getAttribute (`data-id`);
        
        switch (type) {
            case(`equal`):
            equal(id);
            break;

            case(`number`):
            printValue(id);
            break;

            case(`operator`):
            printValue(id);
            break;

            case(`symbol`):
            printValue(id);
            break;

            case(`clear`):
            printValue(id);
            break;

            default:
            break;


        }
})
})

/* let handleError = () => {
    console.error(`Ops`);
}

document.addEventListener(`click`, handleError); */


document.addEventListener(`keydown`, (event) => {
    console.log(event);
    if(event.keyCode === 187) {
        console.log(`enter clicked`)
    };
});



/* Как нажать С, чтобы один раз - О, второй - выключить? */