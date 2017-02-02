import Party from '../Party/party.js'

class Individual extends Party {
  constructor({ assetManagerId, partyId, partyStatus='Active', partyClass='Individual', partyType='Individual', description='', addresses=[], emails=[], references={} }) {
    const superOptions = Object.assign({}, {
      assetManagerId,
      partyId,
      partyStatus,
      partyClass,
      partyType,
      description,
      addresses,
      emails,
      references
    })
    super(superOptions)
  }
}

export default Individual
