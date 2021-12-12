let person = {
    personName : "John",
    age : 35,
    getDetails : function(){
        return `Person Name: ${this.personName}. His age is: ${this.age}`;
    }
}

let teacher = {
    mainSubject : "Maths",
    getDetails: function(){
        return `Teacher's main subject is ${this.mainSubject}`;
    }
}

teacher.__proto__ = person; //inheritance
console.log(teacher.getDetails());