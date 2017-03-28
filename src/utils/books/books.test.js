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

  test("search", callback => {
    search({
      queryKey: 'asset_manager_ids',
      queryValue: [269]
    }, (error, result) => {
      console.log(result)
      expect(Array.isArray(result)).toBeTruthy()
      callback(error)
    })
  })
})
