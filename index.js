// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }

    set diameter(d) {
        this._diameter = d
        this.radius = this._diameter / 2;
    }

    set circumference(c) {
        this._circumference = c;
        this.radius = (this._circumference / Math.PI) / 2;
    }

    set area(a) {
        this._area = a;
        this.radius = Math.sqrt(this._area / Math.PI);
    }
}