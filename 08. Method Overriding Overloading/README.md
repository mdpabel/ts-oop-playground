## Method Overloading:

Method overloading allows a class to have multiple methods with the same name but different parameter lists. The compiler or runtime environment determines which method to invoke based on the number, types, or order of the parameters during a method call.

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

## Method Overriding:

Method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its superclass. The overridden method in the subclass has the same signature (name, return type, and parameters) as the method in the superclass. This allows the subclass to provide its own implementation of the method while maintaining a common interface with the superclass.

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
