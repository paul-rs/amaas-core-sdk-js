import { AMaaSModel } from '../../core'
import uuid from 'uuid'

/**
 * Class representing a Book
 * @extends AMaaSModel
 */
class Book extends AMaaSModel {
  /**
   * Construct a new Book object
   * @param {object} params - Book creation options
   * @param {integer} params.assetManagerId - ID of Book's Asset Manager
   * @param {string} params.bookId - ID of this Book
   * @param {string} params.bookStatus - status of Book (e.g. Active, Retired, Superseded)
   * @param {integer} params.ownerId - ID of the owner of the Book
   * @param {string} params.closeTime - Book close time. This is stored as local time, to be referenced against timezone
   * @param {string} params.timezone - Book's timezone (use this to determine absolute close time)
   * @param {string} params.description - Description of the book
   * @param {Array} params.positions - Array of objects [{asset_id: quantity}]
   * @param {string} params.createdBy - ID of the user that created this object (required if creating a new Book)
   * @param {string} params.updatedBy - ID of the user that updated this object (use if amending existing Book)
   * @param {date} params.createdTime - Time that the Book was created (required if creating new Book)
   * @param {date} params.updatedTime - Time that the Book was updated (required if amending existing Book)
   * @param {number} params.version - Version number of the Book
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
