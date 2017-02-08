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
      this._addAddresses(newAddresses)
    } else if (!this.addresses) {
      this._addresses = newAddresses
    } else {
      this._addresses = this.addresses
    }
  }

  get addresses() {
    return this._addresses
  }

  set emails(newEmails) {
    if (Object.keys(newEmails).length > 0) {
      this._addEmails(newEmails)
    } else if (!this.emails) {
      this._emails = newEmails
    } else {
      this._emails = this.emails
    }
  }

  get emails() {
    return this._emails
  }

  // Read the types of newContacts values and assign helper variables
  _readTypes(type, newContacts) {
    let inputTypes
    let inputPrimary
    switch (type) {
      case 'address':
        this._checkTypes(type, newContacts, Address)
        inputTypes = 'addresses'
        inputPrimary = 'addressPrimary'
        break
      case 'email':
        this._checkTypes(type, newContacts, Email)
        inputTypes = 'emails'
        inputPrimary = 'emailPrimary'
        // Check that every Email has a valid email in the email field
        for (let contact in newContacts) {
          this._checkEmail(newContacts[contact].email)
        }
        break
      default:
        this._checkTypes(type, newContacts, Address)
        inputTypes = 'addresses'
        inputPrimary = 'addressPrimary'
    }
    return { inputTypes, inputPrimary }
  }

  // Check that every value in the object has the correct type
  _checkTypes(type, contacts, classType) {
    for (let contact in contacts) {
      if (!(contacts[contact] instanceof classType)) {
        throw new Error(`Found ${type} with wrong class`)
      }
    }
  }

  // Check if input is a valid email string
  _checkEmail(email) {
    const regex = new RegExp('^.+@.+\..+$')
    if (!regex.test(email)) {
      throw new Error('Not a valid email')
    }
  }

  _validatePrimary(type, newContacts) {
    const readResult = this._readTypes(type, newContacts)
    const inputTypes = readResult.inputTypes
    const inputPrimary = readResult.inputPrimary

    // If there are no existing contacts, set the existing contacts to {}
    let existingContacts = this[inputTypes]
    if (!existingContacts) {
      existingContacts = {}
    }

    // Count the number of primary contacts in newContacts
    let primaryInNew = 0
    for (let contact in newContacts) {
      if (newContacts[contact][inputPrimary]) {
        primaryInNew++
      }
    }
    // If there are no existing contacts, then there needs to be exactly 1
    // primary contact in newContacts
    if (Object.keys(existingContacts).length == 0) {
      if (primaryInNew != 1) {
        throw new Error('Exactly 1 primary address is allowed')
      } else {
        // existingContacts = existingContacts.concat(newContacts)
        Object.assign(existingContacts, newContacts)
      }
    // If there are existing contacts, then there needs to be exactly 0
    // primary contacts in newContacts (because existence of existing contacts
    // implies existence of exactly 1 primary contact)
    } else {
      if (primaryInNew != 0) {
        throw new Error('Primary Address is already set for this Party')
      } else {
        // existingContacts = existingContacts.concat(newContacts)
        Object.assign(existingContacts, newContacts)
      }
    }
    return existingContacts
  }

  _addAddresses(newAddresses) {
    const validated = this._validatePrimary('address', newAddresses)
    if (validated) {
      this._addresses = validated
    }
  }

  _addEmails(newEmails) {
    const validated = this._validatePrimary('email', newEmails)
    if (validated) {
      this._emails = validated
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
