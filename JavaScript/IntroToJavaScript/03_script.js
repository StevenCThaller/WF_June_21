var x = 25;
function myFoo(x) {
    console.log(x);
    return x * 2;
}

myFoo(x);

// I want to create a function that will console.log a message 
function blogButton() {
    alert("Thank you for clicking the Blog button. Unfortunately at this time, it does nothing.")
}

function over(element) {
    element.classList.add("yellowHeader")
}

function out(element) {
    element.classList.remove("yellowHeader")
}


// Modulus operator
// var x = 10;
// var r = x % 3; // this is a modulus operation: rather than giving the result of the division, 
//                //it will give you the remainder after the division
// console.log(r);