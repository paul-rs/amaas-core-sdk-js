import { AMaaSModel } from '../../core'

/**
 * Class representing a Party (a Transaction children type)
 * @extends AMaaSModel
 */
class PartyChild extends AMaaSModel {
  /**
   * @param {string} partyId - ID of the linked Party
   * @param {bool} active - Whether this Party as a child is active (Note: NOT whether the linked Party itself is active)
   * @param {string} createdBy - ID of the user that created this object (required if creating a new linked Party)
   * @param {string} updatedBy - ID of the user that updated this object (use if amending existing linked Party)
   * @param {date} createdTime - Time that the linked Party was created (required if creating new linked Party)
   * @param {date} updatedTime - Time that the linked Party was updated (required if amending existing linked Party)
   * @param {number} version - Version number of the linked Party
   */
  constructor({ partyId, active, createdBy, createdTime, updatedBy, updatedTime, version }) {
    super({
      createdBy,
      createdTime,
      updatedBy,
      updatedTime,
      version
    })
    this.partyId = partyId
    this.active = active
  }

  set active(newActive) {
    switch (newActive) {
      case false:
        this._active = false
        break
      case undefined:
        this._active = true
        break
      default:
        this._active = newActive
    }
  }

  get active() {
    return this._active
  }
}

export default PartyChild
