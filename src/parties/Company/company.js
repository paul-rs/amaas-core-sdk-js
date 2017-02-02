import Organisation from '../Organisation/organisation.js'

class Company extends Organisation {
  constructor({ assetManagerId, partyId, partyClass='Company', partyType, description='', references={} }) {
    const superOptions = Object.assign({}, {
      assetManagerId,
      partyId,
      partyClass,
      partyType,
      description,
      references
    })
    super(superOptions)
  }
}

export default Company
