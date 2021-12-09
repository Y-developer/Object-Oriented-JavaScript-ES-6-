const person = {
    personName : "Yasitha",
    birthDay : function(){
        return `Happy Birthday ${this.personName}!!!`; // use "this" keyword
    }
}

console.log("")
console.log(person.birthDay()); // call birthDay method inside the person object



console.log("")
console.log("==============================================================")
console.log("")


console.log(this) // this is a empty object does not have any properties and methods
this.x = "this is a value of a propety in globle object" // use this as globle object
console.log(this);
