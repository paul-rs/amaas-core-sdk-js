import { AMaaSModel } from '../../core'

class Code extends AMaaSModel {
  constructor({ codeValue, active }, args, coreData) {
    super(coreData)
    this.codeValue = codeValue
    this.active = active
  }

  set active(newActive) {
    this._active = newActive === false ? false : true
  }

  get active() {
    return this._active
  }
}

export default Code
