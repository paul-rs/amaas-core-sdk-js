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

    it('should default expiryDate', () => {
      const future = new Future({})
      expect(future.expiryDate).toEqual('9999-12-31')
    })
  })

  describe('class methods', () => {
    it('getTickValue should return tickSize * contractSize', () => {
      const future = new Future({ tickSize: 5, contractSize: 10 })
      expect(future.getTickValue()).toEqual(new Decimal(50))
    })
  })
})
