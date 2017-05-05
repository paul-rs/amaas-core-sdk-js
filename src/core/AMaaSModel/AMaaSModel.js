/**
 * Class representing a AMaaSModel.
 * This is the base class for almost every other class.
 * @memberof module:core
 */
class AMaaSModel {
  /**
   * Construct new AMaaSModel object
   * @param {object} params - AMaaSModel creation options:
   * @param {string} [params.createdBy] - ID of the user that created the AMaaSModel
   * @param {string} [params.updatedBy] - ID of the user that updated the AMaaSModel
   * @param {date} [params.createdTime] - Time that the AMaaSModel was created
   * @param {date} [params.updatedTime] - Time that the AMaaSModel was updated
   * @param {number} [params.version] - Version number of the AMaaSModel
 */
  constructor({
    createdBy='TEMP',
    updatedBy='TEMP',
    createdTime,
    updatedTime,
    version=1
  }) {
   this.createdBy = createdBy
   this.updatedBy = updatedBy
   this.createdTime = createdTime
   this.updatedTime = updatedTime
   this.version = version
  }
}

export default AMaaSModel
