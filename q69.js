var arr=[[1,2,3],[4,5,6],[7,8,9]]
var row=arr.length
var column=arr.length
for(var i=0;i<row;i++){
    for(var j=0;j<column;j++){
        if(i==j){
            console.log(arr[i][j])
        }
    }
}