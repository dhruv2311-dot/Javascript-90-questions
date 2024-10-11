function repeatstr(str, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += str;  
    }
    return result;
}

let str = "hello";
let n = 3;
let result = repeatstr(str, n);
console.log(result);  
