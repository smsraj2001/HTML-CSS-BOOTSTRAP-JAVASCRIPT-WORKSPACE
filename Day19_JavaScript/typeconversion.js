var id = 1;
var name = "Sourab";
var iseleigible = true;
var employee = null;
var x;
console.log(typeof(id));
console.log(typeof(name)); // Here name is having strikethrough because name is a reserved keyword in javascript, but will not give any error.
console.log(typeof(iseleigible));
console.log(typeof(employee));
console.log(typeof(x));

console.log("--------Conversion--------");
let num1 = "200";
console.log("num1 of type " + typeof(num1));

// Converting string to number
let n = Number(num1);
console.log("num1 of type " + typeof(n));