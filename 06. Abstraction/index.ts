// abstract

abstract class Shape {
  abstract calculateArea(): number; // model

  display(): void {
    console.log(`Area: ${this.calculateArea()}`); // hiding implementation
  }
}

class Cicle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

const cirlce = new Cicle(2);
cirlce.calculateArea();
cirlce.display();

// Interfaces

interface Printable {
  print(): void;
}

class A implements Printable {
  print(): void {
    console.log('A');
  }
}

class B implements Printable {
  print(): void {
    console.log('B');
  }
}

export {};
