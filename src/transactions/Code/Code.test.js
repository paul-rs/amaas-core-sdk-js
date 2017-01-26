import Code from './Code.js'

describe('Code Class', () => {
  describe('constructor', () => {
    it('this.active should return false if it is assigned false', () => {
      const testCode = new Code({ active: false })
      expect(testCode.active).toBeFalsy()
    })
    it('this.active should return true if it is not assigned', () => {
      const testCode = new Code()
      expect(testCode.active).toBeTruthy()
    })
    it('this.version should return 1 if it is not assigned', () => {
      const testCode = new Code()
      expect(testCode.version).toEqual(1)
    })
    it('properties should return whatever is passed to constructor', () => {
      const testCode = new Code({ active: true, version: 5 })
      expect(testCode.active).toBeTruthy()
      expect(testCode.version).toEqual(5)
    })
  })
})
