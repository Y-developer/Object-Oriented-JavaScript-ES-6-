// regulaer and arrow function outside the object
this.x = 10;
this.y = 25;

let regularFunction = function () {
    console.log("============ inside regular function ============");
    console.log(this);
    console.log("");
}

let arrowFunction = () => {
    console.log("============ inside arrow function ============");
    console.log(this);
    console.log("");
}

regularFunction();
arrowFunction();

console.log("============ outside the function ============");
console.log(this);
console.log("")


// arrow and regular function inside an object
const funcTest = {
    x: 10,
    nameX: "Apple",
    testArroFunction: () => {
        console.log("============ arrow function inside an object ============");
        console.log(this);
        console.log("")
    },
    testRegulerFunction: function () {
        console.log("============ reguler function inside an object ============");
        console.log(this);
        console.log("")
    }
}

funcTest.testArroFunction();
funcTest.testRegulerFunction();
