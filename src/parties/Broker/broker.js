import Company from '../Company/company.js'

class Broker extends Company {
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Company', partyType='Broker', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
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

export default Broker
