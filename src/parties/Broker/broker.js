import Company from '../Company/company.js'

/**
 * Class representing a Broker
 * @extends Company
 */
class Broker extends Company {
  /**
   * @param {object} params - Broker creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Broker
   * @param {string} params.partyId - Party ID of the Broker
   * @param {string} params.partyStatus - Status of the Broker (e.g. 'Active')
   * @param {string} params.partyClass - Class of the Broker
   * @param {string} params.description - Description of the Broker
   * @param {object} params.addresses - Object of Addresses associated with this Broker
   * @param (object) params.emails - Object of Emails associated with this Broker
   * @param {object} params.references - Object of References associated with this Broker
   * @param {string} params.createdBy - ID of the user that created the Broker (required if creating a new Broker)
   * @param {string} params.updatedBy - ID of the user that updated the Broker (use if amending existing Broker)
   * @param {date} params.createdTime - Time that the Broker was created (required if creating new Broker)
   * @param {date} params.updatedTime - Time that the Broker was updated (required if amending existing Broker)
   * @param {number} params.version - Version number of the Broker
   */
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Company', partyType='Broker', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
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

  toJSON() {
    return {
      asset_manager_id: this.assetManagerId,
      party_id: this.partyId,
      party_status: this.partyStatus,
      party_class: this.partyClass,
      party_type: this.partyType,
      description: this.description,
      addresses: this.addresses,
      emails: this.emails,
      references: this.references,
      created_by: this.createdBy,
      updated_by: this.updatedBy,
      created_time: this.createdTime,
      updated_time: this.updatedTime,
      version: this.version
    }
  }
}

export default Broker
