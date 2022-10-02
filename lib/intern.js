const Employee = require("./employee");
class Intern extends Employee {
  constructor(name, email, id, title, school) {
    super(name, id, email);
    this.title = title;
    this.school = school;
  }
  internTitle() {
    return this.title;
  }
  getSchool() {
    return this.school;
  }
}
module.exports = Intern;
