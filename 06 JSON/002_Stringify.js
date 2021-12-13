const person = {
    firstName: "Smith",
    lastName: "John",
    age: 25,
    email: "test@gmail.com",
    city: "New York",
    country: "USA",
    getFullName : function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(JSON.stringify(person));