## Constructors

Constructors are special methods within a class that are used for initializing instances of that class. Constructors are called automatically when you create a new object based on the class, and they allow you to perform any necessary setup or initialization for the object.

#### Key points about constructors in TypeScript:

- Initialization: The primary purpose of a constructor is to initialize the properties of the class. You can pass parameters to the constructor and use them to set the initial values of the class properties.

- Automatic Invocation: Constructors are automatically called when you create a new instance of the class using the new keyword. This ensures that the object is properly initialized before it is used.

```ts
class Car {
  name: string;
  model: string;

  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }
}
```

### Constructor overloading

When a class has multiple constructors, each with a different set of parameters (different number or types of parameters), it is known as constructor overloading.

```ts
class Car {
  name: string | undefined;
  model: string | undefined;
  year: number | undefined;

  constructor();
  constructor(name: string, model: string);
  constructor(name: string, model: string, year: number);
  constructor(name?: string, model?: string, year?: number) {
    this.name = name ?? 'Unknown';
    this.model = model ?? 'Unknown';
    this.year = year ?? 2019;
  }
}

const myCar = new Car('Toyota', 'Corolla', 2019);
```
