let arr = [10, 5, 3, 4, 3, 5, 6];
let elementSet = new Set(); 
let firstRepeating = -1; 


for (let i = 0; i < arr.length; i++) {
  
    if (elementSet.has(arr[i])) {
        firstRepeating = arr[i]; 
        break; 
    }
    
    elementSet.add(arr[i]);
}


console.log( firstRepeating);
