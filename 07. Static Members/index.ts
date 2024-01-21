class MathOperations {
  static PI = 3.14;
  test = 'test';

  static add(x: number, y: number) {
    return x + y;
  }
}

const operations = new MathOperations();

operations.test;
// operations.add() // Property 'add' does not exist on type 'MathOperations'. Did you mean to access the static member 'MathOperations.add' instead?
MathOperations.PI;
MathOperations.add(2, 3);

export {};
