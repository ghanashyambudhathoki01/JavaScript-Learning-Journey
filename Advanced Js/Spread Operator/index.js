const evenNumbers = [2,4,6,8,10];
const oddNumbers = [1,3,5,7,9];
//Spread Operator 
const allNumber = [...evenNumbers, ...oddNumbers]

/* Explanation : 
... (spread operator) unpacks array elements.

allNumber combines both arrays into one.

 Result: [2,4,6,8,10,1,3,5,7,9]
*/