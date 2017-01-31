import Code from './Code.js'

describe('Code Class', () => {
  describe('constructor', () => {
    it('this.active should return false if it is assigned false', () => {
      const testCode = new Code({ active: false }, null, {})
      expect(testCode.active).toBeFalsy()
    })
    it('this.active should return true if it is not assigned', () => {
      const testCode = new Code({}, null, {})
      expect(testCode.active).toBeTruthy()
    })
    it('properties should return whatever is passed to constructor', () => {
      const testCode = new Code({ active: true, codeValue: 'testValue' }, null, {})
      expect(testCode.active).toEqual(true)
      expect(testCode.codeValue).toEqual('testValue')
    })
  })
})
