"use strict";

// function sum(a, a)
// {
//     return a + a;
// }

// console.log(sum(1,3)); // 6. Because the second parameter is considered as a variable and it is assigned the value 3. So, the function will return 3 + 3 = 6.


function sum(a, b)
{
    return a + b;
}

console.log(sum(1,3)); // SyntaxError: Duplicate parameter name not allowed in this context.