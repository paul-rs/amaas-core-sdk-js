import Reference from './Reference.js'

describe('Reference', () => {
  describe('constructor', () => {
    it('should set active to true if unassigned', () => {
      const testRef = new Reference({})
      expect(testRef.active).toEqual(true)
    })
    it('should set active to false if assigned false', () => {
      const testRef = new Reference({ active: false })
      expect(testRef.active).toEqual(false)
    })
    it('should set active to true if assigned true', () => {
      const testRef = new Reference({ active: true })
      expect(testRef.active).toEqual(true)
    })
  })
})
