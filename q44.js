function allSubstrings(str) {
    let substrings = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            substrings.push(str.substring(i, j));
        }
    }
    return substrings;
}


const inputString = "abc";
console.log(allSubstrings(inputString));
