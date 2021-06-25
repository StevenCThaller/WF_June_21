// Write a function reverse(arr) to reverse an array.

// If we were given:
// ["a", "b", "c", "d", "e"];

// we expect to get back:
// ["e", "d", "c", "b", "a"]

function reverse(arr) {
    var start = 0; // let's keep track of our starting index, which we'll increment
    var end = arr.length - 1; // and our ending index, which we'll decrement
    
    // The trickiest part of this is recognizing that you need to stop halfway through the array. 
    while(start < end) {
        // here we have a good ole swap, to swap the element at our start index with 
        // the element at our end index
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // then, increment start and decrement end
        start++;
        end--;
    }

    // and finally, return our array!
    return arr;
}