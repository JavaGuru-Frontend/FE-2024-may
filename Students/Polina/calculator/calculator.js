let btnArray = document.getElementsByClassName('btn');
let white = document.getElementById('white');
let symbol = document.getElementsByClassName('btn btn_15');
let history = document.getElementById('history');
let historyData = JSON.parse(localStorage.getItem('history'));


let printValue = (printNumber, clear) => {
    white.innerHTML += `${printNumber}`;
}

let clearInput =() => {
    white.innerHTML = '';
}

let handleError = () => {
    console.error('oops')
}

let equal = () => {
    let result = eval(white.innerHTML);

    saveHistory(`${white.innerHTML} = ${result}`)
    clearInput();
    printValue(result);
    printHistory(); 
}

 let saveHistory = (text) => {
    let historyData = JSON.parse(localStorage.getItem('history')) || []
    historyData.push(text);
    localStorage.setItem('history', JSON.stringify(historyData));
 }

 let printHistory = () => {
    history.innerHTML = '';
    historyData
    historyData.forEach((historyRecord) => {
        history.innerHTML += `<li>${historyRecord}<li>`
    })
 }


Array.from(btnArray).forEach((element) => {
    // for ( let i = 0; i < btnArray.length; i++) {
//     btnArray[i].addEventListener('click', () => {
//         console.log('test');
//     })
// }
    element.addEventListener('click', () => {
        let type = element.getAttribute('data-type');
        let id = element.getAttribute('data-id');

        switch (type) {
            case 'equal':
                equal();
                break;

            case 'operator':
                printValue(id);
                break;

            case 'number':
                printValue(id);
                break;

            case 'clear':
                clearInput();
                break;

            case 'symbol':
                symbol();
                break;

            default:
                break;
        }
    })
})

document.addEventListener('keydown', (event) => {
    if (event.keyCode !== 13) {
        for (let i = 0; i < btnArray.length; i++) {
            let id = btnArray[i].getAttribute('data-id');
            if (id === event.key) {
                btnArray[i].click();
            }
        }
        
    } else {
        equal();
    }

});

printHistory();








 