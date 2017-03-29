import { retrieve, search } from './books'
import Book from '../../books/Book/book'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

let token = process.env.API_TOKEN

describe('utils/books', () => {
  test("retrieve with callback", callback => {
    retrieve({token, AMId: 1}, (error, books) => {
      expect(Array.isArray(books)).toBeTruthy()
      expect(books[0]).toBeInstanceOf(Book)
      callback(error)
    })
  })

  test("retrieve with promise", callback => {
    let promise = retrieve({token, AMId: 1})
    expect(promise).toBeInstanceOf(Promise)
    promise.then(books => {
      expect(Array.isArray(books)).toBeTruthy()
      expect(books[0]).toBeInstanceOf(Book)
      callback()
    })
  })

  test("search with callback", callback => {
    search({
      token,
      queryKey: 'asset_manager_ids',
      queryValue: [269]
    }, (error, books) => {
      expect(Array.isArray(books)).toBeTruthy()
      callback(error)
    })
  })

  test("search with promise", callback => {
    let promise = search({
      token,
      queryKey: 'asset_manager_ids',
      queryValue: [269]
    })
    expect(promise).toBeInstanceOf(Promise)
    promise.then(books => {
      expect(Array.isArray(books)).toBeTruthy()
      callback()
    })
  })
})
