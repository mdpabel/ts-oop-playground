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
    super.makeSound();
    console.log('Woof! Woof!');
  }
}
