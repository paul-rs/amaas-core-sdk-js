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
      const ownership = new Ownership({owner1, owner2});
       
      expect(ownership.checkSplit()).toEqual("error message: Ownership must sum up to 100%")
    })    
 })
})