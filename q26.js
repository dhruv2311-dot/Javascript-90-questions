function endsWithChar(str, char) {
    return str.endsWith(char);
}

let inputStr = "codinggita";
let charToCheck = "a";
let output = endsWithChar(inputStr, charToCheck);
console.log(output); // Output: true
