import Company from '../Company/company.js'

/**
 * Class representing an Exchange
 * @extends Company
 */
class Exchange extends Company {
  /**
   * Construct a new Exchange object
   * @param {object} params - Exchange creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Exchange
   * @param {string} params.partyId - Party ID of the Exchange
   * @param {string} params.partyStatus=Active - Status of the Exchange (e.g. 'Active')
   * @param {string} params.partyClass=Company - Class of the Exchange
   * @param {string} params.partyType=Exchange - Class of the Exchange
   * @param {string} params.description - Description of the Exchange
   * @param {object} params.addresses - Object of Addresses associated with this Exchange
   * @param (object) params.emails - Object of Emails associated with this Exchange
   * @param {object} params.references - Object of References associated with this Exchange
   * @param {string} params.createdBy - ID of the user that created the Exchange (required if creating a new Exchange)
   * @param {string} params.updatedBy - ID of the user that updated the Exchange (use if amending existing Exchange)
   * @param {date} params.createdTime - Time that the Exchange was created (required if creating new Exchange)
   * @param {date} params.updatedTime - Time that the Exchange was updated (required if amending existing Exchange)
   * @param {number} params.version - Version number of the Exchange
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
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

export default Exchange
