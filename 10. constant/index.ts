class Circle {
  readonly PI = 3.14;

  add(x: number, y: number): number {
    return x + y;
  }
}

const c = new Circle();
// c.PI = 3.6; // Cannot assign to 'PI' because it is a read-only property.
