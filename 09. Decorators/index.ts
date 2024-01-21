//  Class Decorators

function myClassDecorator(a: typeof Greeter) {
  console.log('Loging in...');
  return a;
}

// Method Decorators:

const enumerable = (enumerable: boolean) => {
  return function (
    target: Greeter,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.enumerable = enumerable;
  };
};

// Property Decorators:
function format(constructor: Greeter, propertyName: string) {
  console.log(propertyName);
}

// Parameter Decorators:
function parameterDecorator(
  constructor: Greeter,
  method: string,
  index: number,
) {
  console.log(constructor.greet('Hi'), method, index);
}

@myClassDecorator
class Greeter {
  @format
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(true)
  greet(@parameterDecorator message: string) {
    console.log(this.greeting || message);
  }
}

const g = new Greeter('Hello world!');
g.greet('Hello world!');
