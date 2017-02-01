import { AMaaSModel } from '../../core'

class Email extends AMaaSModel {
  constructor({ emailPrimary, email, active }, args, coreData) {
    super(coreData, args)
    this.emailPrimary = emailPrimary
    this.email = email
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

export default Email
