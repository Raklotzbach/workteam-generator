const Employee=require("./employee")
class Intern extends Employee {
    constructor (name, email, school) {
        super(name, email)
        this.title = "Intern"
        this.school = school
    }

    getSchool() {
        return this.school
    }

}

const newIntern =  new Intern ("John", "john@email.com", "UCLA")


module.exports = Intern