import { BondBase } from '../'

import Decimal from 'decimal.js'

describe('BondBase', () => {
  describe('constructor', () => {
    describe('coupon get/setter', () => {
      it('should set coupon to 0 if assigned 0', () => {
        const bond = new BondBase({ coupon: 0 }, null, {})
        expect(bond.coupon).toEqual(new Decimal(0))
      })
      it('should leave coupon undefined if not set', () => {
        const bond = new BondBase({}, null, {})
        expect(bond.coupon).toBeUndefined()
      })
      it('should set coupon correctly', () => {
        const bond = new BondBase({ coupon: 0.5 }, null, {})
        expect(bond.coupon).toEqual(new Decimal(0.5))
      })
    })
    describe('par get/setter', () => {
      it('should set par to 0 if assigned 0', () => {
        const bond = new BondBase({ par: 0 }, null, {})
        expect(bond.par).toEqual(new Decimal(0))
      })
      it('should leave par undefined if not set', () => {
        const bond = new BondBase({}, null, {})
        expect(bond.par).toBeUndefined()
      })
      it('should set par correctly', () => {
        const bond = new BondBase({ par: 0.62 }, null, {})
        expect(bond.par).toEqual(new Decimal(0.62))
      })
    })
    describe('defaulted get/setter', () => {
      const bond = new BondBase({}, null, {})
      it('should leave defaulted as undefined if no assignment', () => {
        expect(bond.defaulted).toBeUndefined()
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
