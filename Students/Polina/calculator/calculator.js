let whiteElement = document.getElementById('white');

let printValue = (printNumber) => {
    whiteElement.innerHTML += `${printNumber}`;
}

let equal = () => {
    whiteElement.innerHTML = eval(whiteElement.innerHTML);
}

let clearElement = document.getElementById('clear');

let сlear = () => {
    
    whiteElement.innerHTML = '';
}

 