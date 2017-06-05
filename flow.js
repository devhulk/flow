const Action = require('./action')
class Flow {

  static statusComplete(target,status) {
  let statusProxy = new Proxy(target, {}) 
    //the second console is not logging
    return statusProxy.status = 'complete'
  }

  

  static getPrevious(target, previous) {
    let prevProx = new Proxy(target, {})

    return prevProx.previousNode

  }

  static getNext(target, next) {
    let nextProx = new Proxy(target, {})

    return nextProx.nextNode
  }

}


module.exports = Flow
