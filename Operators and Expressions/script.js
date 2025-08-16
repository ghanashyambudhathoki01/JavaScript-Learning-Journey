console.log("Operators in Js")
let a = 1;
let b = 2;

console.log(a + b)   // Addition
console.log(a - b)   // Subtraction
console.log(a * b)   // Multiplication
console.log(a / b)   // Division
console.log(a ** b)  // Exponentiation
console.log("a % b = ", a % b)   // Modulus
console.log("++a = ", ++a)   // Pre-increment
console.log("a =", a)
console.log("a-- = ", a--)   // Post-decrement

console.log('Assignment Operators in Js')
let assignment = 1; 
assignment += 5   // Addition assignment
console.log(assignment)
assignment -= 5   // Subtraction assignment
console.log("a is now =", a)
assignment *= 5   // Multiplication assignment
console.log("a is now ", a)
assignment /= 5   // Division assignment
console.log("a is now", a)

console.log("Comparison Operator in Js")
let c = "10";
let d = 10;
let e = 5;

console.log("d == c:", d == c);     // Equal to
console.log("d === c:", d === c);   // Strict equal to
console.log("d != c:", d != c);     // Not equal to
console.log("d !== c:", d !== c);   // Strict not equal to

console.log("d > e:", d > e);       // Greater than
console.log("d < e:", d < e);       // Less than
console.log("d >= e:", d >= e);     // Greater than or equal
console.log("e <= d:", e <= d);     // Less than or equal

console.log("Logical Operator in Js")
let f = 20;
let g = 15;

console.log(f > g && f !== g);    // Logical AND
console.log(f > g || f < g);      // Logical OR
console.log(!(f === g));          // Logical NOT
console.log(f >= g && f === 20);  // Logical AND
console.log(f < g || f !== 20);   // Logical OR

let sum = 10 + 5;          // Addition
let product = 4 * 3;       // Multiplication

let greeting = "Hi " + "there!";   // String concatenation

let isBigger = 10 > 5;          // Greater than
let isEqual = 10 === "10";      // Strict equal to

let i = true;
let h = false;

let result = a && b;   // Logical AND
let either = a || b;   // Logical OR
let notA = !a;         // Logical NOT

console.log(sum, product);
console.log(greeting);
console.log(isBigger, isEqual);
console.log(result, either, notA);
