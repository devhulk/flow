const mongoose = require('mongoose')
const Node = require('./node')
let node = new Node 
let Schema = mongoose.Schema

let nodeSchema =  new Schema({}, {strict : false})
let model  = mongoose.model('Node',nodeSchema)

module.exports = ('dbmodel' , model)
