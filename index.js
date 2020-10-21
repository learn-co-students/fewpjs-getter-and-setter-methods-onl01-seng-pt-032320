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

    // set area(radius){
    //     this.area = Math.PI * radius * radius
    // }

    get area(){
        return this.area = Math.PI * this.radius * this.radius
    }
}