class AMaaSModel {
  constructor({ createdBy='TEMP', updatedBy='TEMP', createdTime, updatedTime, internalId }) {
    /**
     * Constructs new AMaaSModel object
     * @param {object} coreData: creation options
     * @param {string} coreData.createdBy: Who created the object (auto set)
     * @param {string} coreData.updatedBy: Who last updated the object (auto set)
     * @param {date} coreData.createdTime: When it was created (from database)
     * @param {date} coreData.updatedTime: When it was last updated (from database)
     * @param {string} coreData.internalId: Internal ID of the object (from database)
   */
   this.createdBy = createdBy
   this.updatedBy = updatedBy
   this.createdTime = createdTime
   this.updatedTime = updatedTime
  }
}

export default AMaaSModel
