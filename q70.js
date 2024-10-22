var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (var i = 0; i < 3; i++) {
    var rowsum = 0;  // Reset rowsum to 0 for each row
    for (var j = 0; j < 3; j++) {
        rowsum += arr[i][j];
    }
    console.log("Sum of row " + (i + 1) + ": " + rowsum);
}
