import express from 'express'
import { createUserController, getUserByIdController, getUsersController, ownPetController } from '../controllers/users-controller.js'

const usersRouter = express.Router()

usersRouter.post('/create', async (req, res) => {
    /*  
        #swagger.tags = ["User"]
        #swagger.description = "Create user"
        #swagger.requestBody = {
            description: 'User data',
            required: true,
        }
        #swagger.responses[201] = {
            description: "User created successfully",
        }
    */

    // Get the user data from the body
    const userData = req.body
    // Call the controller
    const response = await createUserController(userData)
    if (response.status == 'success'){
        return res.status(response.httpCode).json(response)
    }
    return res.status(response.httpCode).json(response)
})

usersRouter.get('/', async (req, res) => {

    // #swagger.tags = ["User"]
    // #swagger.description = "Get all users"
    const response = await getUsersController()
    if (response.status == 'success'){
        return res.status(response.httpCode).json(response)
    }
    return res.status(response.httpCode).json(response)
})

usersRouter.get('/:userId', async (req, res) => {
    const response  = await getUserByIdController(req.params.userId)
    if (response.status == 'success'){
        return res.status(response.httpCode).json(response)
    }
    return res.status(response.httpCode).json(response)
})

usersRouter.put('/:userId/own/:petId', async (req, res) => {
    // TODO: Make the user an owner of a pet
    console.log(req.params)
    const response  = await ownPetController(req.params.userId, req.params.petId)
    if (response.status == 'success'){
        return res.status(response.httpCode).json(response)
    }
    return res.status(response.httpCode).json(response)
})

export default usersRouter