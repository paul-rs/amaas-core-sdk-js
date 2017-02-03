import { AMaaSModel } from '../../core'
import { Address, Email } from '../Children'

import { retrieveData } from '../../utils/network'

class Party extends AMaaSModel {
  //
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Party', partyType='Party', description='', addresses=[], emails=[], references={} }) {
    super()
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
    if (newAddresses.length > 0) {
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
    if (newEmails.length > 0) {
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

  _validatePrimary(type, newContacts) {
    // Check that newContact is an Array
    if (!(newContacts instanceof Array)) {
      throw new Error('Method only accepts an Array')
    }
    let inputTypes
    let inputPrimary
    switch (type) {
      case 'address':
        inputTypes = 'addresses'
        inputPrimary = 'addressPrimary'
        for (let i = 0; i < newContacts.length; i++) {
          if (!(newContacts[i] instanceof Address)) {
            throw new Error(`Found address with wrong class`)
          }
        }
        break
      case 'email':
        inputTypes = 'emails'
        inputPrimary = 'emailPrimary'
        for (let i = 0; i < newContacts.length; i++) {
          if (!(newContacts[i] instanceof Email)) {
            throw new Error(`Found email with wrong class`)
          }
        }
        for (let i = 0; i < newContacts.length; i++) {
          const regex = new RegExp('^.+@.+\..+$')
          if (!regex.test(newContacts[i].email)) {
            throw new Error('Not a valid email')
          }
        }
        break
      default:
        inputTypes = 'addresses'
        inputPrimary = 'addressPrimary'
        for (let i = 0; i < newContacts.length; i++) {
          if (!(newContacts[i] instanceof Address)) {
            throw new Error(`Found address with wrong class`)
          }
        }
    }
    let existingContacts = this[inputTypes]
    if (!existingContacts) {
      existingContacts = []
    }
    // Count the number of primary contacts in newContacts
    const primaryInNew = newContacts.filter(contact => {
      return contact[inputPrimary]
    })
    // If there are no existing contacts, then there needs to be exactly 1
    // primary contact in newContacts
    if (existingContacts.length == 0) {
      if (primaryInNew.length != 1) {
        throw new Error('Exactly 1 primary address is allowed')
      } else {
        existingContacts = existingContacts.concat(newContacts)
      }
    // If there are existing contacts, then there needs to be exactly 0
    // primary contacts in newContacts (because existence of existing contacts
    // implies existence of exactly 1 primary contact)
    } else {
      if (primaryInNew.length != 0) {
        throw new Error('Primary Address is already set for this Party')
      } else {
        existingContacts = existingContacts.concat(newContacts)
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

  static retrieveParty(AMId, partyId, callback) {
    const params = {
      AMaaSClass: 'parties',
      AMId,
      resourceId: partyId
    }
    // return params
    retrieveData(params, (error, result) => {
      if (error) {
        callback(error)
      } else {
        callback(null, result)
      }
    })
  }
}

export default Party
