import { AMaaSModel } from '../../core'
import { Reference } from '../../children'

/**
 * Class representing a Corporate Actions
 * @memberof module:corporateActions
 * @extends module:core.AMaaSModel
 */
 class CorporateAction extends AMaaSModel {
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
       version
     })

     Object.defineProperties(this, {
       _references: { writable: true, enumerable: false },
       references: {
         get: () => this._references,
         set: (newReferences) => {
           if (newReferences) {
             let refClass = {
               AMaaS: new Reference({ referenceValue: corporateActionId })
             }
             for (let name in newReferences) {
               if (newReferences.hasOwnProperty(name)) {
                 refClass[name] = new Reference(newReferences[name])
               }
             }
             this._references = refClass
           } else {
             this._references = {
               AMaaS: new Reference({ referenceValue: corporateActionId })
             }
           }
         }, enumerable: true
       }
     })

     this.assetManagerId = assetManagerId
     this.corporateActionId = corporateActionId
     this.corporateActionType = this.constructor.name
     this.corporateActionStatus = corporateActionStatus
     this.recordDate = recordDate
     this.declaredDate = declaredDate
     this.settlementDate = settlementDate
     this.assetId = assetId
     this.partyId = partyId
     this.elective = elective
     this.message = message
     this.description = description
     this.references = references
   }
 }

export default CorporateAction
