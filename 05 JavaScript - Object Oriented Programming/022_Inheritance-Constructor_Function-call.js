// parent constructor function
function Person(paraFirstName, paraLastName, paraAge){
    this.firstName = paraFirstName;
    this.lastName = paraLastName;
    this.age = paraAge;
}

// child constructor function
function Student(paraFirstName, paraLastName, paraAge, paraIndexNumber, paraGrade){
    Person.call(this,paraFirstName, paraLastName, paraAge);
    this.indexNumber = paraIndexNumber;
    this.grade = paraGrade;
    this.isPassLastExam = function (){
        return `yes, ${this.firstName} ${this.lastName} passed last exam`;
    }
}

let student1 = new Student("Smith","John",15,"136954R",11);

console.log(student1);
console.log(student1.isPassLastExam());
