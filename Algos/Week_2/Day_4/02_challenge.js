// Flatten an array

/*
Given a 2 dimensional array (an array containing arrays), return a new array containing 
just the values from inside the sub-arrays. Don't assume the array will always be the 
same size, or that the sub-arrays are all the same length (the array might be jagged). 
Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) 
and/or .pop() where needed.
*/

// complete the following function
function flatten(arr2d) {
    var flat = [];
    
    // To touch every single value, we'll need to loop through the overall array
    for(var i = 0; i < arr2d.length; i++) {
        // and then for each array inside of arr2d, loop through THAT array
        for(var j = 0; j < arr2d[i].length; j++) {
            // and push each value into the flat array
            flat.push(arr2d[i][j]);
        }
    }
    // And finally, remove the flat array!
    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]
