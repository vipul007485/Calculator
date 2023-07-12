
let screen = document.getElementById("result")

function calculate(number) {
    screen.value += number;    
}

function clr() {
    screen.value=""
}

function del(){
    screen.value=screen.value.slice(0, -1);
}

function result(){
    try{
        screen.value=eval(screen.value)        
    }
    catch{
        alert("expression error!")
    }
}