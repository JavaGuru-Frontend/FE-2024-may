let display = document.getElementById("output");


let printValue = (input) => {
    display.innerHTML += `${input}`;
}
   


clearOutput = () => {
    display.innerHTML = "";
}


calculate = () => {
    display.innerHTML = eval(display.innerHTML).toFixed(3);
    switch (display.innerHTML) { 
        case "Infinity":
            display.innerHTML = "ERROR"
            break; 
        }}

/*         display.innerHTML = `<div class="output" id="output" >${result[0]}</div>`; */