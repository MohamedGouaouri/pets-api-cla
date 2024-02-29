import { createPetService, getPetByIdService, getPetsService } from "../services/pets-service.js";


export function createPetController(pet) {
    // Call the service that creates the actual pet
    return createPetService(pet)
}

export function getPetsController() {
    // Call the service that gets all the pets
    return getPetsService()
}

export function getPetByIdController(petId) {
    // Call the service that get a pet by its id
    return getPetByIdService(petId)
}