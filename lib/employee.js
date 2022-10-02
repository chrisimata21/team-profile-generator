class Employee {
  constructor(name, email, title, id) {
    this.name = name;
    this.email = email;
    this.title = title;
    this.id = id;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getTitle() {
    return this.title;
  }
  getId() {
    return this.id;
  }
}
module.exports = Employee;
