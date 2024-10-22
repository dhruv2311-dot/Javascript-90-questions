var arr =[[1,2],[3,4]]
var row=arr.length
var column=arr.length
var sum=0;
for(var i=0;i<row;i++){
    for(var j=0;j<column;j++){
        sum=sum+arr[i][j]
    }
}
console.log(sum)