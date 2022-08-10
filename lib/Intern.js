//intern has NAME, ID, EMAIL, getName(), getID(), getEmail(), getRole():intern, getSchool(), school
const Employee = require('./Employee');
class Intern extends Employee {
    constructor(name, Id, email, school) {
        super(name, Id, email);
        this.school = school;
    }
    // method to get school
    getSchool() {
        return this.school;
    }

    // method to get role
    getRole() {
        return "Intern";
    }
};

// new Intern('joe', '1', 'email', 'carleton');
// console.log(Intern);




module.exports = Intern;