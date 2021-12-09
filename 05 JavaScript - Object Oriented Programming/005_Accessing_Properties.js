const customer = {
    customerName : "Smith",
    email : "smith@gmail.com"
}

// get values
console.log(customer.customerName); // dot (.) notation
console.log(customer["customerName"]); // bracket notation

// set values
customer.city = "Colombo"; // dot (.) notation
customer["zipCode"] = "CL 25639" // bracket notation

//get values
console.log(customer["city"]) // bracket notation
console.log(customer.zipCode) // dot (.) notation