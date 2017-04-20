import { AMaaSModel } from '../'

class Reference extends AMaaSModel {
  constructor({ referenceValue, active, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _active: { writable: true, enumerable: false },
      active: {
        get: () => this._active,
        set: (newActive) => {
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
        }, enumerable: true
      }
    })
    this.referenceValue = referenceValue
    this.active = active
  }
}

export default Reference
