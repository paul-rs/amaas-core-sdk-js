import BondBase from './bond.js'

import Decimal from 'decimal.js'

describe('BondBase', () => {
  describe('stringify', () => {
    it('should stringify and parse correctly', () => {
      const bond = new BondBase({ clientId: 'testId', par: 1.2 })
      expect(JSON.parse(JSON.stringify(bond)).clientId).toEqual('testId')
    })
  })
  describe('constructor', () => {
    describe('coupon get/setter', () => {
      it('should set coupon to 0 if assigned 0', () => {
        const bond = new BondBase({ coupon: 0 })
        expect(bond.coupon).toEqual(new Decimal(0))
      })
      it('should set coupon to 0 if not set', () => {
        const bond = new BondBase({})
        expect(bond.coupon).toEqual(new Decimal(0))
      })
      it('should set coupon correctly', () => {
        const bond = new BondBase({ coupon: 0.5 })
        expect(bond.coupon).toEqual(new Decimal(0.5))
      })
    })
    describe('par get/setter', () => {
      it('should set par to 0 if assigned 0', () => {
        const bond = new BondBase({ par: 0 })
        expect(bond.par).toEqual(new Decimal(0))
      })
      it('should set par to 0 if not set', () => {
        const bond = new BondBase({})
        expect(bond.par).toEqual(new Decimal(0))
      })
      it('should set par correctly', () => {
        const bond = new BondBase({ par: 0.62 })
        expect(bond.par).toEqual(new Decimal(0.62))
      })
    })
    describe('defaulted get/setter', () => {
      const bond = new BondBase({})
      it('should set defaulted to false if no assignment', () => {
        expect(bond.defaulted).toBeFalsy()
      })
      it('should set defaulted as false if assigned false', () => {
        bond.defaulted = false
        expect(bond.defaulted).toEqual(false)
      })
      it('should set defaulted to true if assigned true', () => {
        bond.defaulted = true
        expect(bond.defaulted).toEqual(true)
      })
    })
  })
})
