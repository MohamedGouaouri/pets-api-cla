let lastPetId = 0
const petsDB = [
    {
        petId: lastPetId,
        name: 'Doggy',
        type: 'Dog'
    }
]

export function createPetService(pet) {
    lastPetId++
    petsDB.push({
        ...pet,
        petId: lastPetId
    })
    return pet
}

export function getPetsService() {
    return petsDB
}

export function getPetByIdService(petId) {
    // Search for pet using its petId
    const filteredPets = petsDB.filter((pet) => {
        return pet.petId == petId
    })
    if (filteredPets.length == 0) {
        return null
    }
    
    return filteredPets[0]
}