function chooseKey(button){
    const input = document.getElementById("input")
    if(input.value === "Error"){
        input.value = "";
    }
    
    input.value += button.textContent;
}

function clearText(){
    const input = document.getElementById("input")
    input.value = "";
}

function calculate(){
    const input = document.getElementById("input")
    const expression = input.value;

    try {
        const result = eval(expression)
        input.value = result;
    } catch(error) {
        input.value = "Error"
    }
}