var arr=[1,2,3,4,5]
var evennum=0;
var odd=0
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        evennum++;
    }else{
        odd++;
    }
}
console.log(evennum)
console.log(odd)
