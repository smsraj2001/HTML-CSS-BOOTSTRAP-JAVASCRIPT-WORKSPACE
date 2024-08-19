// Thi sis function expression. We can use arrow functions to simplify ths code.
let add = function(a, b)
{
    console.log(a + b);
}

// Arrow function
let disp = () => 
{
    console.log("Hello World from the arrow function.");
}

let sum = (a, b) => 
{
    console.log(a + b);
}

let large = (a, b) =>
{
    if(a > b)
    {
        return a + " is greater than " + b;
    }
    else
    {
        return b + " is greater than " + a;
    }
}

disp();
sum(10, 20);
add(10, 20);
console.log(large(10, 20));

