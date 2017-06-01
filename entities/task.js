const Project = require('./project')

class Task extends Project {
  constructor () {
    super()
    this._id = ''
    this.name = ''
  }
}

module.exports = Task
