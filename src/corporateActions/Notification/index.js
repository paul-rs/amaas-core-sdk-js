import CorporateAction from '../CorporateAction'

/**
 * Class representing a Notification
 * @memberof module:corporateActions
 * @extends module:corporateActions.CorporateAction
 */
 class Notification extends CorporateAction {
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
   }
 }

 export default Notification
