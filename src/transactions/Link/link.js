import { AMaaSModel } from '../../core'

class Link extends AMaaSModel {
  constructor({ linkedTransactionId, active, version=1 }) {
    const superOptions = Object.assign({}, {
      version
    })
    super(superOptions)
    this.linkedTransactionId = linkedTransactionId
    this.active = active
  }

  set active(newActive) {
    switch (newActive) {
      case false:
        this._active = false
        break
      case undefined:
        this._active = true
        break
      default:
        this._active = newActive
    }
  }

  get active() {
    return this._active
  }
}

export default Link
