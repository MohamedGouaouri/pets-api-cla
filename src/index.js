import express from 'express'
import mongoose from 'mongoose'
import usersRouter from './routes/users-router.js'
import petsRouter from './routes/pets-router.js'
import swaggerUiExpress from 'swagger-ui-express'
import swaggerDocs from '../docs/swagger-output.json' assert {type: "json"}
const app =  express()

app.use(express.json())

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs))
mongoose
  .connect("mongodb://localhost/dev")
  .then(async () => {
    console.log("Connected to MongoDB");
  })
  .catch(async err => {
    console.log(err);
    await mongoose.disconnect()
  });



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