import { _parseAM, getAssetManager } from './assetManagers.js'
import { retrieve, insert, amendAM, deactivate } from './assetManagers.js'
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
  })

  describe('amendAM', () => {
    test('with promise', () => {
      let promise = amendAM({
        token, AMaaSClass: 'assetManagers', AMId: 1
      }).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
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
})
