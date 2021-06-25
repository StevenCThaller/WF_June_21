// Let's learn about swapping variables!

// Let's do a test... 

var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
fruit1 = fruit2;
    
console.log(fruit2 + " and " + fruit1);

// What do we expect to get back from this??


// What about this?
var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is just a common name, but we want to hold on to the value of fruit 1 before we change it
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + " and " + fruit1);

// While Loops

// for loops -> when we need to perform an operation multiple times, 
// and we have a pretty good idea of how many times that will need to happen

// while loop -> when we need to perform an operation multiple times,
// but we really can't guarantee that it will take a certain number of operations
// before stopping

var start = 0;
var end = 12;

while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

// Advanced example:

// some background: i REALLY hate the letter x.
var characterIndex = 0;
var someMessage = "the quick brown fox jumped over the lazy dog";
var shouldIKeepGoing = true;

// my rule for whether or not i should keep going is if the letter i'm looking at is NOT x
while(shouldIKeepGoing) {
    if(someMessage[characterIndex] == "x") {
        console.log("EW, the letter x! I hate it!");
        shouldIKeepGoing = false;
    } else {
        console.log("phew, I was worried that I'd find an x. luckily, it was just " + someMessage[characterIndex]);
        characterIndex++;
    }
}


// THIS IS THE SAME AS for(var i = 0; i < 10; i++) { console.log(i); }
var i = 0;

while(i < 10) {
    console.log(i);
    i++;
}