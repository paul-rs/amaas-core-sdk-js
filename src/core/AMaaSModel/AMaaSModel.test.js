import AMaaSModel from './AMaaSModel.js'

describe('AMaaSModel class', () => {
  describe('constructor', () => {
    it('should return createdBy "TEMP" if none assigned', () => {
      const model = new AMaaSModel({})
      expect(model.createdBy).toEqual('TEMP')
    })
    it('should return updatedBy "TEMP" if none assigned', () => {
      const model = new AMaaSModel({})
      expect(model.updatedBy).toEqual('TEMP')
    })
  })
})
