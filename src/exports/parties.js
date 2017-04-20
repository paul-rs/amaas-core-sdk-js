/**
 * Classes and API methods for the Parties service
 * @module Parties
 */

// Classes
import {
  Individual,
  Organisation,
  Company,
  AssetManager,
  Broker,
  Exchange,
  Fund,
  GovernmentAgency,
  Party,
  Address,
  Email
} from '../parties'

// CRUD methods
import {
  retrieve,
  insert,
  amend,
  partialAmend,
  deactivate
} from '../utils/parties'

// Exports
export {
  Individual,
  Organisation,
  Company,
  AssetManager,
  Broker,
  Exchange,
  Fund,
  GovernmentAgency,
  Party,
  Address,
  Email,
  retrieve,
  insert,
  amend,
  partialAmend,
  deactivate
}
