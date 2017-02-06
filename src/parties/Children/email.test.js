import { Email } from './'

describe('Email', () => {
  describe('constructor', () => {
    it('should set active to true if unassigned', () => {
      const testEmail = new Email({})
      expect(testEmail.active).toEqual(true)
    })
    it('should set active to false if assigned false', () => {
      const testEmail = new Email({ active: false })
      expect(testEmail.active).toEqual(false)
    })
    it('should set active to true if assigned true', () => {
      const testEmail = new Email({ active: true })
      expect(testEmail.active).toEqual(true)
    })
  })
})
