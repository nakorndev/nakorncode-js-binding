class User {
    name = 'John'
    age = 18
    getInfo() {
        // this = { name, age } <-- instance
        // this = undefiend
        return `${this.name} (${this.age})`
    }
}

const user = new User()
console.log(user.getInfo())

const copyGetInfo = user.getInfo
console.log(copyGetInfo.call({ name: 'Joe', age: 21 }))
