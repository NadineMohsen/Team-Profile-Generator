// using Manager constructor 
const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Manager = require('../lib/Manager');

//creating manager object
test('creates a Manager object',() =>{
    const manager = new Manager('Nadine',10,'nadine.mohsen@hotmail.com',201);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Nadine', 10, 'nadine.mohsen@hotmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 