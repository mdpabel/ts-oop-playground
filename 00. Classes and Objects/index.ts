class Car {
  name: string;
  model: string;

  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }

  drive(): void {
    console.log(`Driving a ${this.model} ${this.name}`);
  }

  stop(): void {
    console.log(`Stopping ${this.model} ${this.name}`);
  }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.drive();

export {};
