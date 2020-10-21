// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    set diameter(x){
        this.radius = x/2
    }

    get diameter(){
        return this.radius * 2
    }

    set circumference(y){
        this.diameter = y /  Math.PI
    }

    get circumference(){
        return this.circumference = Math.PI * this.diameter
    }

    set area(z){
        this.radius = Math.sqrt(z/Math.PI)
    }

    get area(){
        return this.area = Math.PI * this.radius * this.radius
    }
}