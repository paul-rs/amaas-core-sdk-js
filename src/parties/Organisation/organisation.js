import Party from '../Party/party.js'

class Organisation extends Party {
  constructor({ assetManagerId, partyId, partyClass='Organisation', partyType='Organisation', description='', references={} }) {
    const superOptions = Object.assign({}, {
      assetManagerId,
      partyId,
      partyClass,
      partyType,
      references
    })
    super(superOptions)
  }
}

export default Organisation
