## Abstraction

Abstraction is the concept of hiding the complex reality while exposing only the necessary parts. It involves creating a simple model that represents more complex underlying code and data. This model exposes only what is necessary for the user of the object and hides the internal implementation details. It is achieved through abstract classes and interfaces.

#### Abstract Classes

An abstract class is a class that cannot be instantiated on its own and may contain abstract methods, which are methods without an implementation. Abstract classes serve as blueprints for other classes.

```ts
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
```

#### Abstract Methods

Abstract methods are declared in an abstract class without providing an implementation. Subclasses must implement these methods, providing specific functionality.

#### Interfaces

Interfaces define a contract for classes to implement. They declare the structure that classes must adhere to without providing any implementation. This promotes code consistency.

```ts
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
```

#### Encapsulation and Abstraction

Encapsulation and abstraction are closely related concepts. While encapsulation involves bundling data and methods within a class, abstraction goes further by hiding the implementation details and exposing only what is necessary.
