import { AMaaSModel } from '../../core'

class PartyChild extends AMaaSModel {
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
