import uuid from 'uuid'
import { retrieve, insert, amend } from './relationships'
import Relationship from '../../relationships'
import * as api from '../../exports/api'

api.config({
  stage: 'staging',
  token: process.env.API_TOKEN
})
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

const AMId = 5

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
    it('amends', done => {
      let type
      retrieve({ AMId })
        .then(res => {
          const target = res.filter(rel => {
            return rel.relatedId === 10
          })
          switch(target[0].relationshipType) {
            case 'Employee':
              type = 'Employee'
              target[0].relationshipType = 'External'
              break
            case 'External':
              type = 'External'
              target[0].relationshipType = 'Employee'
              break
            default:
              type = 'External'
              target[0].relationshipType = 'Employee'
          }
          return amend({ relationship: target[0], AMId: target[0].assetManagerId })
        })
        .then(res => {
          expect(res.relationshipType).toEqual(type === 'External' ? 'Employee' : 'External')
          done()
        })
        .catch(err => {
          console.error(err)
        })
    })
  })
})
