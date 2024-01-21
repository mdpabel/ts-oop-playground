## This

In the context of OOP, "this" refers to the current instance of the class in which it is used.

```ts
class A {
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
```

#### Avoiding Ambiguity

The "this" pointer helps distinguish between instance variables and local variables or parameters with the same name.

```ts
class A {
  value = 'local variables';

  constructor() {
    this.value = 'instance varaible';
  }
}
```
