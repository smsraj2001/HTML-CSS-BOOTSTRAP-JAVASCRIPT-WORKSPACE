function sum(...num)
{
    let result = 0;
    for(let i of num)
    {
        result += i;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(100, 200)); // 300