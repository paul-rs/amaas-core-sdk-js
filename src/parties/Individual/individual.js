import Party from '../Party/party.js'

class Individual extends Party {
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Individual', partyType='Individual', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
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

export default Individual
