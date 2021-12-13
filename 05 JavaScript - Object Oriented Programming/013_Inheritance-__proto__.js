const person = {
    firstName: "Smith",
    lastName: "John",
    age: 15,
};

const student = {
    indexNumber : "136954R",
    grade : 11,
    isPassLastExam : function (){
        return `yes, ${this.firstName} ${this.lastName} passed last exam`;
    }
};

student.__proto__ = person;

console.log(student);
console.log(`Full Name : ${student.firstName} ${student.lastName}`);
console.log(`Age : ${student.age}`);
console.log(`Index Number : ${student.indexNumber}`);
console.log(`Is last exam passed?  ${student.isPassLastExam()}`);