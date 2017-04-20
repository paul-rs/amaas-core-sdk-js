import Company from '../Company/company.js'

/**
 * Class representing an Exchange
 * @memberof module:Parties.class
 * @extends module:Parties.class.Company
 */
class Exchange extends Company {
  /**
   * Construct a new Exchange instance
   * @param {object} params - Exchange creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Exchange
   * @param {string} params.partyId - Party ID of the Exchange
   * @param {string} params.partyStatus=Active - Status of the Exchange (e.g. 'Active')
   * @param {string} params.baseCurrency - Base Currency of the Exchange (e.g. SGD, USD)
   * @param {string} params.description - Description of the Exchange
   * @param {object} params.addresses - Object of Addresses associated with this Exchange
   * @param (object) params.emails - Object of Emails associated with this Exchange
   * @param {object} params.references - Object of References associated with this Exchange
   * @param {object} params.comments - Object of Comments associated with the Exchange
   * @param {object} params.links - Object of Links associated with the Exchange
   * @param {string} params.createdBy - ID of the user that created the Exchange
   * @param {string} params.updatedBy - ID of the user that updated the Exchange
   * @param {date} params.createdTime - Time that the Exchange was created
   * @param {date} params.updatedTime - Time that the Exchange was updated
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
