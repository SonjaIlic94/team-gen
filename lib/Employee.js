//employee has,NAME, ID, EMAIL, getName(), getID(), getEmail(), getRole(): returns employee

class Employee {
    constructor(name, Id, email) {
        this.name = name;
        this.Id = Id;
        this.email = email;
    }
    // method to get name
    getName() {
        return this.name;
    }

    // method to get ID
    getId() {
        return this.Id;
    }

    // method to get email
    getEmail() {
        return this.email;
    }

    // method to get role
    getRole() {
        return "Employee";
    }
}



module.exports = Employee;