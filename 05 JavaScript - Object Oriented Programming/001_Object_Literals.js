const person = {
    personName : "Yasitha",
    birthDay : function(){
        return "Happy Birthday";
    }
}

console.log(person); // object
console.log(person.personName); // personName property inside the person object
console.log(person.birthDay()); // birthDay() function inside the person object