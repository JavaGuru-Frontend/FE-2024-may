let btnArray = document.getElementsByClassName("btn");
let output = document.getElementById('output');
let history = document.getElementById('history');


/* for (let i = 0; i < btnArray.length; i++) {
    btnArray[i].addEventListener('click', () => {
        console.log('test')
    })
} */ 
let printValue = (input) => {
    output.innerHTML += `${input}`; 
}

let clearInput = () => {
    output.innerHTML = '';
}

let handleError = () => {
    console.error(`ERROR`);
}

let equal = () => { 
    let result = eval(output.innerHTML);
    saveHistory (`${output.innerHTML}=${result}`);
    clearInput ();
    printValue (result); 
    /* printHistory (); */ 
}
let saveHistory = (text) => {
    let historyData = JSON.parse(localStorage.getItem('history')) || []; // почему не работает без или оператора
    historyData.push(text);
    localStorage.setItem('history', JSON.stringify(historyData)); //  перевести в текс 
}

let printHistory = () => {
    history.innerHTML = '';
    let printHistory = JSON.parse(localStorage.getItem('history')) || [];
    printHistory.forEach((historyRecord) => {
        history.innerHTML += `<li>${historyRecord}</li>>`
    })
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

/* document.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        equal();
    } else if (event.keyCode === 8) {
        output.innerHTML = output.innerHTML.slice(0, -1);
    } else {
        for(let i = 0; i < btnArray.length; i++) {
            let id = btnArray[i].getAttribute('data-id');
            if(id === event.key) {
               btnArray[i].click();
            }};
    }   
}); */   


document.addEventListener('keydown',(event) => {
    switch(event.keyCode){
        case 13:
            equal()
            break;

        case 8:
            output.innerHTML = output.innerHTML.slice(0, -1);
            break;

        default:
            for(let i = 0; i < btnArray.length; i++) {
                let id = btnArray[i].getAttribute('data-id');
                if(id === event.key) {
                   btnArray[i].click();
                }}
            break;        
    }
})





/* 
document.addEventListener('keydown',(clear) => {
    if (clear.keyCode === 8 ) {
        output.innerHTML = output.innerHTML.slice(0, -1);
        }} 
    );  */

















/* document.addEventListener('keydown', (show) => {
    console.log(show);
})
 */
 







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