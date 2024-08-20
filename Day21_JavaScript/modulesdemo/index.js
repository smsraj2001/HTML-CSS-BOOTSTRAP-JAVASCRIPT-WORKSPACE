import { validate, username } from './login.js';
import { Vehicle } from './service/VehicleService.js';

function display() 
{
    console.log('Hello from modulesdemo');
    console.log('Username: ' + username);
}

validate();
display();

let v = new Vehicle(101, 'NTorq', 2023);
v.display();