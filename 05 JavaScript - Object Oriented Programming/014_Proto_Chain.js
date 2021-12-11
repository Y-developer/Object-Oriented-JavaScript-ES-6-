const person = {
    name : "Smith",
    age : 20
};

const student = {
    indexNumber : "136954R",
    totalMarks:70,
};

const medicalStudent = {
    mainSubject : "Bialogy",
};

medicalStudent.__proto__ = student;
student.__proto__ = person;

console.log(medicalStudent.__proto__); //student object
console.log(student.__proto__); //person object
console.log(person.__proto__); // empty{} object