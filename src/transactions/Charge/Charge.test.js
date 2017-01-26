import Charge from './Charge.js'
const Decimal  = require('decimal.js')

describe('Charge', () => {
  describe('constructor', () => {
    const coreData = {}
    let data = {};
    it('this.active should return false if it was assigned false', () => {
      data.active = false
      const testCharge = new Charge(data, coreData)
      expect(testCharge.active).toBeFalsy()
    })
    it('this.active should return true if it was not assigned', () => {
      const testCharge = new Charge()
      expect(testCharge.active).toBeTruthy()
    })
    it('this.netAffecting should return false if it was assigned false', () => {
      data.netAffecting = false
      const testCharge = new Charge(data, coreData)
      expect(testCharge.netAffecting).toBeFalsy()
    })
    it('this.netAffecting should return true if it was not assigned', () => {
      const testCharge = new Charge()
      expect(testCharge.netAffecting).toBeTruthy()
    })
    it('this.version should return 1 if not defined', () => {
      const testCharge = new Charge()
      expect(testCharge.version).toEqual(1)
    })
  })

  describe('chargeValue getter/setter', () => {
    it('should cast chargeValue to a Decimal instance', () => {
      const chargeValue = 10
      const testCharge = new Charge()
      testCharge.chargeValue = chargeValue
      expect(testCharge.chargeValue).toBeInstanceOf(Decimal)
    })
  })
})
