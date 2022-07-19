const Employee=require("./employee")
class Intern extends Employee {
    constructor (name, email, school) {
        super(name, email)
        this.title = "Intern"
        this.school = school
    }
}


module.exports = Intern