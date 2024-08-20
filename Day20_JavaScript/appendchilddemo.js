function fun0() {
    let p = document.createElement("p");
    let node = document.createTextNode("This is Paragraph");
    p.appendChild(node);

    let element = document.getElementById("b");
    element.appendChild(p);
}

function fun1() {
    let element = document.createElement("p");
    element.innerHTML = "Hello World!";
    element.style.backgroundColor = "yellow";
    element.id = "p1";

    document.getElementById("b").appendChild(element);
}

function fun2() {
    let element = document.createElement("h1");
    element.innerHTML = "Append Child Demo Heading";
    element.style.backgroundColor = "red";

    document.getElementById("b").appendChild(element);
}

function fun3() {
    let list = document.createElement("ul");
    let item1 = document.createElement("li");
    let item2 = document.createElement("li");
    let item3 = document.createElement("li");

    list.innerHTML = "UNORDERED LIST DEMO";

    item1.innerHTML = "Item 1";
    item1.style.color = "purple";
    item2.innerHTML = "Item 2";
    item2.style.color = "blue";
    item3.innerHTML = "Item 3";
    item3.style.color = "green";

    // Another way to create list item
    let text = document.createTextNode("Item 4");
    let item4 = document.createElement("li");
    item4.appendChild(text);
    item4.style.color = "orange";

    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);

    document.getElementById("b").appendChild(list);
}

function fun4() {
    let element = document.getElementById("p1");
    element.remove();
}
