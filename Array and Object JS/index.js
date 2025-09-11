// Array is a list of items.
let a = 12;
let personName = "shyam";   // changed to avoid conflict
const weekdays = ['sunday', 'monday', 'tuesday'];
console.log(weekdays[0]);

// object 
let user = {
    name: 'ram',
    age: '12',
    jobs:[
        {name: "waiter", hrs:4},
        {name: "developer", hrs:6},
        {name: "designer", hrs:7},
    ]
}

// destructuring of array. 
const user1 = ["ram", "usa", "dhgfj"];
const [uName, location, d] = user1;  

console.log(personName); // "shyam"
console.log(uName);      // "ram"
console.log(location);   // "usa"
console.log(d);          // "dhgfj"

//destructuring of object. 
const {name,email}=user

