// Always isSunny
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);


// Prepare for downcount
for(var i=10; i>0; i--) {
    if(i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");


// Count positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!

// We want to start i at 0, because that's the first index in the array
// And while, yes, the last index is numbers.length - 1, setting our condition
// as i < numbers.length ensures that the loop breaks before it can attempt
// to use numbers.length as an index
for(var i = 0; i < numbers.length; i++) {
    // What is a positive? A number greater than zero!
    // So, at each value in the array, we'll check to see if it is greater than zero
    if(numbers[i] > 0) {
        // If it is, we want to increment our countPositives value by 1
        countPositives++;
        // Alternatively, we could have used:
        // countPositives += 1;
        // or:
        // countPositives = countPositives + 1;
    }
}

console.log("there are " + countPositives + " positive values");
