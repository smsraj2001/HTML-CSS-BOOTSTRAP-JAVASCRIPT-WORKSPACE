// By Literals
let vehicle = {id: 1, name: "jupiter", price : 100000};
console.log(vehicle.id + " " + vehicle.name + " " + vehicle.price);

// By new keyword
let vehicle2 = new Object();
vehicle2.id = 2;
vehicle2.name = "apache";
vehicle2.price = 150000;
console.log(vehicle2.id + " " + vehicle2.name + " " + vehicle2.price);

// By constructor
function vehicleconstructor(id, name, price)
{
    this.id = id;
    this.name = name;
    this.price = price;
}

let vehicle3 = new vehicleconstructor(3, "ntorq", 120000);
console.log(vehicle3.id + " " + vehicle3.name + " " + vehicle3.price);

