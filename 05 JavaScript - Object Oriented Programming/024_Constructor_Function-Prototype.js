function Student(){}

// add propeties to "prototype" propety of constructor function
Student.prototype.maths = 70;
Student.prototype.physics = 80;
Student.prototype.chemistry = 90;

// add mathods to "prototype" propety of constructor function
Student.prototype.getTotalMarks = function(){
    return this.maths + this.physics + this.chemistry;
}

const student = new Student();

console.log(student); // {} empty object
console.log(student.maths);
console.log(student.__proto__); // copy "prototype" propety to the object