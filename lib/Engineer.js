//engineer has NAME, ID, EMAIL, getName(), getID(), getEmail(), getRole():engineer, github, getGithub()
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, Id, email, gitHub) {
        super(name, Id, email);
        this.gitHub = gitHub;
    }

    // method to get git hub
    getGithub() {
        return this.gitHub;
    }

    // method to get role
    getRole() {
        return "Engineer";
    }
};


module.exports = Engineer;