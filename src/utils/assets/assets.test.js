import uuid from 'uuid'
import { retrieve, insert, amend, partialAmend, search, deactivate, reactivate } from './assets.js'
import Asset from '../../assets/Asset/asset.js'
import * as api from '../../exports/api'

api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

describe('utils/assets', () => {
  describe('retrieve', () => {
    test('with promise', callback => {
      let promise = retrieve({AMId: 1})
      expect(promise).toBeInstanceOf(Promise)
      promise.then(assets => {
        expect(Array.isArray(assets)).toBeTruthy()
        expect(assets[0]).toBeInstanceOf(Asset)
        callback()
      })
      .catch(err => console.error(err))
    })
  })

  describe('insert', () => {
    test('with promise', () => {
      let promise = insert({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })

    it.skip('should insert', done => {
      const asset = {
        description: 'testAsset',
        assetType: 'Equity',
        assetManagerId: 1,
        assetId: uuid().substring(0, 10)
      }
      insert({ AMId: 1, asset })
        .then(res => {
          expect(res).toEqual(expect.objectContaining(asset))
          done()
        })
        .catch(err => {
          console.error(err)
        })
    })
  })

  describe('amend', () => {
    test('with promise', () => {
      let promise = amend({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('amends', done => {
      let f
      retrieve({ AMId: 1, resourceId: '121JBDQM5Z' })
        .then(res => {
          if (res.assetStatus === 'Inactive') {
            return reactivate({ AMId: res.assetManagerId, resourceId: res.assetId })
          } else {
            return Promise.resolve(res)
          }
        })
        .then(res => {
          f = res.fungible
          res.fungible = !f
          return amend({ asset: res, AMId: res.assetManagerId, resourceId: res.assetId })
        })
        .then(res => {
          expect(res.fungible).toEqual(!f)
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
    test('partial amends', done => {
      const desc = uuid().substring(0, 20)
      partialAmend({ changes: { description: desc }, AMId: 1, resourceId: '121JBDQM5Z' })
        .then(res => {
          expect(res.description).toEqual(desc)
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
        { key: 'asset_classes', values: ['Asset', 'ForeignExchange']}
      ]
      search({ AMId: 1, query })
        .then(res => {
          if (Array.isArray(res)) {
            expect(res[0]).toBeDefined()
            if (res[0].assetClass !== 'Asset') {
              expect(res[0].assetClass).toEqual('ForeignExchange')
              done()
            } else {
              expect(res[0].assetClass).toEqual('Asset')
              done()
            }
          } else {
            const aC = res.assetClass
            if (aC !== 'Asset') {
              expect(aC).toEqual('ForeignExchange')
            } else {
              expect(aC).toEqual('Asset')
            }
            done()
          }
        })
        .catch(err => console.error(err))
    })
  })

  describe('deactivate', () => {
    const testAMId = 1
    const testId = '4JZ8P7AU8E'

    afterAll(() => {
      reactivate({ AMId: testAMId, resourceId: testId })
        .then()
        .catch(err => {
          console.error(`Error in cleanup: Reactivating Asset ${testId} for Asset Manager ${testAMId}`)
        })
    })

    test('with promise', () => {
      let promise = deactivate({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })

    test('deactivates an active Asset', done => {
      let status
      retrieve({ AMId: testAMId, resourceId: testId })
        .then(res => {
          if (res.assetStatus === 'Inactive') {
            status = 'Inactive'
            return reactivate({ AMId: res.assetManagerId, resourceId: res.assetId })
          } else {
            status = 'Active'
            return deactivate({ AMId: res.assetManagerId, resourceId: res.assetId })
          }
        })
        .then(res => {
          if (res.assetStatus === 'Inactive') {
            return reactivate({ AMId: res.assetManagerId, resourceId: res.assetId })
          } else {
            return deactivate({ AMId: res.assetManagerId, resourceId: res.assetId })
          }
        })
        .then(res => {
          expect(res.assetStatus).toEqual(status)
          done()
        })
        .catch((err) => {
          console.error(err)
        })
    })
  })
})
