import userModel from "../models/user.model.js"


export async function createUserService(user) {
    // Create the user and return it
   try {
    return await userModel.create(user)
   } catch (error) {
    throw error
   }
}

export async function getUsersService() {
    // Return the list of users
    return await userModel.find({})
}

export async function getUserByIdService(userId) {
    // Grab the user with id userId and return it
    try {
        return await userModel.findById(userId)
    } catch (error) {
        throw error
    }
}


export function ownPet(userId, petId) {
    /*
        - Loop through the users
        - For each user different than that user, check if a pet with petId exists
        - If yes, deny the request (user cannot own that pet)
        - else, make the user an owner of that pet (push petId to the array of pets)
    */
}