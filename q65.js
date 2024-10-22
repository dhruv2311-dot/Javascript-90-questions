function printnumbr(n){
    if(n==0){
        return
    }
    printnumbr(n-1)
    console.log(n)
}
let n=5;
printnumbr(n)