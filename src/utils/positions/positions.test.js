import { search } from './positions.js'
import Position from '../../transactions/Positions/position.js'

describe('Position search API', () => {
  it.skip('should return an array of Position objects', callback => {
    search({queryKey: 'asset_manager_book_id', queryValue: [7], token: 'testToken'}, (error, result) => {
      expect(Array.isArray(result)).toBeTruthy()
      expect(result[0]).toBeInstanceOf(Position)
      callback(error)
    })
  })
})
