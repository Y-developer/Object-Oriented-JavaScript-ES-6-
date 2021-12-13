function employee(paraName,paraId,paraSalary){
    // initialize propeties & methods using this keyword
    this.name = paraName;
    this.id = paraId;
    this.salary = paraSalary;
    
    this.sayHello = function(){
        return `Hello ${this.name}`;
    }
}

employee1 = new employee("Smith", "2324X", 2600);
employee2 = new employee("John", "5364X", 3600);


console.log(employee1);
console.log(employee2);