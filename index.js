class Circle {
    constructor(radius) { this.radius = radius; }

    get diameter() { return this.radius * 2; }
    get circumference() { return this.diameter * Math.PI; }
    get area() { return (this.radius ** 2) * Math.PI; }

    set diameter(diam) { this.radius = diam / 2; }
    set circumference(circ) { this.radius = (circ / Math.PI) / 2; }
    set area(are) { this.radius = Math.sqrt(are/Math.PI); }
}