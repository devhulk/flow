//Use Proxy and Reflect API as a handler for our action functions
const Flow = require('./flow')
const Node = require('./node')
const fs = require('fs')
const _ = require('lodash')

let messages
 fs.readFile('./data/messages.json','utf8',(err,data) => {
  if (err) {console.error}
  //console.log(data)
  messages = data
   getNodes()
})

let getNodes = () => {
  //console.log(messages)
  let nodes  = JSON.parse(messages)
  nodes.forEach((action) => 
    {
      let newAction = _.assignIn(new Node, action)  
      //console.log(newAction.name)
      if (newAction.nextNode  === 'status complete'){
        Flow.statusComplete(newAction, newAction.status)
        console.log(newAction)

      }
    })

}

//  let task = new Node;
//  console.log(task.status)
//  Flow.statusComplete(task, 'complete')
//  console.log(task.status)


