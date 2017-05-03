import Decimal from 'decimal.js'

import Future from './future'

describe('Future class', () => {
  describe('constructor', () => {
    it('should throw if attempting to set invalid settlmentType', () => {
      let future
      function construct() {
        future = new Future({ settlementType: 'notAType' })
      }
      expect(construct).toThrowError(new Error('Invalid Settlement Type: notAType'))
    })

    it('should set tickSize to a Decimal', () => {
      const future = new Future({})
      expect(future.tickSize).toEqual(new Decimal(0))
    })

    it('should set contractSize to a Decimal', () => {
      const future = new Future({})
      expect(future.contractSize).toEqual(new Decimal(0))
    })

    it('should set expiryDate to a Date', () => {
      const expectedDate = new Date(2017, 2, 14)
      const future = new Future({ expiryDate: '2017-3-14' })
      expect(future.expiryDate).toEqual(expectedDate)
    })
  })

  describe('class methods', () => {
    it('getTickValue should return tickSize * contractSize', () => {
      const future = new Future({ tickSize: 5, contractSize: 10 })
      expect(future.getTickValue()).toEqual(new Decimal(50))
    })
  })
})
