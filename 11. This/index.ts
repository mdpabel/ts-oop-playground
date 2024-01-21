class A {
  value = 'value';

  constructor() {
    this.value = 'instance varaible';
  }

  static b() {
    console.log(this);
  }
  c() {
    console.log(this);
  }
}

A.b(); // [class A]
const obj = new A();
obj.c(); //A {}
console.log(obj); // A {}
