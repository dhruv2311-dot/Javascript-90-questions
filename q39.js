let str="[{()}]"
let len=str.length
let count=0
for(var i=0;i<=len;i++){
    if(str[i]!=0){
        count++
    }
}
if(str[i]==str[len-1-i]){
    console.log("true")
}else{
    console.log("false")
}