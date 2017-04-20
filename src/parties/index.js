/**
 * @namespace class
 * @memberof module:Parties
 */

import {
  Address,
  Email
} from './Children'

export { default as Party } from './Party/party'
export { default as Individual } from './Individual/individual'
export { default as Organisation } from './Organisation/organisation'
export { default as Company } from './Company/company'
export { default as AssetManager } from './AssetManager/assetManager'
export { default as Broker } from './Broker/broker'
export { default as Exchange } from './Exchange/exchange'
export { default as Fund } from './Fund/fund'
export { default as GovernmentAgency } from './GovernmentAgency/governmentAgency'
export { Address, Email }
