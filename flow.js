class Flow {

  static statusComplete(target,status) {
  let statusProxy = new Proxy(target, {})

  statusProxy.status = status

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
