export class Vehicle
{
    constructor(id, name, module)
    {
        this.id = id;
        this.name = name;
        this.module = module;
    }

    display()
    {
        console.log(`Vehicle ID: ${this.id}`);
        console.log(`Vehicle Name: ${this.name}`);
        console.log(`Vehicle Module: ${this.module}`);
    }
}

