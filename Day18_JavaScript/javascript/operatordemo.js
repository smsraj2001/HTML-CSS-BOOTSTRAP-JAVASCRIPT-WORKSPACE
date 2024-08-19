let a = 3;
let x = (100 + 50) * a;

var result = a + x;
console.log(result); // 450
result = a - x;
console.log(result); // -350
result = a * x;
console.log(result); // 750
result = a / x;
console.log(result); // 0.04
result = a % x;
console.log(result); // 3
result = a++;
console.log(result); // 3
result = a--;
console.log(result); // 4
result = a ** x;
console.log(result); // 19683

// Assignment operators
let b = 5;
b += 3;
console.log(b); // 8
b -= 3;
console.log(b); // 5
b *= 3;
console.log(b); // 15
b /= 3;
console.log(b); // 5
b %= 3;
console.log(b); // 2
b **= 3;
console.log(b); // 8

// Comparison operators
let c = 5;
let d = 3;
console.log(c == d); // false. This will check the value of the variable.
console.log(c != d); // true. This will check the value of the variable.
console.log(c > d); // true. This will check the value of the variable.
console.log(c < d); // false. This will check the value of the variable.
console.log(c >= d); // true. This will check the value of the variable.
console.log(c <= d); // false. This will check the value of the variable.
console.log(c === d); // false. This will check the value and type of the variable.
console.log(c !== d); // true. This will check the value and type of the variable.
console.log(c == "5"); // true. This will check the value of the variable.
console.log(c > 5 ? "Yes" : "No"); // false. This will check the value of the variable.

a = 1;
b = "1";
console.log(a==b); // true
console.log(a===b); // false

let y = "5";      // y is a string
x = + y;      // x is a number because of the unary + operator
console.log(x); // 5