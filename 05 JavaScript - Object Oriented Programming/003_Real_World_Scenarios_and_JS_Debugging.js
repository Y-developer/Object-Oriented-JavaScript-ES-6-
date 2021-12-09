const employee = {
    firstName: "Smith",
    lastName: "John",
    designation: "Clerk",
    salary: 3000,
    workExperienceYears: 4,
    getFullName: function () { return `${this.firstName} ${this.lastName}` },
    promote: function () {
        let isEligibleForPromotion = false; // local variable
        if (this.designation == "Clerk" && this.workExperienceYears >= 3) {
            isEligibleForPromotion = true;
            this.designation = "Asst.Manager";
            this.salary += (this.salary *10)/100;
        }else if(this.designation == "Asst.Manager" && this.workExperienceYears >= 5){
            isEligibleForPromotion = true;
            this.designation = "Manager";
            this.salary += (this.salary *20)/100;
        }
        return isEligibleForPromotion; // true or false
    }
}

console.log(employee);
console.log(`First Name : ${employee.firstName}`);
console.log(`Last Name : ${employee.lastName}`);
console.log(`Full Name : ${employee.getFullName()}`);
console.log(`Designation : ${employee.designation}`);
console.log(`Salary : ${employee.salary}`);
console.log(`Is Promote : ${employee.promote()}`);

console.log("");
console.log("==================== After Promotion ===================");

console.log(employee);
console.log(`First Name : ${employee.firstName}`);
console.log(`Last Name : ${employee.lastName}`);
console.log(`Full Name : ${employee.getFullName()}`);
console.log(`Designation : ${employee.designation}`);
console.log(`Salary : ${employee.salary}`);
console.log(`Is Promote : ${employee.promote()}`);