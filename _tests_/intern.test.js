const Intern = require('../lib/Intern');

test('Can instantiate Intern instance', () => {
    const int = new Intern();
    expect(typeof (int)).toBe('object');
});

test("Can set school via constructor arguments", () => {
    const schoolName = "Carleton";
    const int = new Intern("name", 1, "email", schoolName);
    expect(int.school).toBe(schoolName);
});

test("Can get school via getSchool", () => {
    const schoolName = "Carleton";
    const int = new Intern("name", 1, "email", schoolName);
    expect(int.getSchool()).toBe(schoolName);
});