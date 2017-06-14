import {OwnershipObject} from './ownershipObject'

describe('OwnershipObject', () => {
  describe('constructor', () => {

    it('should set value to the instance', () => { 
      const test = new OwnershipObject({ partyId: 'abc' })
      var testResult = test.partyId
      expect(testResult).toEqual("abc")
    })

  })
})