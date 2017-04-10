import { AMaaSModel } from '../../core'
import { RelationshipTypes } from './types'

/**
 * Class representing a Relationship
 * @extends AMaaSModel
 */
class Relationship extends AMaaSModel {
  /**
   * Construct a new Relationship instance
   * @param {object} params - Relationship creation options
   * @param {number} assetManagerId - ID of the Asset Manager who owns this Relationship
   * @param {number} relationId - ID of the Asset Manager to whom this Relationship connects
   * @param {string} relationshipType - The type of Relationship between these Asset Managers
   * @param {string} clientId - The client ID that owns this Relationship
   * @param {relationshipStatus} - The status of the Relationship
   * @param {string} params.createdBy - ID of the user that created the Relationship (required if creating a new Relationship)
   * @param {string} params.updatedBy - ID of the user that updated the Relationship (use if amending existing Relationship)
   * @param {date} params.createdTime - Time that the Relationship was created (required if creating new Relationship)
   * @param {date} params.updatedTime - Time that the Relationship was updated (required if amending existing Relationship)
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
            if (RelationshipTypes.indexOf(newRelationshipType) == -1) {
              throw new Error('Invalid Relationship Type')
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
