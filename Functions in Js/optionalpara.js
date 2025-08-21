function sum(a, b,c = 3) {
  return a + b + c;
}

result1 = sum(5, 7);
result2 = sum(10, 20);
result3= sum(1, 2, 4);
console.log("The sum of these number is : " + result1);
console.log("The sum of these number is : " + result2);
console.log("The sum of these number is : " + result3);

const func1 =(x)=>{
  console.log("I am a an arrow function", x)
}
func1(32);
func1(45);
func1(56);