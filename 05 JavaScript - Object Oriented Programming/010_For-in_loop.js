const student = {
    firstName : "Smith",
    email : "smith@gmail.com",
    school : "NWC",
    physics : 70,
    chemistry : 80,
    maths : 60,
}

for (let prop in student){
    console.log (`key (${prop}) =>> value (${student[prop]})`);

    // increase subject marks by 5
    if(prop =="physics" || prop =="chemistry" || prop =="maths"){
        student[prop] += 5;
    }
}

console.log(student);