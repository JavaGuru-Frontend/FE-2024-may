let display = document.getElementById("output");


printValue = (input) => {
    display.value += input};
/* function printValue(input){
    display.value += input;
}; */

clearOutput = () => {
    display.value = "";
}


calculate = () => {
    display.value = eval(display.value).toFixed(3);
    switch (display.value) { 
        case "Infinity":
            display.value = "ERROR"
            break; 
        }}
