import Comment from './'

describe('Comment class', () => {
  describe('constructor', () => {
    it('should set active to false if given false', () => {
      const testComment = new Comment({ active: false })
      expect(testComment.active).toBeFalsy()
    })

    it('should set active to true if given true', () => {
      const testComment = new Comment({ active: true })
      expect(testComment.active).toBeTruthy()
    })

    it('should set active to true if not given', () => {
      const testComment = new Comment({})
      expect(testComment.active).toBeTruthy()
    })
  })
})
