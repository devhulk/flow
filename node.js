const mongoose = require('mongoose')
let Schema = mongoose.Schema

let nodeSchema =  new Schema({}, {strict : false})
let model  = mongoose.model('Node',nodeSchema)

module.exports = ('dbmodel' , model)
