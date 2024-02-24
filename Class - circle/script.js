// Convert the UML diagram to Typescript class.

class Circle {
  constructor(radius = 1.0, color = "red") {
    this.radius = radius;
    this.color = color;
  }
  get_Radius() {
    return this.radius;
  }
  set_Radius(radius) {
    return (this.radius = radius);
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    return (this.color = color);
  }
  toString() {
    return "[radius = " + this.radius + ",color = " + this.color + "]";
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
let circle = new Circle(1.0, "yellow");
console.log(circle);
console.log(circle.get_Radius());
console.log(circle.getColor());
circle.setColor("blue");
console.log(circle.getColor());
circle.set_Radius(10);
console.log(circle.get_Radius());
console.log("Circle" + circle.toString());
console.log(circle.getArea().toFixed(2));
console.log(circle.getCircumference().toFixed(2));
