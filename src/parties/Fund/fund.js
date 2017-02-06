import Company from '../Company/company.js'

class Fund extends Company {
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Company', partyType='Fund', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
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

export default Fund
