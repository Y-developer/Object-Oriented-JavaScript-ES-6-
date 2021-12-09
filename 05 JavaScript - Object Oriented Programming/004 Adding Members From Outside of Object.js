const student = {}; // create a empty object
console.log(student); // <--------------- console.log

student.marks = 70; // create a property inside the student object
student.getResult = function(){ // create a method inside the student object
    if(this.marks >= 35){
        return "Pass";
    }else{
        return "Fail";
    }
};
console.log(student); // <--------------- console.log

console.log(student.marks); // <--------------- console.log
console.log(student.getResult()); // <--------------- console.log