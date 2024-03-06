
import mongoose from 'mongoose'
/**
 * Steps to define a model are
 *  1) Create a the schema
 *  2) Create the model
 */

const petSchema = mongoose.Schema({
    name: String,
    type: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const petModel = mongoose.model('Pet', petSchema)

export default petModel