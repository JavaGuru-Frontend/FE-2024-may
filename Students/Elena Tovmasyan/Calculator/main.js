let printValue = (printNumber) => {
    document.getElementById(`IN`).innerHTML += `${printNumber}`; 
}

/* printValue()
 */

/* первый способ, как вызвать нажатием кнопки появление контента; = `${printNumber}` - цифра перезаписывается,
    += - если мы хотим, чтобы цифра не перезаписывалась, а добавлялась к предыдущей */

let equal = () => {
    console.log(
        eval(document.getElementById(`IN`).innerHTML));
}