import Company from '../Company/company.js'

class Exchange extends Company {
  constructor({ assetManagerId, partyId, partyType='Exchange', description='', references={} }) {
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

export default Exchange
