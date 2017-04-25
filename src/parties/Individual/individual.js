import Party from '../Party/party.js'

/**
 * Class representing an Individual
 * @memberof module:parties
 * @extends module:parties.Party
 */
class Individual extends Party {
  /**
   * Construct a new Individual instance
   * @param {object} params - Individual creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Individual
   * @param {string} params.partyId - Party ID of the Individual
   * @param {string} params.partyStatus=Active - Status of the Individual (e.g. 'Active')
   * @param {string} params.partyClass=Individual - Class of the Individual
   * @param {string} params.baseCurrency - Base Currency of the Individual (e.g. SGD, USD)
   * @param {string} params.description - Description of the Individual
   * @param {string} params.givenNames - Individual's given names
   * @param {string} params.surname - Individual's surname
   * @param {string} params.dateOfBirth - Individual's date of birth (YYYY-MM-DD)
   * @param {object} params.addresses - Object of Addresses associated with this Individual
   * @param (object) params.emails - Object of Emails associated with this Individual
   * @param {object} params.references - Object of References associated with this Individual
   * @param {object} params.comments - Object of Comments associated with this Individual
   * @param {object} params.links - Object of Links associated with this Individual
   * @param {string} params.createdBy - ID of the user that created the Individual
   * @param {string} params.updatedBy - ID of the user that updated the Individual
   * @param {date} params.createdTime - Time that the Individual was created
   * @param {date} params.updatedTime - Time that the Individual was updated
   * @param {number} params.version - Version number of the Individual
   */
  constructor({
    assetManagerId,
    partyId,
    partyStatus='Active',
    partyClass='Individual',
    baseCurrency,
    description,
    givenNames,
    surname,
    dateOfBirth,
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
      description: description || `${givenNames} ${surname}`,
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
    this.givenNames = givenNames
    this.surname = surname
    this.dateOfBirth = dateOfBirth
  }
}

export default Individual
