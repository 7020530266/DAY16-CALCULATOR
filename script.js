
var currentInput=document.getElementById('screen')
var answers=[];

let buttonsDiv = document.getElementById('calculator')

buttonsDiv.addEventListener('click', calculator)

buttonsDiv.addEventListener('keypress', calculator)

function calculator(e) {
    if (e.type == 'keypress') {
        e.preventDefault(); 
        console.log(e.key)
        
        var keynum = e.key

        var letters=/[a-zA-Z]/
        if(keynum=="Enter"){
            ans(keynum) 
        }
        else if(keynum.match(letters)){
            alert("Enter Digits for Calculation")
        }
        else{
            ans(keynum) 
        }
                     
    } else{
        var clicknum = e.target.innerText
        ans(clicknum)
    }

}

function ans(buttonText) {

    if (buttonText == 'X') {
        buttonText = "*"
        currentInput.value += buttonText
    }
    else if (buttonText == "C" || buttonText == "CE") {        
        currentInput.value = 0;
        equation.value=" ";
    }
    else if (buttonText == "=" || buttonText == "Enter") {
        currentInput.value = eval(currentInput.value)
        answers.push(currentInput.value)
    }
    else if(currentInput.value==0){
        currentInput.value=buttonText
    }
    else{
        currentInput.value+=buttonText;
    }
       
    }














    





















