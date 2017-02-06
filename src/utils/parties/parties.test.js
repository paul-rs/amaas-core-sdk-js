import nock from 'nock'
import ENDPOINTS from '../../config.js'
import getParty, { _parseParty } from './'
import Party from '../../parties/Party/party.js'

describe('parties util functions', () => {
  describe('getParty function', () => {
    it('should call callback with error if retrieveData fails', () => {
      nock(ENDPOINTS.parties)
        .get('/parties/1/party')
        .reply(400)
      getParty('1', 'party', (error, result) => {
        expect(result).toBeUndefined()
        expect(error).toEqual({ error: null, statusCode: 400 })
      })
    })
    it('should call callback with success if retrieveData succeeds', () => {
      nock(ENDPOINTS.parties)
        .get('/parties/1/party')
        .reply(200, '{"Message": "Success"}')
      getParty('1', 'party', (error, result) => {
        expect(error).toBeNull()
        expect(result).toEqual(new Party({}))
      })
    })
  })
  describe('_parseParty function', () => {
    it('should parse the response to the appropriate class', () => {
      const party = _parseParty({ party_type: 'Individual' })
      expect(party).toEqual(new Party({ partyType: 'Individual', partyClass: 'Individual' }))
    })
    it('should parse the response as Party class if no party_type is found', () => {
      const party = _parseParty({})
      expect(party).toBeInstanceOf(Party)
      expect(party).toEqual(new Party({}))
    })
  })
})
