import Organisation from '../Organisation/organisation.js'

class Company extends Organisation {
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Company', partyType='Company', description='', addresses={}, emails={}, references={}, createdBy, updatedBy, createdTime, updatedTime, version }) {
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

export default Company
