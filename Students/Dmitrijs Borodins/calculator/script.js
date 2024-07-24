// let allBtn = document.getElementsByClassName(`btn`);

// let array = [1, 2, 3, 4, 5];

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// allBtn.forEach(btn => {
//    btn.addEventListener = (`click`, () => {
//       console.log(`in`);
//    })
// });


let outputElement = document.getElementById(`output`);
let PrintValue = (printNumber) => {
   outputElement.innerHTML += `${printNumber}`;
}

ClearOutput = () => {
   outputElement.innerHTML = "";
};


let equal = () => {
   outputElement.innerHTML = eval(outputElement.innerHTML);
}

// let divideNumbers = (outputElement) => {
//    if (outputElement === 0) {
//       return "ERROR: DIVISSION BY ZERO ID NOT ALLOWED.";
//    }
//    else {
//       return equal();
//    }

// }


// let dmytro = () => {
//    console.log(`in`);
// }
// document.addEventListener(`click`, dmytro)