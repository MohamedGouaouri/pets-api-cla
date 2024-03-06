import express from 'express'
import { createPetController, getPetByIdController, getPetsController } from '../controllers/pets-controller.js'

const petsRouter = express.Router()

petsRouter.post('/create', async (req, res) => {
    const petData = req.body;
    const response = await createPetController(petData)
    if (response.status == 'success'){
        return res.status(response.httpCode).json(response)
    }
    return res.status(response.httpCode).json(response)
})

petsRouter.get('/', async (req, res) => {
    const response = await getPetsController()
    if (response.status == 'success'){
        return res.status(response.httpCode).json(response)
    }
    return res.status(response.httpCode).json(response)
})

petsRouter.get('/:petId', async (req, res) => {
    const response  = await getPetByIdController(req.params.petId)
    if (response.status == 'success'){
        return res.status(response.httpCode).json(response)
    }
    return res.status(response.httpCode).json(response)
})

export default petsRouter