
class Employee {
    constructor(name,email) {
        this.name = name
        this.email = email
        this.id = Math.floor(Math.random()*100)
        this.title = "Employee"
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getId() {
        return this.id
    }

    getRole() {
        return this.title
    }

}
const newEmployee =  new Employee ("John", "john@email.com")
console.log(newEmployee.getName())
console.log(newEmployee.getEmail())





module.exports = Employee