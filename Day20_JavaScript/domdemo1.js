function getContent()
{
    let content = document.getElementById("p1");
    // content.innerHTML = "Hello World!"; // innnerHTML is same as innerText
    console.log(content.innerHTML);
    console.log(content.innerText);
}

function getAllParagraphContent()
{
    let content = document.getElementsByTagName("p");
    console.log("Total number of paragraphs: " + content.length);
    for(let i = 0; i < content.length; i++)
    {
        console.log(content[i].innerHTML);
    }
}

function changeAllParagraphBackGroundColor()
{
    let content = document.getElementsByTagName("p");
    for(let i = 0; i < content.length; i++)
    {
        content[i].style.backgroundColor = "yellow";
    }
}

function setRowNumberToParagraph()
{
    let content = document.getElementsByTagName("p");
    for(let i = 0; i < content.length; i++)
    {
        content[i].innerHTML = "Row Number: " + (i + 1) + " " + content[i].innerHTML;
    }
}

