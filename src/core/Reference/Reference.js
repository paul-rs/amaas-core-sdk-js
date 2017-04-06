import { AMaaSModel } from '../'

/**
 * Class representing a Reference
 * @extends AMaaSModel
 */
class Reference extends AMaaSModel {
  /**
    * Construct a new Reference object
    * @param {object} params - Reference creation options
    * @param {string} params.referenceValue - The identifier of this Reference (e.g. transactionId)
    * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Reference)
    * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Reference)
    * @param {date} params.createdTime - Time that the Reference was created (required if creating new Reference)
    * @param {date} params.updatedTime - Time that the Reference was updated (required if amending existing Reference)
    * @param {number} params.version - Version number of the Reference
  */
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

  // set active(newActive) {
  //   switch (newActive) {
  //     case false:
  //       this._active = false
  //       break
  //     case undefined:
  //       this._active = true
  //       break
  //     default:
  //       this._active = newActive
  //   }
  // }
  //
  // get active() {
  //   return this._active
  // }


  // toJSON() {
  //   return Object.assign({}, {
  //     active: this.active
  //   }, this)
    // return {
    //   reference_value: this.referenceValue,
    //   active: this.active,
    //   created_by: this.createdBy,
    //   updated_by: this.updatedBy,
    //   created_time: this.createdTime,
    //   updated_time: this.updatedTime,
    //   version: this.version
    // }
  // }

}

export default Reference
