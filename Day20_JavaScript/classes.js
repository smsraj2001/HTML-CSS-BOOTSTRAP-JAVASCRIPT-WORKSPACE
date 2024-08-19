class Vehicle
{
    constructor(id, name, model, speed)
    {
        this.id = id;
        this.name = name;
        this.model = model;
        this.speed = speed;
    }

    display()
    {
        console.log(`ID: ${this.id} \nName: ${this.name} \nModel: ${this.model} \nSpeed: ${this.speed}`);
    }

    checkStatus()
    {
        if(this.speed <= 0)
            console.log('Vehicle is stopped');
        else
            console.log('Vehicle is moving');
    }
}

// Object Creation

let v = new Vehicle(1, 'jupiter', '2022', 0);
v.display();
v.checkStatus();