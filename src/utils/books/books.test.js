import { retrieve, search } from './books'
import Book from '../../books/Book/book'

describe('utils/books', () => {
  test.skip("retrieve", callback => {
    retrieve({
      AMId: 1,
      token: 'testToken'
    }, (error, result) => {
      expect(Array.isArray(result)).toBeTruthy()
      expect(result[0]).toBeInstanceOf(Book)
      callback(error)
    })
  })
})
