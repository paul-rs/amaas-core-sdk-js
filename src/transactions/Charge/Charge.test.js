import Charge from './Charge.js'
const Decimal  = require('decimal.js')

describe('Charge', () => {
  describe('constructor', () => {
    const coreData = {}
    let data = {
      chargeValue: 10
    }
    it('this.active should return true if it was not assigned', () => {
      const testCharge = new Charge({})
      expect(testCharge.active).toBeTruthy()
    })
    it('this.active should return false if it was assigned false', () => {
      data.active = false
      const testCharge = new Charge(data)
      expect(testCharge.active).toBeFalsy()
    })
    it('this.netAffecting should return false if it was assigned false', () => {
      data.netAffecting = false
      const testCharge = new Charge(data)
      expect(testCharge.netAffecting).toEqual(false)
    })
    it('this.netAffecting should return true if it was not assigned', () => {
      const testCharge = new Charge({}, null, {})
      expect(testCharge.netAffecting).toBeTruthy()
    })
  })

  describe('chargeValue getter/setter', () => {
    it('should cast chargeValue to a Decimal instance', () => {
      const chargeValue = 10
      const testCharge = new Charge({}, null, {})
      testCharge.chargeValue = chargeValue
      expect(testCharge.chargeValue).toBeInstanceOf(Decimal)
    })
  })
})
