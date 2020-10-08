class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter/2
    }

    get circumference() {
        return Math.PI * this.diameter
    }
    
    
    set circumference(newCircumference) {
        this.radius = newCircumference/(Math.PI * 2)
        
    }

    get area() {
        return this.radius * this.radius * Math.PI
    }


    set area(newArea) {
        this.radius = newArea/(this.radius * Math.PI);
    }
}

  
