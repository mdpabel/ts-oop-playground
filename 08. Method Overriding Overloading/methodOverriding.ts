class Animal {
  makeSound() {
    console.log('Anima sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof! Woof!');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow! Meow!');
  }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound();
cat.makeSound();
