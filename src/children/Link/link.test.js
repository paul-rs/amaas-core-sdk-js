import Link from './'

describe('Link class', () => {
  describe('constructor', () => {
    it('should set active to false if given false', () => {
      const testLink = new Link({ active: false })
      expect(testLink.active).toBeFalsy()
    })

    it('should set active to true if given true', () => {
      const testLink = new Link({ active: true })
      expect(testLink.active).toBeTruthy()
    })

    it('should set active to true if not given', () => {
      const testLink = new Link({})
      expect(testLink.active).toBeTruthy()
    })
  })
})
