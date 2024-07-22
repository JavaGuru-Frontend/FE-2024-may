let display = document.getElementById("output");


function printValue(input){
    display.value += input;
};

function clearOutput(){
    display.value = "";
};


function calculate () {
    display.value = eval(display.value);
    switch(display.value) {
        case "Infinity":
            display.value = "ERROR"
            break;
    }
};
