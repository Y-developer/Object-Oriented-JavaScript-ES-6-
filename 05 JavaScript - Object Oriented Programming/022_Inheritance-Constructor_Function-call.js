function person(paraFirstName, paraLastName, paraAge){
    this.firstName = paraFirstName;
    this.lastName = paraLastName;
    this.age = paraAge;
}

function student(paraFirstName, paraLastName, paraAge, paraIndexNumber, paraGrade){
    person.call(this,paraFirstName, paraLastName, paraAge);
    this.indexNumber = paraIndexNumber;
    this.grade = paraGrade;
    this.isPassLastExam = function (){
        return `yes, ${this.firstName} ${this.lastName} passed last exam`;
    }
}

let student1 = new student("Smith","John",15,"136954R",11);

console.log(student1);
console.log(student1.isPassLastExam());