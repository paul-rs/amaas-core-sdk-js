class AMaaSModel {
  constructor({ createdBy='TEMP', updatedBy='TEMP', createdTime, updatedTime, version }={ createdBy: 'TEMP', updatedBy: 'TEMP' }) {
    /**
     * Constructs new AMaaSModel object
     * @param {object} coreData: creation options
     * @param {string} createdBy: Who created the object (auto set)
     * @param {string} updatedBy: Who last updated the object (auto set)
     * @param {date} createdTime: When it was created (from database)
     * @param {date} updatedTime: When it was last updated (from database)
     * @param {string} version: Version number of the object
   */
   this.createdBy = createdBy
   this.updatedBy = updatedBy
   this.createdTime = createdTime
   this.updatedTime = updatedTime
   this.version = version || 1
  }
}

export default AMaaSModel
