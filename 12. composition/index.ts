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
