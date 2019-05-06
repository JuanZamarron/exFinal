const mongoose = require('mongoose')
const  config = require('../config')

var connectionURL = config.connectionURL
//mongodb+srv://juan:prueba1@cluster0-u1b4f.mongodb.net/clase?retryWrites=true
//admin:taquitos@cluster0-xg9bk
//juan:prueba1
// mongo "mongodb+srv://juan:prueba1@cluster0-u1b4f.mongodb.net/test"

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
