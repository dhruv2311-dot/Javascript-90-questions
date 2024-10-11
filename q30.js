let n = "123456";
let len = n.length;
let evensum = 0;
let oddsum = 0;

for (var i = 0; i < len; i++) {
    let digit = Number(n[i]);  
    if (digit % 2 == 0) {  
        evensum += digit;
    } else { 
        oddsum += digit;
    }
}

console.log("Even Sum:", evensum);
console.log("Odd Sum:", oddsum);
