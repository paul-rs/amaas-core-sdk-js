import { AMaaSModel } from '../../core'

class Link extends AMaaSModel {
  constructor({
    linkedId,
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

    this.linkedId = linkedId
    this.active = active === false ? false : true
  }
}

export default Link
