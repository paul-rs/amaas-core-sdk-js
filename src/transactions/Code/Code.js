import { AMaaSModel } from '../../core'

class Code extends AMaaSModel {
  constructor(data, coreData) {
    super(coreData)
    Object.assign(this, data)
    this.active = this.active === false ? false : true
    this.version = this.version || 1
  }
}

export default Code
