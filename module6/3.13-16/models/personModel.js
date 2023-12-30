const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
  id:Number,
  name: String,
  number: String,
},{ collection : 'peoples' })

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Person', personSchema)