import uuid from 'uuid'
import { retrieve, _parseParty, insert, partialAmend, amend, search, deactivate, reactivate } from './parties.js'
import Party from '../../parties/Party/party.js'
import Individual from '../../parties/Individual/individual'
import Broker from '../../parties/Broker/broker.js'
import Address from '../../parties/Children/address.js'
import * as api from '../../exports/api'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000
api.config({
  stage: 'staging'
})

describe('parties util functions', () => {
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
    test('with promise', () => {
      let promise = retrieve({
        AMId: 1, partyId: 'party'
      }).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('amend', () => {
    test('with promise', () => {
      let promise = amend({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('should amend', done => {
      let d
      retrieve({ AMId: 516, resourceId: '39da5cef-08af-40f8-9c9a-b13856' })
        .then(res => {
          if (res.description === 'description') {
            d = 'description'
            res.description = 'Amended Description'
          } else {
            res.description = 'description'
          }
          return amend({ party: res, AMId: res.assetManagerId, resourceId: res.partyId })
        })
        .then(res => {
          expect(res.description).toEqual(d === 'description' ? 'Amended Description' : 'description')
          done()
        })
        .catch(err => {
          console.error(err)
        })
    })
  })

  describe('partialAmend', () => {
    test('with promise', () => {
      let promise = partialAmend({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('should partial amend', done => {
      let bC
      retrieve({ AMId: 516, resourceId: 'fa337e08-1363-47a8-95ba-6ebb55' })
        .then(res => {
          if (res.partyStatus === 'Inactive') {
            return reactivate({ AMId: res.assetManagerId, resourceId: res.partyId })
          } else {
            return Promise.resolve(res)
          }
        })
        .then(res => {
          let changes = {}
          if (res.baseCurrency === 'SGD') {
            bC = 'SGD'
            changes.baseCurrency = 'USD'
          } else {
            changes.baseCurrency = 'SGD'
          }
          return partialAmend({ changes, AMId: res.assetManagerId, resourceId: res.partyId })
        })
        .then(res => {
          expect(res.baseCurrency).toEqual(bC === 'SGD' ? 'USD' : 'SGD')
          done()
        })
        .catch(err => {
          console.error(err)
        })
      })
  })

  describe('search', () => {
    it('searches', done => {
      const query = [
        { key: 'party_types', values: ['Broker', 'Individual'] }
      ]
      search({ AMId: 516, query })
        .then(res => {
          if (Array.isArray(res)) {
            const pT = res[0].partyType
            expect(pT).toEqual(pT !== 'Broker' ? 'Individual' : 'Broker')
            done()
          } else {
            const pT = res.partyType
            expect(pT).toEqual(pT !== 'Broker' ? 'Individual' : 'Broker')
            done()
          }
        })
        .catch(err => console.error(err))
    })
  })

  describe('deactivate', () => {
    const testAMId = 516
    const testId = 'fa337e08-1363-47a8-95ba-6ebb55'

    afterAll(() => {
      reactivate({ AMId: testAMId, resourceId: testId })
        .then()
        .catch(err => {
          console.error(`Error in cleanup: Reactivating partyId ${testId} for Asset Manager ${testAMId}`)
        })
    })

    test('with promise', () => {
      let promise = deactivate({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('deactivate/reactivate', done => {
      let status
      retrieve({ AMId: testAMId, resourceId: testId })
        .then(res => {
          if (res.partyStatus === 'Active') {
            status = 'Active'
            return deactivate({ AMId: res.assetManagerId, resourceId: res.partyId })
          } else {
            status = 'Inactive'
            return reactivate({ AMId: res.assetManagerId, resourceId: res.partyId })
          }
        })
        .then(res => {
          if (res.partyStatus === 'Active') {
            return deactivate({ AMId: res.assetManagerId, resourceId: res.partyId })
          } else {
            return reactivate({ AMId: res.assetManagerId, resourceId: res.partyId })
          }
        })
        .then(res => {
          expect(res.partyStatus).toEqual(status)
          done()
        })
        .catch(err => {
          console.error(err)
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
