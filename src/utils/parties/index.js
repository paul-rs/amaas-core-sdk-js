import { retrieveData, insertData, patchData, putData, deleteData } from '../network'
import Party from '../../parties/Party/party.js'
import Individual from '../../parties/Individual/individual.js'
import Broker from '../../parties/Broker/broker.js'
import Exchange from '../../parties/Exchange/exchange.js'
import Fund from '../../parties/Fund/fund.js'
import GovernmentAgency from '../../parties/GovernmentAgency/governmentAgency.js'

import Address from '../../parties/Children/address.js'
import Email from '../../parties/Children/email.js'
import Reference from '../../core/Reference/Reference.js'

/**
 * Retrieve Party data for specified AMId and partyId
 * @param {number} AMId - Asset Manager ID of the Party
 * @param {string} [partyId] - Party ID of the Party. Omitting this will return all Parties associated with that AMId
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function getParty(AMId, partyId, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId: partyId
  }
  retrieveData(params, (error, result) => {
    if (error) {
      callback(error)
    } else {
      const party = _parseParty(result)
      callback(null, party)
    }
  })
}

/**
 * Insert a new Party into the database
 * @param {Party} party - Party instance to insert
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function insertNewParty(party, callback) {
  const stringified = JSON.stringify(party)
  const params = {
    AMaaSClass: 'parties',
    data: JSON.parse(stringified)
  }
  insertData(params, (error, result) => {
    if (error) {
      callback(error)
    } else {
      callback(null, result)
    }
  })
}

/**
 * Amend an existing Party. WARNING: This makes a HTTP PUT request and will replace the existing Party with the one passed in
 * @param {Party} party - Amended Party instance to PUT
 * @param {number} AMId - AMId of the Party to amend
 * @param {string} resourceId - Party ID of the Party to amend
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function amendParty(party, AMId, resourceId, callback) {
  const stringified = JSON.stringify(party)
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId,
    data: JSON.parse(stringified)
  }
  putData(params, (error, result) => {
    if (error) {
      callback(error)
    } else {
      callback(null, result)
    }
  })
}

/**
 * Partially amend an existing Party. WARNING: The changes object should be keyed in snake case (e.g. party_id instead of partyId)
 * @param {object} changes - Object of changes to the Party. Keys must be snake cased form of Party properties
 * @param {string} AMId - AMId of the Party to be partially amended
 * @param {string} resourceId - Party ID of the Party to be partially amended
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function partialAmendParty(changes, AMId, resourceId, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId,
    data: changes
  }
  patchData(params, (error, result) => {
    if (error) {
      callback(error)
    } else {
      callback(null, result)
    }
  })
}

/**
 * Delete an exising Party. This will set the Party status to 'Inactive'.
 * @param {string} AMId - AMId of the Party to be deleted
 * @param {string} resourceId - Party ID of the Party to be deleted
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function deleteParty(AMId, resourceId, callback) {
  const params = {
    AMaaSClass: 'parties',
    AMId,
    resourceId
  }
  deleteData(params, (error, result) => {
    if (error) {
      callback(error)
    } else {
      callback(null, result)
    }
  })
}

export function _parseChildren(type, children) {
  let parsedChildren = {}
  switch (type) {
    case 'address':
      for (let child in children) {
        parsedChildren[child] = new Address({
          addressPrimary: children[child].address_primary,
          lineOne: children[child].line_one,
          lineTwo: children[child].line_two,
          city: children[child].city,
          region: children[child].region,
          postalCode: children[child].postal_code,
          countryId: children[child].country_id,
          active: children[child].active,
          createdBy: children[child].created_by,
          updatedBy: children[child].updated_by,
          createdTime: children[child].created_time,
          updatedTime: children[child].updated_time,
          version: children[child].version
        })
      }
      break
    case 'email':
      for (let child in children) {
        parsedChildren[child] = new Email({
          emailPrimary: children[child].email_primary,
          email: children[child].email,
          active: children[child].active,
          createdBy: children[child].created_by,
          updatedBy: children[child].updated_by,
          createdTime: children[child].created_time,
          updatedTime: children[child].updated_time,
          version: children[child].version
        })
      }
      break
    case 'reference':
      for (let child in children) {
        parsedChildren[child] = new Reference({
          referenceValue: children[child].reference_value,
          active: children[child].active,
          createdBy: children[child].created_by,
          updatedBy: children[child].updated_by,
          createdTime: children[child].created_time,
          updatedTime: children[child].updated_time,
          version: children[child].version
        })
      }
      break
    default:
      throw new Error('Child type not defined (parseChildren)')
  }
  return parsedChildren
}

export function _parseParty(object) {
  let party
  const addresses = _parseChildren('address', object.addresses)
  const emails = _parseChildren('email', object.emails)
  const references = _parseChildren('reference', object.references)
  switch (object.party_type) {
    case 'Individual':
      party = new Individual({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses,
        emails,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'Broker':
      party = new Broker({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses,
        emails,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'Exchange':
      party = new Exchange({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses,
        emails,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'Fund':
      party = new Fund({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses,
        emails,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'GovernmentAgency':
      party = new GovernmentAgency({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses,
        emails,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    default:
      party = new Party({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses,
        emails,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
  }
  return party
}

// export default getParty
