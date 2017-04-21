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

    test('deactivates an active Asset', () => {
      retrieve({ AMId: 1, resourceId: '4JZ8P7AU8E', token })
        .then(res => {
          if (res.assetStatus === 'Inactive') {
            return reactivate({ AMId: 1, resourceId: '4JZ8P7AU8E', token })
          }
        })
        .then(res => {
          expect(res.assetStatus).toEqual('Active')
          return deactivate({ AMId: 1, resourceId: '4JZ8P7AU8E', token })
        })
        .then(res => {
          expect(res.assetStatus).toEqual('Inactive')
        })
        .catch((err) => {
          expect(err).toBeUndefined()
        })
    })
  })
})
