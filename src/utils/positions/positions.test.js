import { search } from './positions.js'

describe('Position search API', () => {
  it('should return an array of Position objects', () => {
    search('asset_manager_book_id', [7, 532, 841], (error, result) => {
      console.log(result[0])
    })
  })
})
