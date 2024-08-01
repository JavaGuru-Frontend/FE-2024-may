let btnArray = document.getElementsByClassName('btn');
let output = document.getElementById('output');
let history = document.getElementById('history');

let printValue = (zna4enie) => {
    output.innerHTML += `${zna4enie}`
}
let clearInput = () => {
    output.innerHTML = '';
}
let handleError = () => {
    console.error('Ops')
}
let equal = () => {
    let result = eval(output.innerHTML);
    clearInput();
    printValue(result);
}

let saveHistory = (text) => {
    localStorage.setItem('zeka', text);
}

let printHistory = () => {
    history.innerHTML = localStorage.getItem('zeka');
}


Array.from(btnArray).forEach((element) => {
    // for (let i = 0; i < btnArray.length; i++) {
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
