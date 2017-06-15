import uuid from 'uuid'

import { retrieve, insert, amend, search, cancel, reopen } from './corporateActions'
import * as api from '../../exports/api'

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000
api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})

describe('retrieve', () => {
  it('retrieves', async done => {
    let res = await retrieve({AMId: 338})
    expect(Array.isArray(res)).toBeTruthy()
    done()
  })
})

describe('insert', () => {
  it.skip('inserts', done => {
    const corporateAction = {
      assetManagerId: 338,
      corporateActionId: uuid().substr(0, 10),
      clientId: 1,
      declaredDate: '2017-04-27',
      settlementDate: '2017-04-28',
      recordDate: '2017-04-28',
      assetId: 'TEST',
      partyId: '12',
      corporateActionType: 'CorporateAction'
    }
    insert({ AMId: 338, corporateAction})
      .then(res => {
        expect(res).toBeDefined()
        expect(res.assetId).toEqual('TEST')
        done()
      })
      .catch(err => console.error(err))
  })
})

describe('amend', () => {
  it('amends', async done => {
    const nowish = new Date()
    let res = await retrieve({ AMId: 338 })
    if (res.length === 0) {
      console.error('amend: Result is empty, force fail after timeout.')
      return
    }
    res = res.filter(ca => ca.assetManagerId !== 0)
    res = res[0]
    if (res.corporateActionStatus === 'Cancelled') {
      res = await reopen({ AMId: res.assetManagerId, resourceId: res.corporateActionId })
    }
    res.description = `Amended on ${nowish}`
    res = await amend({ AMId: res.assetManagerId, resourceId: res.corporateActionId, corporateAction: res })
    expect(res.description).toEqual(`Amended on ${nowish}`)
    done()
  })
})

describe('search', () => {
  it('searches', async done => {
    const query = {
      CorporateActionStatuses: ['Open']
    }
    let res = await search({ AMId: 338, query })
    if (res.length === 0) {
      console.error('search: Result is empty, force fail after timeout.')
      return
    }
    res = res.filter(ca => ca.assetManagerId !== 0)
    res = res[0]
    expect(res.corporateActionStatus).toEqual('Open')
    done()
  })
})

describe('cancel/reopen', () => {
  it('cancels and reopens', async done => {
    let status
    let res = await retrieve({ AMId: 338 })
    if (res.length === 0) {
      console.error('cancel/reopen: Result is empty, force fail after timeout.')
      return
    }
    res = res.filter(ca => ca.assetManagerId !== 0)
    res = res[0]
    if (res.corporateActionStatus === 'Open') {
      res = await cancel({ AMId: res.assetManagerId, resourceId: res.corporateActionId })
      expect(res.corporateActionStatus).toEqual('Cancelled')
    } else {
      res = await reopen({ AMId: res.assetManagerId, resourceId: res.corporateActionId })
      expect(res.corporateActionStatus).toEqual('Open')
    }
    done()
  })
})
