"use strict"; // This will select the whole file.

function display1() 
{
    a = 1;
    console.log("display1(), a: " + a);
}

function display2() 
{
    "use strict"; // This will enable strict mode for the function. if var keyword not used, it will give error.
    b = 2;
    console.log("display2(), b: " + b);
}

display1();
display2();