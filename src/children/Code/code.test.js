import Code from './'

describe('Code class', () => {
  describe('constructor', () => {
    it('should set active to false if given false', () => {
      const testCode = new Code({ active: false })
      expect(testCode.active).toBeFalsy()
    })

    it('should set active to true if given true', () => {
      const testCode = new Code({ active: true })
      expect(testCode.active).toBeTruthy()
    })

    it('should set active to false if not given', () => {
      const testCode = new Code({})
      expect(testCode.active).toBeTruthy()
    })
  })
})
