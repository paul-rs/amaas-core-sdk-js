import { _parseAM, getAssetManager } from './assetManagers.js'
import { retrieve, insert, amend, deactivate, reactivate } from './assetManagers.js'
import AssetManager from '../../assetManagers/AssetManager/assetManager.js'

let token = process.env.API_TOKEN

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
      let promise = retrieve({
        token, AMaaSClass: 'assetManagers', AMId: 1
      }).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('insert', () => {
    test('with promise', () => {
      let promise = insert({
        token, AMaaSClass: 'assetManagers', AMId: 1
      }).catch(error => {})
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
      insert({ assetManager: data, token })
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
      let promise = amend({
        token, AMaaSClass: 'assetManagers', AMId: 1
      }).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('amends', done => {
      let dboi
      retrieve({ AMId: 4, token })
        .then(res => {
          dboi = res.defaultBookOwnerId
          res.defaultBookOwnerId++
          return amend({ assetManager: res, AMId: res.assetManagerId, token })
        })
        .then(res => {
          expect(res.defaultBookOwnerId).toEqual(dboi+1)
          done()
        })
        .catch(err => {
          expect(err).toBeUndefined()
        })
    })
  })

  describe('deactivate', () => {
    test('with promise', () => {
      let promise = deactivate({
        token, AMaaSClass: 'assetManagers', AMId: 1
      }).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
  })

  describe('reactivate and deactivate', () => {
    // Get an Asset Manager. If it is inactive, reactivate, check then deactivate and check
    it('reactivates an inactive AM and deactivates an active AM', () => {
      retrieve({ AMId: 2, token })
        .then(res => {
          if (res.assetManagerStatus === 'Inactive') {
            return reactivate({ AMId: 2, token })
          }
          return Promise.resolve(res)
        })
        .then(res => {
          expect(res.assetManagerStatus).toEqual('Active')
          return deactivate({ AMId: 2, token })
        })
        .then(res => {
          expect(res.assetManagerStatus).toEqual('Inactive')
        })
        .catch(err => {
          expect(err).toBeUndefined()
        })
    })
  })
})
