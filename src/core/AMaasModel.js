class AMaaSModel {
  constructor(coreData) {
    // Object.assign(this, {
    //   createdBy: 'TEMP',
    //   updatedBy: 'TEMP'
    // }, coreData)
    this.createdBy = coreData.createdBy
    this.updatedBy = coreData.updatedBy
  }
}

export default AMaaSModel
