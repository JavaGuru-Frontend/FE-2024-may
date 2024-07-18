/* console.log(Math.floor(Math.random()*100));
 */

/* let n1 = window.prompt("Value 1?");
let n2 = window.prompt("value 2?");

n1 = Number(n1);
n2 = Number(n2);

let hypotenuseval =((n1*n1)+(n2*n2))**0.5
console.log(hypotenuseval);  */


function calculateAndDisplay() {
let number1 = document.getElementById('input_a').value;
let number2 = document.getElementById('input_b').value;

let result1 = ((number1*number1)+(number2*number2))**0.5; 

let resultDiv = document.getElementById('result');
resultDiv.innerHTML = result1.toFixed(2); 
}





list = ["Milk","Bread","Apples"]

console.log("Quantity:", list.length);

list[1]="Bananas";

console.log("show all items", list);