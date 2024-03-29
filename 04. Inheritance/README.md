# Inheritance

Inheritance allows a class to inherit properties and behaviors from another class. The class that is being inherited from is called the "parent" or "base" class, and the class that inherits is called the "child" or "derived" class.

```ts
class Animal {
  constructor(public name: string) {}

  makeSound(): void {
    console.log('Some generic sound');
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  makeSound(): void {
    console.log('Woof! Woof!');
  }
}
```

### Super Keyword

The super keyword is used in a child class to call the constructor of the parent class or to access its methods.

```ts
class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);
  }

  makeSound(): void {
    super.makeSound();
    console.log('Woof! Woof!');
  }
}
```

when you define a class that extends another class (using the extends keyword), and the subclass (child class) has a constructor, it's necessary to call the super() method within the constructor of the subclass. This is because super() is responsible for calling the constructor of the parent class (superclass).

````ts
class A {
  constructor() {}
}

class B extends A {
  constructor() {
    super()
  }
}

```

### Method Overriding

Method overriding allows a child class to provide a specific implementation of a method that is already defined in its parent class.

```ts
class Cat extends Animal {
  makeSound(): void {
    console.log('Meow! Meow!');
  }
}
```
````
