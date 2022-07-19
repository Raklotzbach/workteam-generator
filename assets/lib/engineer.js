const Employee=require("./employee")
class Engineer extends Employee {
    constructor (name, email, id, gitHub) {
        super(name, email, id)
        this.title = "Engineer"
        this.gitHub = gitHub
    }
    
    getGithub() {
        return this.gitHub
    }
}

const newEngineer = new Engineer("Bob", "bob@company.com", 1, "GitHubUser") 
console.log(newEngineer.getGithub)



module.exports = Engineer