//Use Proxy and Reflect API as a handler for our action functions
const Flow = require('./flow')
const Node = require('./node')

  let task = new Node;
  console.log(task.status)
  Flow.statusComplete(task, 'complete')
  console.log(task.status)
