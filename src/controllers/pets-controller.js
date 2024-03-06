import { createPetService, getPetByIdService, getPetsService } from "../services/pets-service.js";


export async function createPetController(petData) {
    // Call the service that creates the actual pet
    try {
        const pet = await createPetService(petData)
        return {
            status: 'success',
            error: null,
            httpCode: 201,
            data: pet
        }
    } catch (error) {
        return {
            status: 'error',
            error: 'Internal server error',
            httpCode: 500,
        }
    }
}

export async function getPetsController() {
    // Call the service that gets all the pets
    try {
        const pets =  await getPetsService()
        return {
            status: 'success',
            error: null,
            httpCode: 200,
            data: pets,
        }
    } catch (error) {
        return {
            status: 'error',
            error: 'Internal server error',
            httpCode: 500
        }
    }
}

export async function getPetByIdController(petId) {
    // Call the service that get a pet by its id
    try {
        const pet =  await getPetByIdService(petId)
        if (!pet) {
            return {
                status: 'error',
                error: 'Pet not found',
                httpCode: 404
            }
        }
        return {
            status: 'success',
            error: null,
            httpCode: 200,
            data: pet
        }
    } catch (error) {
        return {
            status: 'error',
            error: 'Internal server error',
            httpCode: 500
        }
    }
}