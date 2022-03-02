// using Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Nadine', 90, 'nadine@example.com', 'NadineMohsen');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Nadine', 90, 'nadine@example.com', 'NadineMohsen');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Nadine', 90, 'nadine@example.com', 'NadineMohsen');

    expect(engineer.getRole()).toEqual("Engineer");
});