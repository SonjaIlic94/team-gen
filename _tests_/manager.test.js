const Manager = require('../lib/Manager');

test("Can instantiate Manager instance", () => {
    const mgmt = new Manager();
    expect(typeof (mgmt)).toBe("object");
});

test("Can set office number Username via constructor arguments", () => {
    const officeNum = 2;
    const mgmt = new Manager("joe", 1, "email", officeNum);
    expect(mgmt.officeNumber).toBe(officeNum);
});

test("Can get office number Username via officeNumber function", () => {
    const officeNum = 2;
    const mgmt = new Manager("joe", 1, "email", officeNum);
    expect(mgmt.getOfficeNumber()).toBe(officeNum);
});