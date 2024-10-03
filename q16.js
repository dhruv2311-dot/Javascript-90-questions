var arr=[3,5,9,1,7]
var count=0;
for(var i=0;i<arr.length;i++){
    if(count%i==0){
        count++
    }
}
if(count=arr.length){
    console.log("true")
}else{
    console.log("false")
}