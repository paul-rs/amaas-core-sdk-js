class AMaaSModel {
  constructor(coreData) {
    /**
     * Constructs new AMaaSModel object
     * @param {object} coreData: creation options
     * @param {string} coreData.createdBy: Who created the object (auto set)
     * @param {string} coreData.updatedBy: Who last updated the object (auto set)
     * @param {date} coreData.createdTime: When it was created (from database)
     * @param {date} coreData.updatedTime: When it was last updated (from database)
     * @param {string} coreData.internalId: Internal ID of the object (from database)
   */
    Object.assign(this, {
      createdBy: 'TEMP',
      updatedBy: 'TEMP'
    }, coreData)
  }
}

export default AMaaSModel
