function createEmployee(paraName,paraId,paraSalary){
    // create new object
    const employee = {};

    // initialize propeties & methods into that object
    employee.name = paraName;
    employee.id = paraId;
    employee.salary = paraSalary;
    
    employee.sayHello = function(){
        return `Hello ${this.name}`;
    }

    // return that object
    return employee;
}

employee1 = createEmployee("Smith", "2324X", 2600);
employee2 = createEmployee("John", "5364X", 3600);


console.log(employee1);
console.log(employee2);