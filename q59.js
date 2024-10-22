function calculator(num1, num2, operator) {
        let result;
    
      
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                // Check for division by zero
                if (num2 === 0) {
                    result = "Error! Division by zero.";
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = "Invalid operator";
        }
    
        return result;
    }
    let number1 = 10;
 let number2 = 5;
 let operator = '*';

 console.log(calculator(number1,number2,operator))