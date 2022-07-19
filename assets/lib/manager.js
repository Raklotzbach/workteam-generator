const Employee=require("./employee")
class Manager extends Employee {
    constructor (name, email, id, title, officeNumber) {
        super(name, email, id,)
        this.title = "Manager"
        this.officeNumber = Math.floor(Math.random()*100)
    }
    getOffice() {
        return this.officeNumber
    }
}

const managerOne = new Manager("Bob Wilson", "bob.wilson@company.com") 
console.log(managerOne)

module.exports = Manager