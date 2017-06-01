

class Project {
  constructor () {
    this._id = ''
    this.location = ''
    this.category = ''
    this.startDate = ''
    this.dueDate = ''
    this.status = 'incomplete'
    this.previousAction
    this.nextAction
  }
}

module.exports = Project
