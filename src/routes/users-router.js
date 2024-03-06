import express from 'express'
import { createUserController, getUserByIdController, getUsersController } from '../controllers/users-controller.js'

const usersRouter = express.Router()

usersRouter.post('/create', (req, res) => {
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
    const user = createUserController(userData)

    res.json(user)
})

usersRouter.get('/', (req, res) => {

    // #swagger.tags = ["User"]
    // #swagger.description = "Get all users"


    const users = getUsersController()
    res.json(users)
})

usersRouter.get('/:userId', (req, res) => {
    // TODO: Implement get user by a id
    const userId = parseInt(req.params.userId)
    const user  = getUserByIdController(userId)
    if (user) {
        return res.json(user)
    }
    res.status(404).json({
        errror: 'User not found',
    })
})

usersRouter.put('/:userId/own/:petId', (req, res) => {
    // TODO: Make the user an owner of a pet
})

export default usersRouter