## Access Modifiers

#### The public, private, and protected keywords control where and how the members of a class can be accessed.

public (default): Members are accessible from anywhere.
private: Members are only accessible within the class they are defined.
protected: Members are accessible within the class and its subclasses.

```ts
class Employee {
  private baseSalary = 100000;
  public name: string;
  protected role = 'Software Engineer';

  constructor(name: string) {
    this.name = name;
  }

  public getSalary() {
    return this.baseSalary;
  }
}

const employee = new Employee('Pabel');
employee.name = 'MD Pabel';
employee.getSalary();

class HR extends Employee {
  public getRole() {
    return this.role;
  }
}
```
