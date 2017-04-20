import { AMaaSModel } from '../../core'
import { Comment, Link, Reference } from '../../children'

/**
 * Class representing an Asset
 * @memberof module:Assets.class
 * @extends module:Core.AMaaSModel
 */
class Asset extends AMaaSModel {
  /**
   * Construct a new Asset instance
   * @param {object} params - Asset creation options
   * @param {integer} params.assetManagerId - ID of Asset's Asset Manager (required)
   * @param {integer} params.assetId - ID of the Asset (required)
   * @param {string} params.assetClass - Class of the Asset
   * @param {bool} params.fungible - Whether this Asset is fungible (required)
   * @param {string} params.assetIssuerId - ID of the Asset's issuer
   * @param {string} params.assetStatus - Status of the Asset (e.g. 'Active')
   * @param {string} params.countryId - ID of Asset's country
   * @param {string} params.venueId - ID of Asset's venue if applicable
   * @param {string} params.currency - Asset currency (e.g. USD, SGD)
   * @param {string} params.issueDate - Issue date if applicable (YYYY-MM-DD)
   * @param {string} params.maturityDate - Maturity date if applicable (YYYY-MM-DD)
   * @param {string} params.description - Description of the Asset
   * @param {string} params.clientId - ID of the client to which the Asset belongs
   * @param {object} params.comments - Object of Comments attached to the Asset
   * @param {object} params.links - Object of array of Links attached to the Asset
   * @param {object} params.references - Object of References associated with this Asset
   * @param {object} params.clientAdditional - Object of custom properties for creating a Custom Asset (set in the Custom Asset class)
   * @param {string} params.createdBy - ID of the user that created the Asset
   * @param {string} params.updatedBy - ID of the user that updated the Asset
   * @param {date} params.createdTime - Time that the Asset was created
   * @param {date} params.updatedTime - Time that the Asset was updated
   * @param {number} params.version - Version number
  */
  constructor({
    assetManagerId,
    assetId,
    assetClass='Asset',
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
    comments,
    links,
    references,
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version,
    ...clientAdditional,
  }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })

    Object.defineProperties(this, {
      _issueDate: { writable: true, enumerable: false },
      issueDate: {
        get: () => this._issueDate,
        set: (newIssueDate) => {
          // Accepts string 'yyyy-mm-dd'
          if (newIssueDate) {
            const dArray = newIssueDate.split('-')
            const date = new Date(dArray[0], dArray[1]-1, dArray[2])
            this._issueDate = date
          }
        },
        enumerable: true
      },
      _maturityDate: { writable: true, enumerable: false },
      maturityDate: {
        get: () => this._maturityDate,
        set: (newMaturityDate) => {
          // Accepts string 'yyyy-mm-dd'
          if (newMaturityDate) {
            const dArray = newMaturityDate.split('-')
            const date = new Date(dArray[0], dArray[1]-1, dArray[2])
            this._maturityDate = date
          }
        },
        enumerable: true
      },
      _comments: { writable: true, enumerable: false },
      comments: {
        get: () => this._comments,
        set: (newComments) => {
          if (newComments) {
            let commentsClass = {}
            for (let name in newComments) {
              if (newComments.hasOwnProperty(name)) {
                commentsClass[name] = new Comment(newComments[name])
              }
            }
            this._comments = commentsClass
          } else {
            this._comments = {}
          }
        },
        enumerable: true
      },
      _links: { writable: true, enumerable: false },
      links: {
        get: () => this._links,
        set: (newLinks) => {
          if (newLinks) {
            let linksClass = {}
            for (let name in newLinks) {
              if (newLinks.hasOwnProperty(name)) {
                // TODO: Remove this when the API returns Arrays for all Links
                if (newLinks[name] instanceof Array) {
                  linksClass[name] = newLinks[name].map(link => {
                    return new Link(link)
                  })
                } else {
                  console.warn('All Links should be Arrays: if you are seeing this message then a non-Array link has been encountered and it will be skipped for now')
                }
              }
            }
            this._links = linksClass
          } else {
            this._links = {}
          }
        }
      },
      _references: { writable: true, enumerable: false },
      references: {
        get: () => this._references,
        set: (newReferences) => {
          if (newReferences) {
            let refClass = {
              AMaaS: new Reference({ referenceValue: assetId })
            }
            for (let name in newReferences) {
              if (newReferences.hasOwnProperty(name)) {
                refClass[name] = new Reference(newReferences[name])
              }
            }
            this._references = refClass
          } else {
            this._references = {
              AMaaS: new Reference({ referenceValue: assetId })
            }
          }
        }, enumerable: true
      }
    })

    this.assetManagerId = assetManagerId
    this.assetId = assetId
    this.assetClass = assetClass
    this.assetType = this.constructor.name
    this.fungible = fungible
    this.assetIssuerId = assetIssuerId
    this.assetStatus = assetStatus
    this.countryId = countryId
    this.venueId = venueId
    this.currency = currency
    this.issueDate = issueDate
    this.maturityDate = maturityDate
    this.description = description
    this.clientId = clientId
    this.comments = comments
    this.links = links
    this.references = references
  }
}

export default Asset
