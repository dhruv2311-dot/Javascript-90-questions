function checkevenorodd(n, option) {
    let result;
    switch (option) {
        
        case "option1":
            if (n % 2 == 0) {
                result = "even";
            }
            break;
        case "option2":
            if (n % 2 != 0) {
                result = "odd";
            }
            break;
        default:
            result = "Invalid option";
    }
    return result;  
}

let n = 5;
let option = "option2";  
let result = checkevenorodd(n, option);
console.log(result);  
