
const Project = require('./project')

class WorkOrder extends Project {
  constructor () {
    super()
    this._id = ''
    this.assignee = ''
    this.parent = true
    this.childId = ''
  }

}
