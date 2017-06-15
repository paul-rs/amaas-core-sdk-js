import uuid from 'uuid'
import { retrieve, _parseParty, insert, partialAmend, amend, search, deactivate, reactivate } from './parties.js'
import Party from '../../parties/Party/party.js'
import Individual from '../../parties/Individual/individual'
import Broker from '../../parties/Broker/broker.js'
import Address from '../../parties/Children/address.js'
import * as api from '../../exports/api'
import { getToken } from '../network'

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000
api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('parties util functions', () => {
  beforeAll(() => {
    return getToken()
  })
  describe('insert function', () => {
    test('with promise', () => {
      let promise = insert({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test.skip('should insert', done => {
      const party = {
        description: "testParty",
        partyType: "Broker",
        assetManagerId: 516,
        partyId: uuid().substring(0, 30)
      }
      insert({ party, AMId: 1 })
        .then(res => {
          expect(res).toEqual(expect.objectContaining(party))
          done()
        })
        .catch(err => {
          console.error(err)
        })
    })
  })

  describe('retrieve function', () => {
    test('with promise', done => {
      let promise = retrieve({
        AMId: 1, partyId: 'party'
      }).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
      done()
    })
  })

  describe('amend', () => {
    test('with promise', () => {
      let promise = amend({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('should amend', async done => {
      let d
      let res = await retrieve({ AMId: 516 })
      if (res.length === 0) {
        console.error('amend: Result is empty, force fail after timeout.')
        return
      }
      res = res.filter(party => party.assetManagerId !== 0)
      res = res[0]
      if (res.partyStatus === 'Inactive') {
        res = await reactivate({ AMId: res.assetManagerId, resourceId: res.partyId })
      }
      let newDesc = uuid().substring(0, 10)
      res.description = newDesc
      res = await amend({ party: res, AMId: res.assetManagerId, resourceId: res.partyId })
      expect(res.description).toEqual(newDesc)
      done()
    })
  })

  describe('partialAmend', () => {
    test('with promise', () => {
      let promise = partialAmend({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('should partial amend', async done => {
      let bC
      let res = await retrieve({ AMId: 516 })
      if (res.length === 0) {
        console.error('partialAmend: Result is empty, force fail on timeout.')
        return
      }
      res = res.filter(party => party.assetManagerId !== 0)
      res = res[0]
      if (res.partyStatus === 'Inactive') {
        res = await reactivate({ AMId: res.assetManagerId, resourceId: res.partyId })
      }
      const newDesc = uuid().substring(0, 20)
      const changes = {
        description: newDesc
      }
      res = await partialAmend({ changes, AMId: res.assetManagerId, resourceId: res.partyId })
      expect(res.description).toEqual(newDesc)
      done()
      })
  })

  describe('search', () => {
    it('searches', async done => {
      const query = {
        partyTypes: ['Broker', 'Individual']
      }
      let res = await search({AMId: 516, query})
      if (res.length === 0) {
        console.error('search: Result is empty, force fail on timeout.')
        return
      }
      res = res.filter(party => party.assetManagerId !== 0)
      res = res[0]
      expect(res.partyType).toEqual(expect.stringMatching(/(Broker|Individual)/))
      done()
    })
  })

  describe('deactivate', () => {

    test('with promise', () => {
      let promise = deactivate({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('deactivate/reactivate', async done => {
      let status
      let res = await retrieve({ AMId: 516 })
      if (res.length === 0) {
        console.error('deactivate/reactivate: Result is empty, force fail on timeout.')
        return
      }
      res = res.filter(party => party.assetManagerId !== 0)
      res = res[0]
      if (res.partyStatus === 'Active') {
        res = await deactivate({ AMId: res.assetManagerId, resourceId: res.partyId })
        expect(res.partyStatus).toEqual('Inactive')
        await reactivate({ AMId: res.assetManagerId, resourceId: res.partyId })
        done()
      } else if (res.partyStatus === 'Inactive') {
        res = await reactivate({ AMId: res.assetManagerId, resourceId: res.partyId })
        expect(res.partyStatus).toEqual('Active')
        done()
      }
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
