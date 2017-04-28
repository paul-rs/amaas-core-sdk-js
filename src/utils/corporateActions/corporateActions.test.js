import uuid from 'uuid'

import { retrieve, insert, amend, search, cancel, reopen } from './corporateActions'
import * as api from '../../exports/api'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000
api.config({
  stage: 'staging'
})

describe('retrieve', () => {
  it('retrieves', done => {
    retrieve({AMId: 338})
      .then(res => {
        if (Array.isArray(res)) {
          expect(res[0]).toBeDefined()
          expect(res[0].assetManagerId).toEqual(338)
          done()
        } else {
          expect(res).toBeDefined()
          expect(res.assetManagerId).toEqual(338)
          done()
        }
      })
      .catch(err => console.error(err))
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
  it('amends', done => {
    const nowish = new Date()
    retrieve({ AMId: 338 })
      .then(res => {
        res[0].description = `Amended on ${nowish}`
        return amend({ AMId: res[0].assetManagerId, resourceId: res[0].corporateActionId, corporateAction: res[0] })
      })
      .then(res => {
        expect(res.description).toEqual(`Amended on ${nowish}`)
        done()
      })
      .catch(err => console.error(err))
  })
})

describe('search', () => {
  it('searches', done => {
    const query = [{
      key: 'corporate_action_statuses',
      values: ['Open']
    }]
    search({ AMId: 338, query })
      .then(res => {
        if (Array.isArray(res)) {
          if (res.length === 0) {
            console.error('No arrays returned for this test, cannot test')
          } else {
            expect(res[0].corporateActionStatus).toEqual('Open')
            done()
          }
        } else {
          expect(res.corporateActionStatus).toEqual('Open')
          done()
        }
      })
      .catch(err => console.error(err))
  })
})

describe('cancel/reopen', () => {
  it('cancels and reopens', done => {
    let status
    retrieve({ AMId: 338 })
      .then(res => {
        if (Array.isArray(res)) {
          status = res[0].corporateActionStatus
          if (status === 'Open') {
            return cancel({ AMId: res[0].assetManagerId, resourceId: res[0].corporateActionId })
          } else {
            return reopen({ AMId: res[0].assetManagerId, resourceId: res[0].corporateActionId })
          }
        } else {
          status = res.corporateActionStatus
          if (status === 'Open') {
            return cancel({ AMId: res.assetManagerId, resourceId: res.corporateActionId })
          } else {
            return reopen({ AMId: res.assetManagerId, resourceId: res.corporateActionId })
          }
        }
      })
      .then(res => {
        if (res.corporateActionStatus === 'Open') {
          return cancel({ AMId: res.assetManagerId, resourceId: res.corporateActionId })
        } else {
          return reopen({ AMId: res.assetManagerId, resourceId: res.corporateActionId })
        }
      })
      .then(res => {
        expect(res.corporateActionStatus).toEqual(status)
        done()
      })
      .catch(err => console.error(err))
  })
})
