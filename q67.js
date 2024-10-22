var arr = [
    [12, 45, 67, 23],
    [34, 78, 56, 90],
    [11, 43, 29, 65]
]

var max = arr[0][0];  

for (var i = 0; i < arr.length; i++) { 
    for (var j = 0; j < arr[i].length; j++) {  
        if (arr[i][j] > max) {
            max = arr[i][j];
        }
    }
}

console.log("Maximum value in the array is: " + max);
