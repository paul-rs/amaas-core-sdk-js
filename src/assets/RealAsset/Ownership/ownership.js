import {OwnerhsipObject} from './ownershipObject'
import { AMaaSModel } from '../../../core'

class Ownership {
/**
   * Construct a new OwnershipObject instance
   * @param {object} params - Ownership creation options
   * @param {OwnershipObject} params.ownershipObjects
*/
constructor({
      ownershipObjects
    }){
     this.ownershipObjects=ownershipObjects;
    } 

  checkSplit(){
   let splitSum=0; 
   
   var arrayKey=Object.keys(this.ownershipObjects)
   
   for(var i=0; i<arrayKey.length; i++)
   {
     var currentKey = arrayKey[i];
     var getObject=this.ownershipObjects[currentKey]
     var splitValue=this.ownershipObjects[currentKey].split
     if(isNaN(splitValue)) return "error message: split has to be a number"
     
     splitSum=splitSum+splitValue
   }

   if(splitSum>1) return "error message: Ownership must sum up to 100%";
  
  }

}

export  {Ownership}

