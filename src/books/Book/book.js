import uuid from 'uuid'

import { AMaaSModel } from '../../core'
import { BOOK_TYPES } from './enums'

/**
 * Class representing a Book
 * @memberof module:Books.Class
 * @extends module:Core.AMaaSModel
 */
class Book extends AMaaSModel {
  /**
   * Construct a new Book object
   * @param {object} params - Book creation options
   * @param {integer} params.assetManagerId - ID of Book's Asset Manager
   * @param {string} params.bookId - ID of this Book
   * @param {string} params.bookType - Book Type
   * @param {string} params.bookStatus - status of Book (e.g. Active, Retired, Superseded)
   * @param {integer} params.ownerId - ID of the owner of the Book (e.g. the Trader who is responsible for the Book)
   * @param {integer} params.partyId - ID of the party of which the activity being tracked belongs (e.g. Registered fund or HNWI)
   * @param {string} params.closeTime - Book close time. This is stored as local time, to be referenced against timezone
   * @param {string} params.timezone - Book's timezone (use this to determine absolute close time)
   * @param {string} params.baseCurrency - Base currency for the Book
   * @param {string} params.businessUnit - A business unit to associate with the Book (e.g. Emerging Markets, Equities)
   * @param {string} params.description - Description of the book
   * @param {Array} params.positions - Array of objects [{asset_id: string, quantity: number}]
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Book)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Book)
   * @param {date} params.createdTime - Time that the Book was created (required if creating new Book)
   * @param {date} params.updatedTime - Time that the Book was updated (required if amending existing Book)
   * @param {number} params.version - Version number of the Book
   */
  constructor({
    assetManagerId,
    bookId=uuid(),
    bookType='Trading',
    bookStatus='Active',
    ownerId,
    partyId,
    closeTime,
    timezone='UTC',
    baseCurrency='USD',
    businessUnit='',
    description='',
    positions=[],
    createdBy,
    updatedBy,
    createdTime,
    updatedTime,
    version
  }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    Object.defineProperties(this, {
      _bookType: { writable: true, enumerable: false },
      bookType: {
        get: () => this._bookType,
        set: (newBookType) => {
          if (newBookType) {
            if (BOOK_TYPES.indexOf(newBookType) === -1) {
              throw new Error(`Invalid Book Type: ${newBookType}`)
            }
            this._bookType = newBookType
          }
        },
        enumerable: true
      }
    })
    this.assetManagerId = assetManagerId
    this.bookId = bookId
    this.bookType = bookType
    this.bookStatus = bookStatus
    this.ownerId = ownerId
    this.partyId = partyId
    this.closeTime = closeTime
    this.timezone = timezone
    this.baseCurrency = baseCurrency
    this.businessUnit = businessUnit
    this.description = description
    this.positions = positions
  }

  positionsByAsset() {
    // TODO: Iterate over the positions array and sum by asset_id
  }
}

export default Book
