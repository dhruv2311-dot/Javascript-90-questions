function generateRange(start, end) {
    let result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}


let start = 1;
let end = 5;
console.log(generateRange(start, end));  
