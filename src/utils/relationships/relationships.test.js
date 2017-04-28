import { retrieve, insert, amend } from './relationships'
import Relationship from '../../relationships'

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
        relationId: 10
      }
      insert({ relationship: rel })
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
    it.only('amends', done => {
      let type
      retrieve({ AMId })
        .then(res => {
          const target = res.filter(rel => {
            return rel.relationId === 4
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
