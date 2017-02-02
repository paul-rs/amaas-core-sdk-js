import Company from '../Company/company.js'

class Broker extends Company {
  constructor({ assetManagerId, partyId, partyType='Broker', description='', references={} }) {
    const superOptions = Object.assign({}, {
      assetManagerId,
      partyId,
      partyType,
      description,
      references
    })
    super(superOptions)
  }
}

export default Broker
