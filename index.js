// Add your Circle class here
//With get- return calculated or dynamic data based an object properties 
//With set- we can change a property in a controlled way.
const pi = Math.PI

class Circle {

    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius *2
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference(){
        return (this.radius *2) * pi 
    }

    set circumference(circumference){
        this.radius = circumference / (pi*2)
    }

    get area(){
        return pi * (this.radius * this.radius)
    }

    set area(area){
        this.radius = Math.sqrt(area / pi)
    }
}