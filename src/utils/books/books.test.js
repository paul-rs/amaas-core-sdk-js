import uuid from 'uuid'

import { retrieve, search, insert, amend, retire, reactivate } from './books'
import Book from '../../books/Book/book'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000

let token = process.env.API_TOKEN

import * as api from '../../exports/api'

api.config({
  credentialsPath: '/Users/thomaschia/authFile.js'
})

describe('utils/books', () => {
  describe('retrieve', () => {
    test('with callback', callback => {
      retrieve({AMId: 1}, (error, books) => {
        expect(Array.isArray(books)).toBeTruthy()
        expect(books[0]).toBeInstanceOf(Book)
        callback(error)
      })
    })

    test('with promise', callback => {
      let promise = retrieve({AMId: 1})
      expect(promise).toBeInstanceOf(Promise)
      promise.then(books => {
        expect(Array.isArray(books)).toBeTruthy()
        expect(books[0]).toBeInstanceOf(Book)
        callback()
      })
    })

    it('should retrieve', done => {
      const params = {
        AMId: 1
      }
      retrieve(params)
        .then(res => {
          if (Array.isArray(res) && res.length > 0) {
            expect(res[0]).toBeDefined()
            expect(res[0].assetManagerId).toEqual(1)
          } else if (!Array.isArray(res)) {
            expect(res.assetManagerId).toEqual(1)
          }
          done()
        })
        .catch(err => console.error(err))
    })
  })

  describe('insert', () => {
    test.skip('should insert', () => {
      const data = {
        description: "RRN4WVXI1F3YA1IGMKZF",
        bookType: "Trading",
        businessUnit: null,
        partyId: "A1UNKOYGGR",
        closeTime: "18:00:00",
        timezone: "Asia/Tokyo",
        assetManagerId: 1,
        ownerId: "50SJMSPK7A",
        baseCurrency: "USD",
      }
      insert({ book: data, AMId: 1 })
        .then(res => {
          expect(res).toEqual(expect.objectContaining(data))
        })
        .catch(err => {
          console.log(err)
          expect(err).toBeUndefined()
        })
    })
  })

  describe('retire/reactivate', () => {
    test('should retire and reactivate', done => {
      retrieve({ AMId: 1, resourceId: 'L9O3IWHCHP' })
        .then(res => {
          if (res.bookStatus === 'Active') {
            return retire({ AMId: res.assetManagerId, resourceId: res.bookId })
          }
          return Promise.resolve(res)
        })
        .then(res => {
          expect(res.bookStatus).toEqual('Retired')
          return reactivate({ AMId: res.assetManagerId, resourceId: res.bookId })
        })
        .then(res => {
          expect(res.bookStatus).toEqual('Active')
          return retire(({ AMId: res.assetManagerId, resourceId: res.bookId }))
        })
        .then(res => {
          expect(res.bookStatus).toEqual('Retired')
          done()
        })
        .catch(err => {
          console.log(err.message)
          expect(err).toBeUndefined()
          done()
        })
    })
  })

  describe('amend', () => {
    test('amends', done => {
      const bU = uuid().substring(0, 10)
      retrieve({ AMId: 1, resourceId: 'L9O3IWHCHP' })
        .then(res => {
          if (res.bookStatus === 'Retired') {
            return reactivate({ AMId: res.assetManagerId, resourceId: res.bookId })
          } else {
            return Promise.resolve(res)
          }
        })
        .then(res => {
          console.log(res)
          res.businessUnit = bU
          return amend({ book: res, AMId: res.assetManagerId, resourceId: res.bookId })
        })
        .then(res => {
          expect(res.businessUnit).toEqual(bU)
          done()
        })
        .catch(err => {
          console.error(err)
        })
    })
  })

  describe('search', () => {
    test('with callback', callback => {
      search({
        AMId: 269,
        query: [{ key: 'book_ids', values: ['35QIZ0'] }]
      }, (error, books) => {
        expect(Array.isArray(books)).toBeTruthy()
        callback(error)
      })
    })

    test('with promise', callback => {
      let promise = search({
        AMId: 269,
        query: [{ key: 'book_ids', values: ['35QIZ0'] }]
      })
      expect(promise).toBeInstanceOf(Promise)
      promise.then(books => {
        expect(Array.isArray(books)).toBeTruthy()
        callback()
      })
    })
  })
})
