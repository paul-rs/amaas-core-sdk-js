import Relationship from './'

describe('Relationship', () => {
  describe('constructor', () => {
    it('should throw if invalid relationship type supplied', () => {
      function tester() {
        const testRel = new Relationship({ relationshipType: 'notAType' })
      }
      expect(tester).toThrowError('Invalid Relationship Type: notAType')
    })

    it('should construct', () => {
      const testRel = new Relationship({
        assetManagerId: 'testAMId',
        relationshipId: 'testRelationshipId',
        relatedId: 'testRelatedId',
        relationshipStatus: 'testRelStatus',
        relationshipType: 'Employee',
        clientId: 'testClientId'
      })
      expect(testRel.assetManagerId).toEqual('testAMId')
      expect(testRel.relationshipId).toEqual('testRelationshipId')
      expect(testRel.relatedId).toEqual('testRelatedId')
      expect(testRel.relationshipStatus).toEqual('testRelStatus')
      expect(testRel.relationshipType).toEqual('Employee')
      expect(testRel.clientId).toEqual('testClientId')
    })
  })
})
