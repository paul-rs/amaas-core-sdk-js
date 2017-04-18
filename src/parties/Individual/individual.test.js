import Individual from './individual.js'
import Address from '../Children/address.js'

describe('Individual', () => {
  describe('constructor', () => {
    it('should call super correctly', () => {
      const testIndividual = new Individual({ assetManagerId: '1234', partyId: '0987' })
      expect(testIndividual.assetManagerId).toEqual('1234')
      expect(testIndividual.partyId).toEqual('0987')
    })
    it('should set description to givenNames and surname if no description given', () => {
      const indie = new Individual({ givenNames: 'Warren', surname: 'Buffet' })
      expect(indie.description).toEqual('Warren Buffet')
    })
    it('should set party class and type to Individual', () => {
      const testIndividual = new Individual({})
      expect(testIndividual.partyClass).toEqual('Individual')
      expect(testIndividual.partyType).toEqual('Individual')
    })
    it('should follow Party rules for setting children', () => {
      const address = new Address({
        addressPrimary: true,
        lineOne: "VCF5H1W9KLAAN8DIJ0R4",
        lineTwo: null,
        city: "NODC740NZO",
        region: "SX3JEVA03B",
        postalCode: "YUIJDP",
        countryId: "O21",
        active: true,
        createdBy: "TEMP",
        updatedBy: "TEMP",
        createdTime: "2017-01-27T00:31:02",
        updatedTime: "2017-01-27T00:31:02",
        version: 1,
      })
      const address2 = new Address({
        addressPrimary: true,
        lineOne: "VCF5H1W9KLAAN8DIJ0R4",
        lineTwo: null,
        city: "NODC740NZO",
        region: "SX3JEVA03B",
        postalCode: "YUIJDP",
        countryId: "O21",
        active: true,
        createdBy: "TEMP",
        updatedBy: "TEMP",
        createdTime: "2017-01-27T00:31:02",
        updatedTime: "2017-01-27T00:31:02",
        version: 1,
      })
      const testIndividual = new Individual({ addresses: { Registered: address } })
      testIndividual.upsertAddress('Legal', address2)
      expect(testIndividual.addresses.Registered.addressPrimary).toBeFalsy()
      expect(testIndividual.addresses.Legal.addressPrimary).toBeTruthy()
    })
  })
})
