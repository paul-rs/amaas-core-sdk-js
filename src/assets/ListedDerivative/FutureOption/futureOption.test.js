import Decimal from 'decimal.js'

import FutureOption from './futureOption'

describe('FutureOption', () => {
  describe('constructor', () => {
    it('should catch attempts to write invalid option type', () => {
      let fOption
      function construct() {
        fOption = new FutureOption({ optionType: 'notAType', optionStyle: 'American' })
      }
      expect(construct).toThrowError('Invalid Option Type: notAType')
    })

    it('should catch attempts to write invalid option style', () => {
      let fOption
      function construct() {
        fOption = new FutureOption({ optionType: 'Put', optionStyle: 'notAType' })
      }
      expect(construct).toThrowError('Invalid Option Style: notAType')
    })

    it('should set strike to a decimal', () => {
      const fOption = new FutureOption({})
      expect(fOption.strike).toEqual(new Decimal(0))
    })
  })
})
