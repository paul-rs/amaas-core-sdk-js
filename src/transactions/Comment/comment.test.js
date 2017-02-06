import Comment from './comment.js'

describe('Comment', () => {
  describe('constructor', () => {
    it('should set active to false if assigned false', () => {
      const testCom = new Comment({ active: false })
      expect(testCom.active).toEqual(false)
    })
    it('should set active to true if undefined', () => {
      const testCom = new Comment({})
      expect(testCom.active).toEqual(true)
    })
    it('should otherwise set active correctly', () => {
      const testCom = new Comment({ active: true })
      expect(testCom.active).toEqual(true)
    })
  })
})
