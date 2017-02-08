/**
 * Class representing a AMaaSModel.
 * This is the Base Class for almost every other class
 */
class AMaaSModel {
  /**
   * Construct new AMaaSModel object
   * @param {object} params - AMaaSModelparams. creation options
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new AMaaSModel)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing AMaaSModel)
   * @param {date} params.createdTime - Time that the AMaaSModel was created (required if creating new AMaaSModel)
   * @param {date} params.updatedTime - Time that the AMaaSModel was updated (required if amending existing AMaaSModel)
   * @param {number} params.version - Version number of the AMaaSModel
 */
  constructor({ createdBy='TEMP', updatedBy='TEMP', createdTime, updatedTime, version }={ createdBy: 'TEMP', updatedBy: 'TEMP' }) {
   this.createdBy = createdBy
   this.updatedBy = updatedBy
   this.createdTime = createdTime
   this.updatedTime = updatedTime
   this.version = version || 1
  }
}

export default AMaaSModel
