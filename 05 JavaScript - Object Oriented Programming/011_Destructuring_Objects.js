const person = {
    firstName: "Smith",
    lastName: "John",
    age: 25,
    email: "test@gmail.com",
    city: "New York",
    country: "USA"
}

let {
    firstName :fn,
    lastName : ln,
    age,
    email = "someone@gmail.com",
    ... other
} = person


console.log(fn); // Smith
console.log(ln); // John
console.log(age); // 25
console.log(email); // test@gmail.com
console.log(other); // { city: 'New York', country: 'USA' }