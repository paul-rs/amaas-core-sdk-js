import {OwnerhsipObject} from './ownershipObject'
import { AMaaSModel } from '../../../core'
import Decimal from 'decimal.js'

class Ownership {
/**
   * Construct a new OwnershipObject instance
   * @param {object} params - Ownership creation options
   * @param {OwnershipObject} params.ownershipObjects
*/
constructor({
      ownershipObjects
    }){
     Object.defineProperties(this, {
     _ownershipObjects: { writable: true, enumerable: false },
      ownershipObjects: {
        get: () => this._ownershipObjects,
        set: (newOwnershipObjects) => {
          if (newOwnershipObjects) {
            let ownershipObjects = {}
            for (let os in ownershipObjects) {
              if (ownershipObjects.hasOwnProperty(os)) {
                ownershipObjects[os] = new OwnershipObject(Object.assign({}, newOwnershipObjects[os]))
              }
            }
            this._ownershipObjects = ownershipObjects
          }
        },
        enumerable: true
      }
    })
     this.ownershipObjects=ownershipObjects;
    } 

  checkSplit(){
   let splitSum=0; 
   for(let splitValue in this.split)
   {
     splitSum=splitSum.plus(this.splitSum[splitValue])
   }
    
   if(!splitSum==1) return "error message: Ownership must sum up to 100%";
  }
}

export  {Ownership}

