import uuid from 'uuid'
import { retrieve, search, insert, amend, retire, reactivate } from './books'
import Book from '../../books/Book/book'
import * as api from '../../exports/api'
import { getToken } from '../network'

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('utils/books', () => {
  describe('retrieve', () => {
    test('with callback', callback => {
      retrieve({AMId: 1}, (error, books) => {
        expect(Array.isArray(books)).toBeTruthy()
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
          console.error(err)
        })
    })
  })

  describe('retire/reactivate', () => {
    test('should retire and reactivate', async done => {
      let res = await retrieve({ AMId: 1 })
      if (res.length === 0) {
        console.error('retire/reactivate: Results is empty, force fail after timeout.')
        return
      }
      res = res.filter(book => book.assetManagerId !== 0)
      res = res[0]
      if (res.bookStatus === 'Active') {
        res = await retire({ AMId: res.assetManagerId, resourceId: res.bookId })
        expect(res.bookStatus).toEqual('Retired')
      }
      res = await reactivate({ AMId: res.assetManagerId, resourceId: res.bookId })
      expect(res.bookStatus).toEqual('Active')
      done()
    })
  })

  describe('amend', () => {
    test('amends', async done => {
      const bU = uuid().substring(0, 10)
      let res = await retrieve({ AMId: 1 })
      if (res.length === 0) {
        console.error('amend: Results is empty, force fail after timeout')
        return
      }
      res = res.filter(book => book.assetManagerId !== 0)
      res = res[0]
      if (res.bookStatus === 'Retired') {
        res = await reactivate({ AMId: res.assetManagerId, resourceId: res.bookId })
      }
      res.businessUnit = bU
      res = await amend({ book: res, AMId: res.assetManagerId, resourceId: res.bookId })
      expect(res.businessUnit).toEqual(bU)
      done()
    })
  })

  describe('search', () => {
    test('with callback', callback => {
      search({
        AMId: 269,
        query: { bookIds: ['35QIZ0'] }
      }, (error, books) => {
        expect(Array.isArray(books)).toBeTruthy()
        callback(error)
      })
    })

    test('with promise', callback => {
      let promise = search({
        AMId: 269,
        query: { bookIds: ['35QIZ0'] }
      })
      expect(promise).toBeInstanceOf(Promise)
      promise.then(books => {
        expect(Array.isArray(books)).toBeTruthy()
        callback()
      })
    })
    it('searches', async done => {
      let res = await search({
        query: { assetManagerIds: [269],
          bookIds: ['35QIZ0']
        }
      })
      if (res.length === 0) {
        console.error('searches: Results is empty, force fail after timeout.')
        return
      }
      res = res.filter(book => book.assetManagerId !== 0)
      res = res[0]
      expect(res.assetManagerId).toEqual(269)
      expect(res.bookId).toEqual('35QIZ0')
      done()
    })
  })
})
