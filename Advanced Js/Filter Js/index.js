const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(num => num % 2 === 0);
//navigation 
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(evenNumbers); // [2, 4]
console.log (oddNumbers);


/*
Explanation : 
filter() → checks each element and keeps the ones that match the condition.

num % 2 === 0 → even numbers.

num % 2 !== 0 → odd numbers.

Returns new arrays without changing the original.
*/