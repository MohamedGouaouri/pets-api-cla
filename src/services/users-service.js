

let lastUserId = 0
const usersDB = [
    {
        userId: lastUserId,
        name: 'Joe',
        age: 29,
        sexe: 'male',
        pets: []
    }
]

export function createUserService(user) {
    // Create the user and return it
    lastUserId++
    usersDB.push({
        ...user,
        userId: lastUserId
    })
    return user
}

export function getUsersService() {
    // Return the list of users
    return usersDB
}

export function getUserByIdService(userId) {
    // Grab the user with id userId and return it
    return usersDB.find((user) => {
        return user.userId == userId
    })
}