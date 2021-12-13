// parent constructor function
function Person(paraFirstName, paraLastName, paraAge){
    this.firstName = paraFirstName;
    this.lastName = paraLastName;
    this.age = paraAge;
}

// child constrctor function
function Student(paraIndexNumber, paraGrade){
    this.indexNumber = paraIndexNumber;
    this.grade = paraGrade;
    this.isPassLastExam = function (){
        return `yes, ${this.firstName} ${this.lastName} passed last exam`;
    }
}

let student1 = new Student("136954R",11);
student1.__proto__ = new Person("Smith","John",15);

console.log(student1);
console.log(student1.isPassLastExam());