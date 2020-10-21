// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    set diameter(x){
        this._radius = x/2
    }

    get diameter(){
        return this._radius * 2
    }

    // set circumference(y){
    //     this._radius = Math.PI * radius 
    // }

    // get circumference(){
    //     return this._circumference 
    // }

    // set area(radius){
    //     this.area = Math.PI * radius * radius
    // }

    // get area(){
    //     return this.area
    // }
}