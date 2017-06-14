const Notification = require('./actions/notifiaction')

class Flow {

  static statusComplete(target,status) {
  let statusProxy = new Proxy(target, {}) 
    //the second console is not logging
    return statusProxy.status = 'complete'
  }

  static notification(target) {
    let notificationProxy = new Proxy(target, {})
    
    Notification.send(target.type,target.body,target.auth)
    
    
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
