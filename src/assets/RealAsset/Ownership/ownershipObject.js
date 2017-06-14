import { AMaaSModel } from '../../../core'
import Decimal from 'decimal.js'
/**
 * Class representing an Address
 * @memberof module:assets
 * @extends module:core.AMaaSModel
 */
class OwnershipObject {
/**
   * Construct a new OwnershipObject instance
   * @param {object} params - OwnershipObject creation options
   * @param {string} params.partyId
   * @param {Decimal} params.split
*/
constructor({
      partyId,
      split= 0.5,
    }){
     this.partyId=partyId
     this.split=split
    }
}
export {OwnershipObject}