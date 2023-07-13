const mongoose = require('mongoose')

const url = 'mongodb+srv://amaan25:16vgniGaWGuJg5Ky@cluster0.gpiffvp.mongodb.net/?retryWrites=true&w=majority';

console.log('connecting to', url)
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const country = new mongoose.Schema({
    name: String,
    currency: String,
    code: String,
    
    yearData: [{
        year: Number,
        data: [{
            date: Number,
            month: Number,
            rate: Number
        }]
    }]
})

country.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Country', country)