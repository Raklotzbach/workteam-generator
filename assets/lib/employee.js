
class Employee {
    constructor(name,email) {
        this.name = name
        this.email = email
        this.id = Math.floor(Math.random()*100)
        this.title = "employee"
    }

    getName() {
        return this.name
    }

}
const newEmployee =  new Employee ("John", "john@email.com")
console.log(newEmployee.getName())


module.exports = Employee