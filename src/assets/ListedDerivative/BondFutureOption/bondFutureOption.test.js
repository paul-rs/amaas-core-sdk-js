import { Decimal } from 'decimal.js'

import BondFutureOption from './bondFutureOption'

describe('BondFutureOption', () => {
  describe('constructor', () => {
    it('should catch attempts to write invalid option type', () => {
      let bondFOption
      function construct() {
        bondFOption = new BondFutureOption({ optionType: 'notAType', optionStyle: 'American' })
      }
      expect(construct).toThrowError('Invalid Option Type: notAType')
    })

    it('should catch attempts to write invalid option style', () => {
      let bondFOption
      function construct() {
        bondFOption = new BondFutureOption({ optionType: 'Put', optionStyle: 'notAType' })
      }
      expect(construct).toThrowError('Invalid Option Style: notAType')
    })

    it('should set strike to a decimal', () => {
      const bondFOption = new BondFutureOption({})
      expect(bondFOption.strike).toEqual(new Decimal(0))
    })
  })
})
