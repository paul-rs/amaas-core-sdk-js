import Organisation from '../Organisation/organisation.js'

/**
 * Class representing a Company
 * @extends Organisation
 */
class Company extends Organisation {
  /**
   * Construct a new Company object
   * @param {object} params - Company creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Company
   * @param {string} params.partyId - Party ID of the Company
   * @param {string} params.partyStatus - Status of the Company (e.g. 'Active')
   * @param {string} params.partyClass=Company - Class of the Company
   * @param {string} params.partyType=Company - Type of the Company
   * @param {string} params.description - Description of the Company
   * @param {object} params.addresses - Object of Addresses associated with this Company
   * @param (object) params.emails - Object of Emails associated with this Company
   * @param {object} params.references - Object of References associated with this Company
   * @param {string} params.createdBy - ID of the user that created the Company (required if creating a new Company)
   * @param {string} params.updatedBy - ID of the user that updated the Company (use if amending existing Company)
   * @param {date} params.createdTime - Time that the Company was created (required if creating new Company)
   * @param {date} params.updatedTime - Time that the Company was updated (required if amending existing Company)
   * @param {number} params.version - Version number of the Company
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
    partyClass='Company',
    baseCurrency,
    description='',
    addresses={},
    emails={},
    references={},
    comments={},
    links={},
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      assetManagerId,
      partyId,
      partyStatus,
      partyClass,
      baseCurrency,
      description,
      addresses,
      emails,
      references,
      comments,
      links,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
  }
}

export default Company
