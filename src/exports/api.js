/**
 * API Methods
 * @module api
 */

import * as Allocations from '../utils/allocations'
import * as AssetManagers from '../utils/assetManagers'
import * as Assets from '../utils/assets'
import * as Books from '../utils/books'
import * as Netting from '../utils/netting'
import * as Parties from '../utils/parties'
import * as Positions from '../utils/positions'
import * as Relationships from '../utils/relationships'
import * as Transactions from '../utils/transactions'

import { configureStage } from '../utils/network'

export {
  AssetManagers,
  Assets,
  Books,
  Parties,
  Positions,
  config
}

function config(config) {
  const { stage, apiKey } = config
  configureStage({ stage, apiKey })
}
