import uuid from 'uuid'

import { retrieve, insert, amend, partialAmend, deactivate, reactivate } from './assets.js'
import Asset from '../../assets/Asset/asset.js'

let token = process.env.API_TOKEN

describe('utils/assets', () => {
  describe('retrieve', () => {
    test('with promise', callback => {
      let promise = retrieve({token, AMId: 1})
      expect(promise).toBeInstanceOf(Promise)
      promise.then(assets => {
        expect(Array.isArray(assets)).toBeTruthy()
        expect(assets[0]).toBeInstanceOf(Asset)
        callback()
      })
    })
  })

  describe('insert', () => {
    test('with promise', () => {
      let promise = insert({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })

    // This will fail if you keep running the test with the same assetId.
    // TODO: Change assetId to uuid?
    it.skip('should insert', done => {
      const asset = {
        description: 'testAsset',
        assetType: 'Equity',
        assetManagerId: 1,
        assetId: 'uu'
      }
      insert({ AMId: 1, asset, token })
        .then(res => {
          expect(res).toEqual(expect.objectContaining(asset))
          done()
        })
        .catch(err => {
          console.log(err)
          expect(err).toBeUndefined()
          done()
        })
    })
  })

  describe('amend', () => {
    test('with promise', () => {
      let promise = amend({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('amends', done => {
      let f
      retrieve({ AMId: 1, resourceId: '121JBDQM5Z', token })
        .then(res => {
          if (res.assetStatus === 'Inactive') {
            return reactivate({ AMId: res.assetManagerId, resourceId: res.assetId, token })
          } else {
            return Promise.resolve(res)
          }
        })
        .then(res => {
          f = res.fungible
          res.fungible = !f
          return amend({ asset: res, AMId: res.assetManagerId, resourceId: res.assetId, token })
        })
        .then(res => {
          expect(res.fungible).toEqual(!f)
          done()
        })
        .catch(err => {
          console.error(err)
          done()
        })
    })
  })

  describe('partialAmend', () => {
    test('with promise', () => {
      let promise = partialAmend({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('partial amends', done => {
      const desc = uuid().substring(0, 20)
      partialAmend({ changes: { description: desc }, AMId: 1, resourceId: '121JBDQM5Z', token })
        .then(res => {
          expect(res.description).toEqual(desc)
          done()
        })
        .catch(err => {
          expect(err).toBeUndefined()
          done()
        })
    })
  })

  describe('deactivate', () => {
    const testAMId = 1
    const testId = '4JZ8P7AU8E'

    afterAll(() => {
      reactivate({ AMId: testAMId, resourceId: testId, token })
        .then()
        .catch(err => {
          console.error(`Error in cleanup: Reactivating Asset ${testId} for Asset Manager ${testAMId}`)
        })
    })

    test('with promise', () => {
      let promise = deactivate({token}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })

    test('deactivates an active Asset', done => {
      let status
      retrieve({ AMId: testAMId, resourceId: testId, token })
        .then(res => {
          if (res.assetStatus === 'Inactive') {
            status = 'Inactive'
            return reactivate({ AMId: res.assetManagerId, resourceId: res.assetId, token })
          } else {
            status = 'Active'
            return deactivate({ AMId: res.assetManagerId, resourceId: res.assetId, token })
          }
        })
        .then(res => {
          if (res.assetStatus === 'Inactive') {
            return reactivate({ AMId: res.assetManagerId, resourceId: res.assetId, token })
          } else {
            return deactivate({ AMId: res.assetManagerId, resourceId: res.assetId, token })
          }
        })
        .then(res => {
          expect(res.assetStatus).toEqual(status)
          done()
        })
        .catch((err) => {
          expect(err).toBeUndefined()
          done()
        })
    })
  })
})
