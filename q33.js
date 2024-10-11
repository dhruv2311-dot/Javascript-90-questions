function isCenturyYear(year) {
    if (year % 100 == 0) {
        return true;  
    } else {
        return false;  
    }
}


let year = 2024;
if (isCenturyYear(year)) {
    console.log(year + " is a century year.");
} else {
    console.log(year + " is not a century year.");
}
