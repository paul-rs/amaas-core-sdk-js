import uuid from 'uuid'
import { retrieve, insert, amend } from './relationships'
import Relationship from '../../relationships'
import * as api from '../../exports/api'

api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

const AMId = 1

describe('utils/relationships', () => {
  describe('retrieve', () => {
    it('retrieves', done => {
      retrieve({ AMId })
        .then(res => {
          expect(res).toBeDefined()
          done()
        })
        .catch(err => {
          console.error(err)
        })
    })
  })

  describe('insert', () => {
    it.skip('inserts', done => {
      const rel = {
        assetManagerId: AMId,
        relationshipType: "External",
        relatedId: 10,
        relationshipId: uuid().substring(0, 10)
      }
      insert({ AMId: rel.assetManagerId, relationship: rel })
        .then(res => {
          expect(res).toEqual(expect.objectContaining(rel))
          done()
        })
        .catch(err => {
          console.error(err)
        })
    })
  })

  describe('amend', () => {
    it('amends', async done => {
      let type
      let res = await retrieve({ AMId })
      if (res.length === 0) {
        console.error('amend: Result is empty, force fail on timeout.')
        return
      }
      res = res.filter(rel => rel.assetManagerId !== 0 && rel.relationshipStatus !== 'Inactive')
      if (res.length === 0) {
        console.error('amend: Result is empty, force fail on timeout.')
        return
      }
      res = res[0]
      if (res.relationshipType === 'External') {
        res.relationshipType = 'Employee'
      } else {
        res.relationshipType = 'External'
      }
      res = await amend({ AMId: res.assetManagerId, relationship: res })
      expect(res.relationshipType).toEqual(expect.stringMatching(/(Employee|External)/))
      done()
    })
  })
})
