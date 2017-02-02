import Company from '../Company/company.js'

class Fund extends Company {
  constructor({ assetManagerId, partyId, partyType='Fund', description='', references={} }) {
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

export default Fund
