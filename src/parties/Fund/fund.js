import Company from '../Company/company.js'

/**
 * Class representing a Fund
 * @extends Company
 */
class Fund extends Company {
  /**
   * Construct a new Fund object
   * @param {object} params - Fund creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Fund
   * @param {string} params.partyId - Party ID of the Fund
   * @param {string} params.partyStatus=Active - Status of the Fund (e.g. 'Active')
   * @param {string} params.partyClass=Company - Class of the Fund
   * @param {string} params.partyType=Fund - Type of the Fund
   * @param {string} params.description - Description of the Fund
   * @param {object} params.addresses - Object of Addresses associated with this Fund
   * @param (object) params.emails - Object of Emails associated with this Fund
   * @param {object} params.references - Object of References associated with this Fund
   * @param {string} params.createdBy - ID of the user that created the Fund (required if creating a new Fund)
   * @param {string} params.updatedBy - ID of the user that updated the Fund (use if amending existing Fund)
   * @param {date} params.createdTime - Time that the Fund was created (required if creating new Fund)
   * @param {date} params.updatedTime - Time that the Fund was updated (required if amending existing Fund)
   * @param {number} params.version - Version number of the Fund
   */
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Company', partyType='Fund', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      assetManagerId,
      partyId,
      partyStatus,
      partyClass,
      partyType,
      description,
      addresses,
      emails,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
  }


  // toJSON() {
  //   return Object.assign({}, {
  //     addresses: this.addresses,
  //     emails: this.emails,
  //     references: this.references
  //   }, this)
    // return {
    //   asset_manager_id: this.assetManagerId,
    //   party_id: this.partyId,
    //   party_status: this.partyStatus,
    //   party_class: this.partyClass,
    //   party_type: this.partyType,
    //   description: this.description,
    //   addresses: this.addresses,
    //   emails: this.emails,
    //   references: this.references,
    //   created_by: this.createdBy,
    //   updated_by: this.updatedBy,
    //   created_time: this.createdTime,
    //   updated_time: this.updatedTime,
    //   version: this.version
    // }
  // }

}

export default Fund
