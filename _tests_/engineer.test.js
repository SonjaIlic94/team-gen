const Engineer = require('../lib/Engineer');

test("Can instantiate Engineer instance", () => {
    const eng = new Engineer();
    expect(typeof (eng)).toBe("object");
});

test("Can set GitHub Username via constructor arguments", () => {
    const gitUser = "test@github.com";
    const eng = new Engineer("joe", 1, "email", gitUser);
    expect(eng.gitHub).toBe(gitUser);
});

test("Can get GitHub Username via getGithub()", () => {
    const gitUser = "test@github.com";
    const eng = new Engineer("joe", 1, "email", gitUser);
    expect(eng.getGithub()).toBe(gitUser);
});


