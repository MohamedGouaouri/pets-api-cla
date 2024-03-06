import petModel from "../models/pet.model.js"

export async function createPetService(pet) {
    try {
        return await petModel.create(pet)
    } catch (error) {
        throw error
    }
}

export async function getPetsService() {
    return await petModel.find({})
}

export async function getPetByIdService(petId) {
    // Search for pet using its petId
    try {
        return await petModel.findById(petId).populate('owner')
    } catch (error) {
        throw error
    }
}