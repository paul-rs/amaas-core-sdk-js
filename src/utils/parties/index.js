import { retrieveData } from '../network'
import Party from '../../parties/Party/party.js'
import Individual from '../../parties/Individual/individual.js'
import Broker from '../../parties/Broker/broker.js'
import Exchange from '../../parties/Exchange/exchange.js'
import Fund from '../../parties/Fund/fund.js'
import GovernmentAgency from '../../parties/GovernmentAgency/governmentagency.js'

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

export function _parseParty(object) {
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
        references: object.references,
        createdBy: object.createdBy,
        updatedBy: object.updatedBy,
        createdTime: object.createdTime,
        updatedTime: object.updatedTime,
        version: object.version
      })
      break
    case 'Broker':
      party = new Broker({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses: object.addresses,
        emails: object.emails,
        references: object.references,
        createdBy: object.createdBy,
        updatedBy: object.updatedBy,
        createdTime: object.createdTime,
        updatedTime: object.updatedTime,
        version: object.version
      })
      break
    case 'Exchange':
      party = new Exchange({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses: object.addresses,
        emails: object.emails,
        references: object.references,
        createdBy: object.createdBy,
        updatedBy: object.updatedBy,
        createdTime: object.createdTime,
        updatedTime: object.updatedTime,
        version: object.version
      })
      break
    case 'Fund':
      party = new Fund({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses: object.addresses,
        emails: object.emails,
        references: object.references,
        createdBy: object.createdBy,
        updatedBy: object.updatedBy,
        createdTime: object.createdTime,
        updatedTime: object.updatedTime,
        version: object.version
      })
      break
    case 'GovernmentAgency':
      party = new GovernmentAgency({
        assetManagerId: object.asset_manager_id,
        partyId: object.party_id,
        partyStatus: object.party_status,
        partyClass: object.party_class,
        partyType: object.party_type,
        description: object.description,
        addresses: object.addresses,
        emails: object.emails,
        references: object.references,
        createdBy: object.createdBy,
        updatedBy: object.updatedBy,
        createdTime: object.createdTime,
        updatedTime: object.updatedTime,
        version: object.version
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
        references: object.references,
        createdBy: object.createdBy,
        updatedBy: object.updatedBy,
        createdTime: object.createdTime,
        updatedTime: object.updatedTime,
        version: object.version
      })
  }
  return party
}

export default getParty
