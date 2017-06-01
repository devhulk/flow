class Action {

  static statusComplete(target,status) {
  let statusProxy = new Proxy(target, {})

  statusProxy.status = status

  }

  static getPrevious(target, previous) {
    let prevProx = new Proxy(target, {})

    return prevProx.previousAction

  }

  static getNext(target, next) {
    let nextProx = new Proxy(target, {})

    return nextProx.nextAction
  }

}


module.exports = Action
