// Compile-Time (Static) Polymorphism

class MathOperations {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: number, b: string): string;
  add(a: string, b: number): string;

  add(a: number | string, b: number | string) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a + ' ' + b;
    } else {
      return a + b;
    }
  }
}

const obj = new MathOperations();

obj.add(1, 2);
obj.add('a', 'b');
obj.add('a', '2');

// Runtime (Dynamic) Polymorphism

class Animal {
  makeSound() {
    console.log('Anima sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof! Woof!');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow! Meow!');
  }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();

// Polymorphic Behavior with Interfaces

interface Shape {
  calculateArea(): number;
}

class Square implements Shape {
  constructor(public radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Box implements Shape {
  constructor(public sideLength: number) {}

  calculateArea(): number {
    return this.sideLength ** 2;
  }
}

export {};
