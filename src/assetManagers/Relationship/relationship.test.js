import Relationship from './'

describe('Relationship', () => {
  describe('constructor', () => {
    it('should throw if invalid relationship type supplied', () => {
      function tester() {
        const testRel = new Relationship({ relationshipType: 'NotAType' })
      }
      expect(tester).toThrowError('Invalid Relationship Type')
    })

    it('should construct', () => {
      const testRel = new Relationship({
        assetManagerId: 'testAMId',
        relationId: 'testRelId',
        relationshipStatus: 'testRelStatus',
        relationshipType: 'Employee',
        clientId: 'testClientId'
      })
      expect(testRel.assetManagerId).toEqual('testAMId')
      expect(testRel.relationId).toEqual('testRelId')
      expect(testRel.relationshipStatus).toEqual('testRelStatus')
      expect(testRel.relationshipType).toEqual('Employee')
      expect(testRel.clientId).toEqual('testClientId')
    })
  })
})
