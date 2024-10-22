function gcd(a, b) {

    if (b === 0) {
        return a;
    }

    return gcd(b, a % b);
}


let a = 48;
let b = 18;
console.log(`The GCD of ${a} and ${b} is: ${gcd(a, b)}`);
