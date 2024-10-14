function object(keys,values){
    let result={}
    let length=Math.min(keys.length,values.length)
    for(var i=0;i<length;i++){
        result[ keys[i]]=values[i]
    }
    return result;
}
let keys = ['name', 'age', 'city']
let values = ['Alice', 30, 'New York']
let result=object(keys,values)
console.log(result)
