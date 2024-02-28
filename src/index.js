import express from 'express'
import usersRouter from './routes/users-router.js'
import petsRouter from './routes/pets-router.js'


const app =  express()

app.use(express.json())

app.get('/', (request, response) => {
    response.send('Hello from express')
})



/*
We should use our routers here
*/
// /

app.use('/users', usersRouter)
app.use('/pets', petsRouter)


app.listen(3000, () => {
    console.log('Server started on port 3000')
})