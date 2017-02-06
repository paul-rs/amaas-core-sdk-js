import Company from '../Company/company.js'

class Exchange extends Company {
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Company', partyType='Exchange', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
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

export default Exchange
