import { createUserService, getUserByIdService, getUsersService } from "../services/users-service.js";


export async function createUserController(userData) {
    try {
        const user = await createUserService(userData)
        return {
            status: 'success',
            error: null,
            httpCode: 201,
            data: user
        }
    } catch (error) {
        return {
            status: 'error',
            error: 'Internal server error',
            httpCode: 500,
        }
    }
}

export async function getUsersController() {
    // Call the service that lists all users
    try {
        const users =  await getUsersService()
        return {
            status: 'success',
            error: null,
            httpCode: 200,
            data: users,
        }
    } catch (error) {
        return {
            status: 'error',
            error: 'Internal server error',
            httpCode: 500
        }
    }
}

export async function getUserByIdController(userId) {
    // Call the service that gets a user by its id
    try {
        const user =  await getUserByIdService(userId)
        if (!user) {
            return {
                status: 'error',
                error: 'User not found',
                httpCode: 404
            }
        }
        return {
            status: 'success',
            error: null,
            httpCode: 200,
            data: user
        }
    } catch (error) {
        return {
            status: 'error',
            error: 'Internal server error',
            httpCode: 500
        }
    }
}
