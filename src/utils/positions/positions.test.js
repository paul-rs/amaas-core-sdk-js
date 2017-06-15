import { retrieve, search } from './positions.js'
import Position from '../../transactions/Positions/position.js'
import * as api from '../../exports/api'

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000
api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('utils/positions', () => {
  describe('retrieve', () => {
    it('retrieves', done => {
      retrieve({ AMId: 1 })
        .then(res => {
          expect(res[0]).toBeDefined()
          done()
        })
        .catch(err => console.error(err))
    })
  })

  describe('search', () => {
    test('with callback', callback => {
      search({
        AMId: 1,
        query: { bookIds: ['GRGWGA'] }
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
        query: { bookIds: ['GRGWGA'] }
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

    it('should search', async done => {
      const query = {
        assetManagerIds: [1]
      }
      let res = await search({ query })
      if (res.length === 0) {
        console.error('search: Result is empty, force fail on timeout.')
        return
      }
      res = res[0]
      expect(res.assetManagerId).toEqual(1)
      done()
    })
  })
})
