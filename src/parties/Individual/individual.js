import Party from '../Party/party.js'

/**
 * Class representing an Individual
 * @extends Party
 */
class Individual extends Party {
  /**
   * Construct a new Individual object
   * @param {object} params - Individual creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Individual
   * @param {string} params.partyId - Party ID of the Individual
   * @param {string} params.partyStatus=Active - Status of the Individual (e.g. 'Active')
   * @param {string} params.partyClass=Individual - Class of the Individual
   * @param {string} params.partyType=Individual - Type of the Individual
   * @param {string} params.description - Description of the Individual
   * @param {object} params.addresses - Object of Addresses associated with this Individual
   * @param (object) params.emails - Object of Emails associated with this Individual
   * @param {object} params.references - Object of References associated with this Individual
   * @param {string} params.createdBy - ID of the user that created the Individual (required if creating a new Individual)
   * @param {string} params.updatedBy - ID of the user that updated the Individual (use if amending existing Individual)
   * @param {date} params.createdTime - Time that the Individual was created (required if creating new Individual)
   * @param {date} params.updatedTime - Time that the Individual was updated (required if amending existing Individual)
   * @param {number} params.version - Version number of the Individual
   */
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Individual', partyType='Individual', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
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
      created_time: this.createdTime,
      updated_by: this.updatedBy,
      updated_time: this.updatedTime,
      version: this.version
    }
  }
}

export default Individual
