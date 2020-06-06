var math = document.getElementById("mathOperations");
var factButton = document.querySelector(".calcFactorial");
var expButton = document.querySelector(".calculateExp");
var absValButton = document.querySelector(".calcAbsVal");

window.onload = function(){
    expButton.addEventListener('click', function(event){
        var base = document.getElementById('base');
        var exponent = document.getElementById('exponent');
        var result = document.getElementById("expResult");
        if(!exponent.value || !base.value){
            alert("please type both values in");
        }else{
            result.innerText = "result: " + power(base.value, exponent.value)
        }
        event.preventDefault();
    });
    
    factButton.addEventListener('click', function(event){
        var input = document.getElementById('factorial');
        var result = document.getElementById("factResult");
        if(!input.value){
            alert("please type in a value");
        }else{
            result.innerText = "result: " + factorial(input.value);
        }
        event.preventDefault();
    });

    absValButton.addEventListener('click', function(event){
        var input = document.getElementById('absVal');
        var result = document.getElementById("absValResult");
        if(!input.value){
            alert("please type in a value");
        }else{
            result.innerText = "result: " + absVal(input.value);
        }
        event.preventDefault();
    });
}

function power(base, exp){
    if(exp < 0){
        return 1 / power(base, absVal(exp));
    }
    if(exp == 0)
        return 1;
    return base * power(base, exp - 1);
}

function factorial(num){
    if(num < 0){
        console.error("cannot factorial a negative number");
        return;
    } 
    if(num <= 1)
        return 1;
    return num * factorial(num - 1);
}
function absVal(num){
    if(num < 0)
        return num * -1;
    else
        return num;
}