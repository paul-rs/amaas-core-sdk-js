import { Email } from './'

describe('Email', () => {
  describe('constructor', () => {
    it('should set active to true if unassigned', () => {
      const testEmail = new Email({}, null, {})
      expect(testEmail.active).toEqual(true)
    })
    it('should set active to false if assigned false', () => {
      const testEmail = new Email({ active: false }, null, {})
      expect(testEmail.active).toEqual(false)
    })
    it('should set active to true if assigned true', () => {
      const testEmail = new Email({ active: true }, null, {})
      expect(testEmail.active).toEqual(true)
    })
  })
})
