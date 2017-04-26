import { retrieve, search } from './positions.js'
import Position from '../../transactions/Positions/position.js'
import { api } from '../../'

api.config({
  stage: 'staging',
  apiKey: process.env.API_TOKEN
})

let token = process.env.API_TOKEN

jasmine.DEFAULT_TIMEOUT_INTERVAL = 40000

describe('utils/positions', () => {
  describe('retrieve', () => {
    it('retrieves', done => {
      retrieve({ AMId: 1 })
        .then(res => {
          console.log(res[0])
          done()
        })
        .catch(err => console.error(err))
    })
  })

  describe('search', () => {
    test('with callback', callback => {
      search({
        token,
        queryKey: 'asset_manager_ids',
        queryValue: [269]
      }, (error, positions) => {
        expect(Array.isArray(positions)).toBeTruthy()
        expect(positions[0]).toBeInstanceOf(Position)
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
      promise.then(positions => {
        expect(Array.isArray(positions)).toBeTruthy()
        expect(positions[0]).toBeInstanceOf(Position)
        callback()
      })
    })

    it.only('should search', done => {
      const query = [
        { key: 'book_ids', values: ['BY1BABL8ZX'] }
      ]
      search({ query })
        .then(res => {
          if (Array.isArray(res)) {
            for (let i = 0; i < res.length; i++) {
              expect(res[i].bookId).toEqual('BY1BABL8ZX')
            }
          } else {
            expect(res.bookId).toEqual('BY1BABL8ZX')
          }
          done()
        })
        .catch(err => console.error(err))
    })
  })
})
