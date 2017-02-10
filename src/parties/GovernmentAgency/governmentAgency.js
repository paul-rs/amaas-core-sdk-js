import Organisation from '../Organisation/organisation.js'

/**
 * Class representing a Government Agency
 * @extends Organisation
 */
class GovernmentAgency extends Organisation {
  /**
   * Construct a new GovernmentAgency object
   * @param {object} params - GovernmentAgency creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Government Agency
   * @param {string} params.partyId - Party ID of the Government Agency
   * @param {string} params.partyStatus=Active - Status of the Government Agency (e.g. 'Active')
   * @param {string} params.partyClass=Organisation - Class of the Government Agency
   * @param {string} params.partyType=GovernmentAgency - Type of the Government Agency
   * @param {string} params.description - Description of the Government Agency
   * @param {object} params.addresses - Object of Addresses associated with this Government Agency
   * @param (object) params.emails - Object of Emails associated with this Government Agency
   * @param {object} params.references - Object of References associated with this Government Agency
   * @param {string} params.createdBy - ID of the user that created the Government Agency (required if creating a new Government Agency)
   * @param {string} params.updatedBy - ID of the user that updated the Government Agency (use if amending existing Government Agency)
   * @param {date} params.createdTime - Time that the Government Agency was created (required if creating new Government Agency)
   * @param {date} params.updatedTime - Time that the Government Agency was updated (required if amending existing Government Agency)
   * @param {number} params.version - Version number of the Government Agency
   */
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Organisation', partyType='GovernmentAgency', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
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

export default GovernmentAgency
