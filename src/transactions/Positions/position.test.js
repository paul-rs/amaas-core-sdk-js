import Decimal from 'decimal.js'
import Position from './position.js'

describe('Position class', () => {
  it('should set quantity as a Decimal', () => {
    const testPos = new Position({ quantity: 5.66753 })
    expect(testPos.quantity).toBeInstanceOf(Decimal)
    expect(testPos.quantity).toEqual(new Decimal(5.66753))
  })
})
