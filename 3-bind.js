class Users {
    currentId = 1
    list = []
    addUser({ name, age }) {
        this.list.push({
            id: this.currentId++,
            name: name,
            age: age
        })
    }
    getUsers() {
        return this.list
            .map(function (user) {
                return `${user.id}: ${user.name} (${user.age})`
            })
            .join('\n')
    }
}

const users = new Users()
// users.addUser({ name: 'John Doe', age: 18 })
// users.addUser({ name: 'Joe Dan', age: 21 })

const listOfUsers = [
    { id: 1018, name: 'John Doe', age: 18 },
    { id: 1019, name: 'Joe Dan', age: 21 },
    { id: 1020, name: 'Jane Dee', age: 15 }
]

// for (let user of listOfUsers) {
//     users.addUser(user)
// }

users.list = listOfUsers
console.log(users.getUsers())

const listFromCustomer = users.getUsers.bind({
    list: listOfUsers
})
console.log(listFromCustomer())
