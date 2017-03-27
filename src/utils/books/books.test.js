import { retrieve, search } from './books'
import Book from '../../books/Book/book'

describe('utils/books', () => {
  test("retrieve", callback => {
    retrieve({
      AMId: 1
    }, (error, result) => {
      expect(Array.isArray(result)).toBeTruthy()
      expect(result[0]).toBeInstanceOf(Book)
      callback(error)
    })
  })
})
