document.getElementById('showResult').innerHTML = 'Result: ';
    function calculateResult(){
        let firstNumber = parseFloat(document.getElementById("firstNumber").value);
        let secondNumber = parseFloat(document.getElementById("secondNumber").value);
        let arithmaticOperation = document.getElementById("arithmaticOperation").value;
        let result = '';
        let validity = '';
        if (isNaN(firstNumber) || isNaN(secondNumber)) {
            result = 'Insert a valid number';
            validity = 0;
        }else{
            if(arithmaticOperation== '+'){
                result = firstNumber+secondNumber;
            }else if(arithmaticOperation== '-'){
                result = firstNumber-secondNumber;
            }else if(arithmaticOperation== '*'){
                result = firstNumber*secondNumber;
            }else if(arithmaticOperation== '/'){
                result = firstNumber/secondNumber;
            }
            validity = 1;
        }
        if(validity==1){
            document.getElementById("showResult").style.border = "1px solid green";
            document.getElementById("showResult").style.color = "green";    
        }else{
            document.getElementById("showResult").style.border = "1px solid red";            
            document.getElementById("showResult").style.color = "red";            
        }
        document.getElementById('showResult').innerHTML = 'Result: ' + result;
    }