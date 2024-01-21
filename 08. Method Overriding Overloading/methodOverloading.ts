class MathOperations {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: number, b: string): string;
  add(a: string, b: number): string;

  add(a: number | string, b: number | string) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a + ' ' + b;
    } else {
      return a + b;
    }
  }
}

const obj = new MathOperations();

obj.add(1, 2);
obj.add('a', 'b');
obj.add('a', '2');
