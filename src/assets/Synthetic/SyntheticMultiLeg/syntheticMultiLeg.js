import Synthetic from '../Synthetic/synthetic.js'

/**
 * Class representing a Multi-Leg Synthetic. This is an Asset which takes multiple assets as 'legs'. The value of the entire structure is equal to the sum of the legs
 * @memberof module:assets
 * @extends module:assets.Synthetic
 */
class SyntheticMultiLeg extends Synthetic {
  /**
   * Construct a new Multi-Leg Synthetic instance
   * @param {object} params - SyntheticMultiLeg creation options:
   * @param {number} params.assetManagerId - ID of Synthetic's Asset Manager __(required)__
   * @param {number} params.assetId - ID of the Synthetic __(required)__
   * @param {string} [params.assetClass=Synthetic] - Auto-set to `Synthetic` __(read-only)__
   * @param {boolean} [params.fungible=true] - Whether this Asset is fungible __(required)__
   * @param {string} [params.assetIssuerId] - ID of the Synthetic's issuer
   * @param {string} [params.assetStatus=Active] - Status of the Synthetic
   * @param {string} [params.countryId] - ID of Synthetic's country
   * @param {string} [params.venueId] - ID of Synthetic's venue if applicable
   * @param {string} [params.currency] - Synthetic currency (e.g. USD, SGD)
   * @param {string} [params.issueDate=0001-01-01] - Issue date if applicable (YYYY-MM-DD)
   * @param {string} [params.maturityDate=9999-12-31] - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} [params.description] - Description of the Synthetic
   * @param {string} [params.clientId] - ID of the associated client
   * @param {array} params.legs - Legs of the Synthetic. Array of objects of the form { assetId: `string`, quantity: `Decimal` } __(required)__
   * @param {object} [params.comments] - Object of Comments attached to the Synthetic
   * @param {object} [params.links] - Object of array of Links attached to the Synthetic
   * @param {object} [params.references={ AMaaS: Reference() }] - Object of References associated with the Synthetic
   * @param {string} [params.createdBy] - ID of the user that created the Synthetic
   * @param {string} [params.updatedBy] - ID of the user that updated the Synthetic
   * @param {date} [params.createdTime] - Time that the Synthetic was created
   * @param {date} [params.updatedTime] - Time that the Synthetic was updated
   * @param {number} [params.version] - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Synthetic',
    fungible,
    assetIssuerId,
    assetStatus='Active',
    countryId,
    venueId,
    currency,
    issueDate,
    maturityDate,
    description='',
    clientId,

    legs,

    comments,
    links,
    references,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      assetManagerId,
      assetId,
      assetClass,
      fungible,
      assetIssuerId,
      assetStatus,
      countryId,
      venueId,
      currency,
      issueDate,
      maturityDate,
      description,
      clientId,
      comments,
      links,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _legs: { writable: true, enumerable: false },
      legs: {
        get: () => this._legs,
        set: (newLegs) => {
          if (newLegs) {
            if (!Array.isArray(newLegs)) {
              throw new Error(`Invalid leg type: ${typeof newLegs}. Legs must be an array`)
            }
            this._legs = newLegs
          }
        },
        enumerable: true
      }
    })
    this.legs = legs
  }
}

export default SyntheticMultiLeg
