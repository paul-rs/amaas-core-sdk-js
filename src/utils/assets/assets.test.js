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
        if (assets.length > 0) expect(assets[0]).toBeInstanceOf(Asset)
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
    it.only('amends', async done => {
      let f
      let res = await retrieve({ AMId: 1 })
      if (res.length === 0) {
        console.error('amend: Results is empty, force fail after timeout.')
        return
      }
      res = res[0]
      if (res.assetStatus === 'Inactive') {
        res = await reactivate({ AMId: res.assetManagerId, resourceId: res.assetId })
      }
      f = res.fungible
      res.fungible = !f
      res = await amend({ asset: res, AMId: res.assetManagerId, resourceId: res.assetId })
      expect(res.fungible).toEqual(!f)
      done()
    })
  })

  describe('partialAmend', () => {
    test('with promise', () => {
      let promise = partialAmend({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })
    test('partial amends', async done => {
      const desc = uuid().substring(0, 20)
      let res = await retrieve({ AMId: 1 })
      if (res.length === 0) {
        console.error('partialAmend: Results is empty, force fail after timeout.')
        return
      }
      res = res[0]
      res = await partialAmend({ changes: { description: desc }, AMId: res.assetManagerId, resourceId: res.assetId })
      expect(res.description).toEqual(desc)
      done()
    })
  })

  describe('search', () => {
    it('searches', async done => {
      const query = { assetClasses: ['Asset', 'ForeignExchange'] }
      let res = await search({ AMId: 1, query })
      if (Array.isArray(res) && res.length === 0) {
        console.warn('search: Results is empty, force fail after timeout.')
      } else if (Array.isArray(res) && res.length > 0) {
        res = res[0]
        expect(res.assetClass).toEqual(expect.stringMatching(/(Asset|ForeignExchange)/))
        done()
      } else {
        expect(res.assetClass).toEqual(expect.stringMatching(/(Asset|ForeignExchange)/))
        done()
      }
    })
  })

  describe('deactivate', () => {

    test('with promise', () => {
      let promise = deactivate({}).catch(error => {})
      expect(promise).toBeInstanceOf(Promise)
    })

    it('deactivates an active Asset', async done => {
      let res = await retrieve({ AMId: 1 })
      if (res.length === 0) {
        console.error('deactivate: Results is empty, force fail after timeout.')
        return
      }
      res = res[0]
      if (res.assetStatus === 'Inactive') {
        res = await reactivate({ AMId: res.assetManagerId, resourceId: res.assetId })
      }
      expect(res.assetStatus).toEqual('Active')
      res = await deactivate({ AMId: res.assetManagerId, resourceId: res.assetId })
      expect(res.assetStatus).toEqual('Inactive')
      await reactivate({ AMId: res.assetManagerId, resourceId: res.assetId })
      done()
    })
  })
})
