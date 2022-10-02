const Employee = require("./employee");
class Engineer extends Employee {
  constructor(name, github, title, id, email) {
    super(name, id, email);
    this.github = github;
    this.title = title;
  }
  getGithub() {
    return this.github;
  }
  getTitle() {
    return this.title;
  }
}
module.exports = Engineer;
