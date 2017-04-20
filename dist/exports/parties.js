'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deactivate = exports.partialAmend = exports.amend = exports.insert = exports.retrieve = exports.Email = exports.Address = exports.Party = exports.GovernmentAgency = exports.Fund = exports.Exchange = exports.Broker = exports.AssetManager = exports.Company = exports.Organisation = exports.Individual = undefined;

var _parties = require('../parties');

var _parties2 = require('../utils/parties');

// Exports
/**
 * Classes and API methods for the Parties service
 * @module Parties
 */

// Classes
exports.Individual = _parties.Individual;
exports.Organisation = _parties.Organisation;
exports.Company = _parties.Company;
exports.AssetManager = _parties.AssetManager;
exports.Broker = _parties.Broker;
exports.Exchange = _parties.Exchange;
exports.Fund = _parties.Fund;
exports.GovernmentAgency = _parties.GovernmentAgency;
exports.Party = _parties.Party;
exports.Address = _parties.Address;
exports.Email = _parties.Email;
exports.retrieve = _parties2.retrieve;
exports.insert = _parties2.insert;
exports.amend = _parties2.amend;
exports.partialAmend = _parties2.partialAmend;
exports.deactivate = _parties2.deactivate;

// CRUD methods