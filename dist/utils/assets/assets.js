'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.retrieve = retrieve;
exports.insert = insert;
exports.amend = amend;
exports.partialAmend = partialAmend;
exports.deactivate = deactivate;
exports._parseAsset = _parseAsset;

var _network = require('../network');

var _assets = require('../../assets');

var _Reference = require('../../core/Reference/Reference.js');

var _Reference2 = _interopRequireDefault(_Reference);

var _parties = require('../parties/parties.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Retrieve Asset data for specified AMId and partyId
 * @param {number} AMId - Asset Manager ID of the Asset
 * @param {string} [partyId] - Party ID of the Asset. Omitting this will return all Assets associated with that AMId
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function retrieve(_ref, callback) {
  var AMId = _ref.AMId,
      resourceId = _ref.resourceId,
      token = _ref.token;

  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId,
    token: token
  };
  (0, _network.retrieveData)(params, function (error, result) {
    if (error) {
      callback(error);
    } else {
      if (!Array.isArray(result)) {
        callback(null, _parseAsset(result));
        return;
      }
      var assets = result.map(function (asset) {
        return _parseAsset(asset);
      });
      callback(null, assets);
    }
  });
}

/**
 * Insert a new Asset into the database
 * @param {Asset} asset - Asset instance to insert
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function insert(_ref2, callback) {
  var asset = _ref2.asset,
      token = _ref2.token;

  var stringified = JSON.stringify(asset);
  var params = {
    AMaaSClass: 'assets',
    data: JSON.parse(stringified),
    token: token
  };
  (0, _network.insertData)(params, function (error, result) {
    _handleCallback(error, result, callback);
  });
}

/**
 * Amend an existing Asset. WARNING: This makes a HTTP PUT request and will replace the existing Asset with the one passed in
 * @param {Asset} asset - Amended Asset instance to PUT
 * @param {number} AMId - AMId of the Party to amend
 * @param {string} resourceId - Asset ID of the Party to amend
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function amend(_ref3, callback) {
  var asset = _ref3.asset,
      AMId = _ref3.AMId,
      resourceId = _ref3.resourceId,
      token = _ref3.token;

  var stringified = JSON.stringify(asset);
  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId,
    data: JSON.parse(stringified),
    token: token
  };
  (0, _network.putData)(params, function (error, result) {
    _handleCallback(error, result, callback);
  });
}

/**
 * Partially amend an existing Asset. WARNING: The changes object should be keyed in snake case (e.g. asset_id instead of assetId)
 * @param {object} changes - Object of changes to the Asset. Keys must be snake cased form of Asset properties
 * @param {string} AMId - AMId of the Asset to be partially amended
 * @param {string} resourceId - Asset ID of the Asset to be partially amended
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function partialAmend(_ref4, callback) {
  var changes = _ref4.changes,
      AMId = _ref4.AMId,
      resourceId = _ref4.resourceId,
      token = _ref4.token;

  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId,
    data: changes,
    token: token
  };
  (0, _network.patchData)(params, function (error, result) {
    _handleCallback(error, result, callback);
  });
}

/**
 * Delete an exising Asset. This will set the Asset status to 'Inactive'.
 * @param {string} AMId - AMId of the Asset to be deleted
 * @param {string} resourceId - Asset ID of the Asset to be deleted
 * @param {function} callback - Called with two arguments (error, result) on completion
 */
function deactivate(_ref5, callback) {
  var AMId = _ref5.AMId,
      resourceId = _ref5.resourceId,
      token = _ref5.token;

  var params = {
    AMaaSClass: 'assets',
    AMId: AMId,
    resourceId: resourceId
  };
  (0, _network.deleteData)(params, function (error, result) {
    _handleCallback(error, result, callback);
  });
}

function _parseAsset(object) {
  var asset = void 0;
  var references = (0, _parties._parseChildren)('reference', object.references);
  switch (object.asset_type) {
    case 'Asset':
      asset = new _assets.Asset({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    case 'Bond':
      asset = new _assets.BondBase({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    case 'BondCorporate':
      asset = new _assets.BondCorporate({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    case 'BondGovernment':
      asset = new _assets.BondGovernment({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    case 'BondMortgage':
      asset = new _assets.BondMortgage({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    case 'Currency':
      asset = new _assets.Currency({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    case 'Derivative':
      asset = new _assets.Derivative({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    case 'BondOption':
      asset = new _assets.BondOption({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    case 'Equity':
      asset = new _assets.Equity({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    case 'ForeignExchange':
      asset = new _assets.ForeignExchange({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    case 'NonDeliverableForward':
      asset = new _assets.NonDeliverableForward({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
      break;
    default:
      asset = new _assets.Asset({
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
        references: references,
        createdBy: object.created_by,
        updatedBy: object.updated_by,
        createdTime: object.created_time,
        updatedTime: object.updated_time,
        version: object.version
      });
  }
  return asset;
}

function _handleCallback(error, result, callback) {
  if (error) {
    callback(error);
  } else {
    callback(null, result);
  }
}