// Export the individual classes and methods in the following pattern
// export { default as AuthenticationDetails } from './AuthenticationDetails'

// Only need to export the classes/methods that will be exposed to the end user

require('dotenv').config()

import * as AMaaSParties from './utils/parties'
import * as AMaaSAM from './utils/assetManagers'

export { default as Party } from './parties/Party/party.js'
// export { getParty, insertNewParty, amendParty, partialAmendParty }
export { AMaaSParties, AMaaSAM }
