// document.addEventListener('DOMContentLoaded');
let btnArray = document.getElementsByClassName(`btn`);
let history = document.getElementById(`history`);
let outputElement = document.getElementById(`output`);//Получить данные из Output//
let PrintValue = (printNumber) => {
   outputElement.innerHTML += `${printNumber}`
}
let clearInput = () => {
   output.innerHTML = '';
}
let equal = () => {

   let result = eval(output.innerHTML);

   saveHistory(`${output.innerHTML}=${result}`);
   // saveHistory(`${output.innerHTML} = ${result}`);
   clearInput();
   PrintValue(result);
   printHistory();
}

let handleError = () => {
   console.error('Ops')
}//LocalStorage


let = saveHistory = (text) => {
   historyData.push(text);
   localStorage.setItem('history', JSON.stringify(historyData));
}



let = printHistory = () => {
   history.innerHTML = '';
   let historyData = JSON.parse(localStorage.getItem(`history`))
   historyData.forEach((historyRecord) => {
      history.innerHTML += `<li>${historyRecord}</li>`
   })
}//Вывеcти данные из LocalStorage//

Array.from(btnArray).forEach((element) => {
   element.addEventListener(`click`, () => {
      let type = element.getAttribute(`data-type`);
      let id = element.getAttribute(`data-id`);

      switch (type) {
         case `equal`:
            equal();
            break;

         case `operator`:
            PrintValue(id);
            break;

         case `number`:
            PrintValue(id);
            break;

         case `clear`:
            clearOutput();
            break;


         case `symbol`:
            PrintValue(id);
            break;

         default:
            break;
      }

   })
})


let CheckNumbers = () => {
   for (let i = 0; i < btnArray.length; i++) {
      let id = btnArray[i].getAttribute(`data-id`)
      if (id === event.key) {
         btnArray[i].click();
      }
   }

};


document.addEventListener(`keydown`, (event) => {
   let key = event.keyCode;
   switch (key) {
      case 13:
         equal();
         break;
      case 67:
         clearOutput();
         break;
      case 8:
         clearOutput();
         break;

      case 46:
         clearOutput();
         break;

      default:
         CheckNumbers();
         break;
   }
});

clearOutput = () => {
   output.innerHTML = output.innerHTML.slice(0, -1);
};

addEventListener(`click`, () => { })



// document.addEventListener(`keydown`, (event) => {
//    if (event.keyCode === 13) {
//       equal();
//    }

//    if (event.keyCode === 67) {
//       ClearOutput();
//    }
//    for (let i = 0; i < btnArray.length; i++) {
//       let id = btnArray[i].getAttribute(`data-id`)
//       if (id === event.key) {
//          btnArray[i].click();
//       }
//    }
// });

// let PrintValue = (printNumber) => {
//    document.getElementById(`output`).innerHTML += `${printNumber}`
// }

printHistory();






