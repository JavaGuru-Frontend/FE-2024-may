let num1 = 10;
let num2 = 20;
let result = function(num1, num2) {
    console.log(num1 + num2)}


let printname = (name, age) => {
    console.log(`Hi user ${name}, ${age}`)
}
printname(`Zeka`, 10);

let message = (name, gender) => {
    if (gender === `M`) {
        return `Hi Mr ${name}`}
        else if (gender === `W`) {
        return `Hi Ms ${name}`}
}

let a = 7
if (a != 5) {console.log(`in`)}



/* Отработка if... else, switch: */

let checkNumber = (number) => {
    if (number > 10) {
        console.log (`number more than 10`);
    }
    else if (number < 10) {
        console.log (`number less than 10`);
    }
    else {
        console.log (`number equil 10`);
    }
}


let checkName = (name) => {

console.log (`______________`)

    switch (name) {
        case `Jav`:
        console.log (`1`);
        break;

        case `Tom`:
        console.log (`2`);
        break;

        case `Pit`:
        console.log (`3`);
        break;

        default:
        console.log (`4`);
        break;
    }

}

let plus = (text) => {
    console.log(`plus is clicked ${text}`);
}

let minus = () => {
    console.log(`minus is clicked`);
}

/* let operator = (value) => {
    if (value === `+`) {
    console.log(`plus is clicked`);
    }

    else if (value === `-`) {
    console.log(`minus is clicked`);
    }

    else if (value === `=`) {
    console.log(`equal is clicked`);
    }
}
 */

let operator = (value) => {
    switch(value) {

        case `+`:
            console.log(`plus is clicked`);
            break;

        case `-`:
            console.log(`minus is clicked`);
            break;

        case `=`:
            console.log(`equal is clicked`);
            break;

        default:
            console.log(`I don't know is clicked`);
            break;
    }
}


/* Отработка циклов (while, do... while, for, forEach): */

/* let cycleWhile = document.getElementById(`While`)
let i = 0

while (i < 10) {
    cycleWhile.innerHTML += `${ i} `;
    i++;
} */


let cycle = document.getElementById(`cycle`)
let i = 0
let skills = [`HTML`, `CSS`, `JS`]


/* while (i < skills.length) {
    cycle.innerHTML += `${skills[i]} `;
    i++;
} */


/* do {
    cycle.innerHTML += `${skills[i]} `;
    i++;
} while (i < skills.length) */


/* for (i = 0; i < skills.length; i++) {
    cycle.innerHTML += `${skills[i]} `;
}                                           /* Как заменить исходное значение ячейки? */

/* skills.forEach((skills) => {
    cycle.innerHTML += `${skills[i]} `;
})                                          /* Куда девается условие i < skills.length; i++? Почему выводятся только первые буквы содержания ячеек массива? */


skills.forEach((element) => {
    cycle.innerHTML += `${element} `;
})     