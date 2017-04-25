import uuid from 'uuid'

import { retrieve, search, insert, amend, retire, reactivate } from './books'
import Book from '../../books/Book/book'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000

let token = process.env.API_TOKEN

import * as api from '../../exports/api'

api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('utils/books', () => {
  describe('retrieve', () => {
    test('with callback', callback => {
      retrieve({token, AMId: 1}, (error, books) => {
        expect(Array.isArray(books)).toBeTruthy()
        expect(books[0]).toBeInstanceOf(Book)
        callback(error)
      })
    })

    test('with promise', callback => {
      let promise = retrieve({token, AMId: 1})
      expect(promise).toBeInstanceOf(Promise)
      promise.then(books => {
        expect(Array.isArray(books)).toBeTruthy()
        expect(books[0]).toBeInstanceOf(Book)
        callback()
      })
    })

    it.only('should retrieve', done => {
      const params = {
        AMId: 1
      }
      retrieve(params)
        .then(res => {
          console.log(res[0])
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
      insert({ book: data, AMId: 1, token })
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
      retrieve({ AMId: 1, resourceId: 'L9O3IWHCHP', token })
        .then(res => {
          if (res.bookStatus === 'Active') {
            return retire({ AMId: res.assetManagerId, resourceId: res.bookId, token })
          }
          return Promise.resolve(res)
        })
        .then(res => {
          expect(res.bookStatus).toEqual('Retired')
          return reactivate({ AMId: res.assetManagerId, resourceId: res.bookId, token })
        })
        .then(res => {
          expect(res.bookStatus).toEqual('Active')
          return retire(({ AMId: res.assetManagerId, resourceId: res.bookId, token }))
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
      retrieve({ AMId: 1, resourceId: 'L9O3IWHCHP', token })
        .then(res => {
          if (res.bookStatus === 'Retired') {
            return reactivate({ AMId: res.assetManagerId, resourceId: res.bookId, token })
          } else {
            return Promise.resolve(res)
          }
        })
        .then(res => {
          res.businessUnit = bU
          return amend({ book: res, AMId: res.assetManagerId, resourceId: res.bookId, token })
        })
        .then(res => {
          expect(res.businessUnit).toEqual(bU)
          done()
        })
        .catch(err => {
          console.error(err)
          expect(err).toBeUndefined()
          done()
        })
    })
  })

  describe('search', () => {
    test('with callback', callback => {
      search({
        token,
        queryKey: 'asset_manager_ids',
        queryValue: [269]
      }, (error, books) => {
        expect(Array.isArray(books)).toBeTruthy()
        callback(error)
      })
    })

    test('with promise', callback => {
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
})
