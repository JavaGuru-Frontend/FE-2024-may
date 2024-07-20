/* console.log(Math.floor(Math.random()*100));
 */

/* let n1 = window.prompt("Value 1?");
let n2 = window.prompt("value 2?");

n1 = Number(n1);
n2 = Number(n2);

let hypotenuseval =((n1*n1)+(n2*n2))**0.5
console.log(hypotenuseval);  */


/* function calculateAndDisplay() {
let number1 = document.getElementById('input_a').value;
let number2 = document.getElementById('input_b').value;

let result1 = ((number1*number1)+(number2*number2))**0.5; 

let resultDiv = document.getElementById('result');
resultDiv.innerHTML = result1.toFixed(2); 
} */





/* list = ["Milk","Bread","Apples"]

console.log("Quantity:", list.length);

list[1]="Bananas";

console.log("show all items", list); */







/* let checkIfNumberBigger = (name) => { */
/*     if ( number < 10) {
        console.log('less than 10');
    } else if (number < 100) {
        console.log('less then 100');
    } else {
        console.log('test');
    } */


/* console.log ('_______');





switch (name) {
    case 'Jev' :
        console.log('1');
        break;
    
    case 'Anton':
        console.log('2');
        break;

    case 'Liza':
        console.log('3');
        break;    

    default:
        console.log('4');
}
} */




/* let minus = () => {
    console.log('minus is clicked')
}

let plus = () => {
    console.log('plus is clicked')
} */






/* let btnPlusElement = document.getElementById('plus');

let operator = () => {
   switch(value) {
    case '+':
        console.log('plus is clicked');
    break;

    case '-':
        console.log('minus is clicked');
    break;

    case '=':
        console.log('equal is clicked');
    break;

    default:
        console.log(`i don't know is clicked`);
    break;
   }
}

btnPlusElement.addEventListener('click', operator('+'))


calculator */


/* let outElement = document.getElementById('output').innerHTML;

let printValue = (printNumber) => {
    outElement.innerHTML += `${printElement}`;
}

let equal = () => {
    outElement.innerHTML = eval(outElement.innerHTML);
} */


/* let zeka = () => {
    console.log ('IN');
} */

/* document.addEventListener ('click', zeka()) */






/* let allBtn = document.getElementsByClassName('btn');
console.log(allBtn); */

/* let skills = ['HTML','CSS','JS']

let printName = (skills) => {
    console.log(`Hey i'm good at ${skills}`);
}

 
skills.forEach(zeka => {
    console.log(`Het i am good in ${skills},${age}`)
});



allBtn.forEach(btn => {
    btn.addEventListener('click',() =>{
    console.log(`IN`)
})
})
 */

favoriteFruits = ['grapefruit','orange','lemon'];
favoriteFruits.push('tangerine'); //методы изменнения массивов. метод - push добавит последний элэмент в массив

let lengthOfFavoriteFruits = favoriteFruits.push('lime');

console.log("push", favoriteFruits);

let arrofShapes = ["circle","triangle", "rectangle", "pentagon"];
arrofShapes.splice(2,0, "square","trapezoid") // метод splice модно изменять порядок внедрения элемента (2) и ыторым числом удаление элэментов после внедренных элэментов
console.log("splice", arrofShapes);

let arr5 = [1,2,3];
let arr6 = [4,5,6];

let arr7 = arr5.concat(arr6); // concat oбъеденяет массивы и в скобках может добовлять элэменты
let arr8 = arr7.concat(7,8,9);

arr8.pop(); /* удаляет последний элэмент */
/* arr8.splice(1,3); */

delete arr8[0];
console.log(arr8);

let findValue = arr8.find(function (e) { return e === 6});
let findValue2 = arr8.find( e => e === 10);
console.log(findValue, findValue2);

arr9 = [2,6,7,8];
let findIndex = arr9.indexOf(2,0); // узнать индекс элэмента из массива. второй аргумент отвечает за начала поиска с какого элэмента
let findIndex2 = arr9.indexOf(10); // вернет -1 потому что нету числа 10
console.log (findIndex, findIndex2); // LastindexOf покажет индекс последнего эоэмента

let names = ["James","Alice","Fatia","Maria","Bert"]
console.log(names.sort()); // метод Sort распределит по алфавитному порядку

let ages = [989,41,444,22,78,18,72,33,56,40];
console.log(ages.sort());

console.log(names.reverse()); // меняет порядок в массиве на оборот

let productsItems = ["Milk","Bread","Apples"]; // Практическая работа с изменением и корректировкой элэментов массива
productsItems.splice(1,1,"Bananas","Eggs");
console.log("remove last:", productsItems.pop());
productsItems.sort();
productsItems.splice(1,0,"Carrots","Lettuce");

let productsItems2 = ["juice","Pop"];
let FinalItemList = productsItems.concat(productsItems2).concat(productsItems2);
console.log(FinalItemList.lastIndexOf());
console.log("Final items list:", FinalItemList); // конец практической работы

let dog = { dogName: "Javascript",
            weight: 2.4,
            color: "brown",
            breed: "chihuahua",
            age: 3,
            burglarBiter: true
};

dog.age = 5;
dog.color = "blue";
console.log(dog);
console.log("My dog name is", dog.dogName, ", his weight is", dog.weight,"pounds, and he is quite young pet", dog.age,"years old");

console.log("dog breed:",dog.breed);

variable = "breed";
console.log("dog breed:", dog[variable]); // если изменить значение переменной то мы получим доступ и указываем новое значание переменной через [] скобки





















