## Composition

In object-oriented programming (OOP), composition is a design principle where a class contains an instance of another class, rather than inheriting from it.

```ts
class Engine {
  start() {
    console.log('Engine started');
  }
  stop() {
    console.log('Engine stopped!');
  }
}

class Car {
  private engine: Engine;
  constructor() {
    this.engine = new Engine();
  }

  start() {
    this.engine.start();
    console.log('Car starting...');
  }

  stop() {
    this.engine.stop();
    console.log('Car stopping...');
  }
}

const car = new Car();
car.start();
car.stop();
```
