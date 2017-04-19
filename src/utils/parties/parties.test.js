import nock from 'nock'
import ENDPOINTS from '../../config.js'
import { retrieve, _parseParty, insert, partialAmend, amend, deactivate } from './parties.js'
import Party from '../../parties/Party/party.js'
import Individual from '../../parties/Individual/individual'
import Broker from '../../parties/Broker/broker.js'
import Address from '../../parties/Children/address.js'

let token = process.env.API_TOKEN

describe('parties util functions', () => {
  describe('insert function', () => {
    it.skip('should stringify party correctly', () => {
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
        addressPrimary: false,
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
      const party = new Party({ assetManagerId: '1234', partyId: 'AMID1234', addresses: { Registered: address, Legal: address2 }, createdBy: 'TEMP' })
      // retrieve('646', '30', (error, result) => {
      //   if (result) {
      //     console.log(result)
      //   }
      // })
      // insert(party, () => {
      //   // no-op
      // })
    })
    test('with promise', () => {
      let promise = insert({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('retrieve function', () => {
    it('should call callback with error if retrieveData fails', callback => {
      nock(ENDPOINTS.parties)
        .get('/parties/1/party?camelcase=true')
        .reply(400)
      retrieve({AMId: 1, partyId: 'party', token: 'testToken'}, (error, result) => {
        expect(result).toBeUndefined()
        expect(error.status).toBe(400)
        callback()
      })
    })
    it('should call callback with success if retrieveData succeeds', callback => {
      nock(ENDPOINTS.parties)
        .get('/parties/1/party?camelcase=true')
        .reply(200, '{"Message": "Success"}')
      retrieve({AMId: 1, partyId: 'party', token: 'testToken'}, (error, result) => {
        expect(error).toBeNull()
        expect(result).toEqual(new Party({}))
        callback()
      })
    })
    test('with promise', () => {
      let promise = retrieve({
        AMId: 1, partyId: 'party', token
      }).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('amend', () => {
    test('with promise', () => {
      let promise = amend({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('partialAmend', () => {
    test('with promise', () => {
      let promise = partialAmend({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('deactivate', () => {
    test('with promise', () => {
      let promise = deactivate({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('_parseParty function', () => {
    it('should parse the response to the appropriate class', () => {
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
      const party = _parseParty({
        partyType: 'Individual',
        addresses: {
          Registered: {
           city: "NODC740NZO",
           addressPrimary: true,
           updatedBy: "TEMP",
           internalId :4,
           lineOne: "VCF5H1W9KLAAN8DIJ0R4",
           region: "SX3JEVA03B",
           countryId: "O21",
           createdBy: "TEMP",
           updatedTime: "2017-01-27T00:31:02",
           createdTime: "2017-01-27T00:31:02",
           version: 1,
           postalCode: "YUIJDP",
           lineTwo: null,
           active: true
          }
        }
      })
      expect(party).toEqual(new Individual({ partyType: 'Individual', partyClass: 'Individual', addresses: { Registered: address } }))
    })
    it('should parse the response as Party class if no party_type is found', () => {
      const party = _parseParty({})
      expect(party).toBeInstanceOf(Party)
      expect(party).toEqual(new Party({}))
    })
  })
})
