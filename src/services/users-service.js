

let lastUserId = 0
const usersDB = [
    {
        userId: lastUserId,
        name: 'Joe',
        age: 29,
        sexe: 'male',
        pets: []
    },
    {
        userId: lastUserId,
        name: 'Joe2',
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


export function ownPet(userId, petId) {
    /*
        - Loop through the users
        - For each user different than that user, check if a pet with petId exists
        - If yes, deny the request (user cannot own that pet)
        - else, make the user an owner of that pet (push petId to the array of pets)
    */
}