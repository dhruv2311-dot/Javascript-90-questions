var arr = [80, 30, 70, 50, 20]
var max=arr[0]
var min=arr[0]
for(var i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]
    }
}
var difference=max-min
console.log(difference)