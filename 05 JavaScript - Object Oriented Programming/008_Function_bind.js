const student = {
    firstName: "Smith",
    section: "A"
}

let calculateTotalMarks = function (subject1, subject2, subject3) {
    let totalMarks = subject1 + subject2 + subject3;
    let message = `Hey ${this.firstName}, your total marks is : ${totalMarks}`;
    console.log(message);
}

calculateTotalMarks.call(student, 60, 70, 80); // <-------------- call
calculateTotalMarks.apply(student, [60, 70, 80]); // <---------------- apply - use array for apply

let studentCalculate = calculateTotalMarks.bind(student); // <--------- bind - make new funtion
studentCalculate(60,70,80);