function addingOne (numbers){
    let result = [];
    for (let i=0; i < numbers.length; i++){
        let pluseOne = numbers [i] + 1;
        result = [...result, plusOne];
    }
    return result;
}
/*
Explanation : 
This function adds 1 to each element of the numbers array.

Steps:

Create an empty array result.

Loop through numbers.

Add 1 to each element (plusOne).

Use spread operator to add it to result.

Return the new array with all values incremented by 1.
*/