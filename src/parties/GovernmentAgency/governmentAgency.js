import Organisation from '../Organisation/organisation.js'

class GovernmentAgency extends Organisation {
  constructor({ assetManagerId, partyId, description='', references={} }) {
    const superOptions = Object.assign({}, {
      assetManagerId,
      partyId,
      partyType: 'Government Agency',
      description,
      references
    })
    super(superOptions)
  }
}

export default GovernmentAgency
