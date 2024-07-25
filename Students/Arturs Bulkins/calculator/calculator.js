let display = document.getElementById("output");


printValue = (input) => {
    display.value += input};
    let result = [display.value];


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

/*         display.innerHTML = `<div class="output" id="output" >${result[0]}</div>`; */