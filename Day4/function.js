
// Function without parameters
function addNumbers() {
    let a = 10;
    let b = 20;
    let c = 30;
    let d = 40;

    let sum = a + b + c + d;

    console.log("I am here:", sum);

    return sum;
}

// Function call
let result = addNumbers();

console.log("Result:", result);


// Function with parameters
function addNumber(a, b) {
    return a + b;
}

// Function call with arguments
let result1 = addNumber(20, 30);
let result2 = addNumber(20, 30);
let result3 = addNumber(20, 30);
let result4 = addNumber(20, 30);

console.log("Result 1:", result1);
console.log("Result 2:", result2);
console.log("Result 3:", result3);
console.log("Result 4:", result4);
