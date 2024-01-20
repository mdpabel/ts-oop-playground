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

export {};
