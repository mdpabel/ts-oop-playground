## Static members

Static members in object-oriented programming (OOP) are elements (properties or methods) associated with a class itself rather than with instances of the class. These members are shared among all instances of the class and can be accessed without creating an instance of the class.

```ts
class MathOperations {
  static PI = 3.14;
  test = 'test';

  static add(x: number, y: number) {
    return x + y;
  }
}

const operations = new MathOperations();

operations.test;
// operations.add() // Property 'add' does not exist on type 'MathOperations'. Did you mean to access the static member 'MathOperations.add' instead?
MathOperations.PI;
MathOperations.add(2, 3);

export {};
```

#### Since static members are shared, they can contribute to memory efficiency by avoiding duplication of data or functionality across instances.
