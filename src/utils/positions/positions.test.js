import { search } from './positions.js'
import Position from '../../transactions/Positions/position.js'

let token = process.env.API_TOKEN

describe('utils/positions', () => {
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
  })
})
