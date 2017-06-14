//Use Proxy and Reflect API as a handler for our node functions
const Flow = require('./flow')
const Register = require('./register')
const fs = require('fs')
const _ = require('lodash')

let messages
 fs.readFile('./data/messages.json','utf8',(err,data) => {
  if (err) {console.error}
  //console.log(data)
  messages = data
   getNodes()
  //let reg = new Register
 })
let getNodes = () => {
  //console.log(messages)
  let nodes  = JSON.parse(messages)
  nodes.forEach((node) => {
      //let reg = new Register
      //console.log(newNode.name)
      if (node.type  === 'sms'){
        Flow.notification(node, node.type,[])
      }
       

      })
}
