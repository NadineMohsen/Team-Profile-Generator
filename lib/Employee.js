//Employee Constructor
class Employee{
    constructor (name,id,email){
        this.name = name;
        this.email=email;
        this.id=id;
    }
     // returning name from input
     getName() {
        return this.name;
    }
     // returning ID from input
     getId () {
        return this.id;
    }   

    // returning email from input
    getEmail () {
        return this.email;
    }

    // returning employee type 
    getRole () {
        return 'Employee'; 
    }

}

// to be exported 
module.exports = Employee; 