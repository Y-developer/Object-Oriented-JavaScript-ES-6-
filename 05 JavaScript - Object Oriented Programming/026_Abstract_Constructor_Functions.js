// parent constructor function
function Person() {
    throw new Error("This Person is abstract constructor function and can't be instatiated");
};
Person.prototype.firstName = "Smith";
Person.prototype.lastName = "John";
Person.prototype.age = 15;
Person.prototype.getDetails = function () {
    return `This is parent constructor function`;
}

// child constructor function
function Student() { };

Student.prototype = Object.create(Person.prototype)// inheritance

Student.prototype.indexNumber = "25736R";
Student.prototype.grade = 11;
Student.prototype.getDetails = function () {
    return `This is child constructor function`;
}

// Person constructor function එක abstract function එකක් කර ඇත. එම නිසා එය භාවිතයෙන් object එකක් සෑදිය නොහැක
// const Person1 = new Person();
// console.log(Person1);
// console.log(Person1.getDetails());

// new object of child constructor function
const student1 = new Student();
console.log(student1);
console.log(student1.getDetails());