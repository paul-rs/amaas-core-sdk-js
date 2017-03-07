import { search } from './positions.js'
import Position from '../../transactions/Positions/position.js'

describe('Position search API', () => {
  it('should return an array of Position objects', callback => {
    search('asset_manager_book_id', [7, 532, 841], (error, result) => {
      expect(Array.isArray(result)).toBeTruthy()
      expect(result[0]).toBeInstanceOf(Position)
      callback(error)
    })
  })
})
