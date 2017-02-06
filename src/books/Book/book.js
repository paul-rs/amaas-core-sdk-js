import { AMaaSModel } from '../../core'
import uuid from 'uuid'

/**
 * Class representing a Book
 * @extends AMaaSModel
 */
class Book extends AMaaSModel {
  /**
   * Construct a new Book object
   * @param {integer} assetManagerId - ID of Book's Asset Manager
   * @param {string} bookId - ID of this Book
   * @param {string} bookStatus - status of Book (e.g. Active, Retired, Superseded)
   * @param {integer} ownerId - ID of the owner of the Book
   * @param {string} closeTime - Book close time. This is stored as local time, to be referenced against timezone
   * @param {string} timezone - Book's timezone (use this to determine absolute close time)
   * @param {string} description - Description of the book
   * @param {Array} positions - Array of objects [{asset_id: quantity}]
   * @param {string} createdBy - ID of the user that created this object (required if creating a new Book)
   * @param {string} updatedBy - ID of the user that updated this object (use if amending existing Book)
   * @param {date} createdTime - Time that the Book was created (required if creating new Book)
   * @param {date} updatedTime - Time that the Book was updated (required if amending existing Book)
   * @param {number} version - Version number of the Book
   */
  constructor({ assetManagerId, bookId=uuid(), bookStatus='Active', ownerId, closeTime, timezone='UTC', description='', positions, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.assetManagerId = assetManagerId
    this.bookId = bookId
    this.bookStatus = bookStatus
    this.ownerId = ownerId
    this.closeTime = closeTime
    this.timezone = timezone
    this.description = description
    this.positions = positions
  }

  positionsByAsset() {
    // TODO: Iterate over the positions array and sum by asset_id
  }
}

export default Book
