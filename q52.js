let nums = [1, 2, 3, 4];
let runningSum = []; 
let currentSum = 0;  


for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];  
    runningSum.push(currentSum);  
}

console.log(runningSum);
