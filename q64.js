function sum(n) {
    if (n == 1) {
        return 1; 
    }
    var sumnm1 = sum(n - 1);  
    var sumn = sumnm1 + n;  
    return sumn;  
}

var result = sum(5);
console.log(result);
