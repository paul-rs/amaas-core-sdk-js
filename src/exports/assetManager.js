/**
 * Classes and API methods for the AssetManagers service
 * @module AssetManagers
 */

// Classes
import {
  AssetManager,
  Relationship
} from '../assetManagers'

// CRUD methods
import {
  retrieve,
  insert,
  amend,
  deactivate
} from '../utils/assetManagers'

// Exports
export {
  AssetManager,
  Relationship,
  retrieve,
  insert,
  amend,
  deactivate
}
