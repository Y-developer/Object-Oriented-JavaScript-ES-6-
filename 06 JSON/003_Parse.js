const person = {
    firstName: "Smith",
    lastName: "John",
    age: 25,
    email: "test@gmail.com",
    city: "New York",
    country: "USA"
}

let personJson = JSON.stringify(person)
console.log(personJson);

let personObj = JSON.parse(personJson);
console.log(personObj);
