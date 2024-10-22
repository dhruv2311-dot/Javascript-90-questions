function powerorqube(option, a) {
    let result;  
    switch (option) {
        case '1':
            result = a * a;  
            break;
        case '2':
            result = a * a * a; 
            break;
        default:
            return 0;  
    }
    return result; 
}

var option = '1';  
var a = 3;       
console.log(powerorqube(option, a));  
