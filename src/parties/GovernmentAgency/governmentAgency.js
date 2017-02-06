import Organisation from '../Organisation/organisation.js'

class GovernmentAgency extends Organisation {
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Organisation', partyType='GovernmentAgency', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
    super({
      assetManagerId,
      partyId,
      partyStatus,
      partyClass,
      partyType,
      description,
      addresses,
      emails,
      references,
      createdBy,
      updatedBy,
      createdTime,
      updatedTime,
      version
    })
  }
}

export default GovernmentAgency
