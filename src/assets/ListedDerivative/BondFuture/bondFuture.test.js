import { Decimal } from 'decimal.js'

import BondFuture from './bondFuture'

describe('BondFuture class', () => {
  describe('constructor', () => {
    it('should set underlyingBondCoupon to a Decimal', () => {
      const bondFuture = new BondFuture({})
      expect(bondFuture.underlyingBondCoupon).toEqual(new Decimal(0))
    })
  })

  describe('class methods', () => {
    it('getUnderlyingAssetId should return this.cheapestToDeliverId', () => {
      const bondFuture = new BondFuture({ cheapestToDeliverId: 'testId' })
      expect(bondFuture.getUnderlyingAssetId()).toEqual('testId')
    })
  })
})
