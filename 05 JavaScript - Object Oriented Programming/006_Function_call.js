const person = {
    age : 20
}

let birthDay = function(years){
    this.age += years;
}

console.log(person.age); // 20
birthDay.call(person, 3);
console.log(person.age); // 23