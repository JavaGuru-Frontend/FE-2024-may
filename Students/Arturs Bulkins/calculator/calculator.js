let btnArray = document.getElementsByClassName("btn");
let output = document.getElementById('output');

/* for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].addEventListener('click', () => {
        console.log('test')
    })
} */
let printValue = (input, clearInput) => {
    output.innerHTML += `${input}`; 
}

let clearInput = () => {
    output.innerHTML = '';
}

let handleError = () => {
    console.error(`ERROR`);
}

let equal = () => { 
    output.innerHTML = eval(output.innerHTML);
    switch (output.innerHTML) {
        case "Infinity":
        output.innerHTML = 'ERROR'
        break;
    }
   /*  clearInput (); */
}




Array.from(btnArray).forEach((element) => {
    element.addEventListener('click', () =>{
        let type = element.getAttribute('data-type');
        let id = element.getAttribute('data-id');

        switch (type) {
            case 'equal':
                equal(id);
                break;
            
            case 'operator':
                printValue(id);
                break;
            
            case 'number':
                printValue(id);
                break;

            case 'symbol':
                printValue(id);
                break;   

            case 'clear':
                clearInput();
                break;  

            default:
                break;
        }
    })
})

document.addEventListener('keydown', (event,clear) => {
    if (event.keyCode !== 13) {
        for(let i = 0; i < btnArray.length; i++) {
            let id = btnArray[i].getAttribute('data-id');
            if(id === event.key) {
               btnArray[i].click();
            }
        }
    }  else {
        equal ();
    }
    /* if (clear.keyCode === 8 ) {
        clearInput();
    } */
});   


document.addEventListener('keydown',(clear) => {
    if (clear.keyCode === 8 ) {
        output.innerHTML = output.innerHTML.slice(0, -1);
        }} 
    );

    














document.addEventListener('keydown', (show) => {
    console.log(show);
})

 







/* let printValue = (input) => {
    display.innerHTML += `${input}`;
}
   


clearOutput = () => {
    display.innerHTML = "";
}


calculate = () => {
    display.innerHTML = eval(display.innerHTML).toFixed(3);
    switch (display.innerHTML) { 
        case "Infinity":
            display.innerHTML = "ERROR"
            break; 
        }}
 */