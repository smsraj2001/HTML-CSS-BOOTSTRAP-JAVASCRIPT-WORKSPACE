function display()
{
    alert("Hello World");
}

function displaySalary(salary)
{
    alert("Salary: " + salary);
}

// We can treat functions like values in Javascript.

var a = 10;
var disp = function()
{
    console.log("Hello... This is a function expression.");
};

var disp2 = function(a, b)
{
    var result = a + b;
    console.log("Result: " + result);
};

display();
displaySalary(1000);
console.log("-------Calling function expression with the variable name as function name.-------");
disp(); // We can use variable name as functio name.
disp2(10, 20);


