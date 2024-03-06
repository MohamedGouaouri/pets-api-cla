
import mongoose from 'mongoose'
/**
 * Steps to define a model are
 *  1) Create a the schema
 *  2) Create the model
 */

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    sex: String
})

const userModel = mongoose.model('User', userSchema)

export default userModel