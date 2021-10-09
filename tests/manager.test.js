const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


test('creates an Manager object', () => {
    const manager = new Manager('Atsuko', 77, 'atsuko@gmail.com', 7);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Atsuko', 77, 'atsuko@gmail.com', 7);

    expect(manager.getRole()).toEqual("Manager");
});