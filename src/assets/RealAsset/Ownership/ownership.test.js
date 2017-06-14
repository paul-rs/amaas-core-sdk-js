import {Ownership} from './ownership'
import {OwnershipObject} from './ownershipObject'

describe('Ownership', () => {
   describe('constructor', () => {
    it('should return an error message', () => {
      var obj1={
          partyId: "xyz", 
          split: 0.5
      }
      var obj2={
          partyId: "abc", 
          split: 0.6
      }
      
      const owner1 = new OwnershipObject(obj1);
      const owner2 = new OwnershipObject(obj2);
 
      var owner={}
      owner["ownershipObject1"]=owner1
      owner["ownershipObject2"]=owner2
      const ownership = new Ownership({ownershipObjects: owner});
      
      expect(ownership.checkSplit()).toEqual("error message: Ownership must sum up to 100%")
    })

    it('should return a list of ownership objects', () => {
      var obj1={
          partyId: "xyz", 
          split: 0.5
      }
      var obj2={
          partyId: "abc", 
          split: 0.5
      }
      
      const owner1 = new OwnershipObject(obj1);
      const owner2 = new OwnershipObject(obj2);
 
      var owner={}
      owner["ownershipObject1"]=owner1
      owner["ownershipObject2"]=owner2
      const ownership = new Ownership({ownershipObjects: owner});

      var receivedData={
          ownershipObjects:
          {
              ownershipObject1:
              {
                  partyId: "xyz",
                  split: 0.5
              },
              ownershipObject2:
              {
                  partyId: "abc",
                  split: 0.5
              }
          }
      }  
      expect(ownership).toEqual(receivedData)
    })      
 })
})