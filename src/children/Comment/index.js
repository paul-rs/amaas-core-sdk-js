import { AMaaSModel } from '../../core'

class Comment extends AMaaSModel {
  constructor({
    commentValue,
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

    this.commentValue = commentValue
    this.active = active === false ? false : true
  }
}

export default Comment
