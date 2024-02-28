import express from 'express'

const petsRouter = express.Router()

petsRouter.post('/create', (req, res) => {
    // TODO: Implement create a pet
})

petsRouter.get('/', (req, res) => {
    // TODO: Implement getting pets
})

petsRouter.get('/:petId', (req, res) => {
    // TODO: Implement get pet by a id
})

export default petsRouter