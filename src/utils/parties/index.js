import { retrieveData } from '../network'
import Party from '../../parties/Party/party.js'
import Individual from '../../parties/Individual/individual.js'

function getParty(AMId, partyId, callback) {
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

// TODO: Parse more classes
function _parseParty(object) {
  let party
  switch (object.party_type) {
    case 'Individual':
      party = new Individual({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses: object.addresses,
        emails: object.emails,
        references: object.references
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
        addresses: object.addresses,
        emails: object.emails,
        references: object.references
      })
  }
  return party
}

export default getParty
