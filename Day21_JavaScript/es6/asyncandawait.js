async function myDisplay() 
{
    let myPromise = new Promise(function(resolve) 
    {
        setTimeout(function() 
        {
            resolve("This is displayed after a 5-second delay.");
        }, 5000); // 5 seconds delay
    });
    document.getElementById("demo").innerHTML = await myPromise;
}

document.addEventListener("DOMContentLoaded", function() 
{
    myDisplay();
});
