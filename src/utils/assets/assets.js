import { retrieveData, insertData, patchData, putData, deleteData } from '../network'

import {
  Asset,
  BondBase,
  BondCorporate,
  BondGovernment,
  BondMortgage,
  Currency,
  Derivative,
  BondOption,
  Equity,
  ForeignExchange,
  NonDeliverableForward
} from '../../assets'

import Reference from '../../core/Reference/Reference.js'

import { _parseChildren } from '../parties/parties.js'

/**
 * Retrieve Asset data for specified AMId and partyId
 * @param {number} AMId - Asset Manager ID of the Asset
 * @param {string} [partyId] - Party ID of the Asset. Omitting this will return all Assets associated with that AMId
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function retrieve({AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
    token
  }
  retrieveData(params, (error, result) => {
    if (error) {
      callback(error)
    } else {
      if (!Array.isArray(result)) {
        callback(null, _parseAsset(result))
        return
      }
      const assets = result.map(asset => {
        return _parseAsset(asset)
      })
      callback(null, assets)
    }
  })
}

/**
 * Insert a new Asset into the database
 * @param {Asset} asset - Asset instance to insert
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function insert({asset, token}, callback) {
  const stringified = JSON.stringify(asset)
  const params = {
    AMaaSClass: 'assets',
    data: JSON.parse(stringified),
    token
  }
  insertData(params, (error, result) => {
    _handleCallback(error, result, callback)
  })
}

/**
 * Amend an existing Asset. WARNING: This makes a HTTP PUT request and will replace the existing Asset with the one passed in
 * @param {Asset} asset - Amended Asset instance to PUT
 * @param {number} AMId - AMId of the Party to amend
 * @param {string} resourceId - Asset ID of the Party to amend
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function amend({asset, AMId, resourceId, token}, callback) {
  const stringified = JSON.stringify(asset)
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
    data: JSON.parse(stringified),
    token
  }
  putData(params, (error, result) => {
    _handleCallback(error, result, callback)
  })
}

/**
 * Partially amend an existing Asset. WARNING: The changes object should be keyed in snake case (e.g. asset_id instead of assetId)
 * @param {object} changes - Object of changes to the Asset. Keys must be snake cased form of Asset properties
 * @param {string} AMId - AMId of the Asset to be partially amended
 * @param {string} resourceId - Asset ID of the Asset to be partially amended
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function partialAmend({changes, AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId,
    data: changes,
    token
  }
  patchData(params, (error, result) => {
    _handleCallback(error, result, callback)
  })
}

/**
 * Delete an exising Asset. This will set the Asset status to 'Inactive'.
 * @param {string} AMId - AMId of the Asset to be deleted
 * @param {string} resourceId - Asset ID of the Asset to be deleted
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
export function deactivate({AMId, resourceId, token}, callback) {
  const params = {
    AMaaSClass: 'assets',
    AMId,
    resourceId
  }
  deleteData(params, (error, result) => {
    _handleCallback(error, result, callback)
  })
}

export function _parseAsset(object) {
  let asset
  const references = _parseChildren('reference', object.references)
  switch (object.asset_type) {
    case 'Asset':
      asset = new Asset({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'Bond':
      asset = new BondBase({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        issueDate: object.issue_date,
        coupon: object.coupon,
        par: object.par,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'BondCorporate':
      asset = new BondCorporate({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        issueDate: object.issue_date,
        coupon: object.coupon,
        par: object.par,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'BondGovernment':
      asset = new BondGovernment({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        issueDate: object.issue_date,
        coupon: object.coupon,
        par: object.par,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'BondMortgage':
      asset = new BondMortgage({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        issueDate: object.issue_date,
        coupon: object.coupon,
        par: object.par,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'Currency':
      asset = new Currency({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        deliverable: object.deliverable,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'Derivative':
      asset = new Derivative({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        isseuDate: object.issue_date,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'BondOption':
      asset = new BondOption({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        isseuDate: object.issue_date,
        putCall: object.put_call,
        strike: object.strike,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'Equity':
      asset = new Equity({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'ForeignExchange':
      asset = new ForeignExchange({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    case 'NonDeliverableForward':
      asset = new NonDeliverableForward({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
      break
    default:
      asset = new Asset({
        assetManagerId: object.asset_manager_id,
        fungible: object.fungible,
        assetIssuerId: object.asset_issuer_id,
        assetId: object.asset_id,
        assetClass: object.asset_class,
        assetType: object.asset_type,
        assetStatus: object.asset_status,
        countryId: object.country_id,
        venueId: object.venue_id,
        maturityDate: object.maturity_date,
        description: object.description,
        clientId: object.client_id,
        deliverable: object.deliverable,
        references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      })
  }
  return asset
}

function _handleCallback(error, result, callback) {
  if (error) {
    callback(error)
  } else {
    callback(null, result)
  }
}
