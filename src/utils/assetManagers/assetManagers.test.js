import { _parseAM, getAssetManager } from './assetManagers.js'
import { retrieve, insert, amend, deactivate, reactivate } from './assetManagers.js'
import AssetManager from '../../assetManagers/AssetManager/assetManager.js'
import * as api from '../../exports/api'

api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

describe('utils/assetManagers', () => {
  describe('_parseAM function', () => {
    it('should return an instance of AssetManager class', () => {
      const json = {
        assetManagerId: '48576',
        clientId: 'testClient',
        defaultTimezone: 'UTC',
        version: 1
      }
      const parsedAM = _parseAM(json)
      const expectedClass = new AssetManager({
        assetManagerId: '48576',
        clientId: 'testClient',
        defaultTimezone: 'UTC',
        version: 1
      })
      expect(parsedAM).toEqual(expectedClass)
    })
  })


  describe('retrieve', () => {
    test('with promise', () => {
      let promise = retrieve({AMId: 1})
        .catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('insert', () => {
    test('with promise', () => {
      let promise = insert({AMId: 1})
        .catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })

    test.skip('should insert', () => {
      const data = {
        defaultBookCloseTime: "17:30:00",
        defaultTimezone: "UTC",
        assetManagerType: "Accredited Investor",
        clientId: 1,
        assetManagerStatus: "Active",
        defaultBookOwnerId: 2
      }
      insert({ assetManager: data })
        .then(res => {
          expect({ ...res }).toEqual(expect.objectContaining(data))
        })
        .catch(err => {
          expect(err).toBeUndefined()
        })
    })
  })

  describe('amend', () => {
    test('with promise', () => {
      let promise = amend({AMId: 1})
        .catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('amends', done => {
      let dboi
      retrieve({ AMId: 4 })
        .then(res => {
          dboi = res.defaultBookOwnerId
          res.defaultBookOwnerId++
          return amend({ assetManager: res, AMId: res.assetManagerId })
        })
        .then(res => {
          expect(res.defaultBookOwnerId).toEqual(dboi+1)
          done()
        })
        .catch(err => {
          console.error(err)
        })
    })
  })

  describe('deactivate', () => {
    test('with promise', () => {
      let promise = deactivate({AMId: 1}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('reactivate and deactivate', () => {
    // Get an Asset Manager. If it is inactive, reactivate, check then deactivate and check
    it('reactivates an inactive AM and deactivates an active AM', done => {
      retrieve({ AMId: 2 })
        .then(res => {
          if (res.assetManagerStatus === 'Inactive') {
            return reactivate({ AMId: 2 })
          }
          return res
        })
        .then(res => {
          expect(res.assetManagerStatus).toEqual('Active')
          return deactivate({ AMId: 2 })
        })
        .then(res => {
          expect(res.assetManagerStatus).toEqual('Inactive')
          done()
        })
        .catch(err => {
          expect(err).toBeUndefined()
        })
    })
  })
})
