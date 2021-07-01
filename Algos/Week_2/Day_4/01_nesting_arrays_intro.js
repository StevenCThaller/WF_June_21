var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array


// Do you think we could determine if a certain value was present? Let's 
// write a function called isPresent2d(arr2d, value) that returns true if 
// that value is present, and false if it is not.

// IMPORTANT!!! Don't assume the array will always be the same size!
// Just because an array contains arrays, or an array is nested in an array,
// doesn't mean it loses its .length property!

function isPresent2d(arr2d, value){
    for(var i = 0; i < arr2d.length; i++) {
        // arr2d[i] is going to be one of the nested arrays
        // so our goal is to find the value in that array
        for(var j = 0; j < arr2d[i].length; j++) {
            // if you want to help make things a little more readable
            var nestedArr = arr2d[i];
            if(nestedArr[j] == value) {
                return true;
            }
        }
    }

    return false;
}