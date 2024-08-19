class Speed {
    constructor(speed) {
        this.speed = speed;
    }

    accelerate() 
    {
        this.speed += 10;
        let element = document.getElementById("speed"); 
        element.innerHTML = this.display();
    }

    brake() {
        this.speed -= 10;
        let element = document.getElementById("speed"); 
        element.innerHTML = this.display(); 
    }

    neutral() {
        this.speed = 0;
        let element = document.getElementById("speed");
        element.innerHTML = this.display(); 
    }

    display() {
        return `Current Speed: ${this.speed} km/hr`;
    }
}

const s = new Speed(0);

// function accelerate() {
//     s.accelerate();
// }

// function brake() {
//     s.brake();
// }

// function neutral() {
//     s.neutral();
// }
