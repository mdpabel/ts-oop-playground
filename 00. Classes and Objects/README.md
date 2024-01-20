# Understanding Classes and Objects in TypeScript

## Classes and Objects

### Understanding Classes

- **What is a Class?**: In Object-Oriented Programming (OOP), a class is a blueprint or template for creating objects. It defines properties (characteristics) and methods (functions or actions) that the objects created from the class can have.

- **Defining a Class**: In TypeScript, you define a class using the `class` keyword.

#### Example: Defining a 'Car' Class

```typescript
class Car {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  drive(): void {
    console.log(`Driving a ${this.make} ${this.model}`);
  }

  stop(): void {
    console.log(`Stopping the ${this.make} ${this.model}`);
  }
}
```

### Creating Objects from a Class

#### What is an Object?

An object is an instance of a class. It contains real values instead of variables and is created using the new keyword.

#### Creating an Object

You create an object by calling the class name followed by parentheses.

#### Example: Creating a 'Car' Object

```typescript
let myCar = new Car('Toyota', 'Corolla');
```

### Key Takeaways

- A class is a blueprint for creating objects.
- An object is an instance of a class with actual values.
- Classes contain properties and methods.
- You use the new keyword to create objects from a class.
- Objects can use the methods defined in the class.

### The new Keyword

#### the new keyword is used to create instances of user-defined objects or classes.

When you create an object using the new keyword, it does several things behind the scenes to initialize the object:

- Memory Allocation: It allocates memory space for the new object.
- Object Initialization: It initializes the object by calling the constructor function associated with the class or constructor function. This constructor function is responsible for setting up the initial state of the object, assigning values to its properties, and performing any necessary setup.
- this Binding: Inside the constructor function, the this keyword refers to the newly created object. This allows you to set the object's properties and perform actions specific to that instance.
- Object Return: The new keyword automatically returns the newly created object. This means that when you create an object using new, you can assign it to a variable for further use.
