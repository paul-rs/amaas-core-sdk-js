import Link from './link.js'

describe('Link', () => {
  describe('constructor', () => {
    it('should set active to false if assigned false', () => {
      const testLink = new Link({ active: false })
      expect(testLink.active).toEqual(false)
    })
    it('should set active to true if undefined', () => {
      const testLink = new Link({})
      expect(testLink.active).toEqual(true)
    })
    it('should otherwise set active correctly', () => {
      const testLink = new Link({ active: true })
      expect(testLink.active).toEqual(true)
    })
  })
})
