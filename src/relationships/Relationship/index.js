import { AMaaSModel } from '../../core'
import { RELATIONSHIP_TYPES } from '../enums'

/**
 * Class representing a Relationship
 * @memberof module:AssetManagers.Class
 * @extends module:Core.AMaaSModel
 */
class Relationship extends AMaaSModel {
  /**
   * Construct a new Relationship instance
   * @param {object} params - Relationship creation options
   * @param {number} params.assetManagerId - ID of the Asset Manager who owns this Relationship
   * @param {number} params.relationId - ID of the Asset Manager to whom this Relationship connects
   * @param {string} params.relationshipType - The type of Relationship between these Asset Managers
   * @param {string} params.clientId - The client ID that owns this Relationship
   * @param {string} params.relationshipStatus - The status of the Relationship
   * @param {string} params.createdBy - ID of the user that created the Relationship
   * @param {string} params.updatedBy - ID of the user that updated the Relationship
   * @param {date} params.createdTime - Time that the Relationship was created
   * @param {date} params.updatedTime - Time that the Relationship was updated
   * @param {number} params.version - Version number of the Relationship
   */
  constructor({
    assetManagerId,
    relationId,
    relationshipType,
    clientId,
    relationshipStatus,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _relationshipType: { writable: true, enumerable: false },
      relationshipType: {
        get: () => this._relationshipType,
        set: (newRelationshipType) => {
          if (newRelationshipType) {
            if (RELATIONSHIP_TYPES.indexOf(newRelationshipType) == -1) {
              throw new Error(`Invalid Relationship Type: ${newRelationshipType}`)
            } else {
              this._relationshipType = newRelationshipType
            }
          }
        }, enumerable: true
      }
    })
    this.assetManagerId = assetManagerId
    this.relationId = relationId
    this.clientId = clientId
    this.relationshipStatus = relationshipStatus
    this.relationshipType = relationshipType
  }
}

export default Relationship
