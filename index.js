class Circle {
    constructor(r){
        this.radius = r;
    }
    
    get diameter(){
        return this.radius*2;
    }
    set diameter(d){
        this.radius = d/2;
    }
    //C=pi*d
    //A=pi*r^2
    get area(){
        return Math.PI * (this.radius**2);
    }
    set area(a){
        this.radius= Math.sqrt((a/Math.PI));
    }

    get circumference(){
        return Math.PI * (this.radius * 2);
    }
    set circumference(c){
        this.radius = (c/Math.PI)/2;
    }
}