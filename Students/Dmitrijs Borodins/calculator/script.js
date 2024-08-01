let btnArray = document.getElementsByClassName(`btn`);
console.log(btnArray);

let history = document.getElementById(`history`);



let equal = () => {
   outputElement.innerHTML = eval(outputElement.innerHTML);
}
let outputElement = document.getElementById(`output`);
let PrintValue = (printNumber) => {
   outputElement.innerHTML += `${printNumber}`;
}

let handleError = () => {
   console.error('Ops')
}

let = saveHistory = (text) => {
   localStorage.setItem(`output`, text);
}


let = printHistory = () => {
   history.innerHTML = localStorage.getItem(`name`);
}




// for (let i = 0; i < btnArray.length; i++) {
//    btnArray[i].addEventListener(`click`, () => {
//       console.log(`PROVERKA`);
//    })
// }


Array.from(btnArray).forEach((element) => {  //Рассказать еще рас про FORM??//
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
            ClearOutput();
            break;


         case `symbol`:
            PrintValue(id);
            break;

         default:
            break;
      }

   })
})


addEventListener(`click`, () => { })
ClearOutput = () => {
   outputElement.innerHTML = "";
};


document.addEventListener(`keydown`, (event) => {
   if (event.keyCode === 13) {
      equal();
   }
   for (let i = 0; i < btnArray.length; i++) {
      let id = btnArray[i].getAttribute(`data-id`)
      if (id === event.key) {
         btnArray[i].click();
      }
   }

});

printHistory();


// let PrintValue = (printNumber) => {
//    outputElement.innerHTML += `${printNumber}`;
// }




