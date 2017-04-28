import { retrieve, search } from './positions.js'
import Position from '../../transactions/Positions/position.js'
import * as api from '../../exports/api'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000
api.config({
  stage: 'staging'
})

describe('utils/positions', () => {
  describe('retrieve', () => {
    it.only('retrieves', done => {
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
        AMId: 1,
        query: [{ key: 'book_ids', values: ['GRGWGA']}]
      }, (error, positions) => {
        expect(Array.isArray(positions)).toBeTruthy()
        if (positions.length > 0) {
          expect(positions[0]).toBeInstanceOf(Position)
        }
        callback(error)
      })
    })

    test('with promise', callback => {
      let promise = search({
        AMId: 1,
        query: [{ key: 'book_ids', values: ['GRGWGA']}]
      })
      expect(promise).toBeInstanceOf(Promise)
      promise.then(positions => {
        expect(Array.isArray(positions)).toBeTruthy()
        if (positions.length > 0) {
          expect(positions[0]).toBeInstanceOf(Position)
        }
        callback()
      })
    })

    it('should search', done => {
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
