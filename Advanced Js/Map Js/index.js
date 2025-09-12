const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
/*
Explanation : 
map() goes through each element of numbers.

Multiplies each element by 2 (num * 2).

Returns a new array doubled without changing the original array.
*/
