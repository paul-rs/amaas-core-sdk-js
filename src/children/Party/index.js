import { AMaaSModel } from '../../core'

/**
 * Class representing a Party (a Transaction children type)
 * @memberof module:transactions
 * @extends module:core.AMaaSModel
 */
class PartyChild extends AMaaSModel {
  /**
   * Construct a new PartyChild object
   * @param {object} params - PartyChild creation options
   * @param {string} params.partyId - ID of the linked Party
   * @param {bool} params.active - Whether this Party as a child is active (Note: NOT whether the linked Party itself is active)
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new linked Party)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing linked Party)
   * @param {date} params.createdTime - Time that the linked Party was created (required if creating new linked Party)
   * @param {date} params.updatedTime - Time that the linked Party was updated (required if amending existing linked Party)
   * @param {number} params.version - Version number of the linked Party
   */
  constructor({
    partyId,
    active,
    createdBy,
    createdTime,
    updatedBy,
    updatedTime,
    version
  }) {
    super({
      createdBy,
      createdTime,
      updatedBy,
      updatedTime,
      version
    })
    this.partyId = partyId
    this.active = active === false ? false : true
  }
}

export default PartyChild
