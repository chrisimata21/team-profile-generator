const Employee = require("./employee");
class Manager extends Employee {
  constructor(name, id, email, title, officeNumber) {
    super(name, email, id);
    this.title = title;
    this.officeNumber = officeNumber;
  }
  getTitle() {
    return this.title;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;
