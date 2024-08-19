let a = 1;
// let a = 2; // SyntaxError: Identifier 'a' has already been declared

a = 2; // reassigning the value of a. No error

console.log(a); // 2

const p = 100;
// p = 200; // TypeError: Assignment to constant variable.
console.log(p); // 100