const users = [
  { name: "Ram", age: 20 },
  { name: "Sita", age: 25 },
  { name: "Gita", age: 30 }
];

// find() → returns the first user with age 25
const user = users.find(person => person.age === 25);

console.log(user); // { name: "Sita", age: 25 }

/*
Explanation : 

*/