const Employee=require("./employee")
class Engineer extends Employee {
    constructor (name, email, gitHub, id) {
        super(name, email, id)
        this.title = "Engineer"
        this.gitHub = gitHub
    }
}


module.exports = Engineer