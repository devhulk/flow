//Use Proxy and Reflect API as a handler for our action functions
const Action = require('./engine/action')
const WorkOrder = require('./entities/workorder')
const Project  = require('./entities/project')
const Task = require('./entities/task')


  let task = new Task;
  console.log(task.status)
  Action.statusComplete(task, 'complete')
  console.log(task.status)
