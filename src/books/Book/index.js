import { AMaaSModel } from '../../core'
import uuid from 'uuid'

/** @class **/
class Book extends AMaaSModel {
  /**
   * @param {object} bookData: creation options
   * @param {integer} assetManagerId: ID of Book's Asset Manager
   * @param {string} bookId: ID of this book
   * @param {string} bookStatus: status of book (e.g. Active, Retired, Superseded)
   * @param {integer} ownerId: ID of the owner of the book
   * @param {string} closeTime: Book close time. This is stored as local time, to be referenced against timezone
   * @param {string} timezone: Book's timezone (use this to determine absolute close time)
   * @param {string} description: Description of the book
   * @param {Array} positions: Array of objects [{asset_id: quantity}]
   * @param {object} coreData: AMaaSModel constructor options
  */
  constructor({ assetManagerId, bookId, bookStatus, ownerId, closeTime, timezone, description, positions }, args, coreData) {
    super(args, coreData)
    this.assetManagerId = assetManagerId
    this.bookId = bookId || uuid()
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
