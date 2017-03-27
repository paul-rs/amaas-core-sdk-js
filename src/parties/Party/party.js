import { AMaaSModel } from '../../core'
import { Address, Email } from '../Children'

import { retrieveData } from '../../utils/network'

/**
 * Class representing a Party
 * @extends AMaaSModel
 */
class Party extends AMaaSModel {
  /**
   * Construct a new Party object
   * @param {object} params - Party creation options
   * @param {number} params.assetManagerId - Asset Manager ID of the Party
   * @param {string} params.partyId - Party ID of the Party
   * @param {string} params.partyStatus=Active - Status of the Party (e.g. 'Active')
   * @param {string} params.partyClass=Party - Class of the Party
   * @param {string} params.partyType=Party - Type of the Party
   * @param {string} params.description - Description of the Party
   * @param {object} params.addresses - Object of Addresses associated with this Party
   * @param (object) params.emails - Object of Emails associated with this Party
   * @param {object} params.references - Object of References associated with this Party
   * @param {string} params.createdBy - ID of the user that created the Party (required if creating a new Party)
   * @param {string} params.updatedBy - ID of the user that updated the Party (use if amending existing Party)
   * @param {date} params.createdTime - Time that the Party was created (required if creating new Party)
   * @param {date} params.updatedTime - Time that the Party was updated (required if amending existing Party)
   * @param {number} params.version - Version number of the Party
   */
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Party', partyType='Party', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
    this.assetManagerId = assetManagerId
    this.partyId = partyId
    this.partyStatus = partyStatus
    this.partyClass = partyClass
    this.partyType = partyType
    this.description = description
    this.addresses = addresses
    this.emails = emails
    this.references = references
  }

  set addresses(newAddresses) {
    if (Object.keys(newAddresses).length > 0) {
      let primaryAdd = 0
      for (let type in newAddresses) {
        if (newAddresses.hasOwnProperty(type)) {
          this._checkTypes('address', newAddresses[type], Address)
          if (newAddresses[type].addressPrimary) {
            primaryAdd++
          }
        }
      }
      if (primaryAdd != 1) {
        throw new Error('Exactly 1 primary address is allowed')
      }
      this._addresses = newAddresses
    } else {
      this._addresses = {}
    }
  }

  get addresses() {
    return this._addresses
  }

  /**
   * Upsert an Address
   * @param {string} type - Type of Address (e.g. 'Registered', 'Legal')
   * @param {Address} address - new Address. Note that the new Address cannot be primary if a primary Address already exists. Use this.addresses setter to replace primary Addresses (??)
   */
  upsertAddress(type, address) {
    const addresses = Object.assign({}, this.addresses)
    addresses[type] = address
    this.addresses = addresses
  }

  set emails(newEmails) {
    if (Object.keys(newEmails).length > 0) {
      let primaryEmail = 0
      for (let type in newEmails) {
        if (newEmails.hasOwnProperty(type)) {
          this._checkTypes('email', newEmails[type], Email)
          this._checkEmail(newEmails[type].email)
          if (newEmails[type].emailPrimary) {
            primaryEmail++
          }
        }
      }
      if (primaryEmail != 1) {
        throw new Error('Exactly 1 primary email is allowed')
      }
      this._emails = newEmails
    } else {
      this._emails = {}
    }
  }

  get emails() {
    return this._emails
  }

  /**
   * Upsert an Email
   * @param {string} type - Type of Email (e.g. 'Work', 'Support')
   * @param {Emails} email - new Email. Note that the new Email cannot be primary if a primary Email already exists. Use this.emails setter to replace primary Emails (??)
   */
  upsertEmail(type, email) {
    const emails = Object.assign({}, this.emails)
    emails[type] = email
    this.emails = emails
  }

  // Check that the object has the correct type
  _checkTypes(type, contact, classType) {
    if (!(contact instanceof classType)) {
      throw new Error(`Found ${type} with wrong class`)
    }
  }

  // Check if input is a valid email string
  _checkEmail(email) {
    const regex = new RegExp('^.+@.+\..+$')
    if (!regex.test(email)) {
      throw new Error('Not a valid email')
    }
  }

  toJSON() {
    return {
      asset_manager_id: this.assetManagerId,
      party_id: this.partyId,
      party_status: this.partyStatus,
      party_class: this.partyClass,
      party_type: this.partyType,
      description: this.description,
      addresses: this.addresses,
      emails: this.emails,
      references: this.references,
      created_by: this.createdBy,
      updated_by: this.updatedBy,
      created_time: this.createdTime,
      updated_time: this.updatedTime,
      version: this.version
    }
  }
}

export default Party
