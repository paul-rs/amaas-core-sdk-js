import Decimal from 'decimal.js'

import BondOption from './bondOption'

describe('BondOption', () => {
  describe('constructor', () => {
    it('should catch attempts to set invalid option style', () => {
      let option
      function test() {
        option = new BondOption({ optionType: 'Put' })
      }
      expect(test).toThrowError('Invalid Option Style: undefined')
    })

    it('should catch attempts to set invalid option type', () => {
      let option
      function test() {
        option = new BondOption({ optionStyle: 'American' })
      }
      expect(test).toThrowError('Invalid Option Type: undefined')
    })

    it('should set strike to Decimal', () => {
      const option = new BondOption({ optionType: 'Put', optionStyle: 'American', strike: 9.45 })
      expect(option.strike).toEqual(new Decimal(9.45))
    })

    it('should set strike to Decimal(0) if none supplied', () => {
      const option = new BondOption({ optionType: 'Put', optionStyle: 'American' })
      expect(option.strike).toEqual(new Decimal(0))
    })

  })
  describe('stringify/parse', () => {
    it('should stringify/parse correctly', () => {
      const test = new BondOption({ optionStyle: 'European', optionType: 'Put' })
      expect(JSON.parse(JSON.stringify(test)).assetType).toBeDefined()
      expect(JSON.parse(JSON.stringify(test)).assetType).toEqual('BondOption')
    })
  })
})
