const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const i = new Intern();
    expect(typeof (i)).toBe('object');
});