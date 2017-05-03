/**
 * API Methods
 * @module api
 */

import * as Allocations from '../utils/allocations'
import * as AssetManagers from '../utils/assetManagers'
import * as Assets from '../utils/assets'
import * as Books from '../utils/books'
import * as CorporateActions from '../utils/corporateActions'
import * as Netting from '../utils/netting'
import * as Parties from '../utils/parties'
import * as Positions from '../utils/positions'
import * as Relationships from '../utils/relationships'
import * as Transactions from '../utils/transactions'

import { configureStage, configureAuth } from '../utils/network'

export {
  Allocations,
  AssetManagers,
  Assets,
  Books,
  CorporateActions,
  Parties,
  Positions,
  Transactions,
  config
}

function config(config) {
  const { stage, credentialsPath, token } = config
  configureStage({ stage, credentialsPath })
  configureAuth({ token })
}
