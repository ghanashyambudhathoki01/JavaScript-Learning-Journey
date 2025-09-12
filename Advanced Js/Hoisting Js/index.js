console.log(a); // Output: undefined
var a = 10;

sayHello(); 

function sayHello() {
  console.log("Hello World");
}
// Explanation : 
/*
Hoisting means JavaScript moves declarations to the top of their scope.

var : hoisted as undefined.

function : fully hoisted.

let & const : hoisted but unusable until declared (temporal dead zone).
*/