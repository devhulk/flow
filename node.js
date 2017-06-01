
class Node {
  constructor() {
    this._id = ''
    this.name = ''
    this.type = ''
    this.location = ''
    this.start = ''
    this.dueBy = ''
    this.status = 'incomplete'
    this.previousNode = ''
    this.nextNode = ''
  } 
}

module.exports = Node
