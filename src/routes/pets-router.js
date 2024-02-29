import express from 'express'
import { createPetController, getPetByIdController, getPetsController } from '../controllers/pets-controller.js'

const petsRouter = express.Router()

petsRouter.post('/create', (req, res) => {
    const petData = req.body;
    const pet = createPetController(petData)
    res.status(201).json(pet)
})

petsRouter.get('/', (req, res) => {
    const pets = getPetsController()
    res.json(pets)
})

petsRouter.get('/:petId', (req, res) => {
    const petId = parseInt(req.params.petId) // "123" --> 123
    const pet = getPetByIdController(petId)
    if (pet) {
        return res.json(pet)
    }
    res.status(404).json({
        error: 'Pet not found'
    })
})

export default petsRouter