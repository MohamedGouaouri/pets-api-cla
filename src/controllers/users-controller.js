import { createUserService, getUsersService } from "../services/users-service.js";


export function createUserController(userData) {
    // Do data validation
    // Call the service that actually creates the user
    const user = createUserService(userData)
    return user
}

export function getUsersController() {
    // Call the service that lists all users
    const users = getUsersService()
    return users
}

export function getUserByIdController(userId) {
    // Call the service that gets a user by its id
}
