let marks = [10, 20, 30, 40, 50];
console.log(marks);

marks.push(60);
marks.push(70);

console.log(marks);

marks.pop();
marks.pop();
console.log(marks);

// Array of objects
let vehicles = [
    {id: 1, name: "jupiter", price: 90000, category: "Scooter"},
    {id: 2, name: "apache", price: 150000, category: "Scooter"},
    {id: 3, name: "ntorq", price: 120000, category: "Scooter"},
    {id: 4, name: "bullet", price: 200000, category: "Bike"},
    {id: 5, name: "ronin", price: 250000, category: "Bike"},
    {id: 6, name: "moped", price: 50000, category: "Bike"}
];

console.log(vehicles);

// Filter the vehicles with price less than `110000`
// Display only Scooter
let costlyVehicles = vehicles.filter(vehicle => vehicle.price < 110000);
console.log(costlyVehicles);

let vehicleScooter = vehicles.filter(vehicle => vehicle.category === "Scooter");
console.log(vehicleScooter);