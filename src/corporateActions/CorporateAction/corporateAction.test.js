import CorporateAction from './'

describe('CorporateAction', () => {
  describe('constructor', () => {
    it('sets the AMaaS Reference', () => {
      const testCA = new CorporateAction({ corporateActionId: 'testId' })
      expect(testCA.references.AMaaS).toBeDefined()
      expect(testCA.references.AMaaS.referenceValue).toEqual('testId')
    })
  })
})
