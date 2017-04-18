import Book from './book'

describe('Book', () => {
  describe('constructor', () => {
    it('should throw if attempting to set invalid book type', () => {
      let book
      function construct() {
        book = new Book({ bookType: 'notAType' })
      }
      expect(construct).toThrowError('Invalid Book Type: notAType')
    })
  })
})
