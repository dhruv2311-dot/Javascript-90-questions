let event1 = [1, 5];
let event2 = [2,3];
let foundMatch = false; 

for (var i = 0; i < event1.length; i++) { 
    for (var j = 0; j < event2.length; j++) {
        if (event1[i] == event2[j]) {
            console.log("false"); 
            foundMatch = true; 
            break; 
        }
    }
}

if (!foundMatch) {
    console.log("true");
}
