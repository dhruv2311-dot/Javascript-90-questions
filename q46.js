let str = "hello";
let len = str.length;
var count = 0;

for (var i = 0; i < len - 1; i++) { 
    count++;
    
    if (str[i] == str[i + 1]) {
        console.log("2");
        break; 
    }
}


if (i == len - 1) {
    console.log("-1");
}
