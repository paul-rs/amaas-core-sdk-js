import Decimal from 'decimal.js'
import Position from './position.js'

describe('Position class', () => {
  describe('serialization', () => {
    it('should serialize properly', () => {
      const test = new Position({ quantity: 12, assetBookId: 'test' })
      expect(JSON.parse(JSON.stringify(test)).assetBookId).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).assetBookId).toEqual('test')
    })
  })
  describe('constructor', () => {
    it('should set quantity as a Decimal', () => {
      const testPos = new Position({ quantity: 5.66753 })
      expect(testPos.quantity).toBeInstanceOf(Decimal)
      expect(testPos.quantity).toEqual(new Decimal(5.66753))
    })
  })
})
