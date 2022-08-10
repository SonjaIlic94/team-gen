//manager hasNAME, ID, EMAIL, getName(), getID(), getEmail(), getRole():manager, officeNumber()

const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, Id, email, officeNumber) {
        super(name, Id, email);
        this.officeNumber = officeNumber;
    }
    // method to get office number
    getOfficeNumber() {
        return this.officeNumber
    }

    // method to get role
    getRole() {
        return "Manager"
    }
};




module.exports = Manager;