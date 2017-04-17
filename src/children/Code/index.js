import { AMaaSModel } from '../../core'

class Code extends AMaaSModel {
  constructor({
    codeValue,
    active,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })

    this.codeValue = codeValue
    this.active = active === false ? false : true
  }
}

export default Code
