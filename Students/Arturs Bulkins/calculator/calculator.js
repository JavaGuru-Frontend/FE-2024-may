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
        case "0":
            display.value =  "ERROR"
            break;
    }
};
