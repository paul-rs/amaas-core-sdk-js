import nock from 'nock'
import ENDPOINTS from '../../config.js'
import { retrieve, _parseParty, insert, partialAmend, amend, deactivate } from './parties.js'
import Party from '../../parties/Party/party.js'
import Broker from '../../parties/Broker/broker.js'
import Address from '../../parties/Children/address.js'

describe('parties util functions', () => {
  describe('insert function', () => {
    it('should stringify party correctly', () => {
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
  })
  describe('retrieve function', () => {
    it('should call callback with error if retrieveData fails', callback => {
      nock(ENDPOINTS.parties)
        .get('/parties/1/party')
        .reply(400)
      retrieve({AMId: 1, partyId: 'party', token: 'testToken'}, (error, result) => {
        expect(result).toBeUndefined()
        expect(error.status).toBe(400)
        callback()
      })
    })
    it('should call callback with success if retrieveData succeeds', callback => {
      nock(ENDPOINTS.parties)
        .get('/parties/1/party')
        .reply(200, '{"Message": "Success"}')
      retrieve({AMId: 1, partyId: 'party', token: 'testToken'}, (error, result) => {
        expect(error).toBeNull()
        expect(result).toEqual(new Party({}))
        callback()
      })
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
        party_type: 'Individual',
        addresses: {
          Registered: {
           city: "NODC740NZO",
           address_primary: true,
           updated_by: "TEMP",
           internal_id :4,
           line_one: "VCF5H1W9KLAAN8DIJ0R4",
           region: "SX3JEVA03B",
           country_id: "O21",
           created_by: "TEMP",
           updated_time: "2017-01-27T00:31:02",
           created_time: "2017-01-27T00:31:02",
           version: 1,
           postal_code: "YUIJDP",
           line_two: null,
           active: true
          }
        }
      })
      expect(party).toEqual(new Party({ partyType: 'Individual', partyClass: 'Individual', addresses: { Registered: address } }))
    })
    it('should parse the response as Party class if no party_type is found', () => {
      const party = _parseParty({})
      expect(party).toBeInstanceOf(Party)
      expect(party).toEqual(new Party({}))
    })
  })
  describe.skip('delete', () => {
    it('should', () => {
      // deleteParty('193', '750', (error, result) => {
      //   if (error) {
      //     console.log(error)
      //   } else {
      //     console.log(result)
      //   }
      // })
    })
  })
})
