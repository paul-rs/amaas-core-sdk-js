import CorporateAction from '../CorporateAction'

/**
 * Class representing a Split
 * @memberof module:corporateActions
 * @extends module:corporateActions.CorporateAction
 */
 class Split extends CorporateAction {
   constructor({
     assetManagerId,
     corporateActionId,
     corporateActionStatus,
     recordDate,
     declaredDate,
     settlementDate,
     assetId,
     partyId,
     elective,
     message,
     ratio,
     description,
     references,
     createdBy,
     updatedBy,
     createdTime,
     updatedTime,
     version,
   }) {
     super({
       createdBy,
       updatedBy,
       createdTime,
       updatedTime,
       version,
     })

     this.ratio = ratio

   }
 }

 export default Split
