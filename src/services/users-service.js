import petModel from "../models/pet.model.js"
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


export async function ownPet(userId, petId) {
    try {
        console.log(userId, petId)
        const user = await userModel.findById(userId)
        const pet = await petModel.findById(petId)
        if (!pet || !user) {
            // TODO: Handle not found
            return
        }
        pet.owner = user._id
        await pet.save()
        return {
            user,
            pet
        }
    } catch (error) {
        throw error
    }
}