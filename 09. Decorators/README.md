## Decorator

They are used to modify or enhance the behavior of functions or methods without changing their code. Essentially, a decorator is a function that takes another function as an argument, adds some kind of functionality, and then returns another function. This all happens without altering the source code of the original function being decorated.

#### There are four types of decorators in TypeScript:

1. Class Decorators:
   Applied to class declarations.
   Receive the constructor of the class as an argument.

```ts
function Logger(a: typeof Calculator) {
  console.log('Loging in...');
  return a;
}

@Logger
class Calculator {
  add(x: number, y: number) {
    console.log(x + y);
  }
}

const c = new Calculator();
c.add(1, 2);
```

2. Method Decorators:
   Applied to method declarations.
   Receive either the constructor of the class (for static methods) or the prototype of the class (for instance methods), the method name, and a property descriptor.

```ts
const enumerable = (enumerable: boolean) => {
  return function (
    target: Greeter,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.enumerable = enumerable;
  };
};
```

3. Property Decorators:
   Applied to property declarations.
   Receive either the constructor of the class (for static properties) or the prototype of the class (for instance properties) and the property name.

```ts
function format(constructor: Greeter, propertyName: string) {
  console.log(propertyName);
}
```

4. Parameter Decorators:
   Applied to parameter declarations of methods.
   Receive either the constructor of the class (for static methods) or the prototype of the class (for instance methods), the method name, and the parameter index.

```ts
function parameterDecorator(
  constructor: Greeter,
  method: string,
  index: number,
) {
  console.log(constructor.greet('Hi'), method, index);
}
```
