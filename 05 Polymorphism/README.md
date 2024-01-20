## Polymorphism

Polymorphism allows objects of different classes to be treated as instances of a common base class. TypeScript supports two types of polymorphism:

- compile-time (static) polymorphism and
- runtime (dynamic) polymorphism.

### Compile-Time (Static) Polymorphism

Compile-time polymorphism is achieved through method overloading, where multiple methods with the same name exist in a class, but they differ in the type or number of their parameters.

```ts
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
```

### Runtime (Dynamic) Polymorphism

Runtime polymorphism is achieved through method overriding, allowing a child class to provide a specific implementation of a method defined in its parent class.

```ts
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
```

### Polymorphic Behavior with Interfaces

Interfaces can be used to achieve polymorphism by defining a contract that multiple classes can implement. This allows treating objects of different classes as instances of the same interface.

```ts
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
```
