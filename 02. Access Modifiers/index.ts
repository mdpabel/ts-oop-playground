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
